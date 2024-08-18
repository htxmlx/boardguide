'use client'
import SparklesText from '@/components/magicui/sparkle-text'
import { Button } from '@/components/ui/button'
import { Pattern } from '@/components/ui/pattern'
import { Search } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Hero() {
  const { theme } = useTheme()
  return (
    <section className='relative overflow-hidden'>
      {/* Background Image */}
      <Pattern variant='dots' />

      <div className='relative container mx-auto px-4 pt-24 md:pt-36 text-center'>
        {/* Hero Content */}
        <div className='max-w-2xl mx-auto'>
          <SparklesText
            className='mb-8'
            text=' Find Your Ideal Boarding House'
          />

          <p className='text-base md:text-lg text-muted-foreground mb-8'>
            Explore and map out boarding houses, lodgings, and accommodations
            tailored to your needs.
          </p>
          {/* Search Button */}
          <Button
            variant='outline'
            className='w-full text-muted-foreground shadow-lg border rounded-lg h-12 md:h-14 text-lg flex items-center justify-center mx-auto dark:bg-accent'
          >
            <Search className='w-6 h-6' />
            <span className='ml-2'>Start Searching</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
