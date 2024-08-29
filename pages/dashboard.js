import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    router.push('/signin')
    return null
  }

  return (
    <Layout title="Scholar Sage - Dashboard">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {session.user.name}</h1>
        {/* Add dashboard content here */}
      </div>
    </Layout>
  )
}
