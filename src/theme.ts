export interface ColorSheme {
  dark: Theme
  light: Theme
}

export interface Theme {
  ColorPallet: ColorPallet
}

interface ColorPallet {
  primaryBackground: string
  primaryText: string
  primary: string
  secondary: string
  titleHighlight: string
  white: string
  lightGray: string
  darkGray: string
  success: string
  warning: string
  error: string
}

const ColorPalletLight: ColorPallet = {
  primaryBackground: '#F2EFEF',
  primaryText: '#000000',
  primary: '#095797',
  secondary: '#0C2550',
  titleHighlight: '#E58271',
  white: '#FFFFFF',
  lightGray: '#b8b8b8',
  darkGray: '#454545',
  success: '#5B8046',
  warning: '#D8AF3B',
  error: '#F8DCD8',
}

const ColorPalletDark: ColorPallet = {
  primaryBackground: '#575757',
  primaryText: '#FFFFFF',
  primary: '#095797',
  secondary: '#0C2550',
  titleHighlight: '#E58271',
  white: '#FFFFFF',
  lightGray: '#b8b8b8',
  darkGray: '#525252',
  success: '#5B8046',
  warning: '#D8AF3B',
  error: '#F8DCD8',
}

const themeLight: Theme = {
  ColorPallet: ColorPalletLight,
}

const themeDark: Theme = {
  ColorPallet: ColorPalletDark,
}

export const defaultColorSheme: ColorSheme = {
  dark: themeDark,
  light: themeLight,
}
