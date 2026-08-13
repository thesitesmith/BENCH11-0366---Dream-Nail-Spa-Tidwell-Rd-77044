'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '15%'])

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="A nail artist at Dream Nail Spa painting a floral design on a client's nails"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center saturate-[.95] contrast-[1.03]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl px-5 md:px-10">
          <h1 className="font-heading font-medium text-brand-primary text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight [text-wrap:balance]">
            Nails done the way you asked, every visit
          </h1>
          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
            A cozy Tidwell Road salon for gel sets, pedicures and nail art, built around what you point at in the color wall.
          </p>
          <div className="mt-8">
            <a
              href="tel:+12818354144"
              className="inline-block bg-brand-accent text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-accent/90 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
