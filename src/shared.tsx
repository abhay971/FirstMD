/**
 * Shared building blocks used across pages (Home, Providers, …):
 * constants, hooks, primitives, and the site-wide Navbar / Marquee / FAQ / Footer.
 *
 * Palette: navy #00305E (primary), blue #005BA8 (secondary), red #E3173E (accent),
 * ink #121212 (body), page background #F3F9FF.
 */

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export const ARROW = '→'

/* Real-world action targets ------------------------------------------------ */
export const BOOK = '/contact' // primary "Book Appointment" CTAs go to the Contact page
export const PHONE_DISPLAY = '(682) 831-1591'
export const PHONE_HREF = 'tel:+16828311591'
export const ADDRESS_LINES = ['208 East TX-114, Suite 300', 'Roanoke, TX 76262']
export const MAPS_HREF =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('208 East TX-114, Suite 300, Roanoke, TX 76262')

export const NAV_ITEMS = [
  { label: 'Home', id: 'home', href: '/' },
  { label: 'About', id: 'about', href: '/#about' },
  { label: 'Services', id: 'services', href: '/#services' },
  { label: 'Providers', id: 'providers', href: '/#providers' },
  { label: 'Resources', id: 'resources', href: '/resources' },
  { label: 'Insurance', id: 'insurance', href: '/#insurance' },
]
const SECTION_IDS = ['home', 'about', 'services', 'providers', 'insurance', 'contact']

/* ----------------------------------------------------------------------------
 * Hooks
 * ------------------------------------------------------------------------- */

/** Tracks vertical scroll position (rAF-throttled) for parallax + navbar state. */
export function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setY(window.scrollY))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return y
}

/** Returns the id of the section currently in view (for nav highlighting). */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

/* ----------------------------------------------------------------------------
 * Reusable primitives
 * ------------------------------------------------------------------------- */

type ButtonProps = {
  children: ReactNode
  variant?: 'accent' | 'white' | 'outline'
  className?: string
  href?: string
  newTab?: boolean
}

export function PillButton({ children, variant = 'accent', className = '', href = '#', newTab = false }: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-poppins text-lg font-bold whitespace-nowrap transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:translate-y-0'
  const variants = {
    accent: 'bg-accent text-white border-4 border-white/10 shadow-[0px_12px_10px_rgba(0,0,0,0.1)] hover:bg-[#c81235]',
    white: 'bg-white text-navy border-4 border-black/10 shadow-[0px_12px_10px_rgba(0,0,0,0.1)] hover:bg-slate-50',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  }
  return (
    <a
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

/** Text link with an arrow that nudges right on hover. */
export function ArrowLink({ children, href = '#', className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 font-poppins transition-colors ${className}`}>
      <span className="group-hover:underline">{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">{ARROW}</span>
    </a>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1272px] px-6 lg:px-8 ${className}`}>{children}</div>
}

/** Wraps content so it rises + fades into view on scroll. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  id,
}: {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div id={id} ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function SectionHeading({ eyebrow, title, className = '' }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="font-poppins text-lg font-bold text-blue">{eyebrow}</p>
      <h2 className="font-poppins text-[30px] font-bold leading-[1.08] text-navy sm:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-[60px]">
        {title}
      </h2>
    </div>
  )
}

export function CheckCircle({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`shrink-0 ${className}`} aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#005ba8" />
      <path d="M9 16.5l4.5 4.5L23 11" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Soft tinted gradient band that sits full-bleed behind the light sections. */
export function SoftTexture() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <img src="/assets/section-texture.png" alt="" className="h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-transparent to-page/70" />
    </div>
  )
}

/** Decorative light-blue medical "plus" motif anchored to a section edge. */
export function CrossDecor({ src, className = '' }: { src: string; className?: string }) {
  return <img aria-hidden alt="" src={src} className={`pointer-events-none absolute select-none ${className}`} />
}

/* ----------------------------------------------------------------------------
 * Navbar (route-aware: anchors scroll on the home page, routes navigate)
 * ------------------------------------------------------------------------- */

export function Navbar() {
  const y = useScrollY()
  const scrolled = y > 24
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const location = useLocation()
  const path = location.pathname
  const scrollActive = useActiveSection(SECTION_IDS)
  const active = path.startsWith('/providers')
    ? 'providers'
    : path.startsWith('/contact')
      ? 'contact'
      : path.startsWith('/resources')
        ? 'resources'
        : scrollActive

  // While actively scrolling, collapse to a compact links-only bar; expand on idle.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const onScroll = () => {
      setIsScrolling(true)
      clearTimeout(timer)
      timer = setTimeout(() => setIsScrolling(false), 280)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  const compact = isScrolling && y > 60 && !open

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:pt-6">
      <nav
        className={`pointer-events-auto mx-auto flex w-full max-w-[1140px] items-center justify-between gap-6 rounded-[80px] border border-white/60 p-2.5 transition-all duration-300 ${
          scrolled ? 'bg-navy shadow-[0_12px_34px_rgba(0,0,0,0.28)]' : 'bg-navy'
        } ${compact ? 'lg:max-w-[680px] lg:justify-center' : ''}`}
      >
        <a
          href="/"
          className={`flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-[36px] bg-white px-5 transition-all duration-300 hover:scale-[1.03] lg:h-12 ${
            compact ? 'lg:max-w-0 lg:px-0 lg:opacity-0' : 'lg:max-w-[180px] lg:px-5'
          }`}
          aria-label="First MD — home"
        >
          <img src="/assets/logo-navy.svg" alt="First MD" className="h-7 w-auto lg:h-8" />
        </a>

        <ul className="hidden items-center gap-5 font-poppins text-base lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`relative py-1 transition-colors hover:text-white ${active === item.id ? 'text-white' : 'text-white/70'}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    active === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={BOOK}
          className={`hidden shrink-0 overflow-hidden rounded-full border-4 border-white/10 bg-white py-2.5 font-poppins text-sm font-bold text-navy shadow-[0px_12px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 lg:inline-flex ${
            compact ? 'lg:max-w-0 lg:border-0 lg:px-0 lg:opacity-0' : 'lg:max-w-[220px] lg:px-6'
          }`}
        >
          Book Appointment
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`pointer-events-auto mx-auto mt-2 w-full max-w-[1272px] origin-top overflow-hidden rounded-3xl border border-white/15 bg-navy px-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 lg:hidden ${
          open ? 'max-h-[520px] py-5 opacity-100' : 'max-h-0 border-transparent py-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 font-poppins text-lg transition-colors ${
                  active === item.id ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={BOOK}
          onClick={() => setOpen(false)}
          className="mt-4 block rounded-full bg-white px-6 py-3 text-center font-poppins font-bold text-navy"
        >
          Book Appointment
        </a>
      </div>
    </header>
  )
}

/* ----------------------------------------------------------------------------
 * Marquee strip
 * ------------------------------------------------------------------------- */

export function MarqueeStrip() {
  const phrase = 'Trusted by Families Across Roanoke & Nearby Communities'
  return (
    <div className="flex h-[119px] items-center overflow-hidden bg-navy">
      <div className="marquee-track animate-marquee flex shrink-0 items-center gap-7 whitespace-nowrap pr-7">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-7">
            <span className="font-poppins text-2xl font-bold text-white">{phrase}</span>
            <span className="size-2 shrink-0 rounded-full bg-white/80" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------------------
 * FAQ — opens on hover
 * ------------------------------------------------------------------------- */

const FAQS = [
  { q: 'Do you accept walk-ins?', a: 'Yes, walk-ins are welcome based on availability.' },
  { q: 'Do you provide pediatric care?', a: 'Yes, our family medicine practice cares for patients of all ages, including children.' },
  { q: 'Do you offer same-day appointments?', a: 'Same-day appointments are often available — call the clinic to check current openings.' },
  { q: 'What insurance plans do you accept?', a: 'We accept most major insurance providers. Reach out and our team will confirm your coverage.' },
]

export function FAQ({ items = FAQS }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="relative overflow-hidden">
      <SoftTexture />
      <CrossDecor src="/assets/cross-1.svg" className="left-[-50px] bottom-[14%] w-[260px]" />
      <Container className="relative z-10 py-20 lg:py-24">
        <Reveal className="flex flex-col items-center gap-10">
          <h2 className="text-center font-poppins text-4xl font-bold text-navy lg:text-6xl">FAQ</h2>
          <div className="flex w-full flex-col gap-6">
            {items.map((faq, i) => (
              <div
                key={i}
                tabIndex={0}
                className="group rounded-3xl bg-white px-8 py-6 shadow-sm outline-none transition-colors duration-300 hover:bg-blue hover:shadow-lg focus-within:bg-blue focus-within:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-poppins text-xl font-bold text-navy transition-colors group-hover:text-white group-focus-within:text-white">
                    {faq.q}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full text-3xl font-light text-navy transition-transform duration-300 group-hover:rotate-45 group-hover:text-white group-focus-within:rotate-45 group-focus-within:text-white">
                    +
                  </span>
                </div>
                <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-[640px] font-poppins text-xl text-white/80">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Providers preview (used on Home and Services pages)
 * ------------------------------------------------------------------------- */

type Provider = { name: string; title: string; img?: string; bio?: string }

const PROVIDERS: Provider[] = [
  { name: 'Foram Mehta', title: 'FNP', img: '/assets/prov-foram-hd.png' },
  { name: 'Edward Martinez', title: 'PA-C', img: '/assets/prov-edward.png' },
  { name: 'Manny Trevino', title: 'DC', img: '/assets/prov-manny.png' },
  { name: 'Ranjit Dhelaria', title: 'MD, MRCP', img: '/assets/prov-ranjit.png' },
]

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <a
      href="/providers"
      aria-label={`Learn more about ${provider.name}`}
      className="group relative mx-auto block w-full max-w-[306px] transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="aspect-square w-full overflow-hidden rounded-[30px] bg-navy shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
        {provider.img ? (
          <img
            src={provider.img}
            alt={provider.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <p className="p-6 pb-16 text-center font-poppins text-sm leading-relaxed text-white">{provider.bio}</p>
        )}
      </div>
      <div className="absolute -bottom-6 left-1/2 w-[197px] max-w-[80%] -translate-x-1/2 rounded-[20px] border border-navy bg-white py-2 text-center shadow-md transition-colors group-hover:border-accent">
        <p className="font-outfit text-lg font-bold text-navy">{provider.name}</p>
        <p className="font-outfit text-sm text-navy">{provider.title}</p>
      </div>
    </a>
  )
}

export function Providers() {
  return (
    <section id="providers" className="relative scroll-mt-28 overflow-hidden">
      <SoftTexture />
      <CrossDecor src="/assets/cross-2.svg" className="right-[-60px] bottom-[12%] w-[210px]" />
      <Container className="relative z-10 py-20">
        <Reveal className="flex flex-col items-center gap-12">
          <h2 className="text-center font-poppins text-4xl font-bold text-navy lg:text-6xl">Meet our Providers</h2>
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
            {PROVIDERS.map((p) => (
              <ProviderCard key={p.name} provider={p} />
            ))}
          </div>
          <ArrowLink href="/providers" className="mt-4 text-2xl text-navy">
            View more
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Footer
 * ------------------------------------------------------------------------- */

const FOOTER_COLS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Providers', href: '/providers' },
      { label: 'Patient Resources', href: '/resources' },
      { label: 'Insurance', href: '/#insurance' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    heading: '',
    links: [
      { label: 'HIPAA Privacy Policy', href: '#' },
      { label: 'Accessibility Statement', href: '#' },
      { label: 'Sitemap', href: '#' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Family Medicine & Urgent Care', href: '/#services' },
      { label: 'Hormone Therapy', href: '/#services' },
      { label: 'IV Hydrating Therapy', href: '/#services' },
      { label: 'Peptide Therapy', href: '/#services' },
    ],
  },
  {
    heading: 'Privacy Policy',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Copyright', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden rounded-t-3xl bg-navy pt-20 pb-44 text-white">
      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {FOOTER_COLS.map((col, i) => (
            <ul key={i} className="flex flex-col gap-2 font-poppins text-xl">
              {col.heading && <li className="font-bold">{col.heading}</li>}
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-opacity hover:opacity-80 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <address className="flex flex-col gap-6 font-poppins text-xl not-italic lg:items-end lg:text-right">
            <p className="font-bold">Contact</p>
            <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            <a href={PHONE_HREF} className="hover:underline">
              Phone: {PHONE_DISPLAY}
            </a>
            <div className="text-base text-white/80">
              <p>Copyright © 2026</p>
              <p>First MD Family Walk-In Clinic</p>
              <p>All Rights Reserved</p>
            </div>
          </address>
        </div>
      </Container>

      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[30%] select-none text-center font-outfit text-[20vw] font-bold leading-none text-white/10"
      >
        FIRST MD
      </p>
    </footer>
  )
}
