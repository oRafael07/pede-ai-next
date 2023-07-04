import { Home, Bell, BookOpen, Percent } from 'lucide-react'
import ButtonList from './Button'

export default function Sidebar() {
  return (
    <div className="w-72 h-screen border-r-[1px] bg-white dark:bg-zinc-900 dark:border-zinc-900">
      <header className="p-6 border-b-[1px] shadow-lg dark:border-zinc-900">
        <h1 className="font-extrabold text-2xl text-center text-slate-800 dark:text-slate-50">
          PEDE.AI
        </h1>
      </header>
      <main>
        <header className="p-8">
          <h4 className="font-bold text-lg dark:text-slate-50">Loja 1</h4>
          <p className="font-normal text-gray-400 text-sm">
            Segunda-feira, 03 de Julho
          </p>
        </header>
        <div className="pt-8">
          <ol>
            <ButtonList icon={<Home />} text="Resumo" to="/" />
            <ButtonList icon={<Bell />} text="Pedidos" to="/" />
            <ButtonList icon={<BookOpen />} text="Cardápio" to="/" />
            <ButtonList icon={<Percent />} text="Promoções" to="/" />
          </ol>
        </div>
      </main>
    </div>
  )
}
