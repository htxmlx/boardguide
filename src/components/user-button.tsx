import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import { Loader2, User } from 'lucide-react'
import { Button } from './ui/button'

export default function CustomUserButton() {
  return (
    <>
      <ClerkLoading>
        <Button
          asChild
          variant='outline'
          className='md:hidden w-full px-4 py-2 flex items-center justify-center gap-2 cursor-pointer'
        >
          <SignInButton>
            <div className='flex items-center gap-2 text-sm'>
              <Loader2 className='h-5 w-5 animate-spin' />
              <span>Loading...</span>
            </div>
          </SignInButton>
        </Button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: '2.5rem',
                  height: '2.5rem',
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <div className='flex flex-col items-center gap-2 p-2'>
            <div className='flex flex-col md:flex-row gap-2 w-full'>
              {/* Sign In Button for All Screens */}
              <Button
                asChild
                variant='outline'
                className='w-full px-4 py-2 flex items-center justify-center gap-2 cursor-pointer md:hidden'
              >
                <SignInButton>
                  <div className='flex items-center gap-2 text-sm'>
                    <User className='h-5 w-5' />
                    <span>Sign In</span>
                  </div>
                </SignInButton>
              </Button>
              {/* Sign Up Button for Larger Screens */}
              <Button
                asChild
                variant='default'
                className='hidden md:flex w-full px-4 py-2 items-center justify-center gap-2 cursor-pointer'
              >
                <SignUpButton>
                  <div className='flex items-center gap-2 text-sm'>
                    <User className='h-5 w-5' />
                    <span>Sign Up</span>
                  </div>
                </SignUpButton>
              </Button>
              {/* Sign In Button for Larger Screens */}
              <Button
                asChild
                variant='outline'
                className='hidden md:flex w-full px-4 py-2 items-center justify-center gap-2 cursor-pointer'
              >
                <SignInButton>
                  <div className='flex items-center gap-2 text-sm'>
                    <User className='h-5 w-5' />
                    <span>Sign In</span>
                  </div>
                </SignInButton>
              </Button>
            </div>
          </div>
        </SignedOut>
      </ClerkLoaded>
    </>
  )
}
