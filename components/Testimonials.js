const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Computer Science Student',
    quote: 'Scholar Sage helped me choose the perfect professors for my major. The AI insights were spot-on!',
  },
  {
    name: 'Michael Chen',
    role: 'Biology Major',
    quote: "I love how easy it is to compare different professors. It's made my course selection process so much smoother.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Psychology Student',
    quote: 'The personalized recommendations have been a game-changer for my academic planning.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          What our users say
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-indigo-700 rounded-lg shadow-lg p-6">
              <p className="text-white italic mb-4">"{testimonial.quote}"</p>
              <div className="text-indigo-200">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
