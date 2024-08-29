const features = [
  {
    name: 'AI-Powered Insights',
    description: 'Our advanced AI analyzes thousands of reviews to provide accurate and unbiased professor ratings.',
    icon: '🤖',
  },
  {
    name: 'Personalized Recommendations',
    description: 'Get tailored professor suggestions based on your learning style and academic goals.',
    icon: '🎯',
  },
  {
    name: 'Real-Time Updates',
    description: 'Stay informed with the latest professor ratings and course information as they become available.',
    icon: '⚡',
  },
  {
    name: 'Easy Comparison',
    description: 'Compare professors side-by-side to make informed decisions about your course selection.',
    icon: '⚖️',
  },
]

export default function Features() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase font-display">Features</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 font-display sm:text-5xl">
            Everything you need for academic success
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-2xl transition duration-300 ease-in-out">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 font-display">
                        {feature.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

