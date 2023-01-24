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
import {useColorScheme} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import {ThemeProvider} from './contexts/theme'
import {initStoredLanguage, translationResources, initLanguages} from './localization'
import RootStack from './navigators/RootStack'
import InitializeAgent from './services/initializeAgent'
import {defaultColorSheme} from './theme'

initLanguages(translationResources)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [agent, setAgent] = useState<Agent | undefined>(undefined)

  useMemo(() => {
    initStoredLanguage().then()
  }, [])

  useEffect(() => {
    const initAgent = async () => {
      const newAgent = await InitializeAgent()
      setAgent(newAgent)
    }

    initAgent()
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <AgentProvider agent={agent}>
        <ThemeProvider value={isDarkMode ? defaultColorSheme.dark : defaultColorSheme.light}>
          <RootStack />
        </ThemeProvider>
      </AgentProvider>
    </NavigationContainer>
  )
}

export default App
