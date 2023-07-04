import { ReactNode } from 'react'

interface CardStatsProps {
  icon: ReactNode
  backgroundIconColor: string
  label: string
  value: string
}

export default function CardStats({
  icon,
  backgroundIconColor,
  label,
  value,
}: CardStatsProps) {
  return (
    <div className="flex gap-4 items-center justify-between rounded-xl py-4 px-6 shadow-md bg-white dark:bg-zinc-900">
      <div className={`p-4 rounded-full ${backgroundIconColor}`}>{icon}</div>
      <div className="flex-1">
        <h4 className="font-bold text-xl dark:text-white">{value}</h4>
        <p className="text-zinc-500 font-normal">{label}</p>
      </div>
    </div>
  )
}
