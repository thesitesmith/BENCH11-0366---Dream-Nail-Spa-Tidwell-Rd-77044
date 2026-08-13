export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dream Nail Spa",
  "description": "Nail salon in Houston",
  "telephone": "(281) 835-4144",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13525 Tidwell Rd #900",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "hasMap": "https://www.google.com/maps/place/DREAM+NAIL+SPA-Tidwell+Rd,77044/data=!4m7!3m6!1s0x8640a5e5c234fceb:0x12ee62559d740165!8m2!3d29.8538608!4d-95.1888275!16s%2Fg%2F11q94_3s_s!19sChIJ6_w0wuWlQIYRZQF0nVVi7hI?authuser=0&hl=en&rclk=1",
  "image": "/images/hero.jpg",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "19:00"
    }
  ]
} as const;
