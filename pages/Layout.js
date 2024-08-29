import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Scholar Sage - AI-Powered Professor Ratings</title>
        <meta name="description" content="Choose the best professors with AI-powered insights" />
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
