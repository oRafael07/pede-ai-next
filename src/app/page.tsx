import { Navbar } from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-zinc-800 flex">
      <Sidebar />
      <div className="flex flex-1">
        <Navbar />
      </div>
    </div>
  )
}
