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
    requestDetailsTitle: {
      color: ColorPallet.primaryText,
      fontWeight: '700',
      fontSize: 18,
    },
    requestDetailsBody: {
      color: ColorPallet.primaryText,
      fontWeight: '400',
      fontSize: 16,
    },
    attributePredicate: {
      fontWeight: '600',
    },
    note: {
      color: ColorPallet.primaryText,
      fontWeight: '400',
      fontSize: 14,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    link: {
      color: ColorPallet.link,
      fontWeight: '600',
      fontSize: 14,
    },
    tabBarActive: {
      borderTopWidth: 2,
      borderTopColor: ColorPallet.primary,
    },
    tabBarIcone: {
      padding: 8,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
}

export default DefaultComponentsThemes
