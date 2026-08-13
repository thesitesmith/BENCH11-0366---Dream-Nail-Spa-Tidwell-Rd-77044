import Image from 'next/image'

const services = [
  {
    name: `Gel Manicures`,
    desc: `A shaped set finished in gel polish that keeps its shine for weeks. You pick the color, we handle the shape and the fill so it grows out clean.`,
  },
  {
    name: `Acrylic and Custom Sets`,
    desc: `Full sets built to length and shape you choose, from natural overlays to xxl curved styles, finished smooth with no lumps or uneven filing.`,
  },
  {
    name: `Pedicures`,
    desc: `A soak, scrub and shape for your feet, finished in the color of your choice. A relaxing stop on its own or paired with your hands.`,
  },
  {
    name: `Nail Art and Design`,
    desc: `Hand painted florals, French tips and custom charm work added to any set, matched to a photo you bring in or built fresh at the table.`,
  },
  {
    name: `Dip Powder`,
    desc: `A durable color coat built up in layers for extra strength on natural nails, a solid pick if your polish usually chips fast.`,
  },
  {
    name: `Eyebrow Waxing`,
    desc: `A quick shape up for your brows, usually added on at the end of a nail or pedicure appointment.`,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-background">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance]">
          Gel sets, pedicures and nail art
        </h2>
        <p className="mt-3 max-w-prose text-brand-text/80 leading-relaxed">
          Six services cover most visits. Tell us the shape and the color, and we get to work.
        </p>

        <div className="relative mt-10 w-full h-64 md:h-80 overflow-hidden rounded-xl">
          <Image
            src="/images/gallery-1.jpg"
            alt="A gel manicure being applied step by step at Dream Nail Spa"
            fill
            sizes="100vw"
            className="object-cover object-center saturate-[.95] contrast-[1.03]"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`py-6 px-0 md:px-6 border-t border-brand-text/10 ${
                i % 3 !== 0 ? 'md:border-l md:border-t-0 lg:border-t-0' : ''
              } ${i < 3 ? 'md:border-t-0' : 'md:border-t'} ${i % 2 !== 0 ? 'md:border-l' : ''} lg:border-t-0`}
            >
              <h3 className="font-body font-semibold text-lg text-brand-text">{s.name}</h3>
              <p className="mt-2 text-brand-text/80 leading-relaxed max-w-prose">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="tel:+12818354144"
            className="text-brand-primary underline decoration-2 underline-offset-4 font-semibold"
          >
            <span className="sr-only">Call Dream Nail Spa</span>
          </a>
          <a
            href="tel:+12818354144"
            className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-accent/90 transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}
