import {useAgent} from '@aries-framework/react-hooks'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {BackHandler, Image, SafeAreaView, StyleSheet} from 'react-native'

import {useStore} from '../contexts/store'
import {useTheme} from '../contexts/theme'

export const Splash = () => {
  const [state] = useStore()
  const {ColorPallet} = useTheme()
  const {agent} = useAgent()
  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ColorPallet.primaryBackground,
    },
    img: {
      width: '51.5%',
      resizeMode: 'contain',
    },
  })

  useEffect(() => {
    if (agent && agent.isInitialized) {
      if (state.onboarding.didAgreeToTerms) {
        navigation.navigate('HomeStack' as never)
      } else {
        navigation.navigate('TermsStack' as never)
      }
    }
  }, [agent])
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/Quebec.png')} style={styles.img} />
    </SafeAreaView>
  )
}
