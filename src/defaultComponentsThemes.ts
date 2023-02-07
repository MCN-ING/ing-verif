import {StyleSheet} from 'react-native'

import {useTheme} from './contexts/theme'

const DefaultComponentsThemes = () => {
  const {ColorPallet} = useTheme()
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: ColorPallet.primaryBackground,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: ColorPallet.primaryText,
      fontSize: 16,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  })
}

export default DefaultComponentsThemes
