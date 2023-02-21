/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {Agent} from '@aries-framework/core'
import AgentProvider from '@aries-framework/react-hooks'
import {NavigationContainer} from '@react-navigation/native'
import React, {useState, useMemo, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {StatusBar, useColorScheme} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Toast from 'react-native-toast-message'

import {ToastType} from './components/Toast/BaseToast'
import {Config} from './components/Toast/Config'
import {StoreProvider} from './contexts/store'
import {ThemeProvider} from './contexts/theme'
import {initStoredLanguage, translationResources, initLanguages} from './localization'
import RootStack from './navigators/RootStack'
import InitializeAgent from './services/initializeAgent'
import {defaultColorSheme} from './theme'

initLanguages(translationResources)

const App = () => {
  const {t} = useTranslation()
  const isDarkMode = useColorScheme() === 'dark'
  const [agent, setAgent] = useState<Agent | undefined>(undefined)

  useMemo(() => {
    initStoredLanguage().then()
  }, [])

  useEffect(() => {
    SplashScreen.hide()
    const initAgent = async () => {
      const newAgent = await InitializeAgent()
      if (!newAgent) {
        Toast.show({
          type: ToastType.Warn,
          autoHide: false,
          text1: t('Agent.ErrorTitle'),
          text2: t('Agent.Error'),
        })
        return
      }

      setAgent(newAgent)
    }

    initAgent()
  }, [])

  return (
    <StoreProvider>
      <NavigationContainer>
        <AgentProvider agent={agent}>
          <ThemeProvider value={isDarkMode ? defaultColorSheme.dark : defaultColorSheme.light}>
            <StatusBar></StatusBar>
            <RootStack />
            <Toast topOffset={15} config={Config} />
          </ThemeProvider>
        </AgentProvider>
      </NavigationContainer>
    </StoreProvider>
  )
}

export default App
