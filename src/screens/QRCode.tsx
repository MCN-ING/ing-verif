import {ConnectionRecord, DidExchangeState, ProofAttributeInfo} from '@aries-framework/core'
import {uuid} from '@aries-framework/core/build/utils/uuid'
import {useAgent, useConnectionByState} from '@aries-framework/react-hooks'
import React, {useEffect, useState} from 'react'
import {Text, SafeAreaView} from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import DefaultComponentsThemes from '../defaultComponentsThemes'

export const QRCodeScreen = ({navigation}: any) => {
  const defaultStyles = DefaultComponentsThemes()
  const {agent} = useAgent()
  const [invitationUrl, setInvitationUrl] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [invitationId, setInvitationId] = useState<string | undefined>(undefined)
  const connections = [...useConnectionByState(DidExchangeState.Completed)]

  const makeConnectionConfig = {
    goal: 'To make a connection',
    goalCode: 'p2p-messaging',
    label: 'Verification app',
    alias: `Verification app`,
  }

  const attributes = {
    name: new ProofAttributeInfo({
      names: ['Nom'],
      restrictions: [],
    }),
  }

  useEffect(() => {
    const unlock = async () => {
      if (agent == undefined) {
        return
      }
      const invitation = await agent.oob.createLegacyInvitation(makeConnectionConfig)
      setInvitationId(invitation.outOfBandRecord.id)
      const invitationUrl = invitation?.invitation.toUrl({domain: 'https://example.org'})
      if (invitationUrl) {
        setInvitationUrl(invitationUrl)
        setIsLoading(false)
      }
    }
    unlock()
  }, [])

  const createProof = async (connection: ConnectionRecord) => {
    const parentThreadId = uuid()
    const proofExchangeRecord = await agent!.proofs.requestProof({
      connectionId: connection.id,
      parentThreadId,
      protocolVersion: 'v1',
      proofFormats: {
        indy: {
          name: 'proof-request',
          version: '1.0',
          nonce: '1298236324864',
          requestedAttributes: attributes,
        },
      },
    })
    navigation.navigate('ValidationResult', {proofId: proofExchangeRecord.id})
  }

  useEffect(() => {
    for (let i = 0; i < connections.length; i++) {
      if (connections[i].outOfBandId == invitationId && agent) {
        createProof(connections[i])
      }
    }
  }, [connections])

  return (
    <SafeAreaView style={defaultStyles.container}>
      {isLoading ? <Text>Loading...</Text> : <QRCode value={invitationUrl} size={300} />}
    </SafeAreaView>
  )
}
