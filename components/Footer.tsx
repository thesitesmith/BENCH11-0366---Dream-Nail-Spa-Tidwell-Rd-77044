export default function Footer() {
  return (
    <footer className="bg-brand-background pt-14 pb-20 md:pb-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-xl md:text-2xl font-heading font-medium tracking-tight text-brand-text">
            Dream Nail Spa
          </span>
          <p className="text-brand-text/70 max-w-md leading-relaxed">
            A nail salon on Tidwell Road in Houston for gel sets, pedicures and nail art, for anyone who wants their hands and feet done right.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-text/10 text-center text-xs text-brand-text/60">
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-text"
          >
            Website by The Sitesmith
          </a>
          {' '}&copy; {new Date().getFullYear()} Dream Nail Spa
        </div>
      </div>
    </footer>
  )
}
