const quotes = [
  {
    text: `From the moment you walk thru the door you walk in to a wonderful oasis of relaxation. My entire experience was blissfully!`,
    name: `Derrica`,
  },
  {
    text: `She took her time and explained everything she was doing as far as removing my cuticles and ingrown nails. My French tip looks so good!`,
    name: `Chantelle`,
  },
  {
    text: `The entire salon was impeccably clean. All equipment was properly sterilized, which made me feel very comfortable.`,
    name: `Ara`,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-brand-background">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance]">
          What customers say after their visit
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {quotes.map((q) => (
            <div key={q.name} className="border-t border-brand-text/10 pt-6">
              <p className="text-brand-text/85 leading-relaxed">"{q.text}"</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-text/60">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
