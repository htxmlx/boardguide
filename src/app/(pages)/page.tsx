import Shell from '@/components/common/shell'
import CardContainer from '@/components/sections/home/card-container'
import { Hero } from '@/components/sections/home/hero'
import prisma from '@/lib/db'
import React from 'react'

export default async function Home() {
  const data = await prisma.post.findMany({
    include: {
      ratings: true,
    },
  })
  return (
    <Shell>
      <Hero />
      <CardContainer data={data} />
    </Shell>
  )
}
