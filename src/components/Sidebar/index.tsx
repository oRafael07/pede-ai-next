'use client'

import { Home, Bell, BookOpen, Percent } from 'lucide-react'
import ButtonList from './Button'
import useNavbar from '@/hooks/useNavbar'

export default function Sidebar() {
  const { navbarOpened } = useNavbar()

  return (
    <section
      className={`group transition-all ease-in duration-100 ${
        navbarOpened ? 'is-opened' : ''
      } `}
    >
      <div className="w-24 group-[.is-opened]:w-72 h-screen border-r-[1px] bg-white dark:bg-zinc-900 dark:border-zinc-900">
        <header className="p-6 border-b-[1px] shadow-lg dark:border-zinc-900 hidden group-[.is-opened]:block">
          <h1 className="font-extrabold text-2xl text-center text-slate-800 dark:text-slate-50">
            PEDE.AI
          </h1>
        </header>
        <main>
          <header className="p-8 hidden group-[.is-opened]:block">
            <h4 className="font-bold text-lg text-zinc-700 dark:text-slate-50">
              DOCERIA - LOJA 1
            </h4>
            <p className="font-normal text-gray-400 text-sm">
              Segunda-feira, 03 de Julho
            </p>
          </header>
          <div className="pt-20 group-[.is-opened]:pt-6">
            <ol>
              <ButtonList icon={<Home />} text="Resumo" to="/" />
              <ButtonList icon={<Bell />} text="Pedidos" to="/" />
              <ButtonList icon={<BookOpen />} text="Cardápio" to="/" />
              <ButtonList icon={<Percent />} text="Promoções" to="/" />
            </ol>
          </div>
        </main>
      </div>
    </section>
  )
}
