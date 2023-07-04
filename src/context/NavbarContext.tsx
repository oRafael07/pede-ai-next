'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface NavbarContextType {
  navbarOpened: boolean
  setNavbarOpened: Dispatch<SetStateAction<boolean>>
}

export const NavbarContext = createContext({} as NavbarContextType)

interface NavbarContextProviderProps {
  children: ReactNode
}

export function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const [navbarOpened, setNavbarOpened] = useState(true)

  return (
    <NavbarContext.Provider value={{ navbarOpened, setNavbarOpened }}>
      {children}
    </NavbarContext.Provider>
  )
}
