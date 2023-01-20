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
import React, {useState, useMemo} from 'react'
import {useColorScheme} from 'react-native'

import {ThemeProvider} from './contexts/theme'
import {initStoredLanguage, translationResources, initLanguages} from './localization'
import RootStack from './navigators/RootStack'
import {defaultColorSheme} from './theme'

initLanguages(translationResources)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [agent] = useState<Agent | undefined>(undefined)

  useMemo(() => {
    initStoredLanguage().then()
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