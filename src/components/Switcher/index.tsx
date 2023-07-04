'use client'

import { DarkModeSwitch } from 'react-toggle-dark-mode'
import React from 'react'
import useTheme from '../../hooks/useThemeSide'

export default function SwitcherTheme() {
  const { isDark, handleChangeTheme } = useTheme()

  return (
    <DarkModeSwitch
      className="bg-blue-500 p-2 rounded-full bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
      moonColor="white"
      sunColor="#212121"
      onChange={handleChangeTheme}
      checked={isDark}
      size={40}
    />
  )
}
