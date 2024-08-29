import Link from 'next/link'

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Access to professor ratings',
      'Basic course planning tools',
      'Limited AI-powered insights',
    ],
    cta: 'Get started',
    ctaLink: '/signup',
  },
  {
    name: 'Pro',
    price: '$9.99/month',
    features: [
      'All Basic features',
      'Advanced AI-powered insights',
      'Personalized recommendations',
      'Unlimited course planning',
    ],
    cta: 'Start free trial',
    ctaLink: '/trial',
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Dedicated support',
      'Custom integrations',
      'Analytics dashboard',
    ],
    cta: 'Contact sales',
    ctaLink: '/contact',
  },
]

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase font-display">Pricing</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 font-display sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col ${plan.isFeatured ? 'ring-2 ring-primary-500' : ''}`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 font-display">{plan.name}</h3>
                {plan.isFeatured && (
                  <p className="absolute top-0 py-1.5 px-4 bg-primary-500 text-white text-sm font-semibold rounded-full transform -translate-y-1/2">
                    Most popular
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight font-display">{plan.price}</span>
                  {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="ml-1 text-xl font-semibold">/month</span>}
                </p>
                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <span className="text-primary-500 mr-3">✓</span>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={plan.ctaLink} className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${plan.isFeatured ? 'text-white bg-primary-500 hover:bg-primary-600' : 'text-primary-700 bg-primary-50 hover:bg-primary-100'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

