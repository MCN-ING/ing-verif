import {DidExchangeState} from '@aries-framework/core'
import {useAgent, useConnectionByState} from '@aries-framework/react-hooks'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View, StyleSheet} from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {Spinner} from '../components/Spinner'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import {createLegacyInvitation} from '../utils/createLegacyInvitation'
import {sendProofExchange} from '../utils/sendProofExchange'

export const QRCodeScreen = ({route, navigation}: any) => {
  const defaultStyles = DefaultComponentsThemes()
  const {agent} = useAgent()
  const [item] = useState(route.params.item)
  const [invitationUrl, setInvitationUrl] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [invitationId, setInvitationId] = useState<string | undefined>(undefined)
  const connections = [...useConnectionByState(DidExchangeState.Completed)]
  const {t} = useTranslation()

  const styles = StyleSheet.create({
    headerSection: {
      flex: 1,
    },
    mainSection: {
      flex: 2,
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
    for (let i = 0; i < connections.length; i++) {
      if (connections[i].outOfBandId == invitationId && agent && !isLoading) {
        const proofExchangeRecord = await sendProofExchange(
          agent,
          connections[i],
          item.title,
          item.attributes,
          item.predicates
        )
        navigation.navigate('ValidationResult', {proofId: proofExchangeRecord.proofId})
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
      <View style={styles.mainSection}>{isLoading ? <Spinner /> : <QRCode value={invitationUrl} size={300} />}</View>
      <View style={styles.bottomSection}>
        <Text style={[defaultStyles.text, {paddingHorizontal: 10}]}>{t('QRCode.Instructions')}</Text>
        <LargeButton title={t('QRCode.GenerateNew')} action={handleCreateInvitation} isPrimary={true} />
        <LargeButton
          title={t('QRCode.UseBluetooth')}
          action={() => {
            navigation.navigate('#')
          }}
        />
      </View>
    </View>
  )
}
