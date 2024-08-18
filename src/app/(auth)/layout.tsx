'use client'

import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  const router = useRouter()
  return (
    <>
      <nav className='p-5'>
        <Button
          onClick={() => router.back()}
          variant='ghost'
          className='flex items-center gap-2'
        >
          <MoveLeft /> <p>go back</p>
        </Button>
      </nav>
      {children}
    </>
  )
}
