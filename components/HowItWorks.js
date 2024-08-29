const steps = [
    { title: 'Sign Up', description: 'Create your free account to get started.' },
    { title: 'Set Preferences', description: 'Tell us about your academic goals and learning style.' },
    { title: 'Get Recommendations', description: 'Receive AI-powered professor and course recommendations.' },
    { title: 'Make Informed Decisions', description: 'Choose your professors and courses with confidence.' },
  ]
  
  export default function HowItWorks() {
    return (
      <div id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase font-display">How It Works</h2>
            <p className="mt-2 text-4xl font-extrabold text-gray-900 font-display sm:text-5xl">
              Four simple steps to academic success
            </p>
          </div>
  
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="absolute left-0 top-0 -ml-4 -mt-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg ml-4 mt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  