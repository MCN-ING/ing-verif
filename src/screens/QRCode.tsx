import {ProofAttributeInfo} from '@aries-framework/core'
import {useAgent} from '@aries-framework/react-hooks'
import React, {useEffect, useState} from 'react'
import {Text, SafeAreaView} from 'react-native'
import Config from 'react-native-config'
import QRCode from 'react-native-qrcode-svg'

import DefaultComponentsThemes from '../defaultComponentsThemes'

export const QRCodeScreen = () => {
  const defaultStyles = DefaultComponentsThemes()
  const {agent} = useAgent()
  const [invitationUrl, setInvitationUrl] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initConnection = async () => {
      if (agent == undefined) {
        return
      }

      const attributes = {
        name: new ProofAttributeInfo({
          name: 'name',
          restrictions: [],
        }),
      }

      const {proofRecord, message} = await agent.proofs.createRequest({
        protocolVersion: 'v2',
        proofFormats: {
          indy: {
            name: 'Application Request',
            version: '1.0',
            nonce: '12345678901',
            requestedAttributes: attributes,
          },
        },
      })
      if (Config.MEDIATOR_URL == undefined) {
        return
      }
      const {invitationUrl} = await agent.oob.createLegacyConnectionlessInvitation({
        recordId: proofRecord.id,
        message,
        domain: Config.MEDIATOR_URL,
      })
      setInvitationUrl(invitationUrl)
      setIsLoading(false)
    }

    initConnection()
  }, [])
  return (
    <SafeAreaView style={defaultStyles.container}>
      {isLoading ? <Text>Loading...</Text> : <QRCode value={invitationUrl} size={300} />}
    </SafeAreaView>
  )
}
