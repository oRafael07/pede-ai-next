'use client'

import useNavbar from '@/hooks/useNavbar'
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react'

export default function ToogleNavbarButton() {
  const { navbarOpened, handleNavbarOpened } = useNavbar()

  return (
    <button
      className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
      onClick={() => handleNavbarOpened()}
    >
      {navbarOpened ? (
        <ArrowLeftToLine className="dark:text-zinc-50" />
      ) : (
        <ArrowRightFromLine className="dark:text-zinc-50" />
      )}
    </button>
  )
}
