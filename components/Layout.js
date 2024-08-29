import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = 'Scholar Sage - AI-Powered Professor Ratings' }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI-powered professor ratings and course insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}

