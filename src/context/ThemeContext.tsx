'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

interface ThemeContextType {
  theme: 'dark' | 'light'
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>
  colorTheme: 'dark' | 'light'
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextProviderProps {
  children: ReactNode
}

const initialTheme = window.localStorage.getItem('theme') as 'dark' | 'light'

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(initialTheme ?? 'light')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'
  const [isDark, setIsDark] = useState(colorTheme === 'light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colorTheme,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
