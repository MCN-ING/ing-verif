import {ProofState, V1PresentationMessage} from '@aries-framework/core'
import {DidCommMessageRepository} from '@aries-framework/core/build/storage'
import {useAgent, useProofById} from '@aries-framework/react-hooks'
import {t} from 'i18next'
import Base64 from 'js-base64'
import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {Attestation} from '../components/Attestation'
import {Header} from '../components/PageHeader'
import {ValidationBanner} from '../components/ValidationBanner'
import DefaultComponentsThemes from '../defaultComponentsThemes'

import {ValidationLoading} from './ValidationLoading'

export const ValidationResult = ({route}: any) => {
  const [isLoading, setIsLoading] = useState(true)
  const [proofName] = useState(route.params.proofName)
  const proof = useProofById(route.params.proofId)
  const defaultStyles = DefaultComponentsThemes()
  const [proofResponse, setProofResponse] = useState<undefined | any>()
  const [isVerified, setIsVerified] = useState<boolean | undefined>(false)
  const [identifiers, setIdentifiers] = useState<any>([])
  const {agent} = useAgent()

  const styles = StyleSheet.create({
    section: {
      flex: 1,
      padding: 10,
    },
  })

  const findAgentMessage = async () => {
    if (agent == undefined) {
      return
    }
    const didCommMessageRepository =
      agent.injectionContainer.resolve<DidCommMessageRepository>(DidCommMessageRepository)

    const response = await didCommMessageRepository.findAgentMessage(agent.context, {
      associatedRecordId: route.params.proofId,
      messageClass: V1PresentationMessage,
    })
    return response
  }
  useEffect(() => {
    if (proof?.state == ProofState.PresentationReceived) {
      setIsVerified(proof.isVerified)
      findAgentMessage().then((response) => {
        if (response?.presentationAttachments[0].data.base64) {
          const data = JSON.parse(Base64.decode(response?.presentationAttachments[0].data.base64))
          const attributesReceived = data.requested_proof.revealed_attr_groups
          sortAttributesByAttestation(attributesReceived)
          setIdentifiers(data.identifiers)
          setIsLoading(false)
        }
      })
    }
  }, [proof])

  const sortAttributesByAttestation = (attributes: any) => {
    const sortAttributesByAttestation: any = {}
    if (attributes == undefined) {
      return
    }
    Object.keys(attributes).forEach((key) => {
      Object.keys(attributes[key].values).forEach((result) => {
        const attestationIndex = attributes[key].sub_proof_index.toString()
        if (sortAttributesByAttestation[attestationIndex]) {
          sortAttributesByAttestation[attestationIndex] = {
            ...sortAttributesByAttestation[attestationIndex],
            [result]: attributes[key].values[result].raw,
          }
        } else {
          sortAttributesByAttestation[attestationIndex] = {
            [result]: attributes[key].values[result].raw,
          }
        }
      })
    })
    setProofResponse(sortAttributesByAttestation)
  }

  return (
    <View style={defaultStyles.container}>
      {isLoading ? (
        <ValidationLoading />
      ) : (
        <View style={{flex: 1, width: '100%'}}>
          <Header title={proofName} />
          <ValidationBanner isVerified={isVerified} />
          {proofResponse && (
            <View style={styles.section}>
              <Text style={defaultStyles.subtitle}>{t('Global.Attributes')}</Text>
              {Object.keys(proofResponse).map((key, index) => {
                return (
                  <Attestation key={index.toString()} identifier={identifiers[key]} attributes={proofResponse[key]} />
                )
              })}
            </View>
          )}
        </View>
      )}
    </View>
  )
}
