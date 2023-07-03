import Sidebar from '@/components/Sidebar'

export default function Dashboard() {
  return (
    <div className={`w-full h-screen bg-gray-100 dark:bg-gray-900 flex`}>
      <Sidebar />
      <div className="flex flex-1">
        <h1>oi</h1>
      </div>
    </div>
  )
}
