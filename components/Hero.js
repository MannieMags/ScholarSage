import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold font-display sm:text-6xl md:text-7xl">
            <span className="block">Choose professors wisely</span>
            <span className="block text-primary-200">with AI-powered insights</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-primary-100 sm:max-w-3xl">
            Scholar Sage uses advanced AI to analyze professor ratings and provide personalized recommendations for your academic success.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link href="/signup" className="flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-secondary-700 bg-white hover:bg-primary-50 transition duration-150 ease-in-out">
                Get started
              </Link>
              <a href="#how-it-works" className="flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-secondary-500 hover:bg-secondary-400 transition duration-150 ease-in-out">
                How it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
