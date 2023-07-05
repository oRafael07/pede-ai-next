'use server'
import { cookies } from 'next/headers'

export default async function getCookie(cookieName: string) {
  const cookie = cookies().get(cookieName)

  return cookie
}
