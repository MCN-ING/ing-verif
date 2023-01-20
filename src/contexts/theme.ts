import {createContext, useContext} from 'react'

import {Theme, defaultColorSheme} from '../theme'

export const ThemeContext = createContext<Theme>(defaultColorSheme.light)

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => useContext(ThemeContext)
