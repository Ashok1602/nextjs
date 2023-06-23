import React from 'react'
import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
        router.push("/dashboard")
    }, 5000)
  }, [router])
  return (
    <div className='flex justify-center items-center flex-col align-middle'>
        <div><input type="text" placeholder="enter email" className="border-2 border-rose-500 my-2 p-2 rounded" /></div>
        <div><input type="text" placeholder="enter password" className="border-2 border-rose-500 my-2 p-2 rounded"/></div>
        <div><button className="p-1 rounded bg-cyan-500 hover:bg-cyan-600">Submit</button></div>
        <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}
