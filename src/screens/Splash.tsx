import {useAgent} from '@aries-framework/react-hooks'
import {useNavigation} from '@react-navigation/native'
import {useEffect} from 'react'
import {Image, SafeAreaView, StyleSheet} from 'react-native'
import {useStore} from '../contexts/store'

import {useTheme} from '../contexts/theme'

export const Splash = () => {
  const [state] = useStore()
  const {ColorPallet} = useTheme()
  const {agent} = useAgent()
  const navigation = useNavigation()

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
    if (state.onboarding.didAgreeToTerms) {
      navigation.navigate('HomeStack' as never)
    } else if (agent) {
      navigation.navigate('TermsStack' as never)
    }
  }, [agent])
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/Quebec.png')} style={styles.img} />
    </SafeAreaView>
  )
}
