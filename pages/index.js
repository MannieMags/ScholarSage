import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTASection />
    </Layout>
  )
}
