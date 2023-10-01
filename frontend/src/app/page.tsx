import SongRow from '@/components/SongRow'
import {  SongProps } from '@/types'

export default async function Home() {
  const songs = await getSongs()
  return (
    <main className="px-30">
      <h1 className="text-2xl text-left font-semibold pt-10 px-20">Welcome to Eavesdrop!</h1>
      
    </main>
  )
}

async function getSongs() {
  const res = await fetch(process.env.BACKEND_API_BASE + "/songs", {cache: 'no-store'})

  if (!res.ok) {
    throw new Error('Failed to fetch songs')
  }

  return res.json()
}