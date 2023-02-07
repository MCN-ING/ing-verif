import {ProofState, V1PresentationMessage} from '@aries-framework/core'
import {DidCommMessageRepository} from '@aries-framework/core/build/storage'
import {useAgent, useProofById} from '@aries-framework/react-hooks'
import Base64 from 'js-base64'
import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

import DefaultComponentsThemes from '../defaultComponentsThemes'

import {ValidationLoading} from './ValidationLoading'

export const ValidationResult = ({route}: any) => {
  const [isLoading, setIsLoading] = useState(true)
  const proof = useProofById(route.params.proofId)
  const styles = DefaultComponentsThemes()
  const [proofResponse, setProofResponse] = useState<undefined | any>()
  const {agent} = useAgent()

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
          setProofResponse(JSON.parse(Base64.decode(base64)).requested_proof.revealed_attr_groups.name.values)
        }
      })
      setIsLoading(false)
    }
  }, [proof])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ValidationLoading />
      ) : (
        <View>
          {proofResponse && (
            <View>
              <Text style={styles.text}>Proof succeeded</Text>
              {Object.keys(proofResponse).map((key, index) => (
                <View key={index}>
                  <Text>
                    {key} : {proofResponse[key].raw}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  )
}
