import { MapPin, Clock, PhoneCall } from 'lucide-react';

export default function Contact() {
  const address = '13525 Tidwell Rd #900, Houston, TX 77044'
  const encoded = encodeURIComponent(address)

  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-background">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-brand-text [text-wrap:balance]">
          Call, or find us on Tidwell Road
        </h2>

        <div className="mt-10 bg-white rounded-xl border border-brand-text/10 p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <a
                href="tel:+12818354144"
                className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-accent/90 transition-colors"
              >
                <PhoneCall size={18} />
                Call Us
              </a>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-brand-text/85">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  <span>{address}</span>
                </li>
                <li className="flex items-start gap-3 text-brand-text/85">
                  <Clock size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  <span>
                    Monday to Saturday: 9 AM to 7 PM
                    <br />
                    Sunday: 11 AM to 5 PM
                  </span>
                </li>
                <li className="flex items-start gap-3 text-brand-text/85">
                  <PhoneCall size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  <a href="tel:+12818354144" className="underline">
                    (281) 835-4144
                  </a>
                </li>
              </ul>
            </div>

            <a
              href="https://www.google.com/maps/place/DREAM+NAIL+SPA-Tidwell+Rd,77044/data=!4m7!3m6!1s0x8640a5e5c234fceb:0x12ee62559d740165!8m2!3d29.8538608!4d-95.1888275!16s%2Fg%2F11q94_3s_s!19sChIJ6_w0wuWlQIYRZQF0nVVi7hI?authuser=0&hl=en&rclk=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-brand-accent underline text-sm font-semibold"
            >
              View on Google Maps
            </a>
          </div>

          <div className="relative overflow-hidden rounded-xl min-h-[300px] w-full">
            
          </div>
        </div>
      </div>
    
      <div className="mx-auto max-w-6xl px-6 mt-10">
        <div className="relative overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps?q=13525%20Tidwell%20Rd%20%23900&output=embed"
            title="Location map"
            loading="lazy"
            className="h-[320px] w-full border-0"
          />
        </div>
      </div>
</section>
  )
}
