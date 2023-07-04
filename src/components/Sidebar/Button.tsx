import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode
  text: string
  to: string
}

export default function ButtonList({ icon, text, to }: ButtonProps) {
  return (
    <li className="py-4 text-zinc-900 dark:text-zinc-200 group/sideBtn border-transparent border-y-[1px] group-hover/sideBtn:border-y-[1px] dark:hover:border-gray-600 hover:border-y-gray-200 hover:bg-gray-100 dark:hover:bg-gray-950">
      <Link
        href={to}
        className="block group-hover/sideBtn:border-l-4 border-l-red-500 transition-all ease-in duration-100"
      >
        <span className="px-8 flex gap-3 group-hover/sideBtn:text-red-500 font-medium">
          {icon}
          <strong className="hidden group-[.is-opened]:block">{text}</strong>
        </span>
      </Link>
    </li>
  )
}
