import { PropsWithChildren } from 'react'

export default function Shell({ children }: PropsWithChildren) {
  return <div className='mx-auto max-w-screen-md py-12'>{children}</div>
}
