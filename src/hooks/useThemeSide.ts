'use client'

import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

export default function useTheme() {
  const { theme, colorTheme, isDark, setTheme, setIsDark } =
    useContext(ThemeContext)

  function handleChangeTheme(checked: boolean) {
    setTheme(colorTheme)
    setIsDark(checked)
  }

  return {
    theme,
    isDark,
    handleChangeTheme,
  }
}
