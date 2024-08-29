import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-primary-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600 font-display">
              Scholar Sage
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="/signin" className="inline-block bg-primary-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-primary-600">
              Sign in
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}
