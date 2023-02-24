import {DidExchangeState} from '@aries-framework/core'
import {useAgent, useConnectionByState} from '@aries-framework/react-hooks'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View, StyleSheet} from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {Spinner} from '../components/Spinner'
import {useStore} from '../contexts/store'
import {Predicate} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import {createLegacyInvitation} from '../utils/createLegacyInvitation'
import {dateIntPredicate} from '../utils/dateIntPredicate'
import {sendProofExchange} from '../utils/sendProofExchange'

export const QRCodeScreen = ({navigation}: any) => {
  const defaultStyles = DefaultComponentsThemes()
  const {agent} = useAgent()
  const [invitationUrl, setInvitationUrl] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [invitationId, setInvitationId] = useState<string | undefined>(undefined)
  const connections = [...useConnectionByState(DidExchangeState.Completed)]
  const [state] = useStore()
  const {t} = useTranslation()
  const [QCCodeHeight, setQCCodeHeight] = useState(300)

  const onLayout = (event: any) => {
    const {height} = event.nativeEvent.layout
    setQCCodeHeight(height)
  }

  const styles = StyleSheet.create({
    headerSection: {
      flex: 1,
    },
    mainSection: {
      flex: 2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomSection: {
      flex: 1.8,
      justifyContent: 'space-between',
      paddingVertical: 50,
    },
  })

  const handleCreateInvitation = async () => {
    if (agent == undefined) {
      return undefined
    }

    setIsLoading(true)
    const invitation = await createLegacyInvitation(agent)
    if (invitation) {
      setInvitationUrl(invitation.invitationUrl)
      setInvitationId(invitation.invitationId)
      setIsLoading(false)
    }
  }

  const handleProofExchange = async () => {
    if (!state.proofRequest) {
      navigation.goBack()
      return
    }
    for (let i = 0; i < connections.length; i++) {
      let predicates: Predicate | undefined
      if (state.proofRequest.predicates) {
        predicates = dateIntPredicate(state.proofRequest.predicates)
      }
      if (connections[i].outOfBandId == invitationId && agent && !isLoading) {
        const proofExchangeRecord = await sendProofExchange(
          agent,
          connections[i],
          state.proofRequest.title,
          state.proofRequest.attributes,
          predicates
        )
        navigation.navigate('ValidationResult', {
          proofId: proofExchangeRecord.proofId,
          proofName: state.proofRequest.title,
        })
      }
      break
    }
  }

  useEffect(() => {
    handleCreateInvitation()
  }, [])

  useEffect(() => {
    handleProofExchange()
  }, [connections])

  return (
    <View style={defaultStyles.container}>
      <View style={styles.headerSection}>
        <Header title={t('QRCode.Title')} />
      </View>
      <View style={styles.mainSection} onLayout={onLayout}>
        {isLoading ? <Spinner /> : <QRCode size={QCCodeHeight} value={invitationUrl} />}
      </View>
      <View style={styles.bottomSection}>
        <Text style={[defaultStyles.text, {paddingHorizontal: 10}]}>{t('QRCode.Instructions')}</Text>
        <LargeButton title={t('QRCode.GenerateNew')} action={handleCreateInvitation} isPrimary={true} />
      </View>
    </View>
  )
}
