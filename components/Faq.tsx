const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'Call the salon directly and tell us the day and time you want. Phone booking is the way appointments get set here, and walk-ins are welcome as space allows.',
  },
  {
    q: 'Do you take walk-ins or only appointments?',
    a: 'Both work. Calling ahead helps if you want a specific time or technician, but stopping in is fine too, especially outside the busiest hours.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday to Saturday: 9 AM to 7 PM. Sunday: 11 AM to 5 PM. Call ahead near closing time if your service needs more than a few minutes.',
  },
  {
    q: 'Where are you located?',
    a: 'The salon sits at 13525 Tidwell Rd #900 in Houston, near the surrounding Tidwell Road area. The map and directions are in the contact section below.',
  },
  {
    q: 'What happens during a first visit?',
    a: 'You point at the shape and color you want, sometimes from a photo, and the technician builds the set to match. A cold drink comes with the service.',
  },
  {
    q: 'How long does a full set or pedicure take?',
    a: 'A gel manicure or pedicure usually runs under an hour. A full acrylic set with detailed nail art takes longer, closer to an hour or more depending on the design.',
  },
  {
    q: 'How does payment work?',
    a: 'Pricing for nail work in general varies by length, shape and how much design work is added, so cost is confirmed for your specific service before anything starts.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-brand-background">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance]">
          A few things people ask first
        </h2>

        <div className="mt-8">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border-b border-brand-text/10 py-5"
            >
              <summary className="list-none flex items-center justify-between cursor-pointer gap-4">
                <span className="font-body font-semibold text-brand-text">{f.q}</span>
                <span className="text-brand-accent text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-brand-text/80 leading-relaxed max-w-prose">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
