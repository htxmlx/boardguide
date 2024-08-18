'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t my-20 md:my-0 py-5'>
      <div className='container'>
        <section className='flex flex-col md:flex-row justify-between mb-8'>
          {/* Navigation Links */}
          <div className='mb-6 md:mb-0'>
            <h4 className='text-lg font-bold mb-4'>Explore</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:underline'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className='mb-6 md:mb-0'>
            <h1 className='text-lg font-bold mb-4'>Company</h1>
            <ul className='space-y-2'>
              <li>
                <Link href='/careers' className='hover:underline'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/privacy-policy' className='hover:underline'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/terms-of-service' className='hover:underline'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className='border-t border-gray-700 pt-6 text-center'>
        <h4 className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </h4>
      </section>
    </footer>
  )
}

export default Footer
