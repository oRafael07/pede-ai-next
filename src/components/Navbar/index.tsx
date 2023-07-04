import Switcher from '@/components/Switcher'
import ToogleNavbarButton from '../ToggleNavbar'

export function Navbar() {
  return (
    <header className="p-4 w-full bg-white dark:bg-zinc-900 dark:border-zinc-900 h-20 flex items-center justify-between border-b-[1px] shadow-lg">
      <ToogleNavbarButton />
      <Switcher />
    </header>
  )
}
