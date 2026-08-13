export default function FeatureSection() {
  return (
    <section id="feature" className="py-16 md:py-24 bg-brand-primary">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-white [text-wrap:balance]">
          What keeps people coming back to Tidwell Road
        </h2>

        <div className="mt-10 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <p className="font-body font-semibold text-white">In and out, no long wait.</p>
              <p className="mt-1 text-white/75 leading-relaxed max-w-prose">
                Several visits describe fast, flawless service with no wait at the door, even on a busy day.
              </p>
            </div>
            <div>
              <p className="font-body font-semibold text-white">They fix it before you leave.</p>
              <p className="mt-1 text-white/75 leading-relaxed max-w-prose">
                One uneven nail got caught and corrected on the spot, not brushed off until a future visit.
              </p>
            </div>
            <div>
              <p className="font-body font-semibold text-white">A cold drink while you wait for polish to dry.</p>
              <p className="mt-1 text-white/75 leading-relaxed max-w-prose">
                Wine, mimosas or a simple cold drink comes with the service, part of settling in for the visit.
              </p>
            </div>
            <div>
              <p className="font-body font-semibold text-white">Clean, and it shows.</p>
              <p className="mt-1 text-white/75 leading-relaxed max-w-prose">
                Customers repeatedly point to a clean, well kept salon floor and sterilized tools as reasons they stay.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-10">
            <p className="font-heading font-medium text-2xl md:text-3xl text-white leading-snug [text-wrap:balance]">
              "Everyone speaks. They offer you cold drinks and fast flawless service."
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/60">Ollie</p>
          </div>
        </div>
      </div>
    </section>
  )
}
