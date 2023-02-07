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
  tertiary: string
  quaternary: string
  quinary: string
  titleHighlight: string
  white: string
  lightGray: string
  link: string
}

const ColorPalletLight: ColorPallet = {
  primaryBackground: '#F2EFEF',
  primaryText: '#000000',
  primary: '#095797',
  secondary: '#0C2550',
  tertiary: '#2D9CDB',
  quaternary: '#BFD8FF',
  quinary: '#F2F2F2',
  titleHighlight: '#E58271',
  white: '#FFFFFF',
  lightGray: '#b8b8b8',
  link: '#095797',
}

const ColorPalletDark: ColorPallet = {
  primaryBackground: '#575757',
  primaryText: '#FFFFFF',
  primary: '#095797',
  secondary: '#0C2550',
  tertiary: '#2D9CDB',
  quaternary: '#BFD8FF',
  quinary: '#F2F2F2',
  titleHighlight: '#E58271',
  white: '#FFFFFF',
  lightGray: '#b8b8b8',
  link: '#095797',
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
