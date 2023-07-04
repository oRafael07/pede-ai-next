import { NavbarContext } from '@/context/NavbarContext'
import { useContext } from 'react'

export default function useNavbar() {
  const { navbarOpened, setNavbarOpened } = useContext(NavbarContext)

  function handleNavbarOpened(open?: boolean) {
    setNavbarOpened(open ?? !navbarOpened)
  }

  return {
    navbarOpened,
    handleNavbarOpened,
  }
}
