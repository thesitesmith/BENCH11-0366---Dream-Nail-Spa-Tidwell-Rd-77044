'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: `Services` },
  { href: '#feature', label: `Why Us` },
  { href: '#testimonials', label: `Reviews` },
  { href: '#faq', label: `FAQ` },
  { href: '#contact', label: `Contact` },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 border-b ${
        scrolled
          ? 'bg-brand-primary border-brand-primary/40'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image src="/images/logo.png" alt="" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-xl md:text-2xl font-heading font-medium tracking-tight text-white">
            Dream Nail Spa
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                active === l.href ? 'text-brand-accent' : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+12818354144"
            className="whitespace-nowrap bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent/90 transition-colors"
          >
            Call Us
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap text-white/90 text-base font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+12818354144"
            onClick={() => setMenuOpen(false)}
            className="whitespace-nowrap bg-brand-accent text-white px-5 py-3 rounded-full text-sm font-semibold text-center"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  )
}
