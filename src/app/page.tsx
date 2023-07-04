import CardStats from '@/components/CardStats'
import { Navbar } from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { CakeSlice, DollarSign, Store, Wallet2 } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-zinc-800 flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <div className="p-4">
          <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 mt-6">
            <CardStats
              label="Total de Pedidos"
              value="0"
              icon={<Wallet2 className="text-orange-400" />}
              backgroundIconColor="bg-orange-100"
            />
            <CardStats
              label="Total de Pagamentos"
              value="0"
              icon={<DollarSign className="text-green-500" />}
              backgroundIconColor="bg-green-100"
            />
            <CardStats
              label="Total de Restaurantes"
              value="0"
              icon={<Store className="text-blue-400" />}
              backgroundIconColor="bg-blue-100"
            />
            <CardStats
              label="Total de Items"
              value="0"
              icon={<CakeSlice className="text-purple-500" />}
              backgroundIconColor="bg-purple-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
