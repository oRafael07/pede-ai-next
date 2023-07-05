'use client'

import { DarkModeSwitch } from 'react-toggle-dark-mode'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'

export default function SwitcherTheme() {
  const { theme, setTheme } = useTheme()
  const colorTheme = theme === 'dark' ? 'light' : 'dark'
  const [isDark, setIsDark] = useState(colorTheme === 'light')
  console.log(theme)
  const handleSwitchTheme = (checked: boolean) => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    setIsDark(checked)
  }

  return (
    <DarkModeSwitch
      className="bg-blue-500 p-2 rounded-full bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
      moonColor="white"
      sunColor="#212121"
      onChange={handleSwitchTheme}
      checked={isDark}
      size={40}
    />
  )
}
