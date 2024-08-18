import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  BriefcaseIcon,
  HomeIcon,
  MapPin,
  Mountain,
  UserRound,
  Search,
} from 'lucide-react'
import Link from 'next/link'
import CustomUserButton from '@/components/user-button'

// Define the navigation items
const NAV_ITEMS = [
  { href: '/', icon: <HomeIcon className='h-6 w-6' />, label: 'Home' },
  { href: '/map', icon: <MapPin className='h-6 w-6' />, label: 'Map' },
  {
    href: '/saved',
    icon: <BriefcaseIcon className='h-6 w-6' />,
    label: 'Saved',
  },
  {
    href: '/profile',
    icon: <UserRound className='h-6 w-6' />,
    label: 'Profile',
  },
]

export default function Navbar() {
  return (
    <nav className='relative z-50'>
      {/* Desktop Navbar */}
      <div className='fixed top-0 bg-background w-full flex justify-between items-center p-4 border-b'>
        <Mountain className='size-10 text-primary' />
        <div className='hidden md:flex items-center space-x-4'>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className='hidden md:flex items-center mx-4 w-full max-w-xs'>
          <Button
            variant='outline'
            className='w-full text-muted-foreground shadow-lg border rounded-lg h-14 text-lg gap-5 justify-start'
          >
            <Search className='h-5 w-5' />
            <span className='ml-3'>Find boarding house...</span>
          </Button>
        </div>
        <CustomUserButton />
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden fixed bottom-0 inset-x-0 bg-background border-t'>
        <div className='flex justify-around p-2'>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='flex flex-col items-center'
            >
              {item.icon}
              <span className='text-xs'>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
