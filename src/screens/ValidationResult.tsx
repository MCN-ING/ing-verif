import {ProofState, V1PresentationMessage} from '@aries-framework/core'
import {DidCommMessageRepository} from '@aries-framework/core/build/storage'
import {useAgent, useProofById} from '@aries-framework/react-hooks'
import {t} from 'i18next'
import Base64 from 'js-base64'
import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {Attributes} from '../components/Attributes'
import {Header} from '../components/PageHeader'
import DefaultComponentsThemes from '../defaultComponentsThemes'

import {ValidationLoading} from './ValidationLoading'

export const ValidationResult = ({route}: any) => {
  const [isLoading, setIsLoading] = useState(true)
  const [proofName] = useState(route.params.proofName)
  const proof = useProofById(route.params.proofId)
  const defaultStyles = DefaultComponentsThemes()
  const [proofResponse, setProofResponse] = useState<undefined | any>()
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
      findAgentMessage().then((response) => {
        if (response?.presentationAttachments[0].data.base64) {
          const base64 = response?.presentationAttachments[0].data.base64
          const attributesReceived = JSON.parse(Base64.decode(base64)).requested_proof.revealed_attr_groups
          setProofResponse(attributesReceived)
        }
      })
      setIsLoading(false)
    }
  }, [proof])

  return (
    <View style={defaultStyles.container}>
      {isLoading ? (
        <ValidationLoading />
      ) : (
        <View style={{flex: 1, width: '100%'}}>
          <Header title={proofName} />
          {proofResponse && (
            <View style={styles.section}>
              <Text style={defaultStyles.subtitle}>{t('Global.Attributes')}</Text>
              {Object.keys(proofResponse).map((key, i) => (
                <View key={i}>
                  {Object.keys(proofResponse[key].values).map((result, j) => (
                    <View key={j}>
                      <Attributes name={result} value={proofResponse[key].values[result].raw} />
                    </View>
                  ))}
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  )
}
