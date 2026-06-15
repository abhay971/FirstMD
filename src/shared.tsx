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

/** The four services, used by the navbar Services dropdown. */
export const SERVICE_LINKS = [
  { label: 'Family Medicine & Urgent Care', href: '/services' },
  { label: 'Hormone Therapy', href: '/services/hormone' },
  { label: 'IV Hydrating Therapy', href: '/services/iv' },
  { label: 'Peptide Therapy', href: '/services/peptide' },
]

type NavItem = { label: string; id: string; href: string; children?: { label: string; href: string }[] }

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home', href: '/' },
  { label: 'About', id: 'about', href: '/#about' },
  { label: 'Services', id: 'services', href: '/#services', children: SERVICE_LINKS },
  { label: 'Providers', id: 'providers', href: '/#providers' },
  { label: 'Resources', id: 'resources', href: '/resources' },
  { label: 'Insurance', id: 'insurance', href: '/#insurance' },
]
const SECTION_IDS = ['home', 'about', 'services', 'providers', 'insurance', 'contact']

/* ----------------------------------------------------------------------------
 * Hooks
 * ------------------------------------------------------------------------- */

/**
 * Gentle vertical parallax applied imperatively to a ref'd element on scroll.
 * Writes `transform` directly (rAF-throttled) instead of going through React
 * state, so scrolling never triggers re-renders of the host component tree.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(factor = 0.04, max = 900) {
  const ref = useRef<T>(null)
  useEffect(() => {
    let raf = 0
    const apply = () => {
      raf = 0
      const el = ref.current
      if (el) el.style.transform = `translate3d(0, ${Math.min(window.scrollY, max) * factor}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [factor, max])
  return ref
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

/**
 * Standard section-title sizing. `SECTION_TITLE` is the compact size used across
 * the service pages (Family Medicine, Hormone, IV) so every section heading
 * matches. Pair it with a color class (text-navy on light, text-page on navy).
 */
export const SECTION_TITLE = 'font-poppins text-[28px] font-bold leading-[1.1] sm:text-[34px] lg:text-[40px] xl:text-[44px]'

export function SectionHeading({
  eyebrow,
  title,
  className = '',
  size = 'lg',
}: {
  eyebrow: string
  title: string
  className?: string
  size?: 'lg' | 'md'
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="font-poppins text-lg font-bold text-blue">{eyebrow}</p>
      {size === 'md' ? (
        <h2 className={`${SECTION_TITLE} text-navy`}>{title}</h2>
      ) : (
        <h2 className="font-poppins text-[30px] font-bold leading-[1.08] text-navy sm:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-[60px]">
          {title}
        </h2>
      )}
    </div>
  )
}

/**
 * Hero trust-chip row shared by the service pages (Family Medicine, Hormone,
 * IV). Sizing is tuned so four chips — including longer two-word labels — stay
 * on a single line at desktop widths, keeping every service hero consistent.
 */
export function HeroChips({ chips }: { chips: { icon: string; label: [string, string] }[] }) {
  return (
    <div
      className="hero-rise flex flex-wrap items-center justify-between gap-x-6 gap-y-5 rounded-[28px] bg-page/70 px-6 py-4 backdrop-blur-md"
      style={{ animationDelay: '380ms' }}
    >
      {chips.map((chip, i) => (
        <div key={chip.label.join(' ')} className="flex items-center gap-6">
          {i > 0 && <span className="hidden h-[58px] w-px bg-navy/15 lg:block" />}
          <div className="flex items-center gap-3">
            <span className="grid size-[58px] shrink-0 place-items-center rounded-full bg-white shadow-[0px_8px_18px_rgba(0,48,94,0.10)]">
              <img src={chip.icon} alt="" className="size-7" />
            </span>
            <span className="font-poppins text-base font-bold leading-tight text-ink lg:text-lg">
              {chip.label[0]}
              <br />
              {chip.label[1]}
            </span>
          </div>
        </div>
      ))}
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

/**
 * Stadium / "capsule" photo frame matching the Services-page collage: three
 * corners fully rounded with one corner left square ("sharp"), plus a faint
 * outline tucked diagonally-opposite behind it for depth. The Services pair is
 * point-symmetric — the LEFT capsule is sharp at top-right (default), the RIGHT
 * capsule at bottom-left (set `sharp="bl"`). Sized by the caller via `className`
 * (explicit height + width); stagger the pair up/down. To flip the photo, wrap
 * `children` in an inset-0 element carrying the transform — never flip the frame
 * itself, or the sharp corner moves.
 */
const CAPSULE_SHAPES = {
  tl: 'rounded-tr-full rounded-bl-full rounded-br-full',
  tr: 'rounded-tl-full rounded-bl-full rounded-br-full',
  bl: 'rounded-tl-full rounded-tr-full rounded-br-full',
  br: 'rounded-tl-full rounded-tr-full rounded-bl-full',
} as const
// Outline tucked toward the corner diagonally opposite the sharp one.
const CAPSULE_OUTLINE_OFFSET = {
  tl: 'translate-x-2 translate-y-3',
  tr: '-translate-x-2 translate-y-3',
  bl: 'translate-x-2 -translate-y-3',
  br: '-translate-x-2 -translate-y-3',
} as const

export function CapsuleFrame({
  children,
  className = '',
  outlineClassName = 'border-navy/30',
  sharp = 'tr',
}: {
  children: ReactNode
  className?: string
  outlineClassName?: string
  sharp?: keyof typeof CAPSULE_SHAPES
}) {
  const shape = CAPSULE_SHAPES[sharp]
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className={`pointer-events-none absolute inset-0 border ${CAPSULE_OUTLINE_OFFSET[sharp]} ${shape} ${outlineClassName}`} />
      <div className={`absolute inset-0 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${shape}`}>{children}</div>
    </div>
  )
}

/* ----------------------------------------------------------------------------
 * Navbar (route-aware: anchors scroll on the home page, routes navigate)
 * ------------------------------------------------------------------------- */

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false) // y > 24 → solid-bar shadow
  const [past60, setPast60] = useState(false) // y > 60 → eligible to collapse
  const [isScrolling, setIsScrolling] = useState(false)
  const location = useLocation()
  const path = location.pathname
  const scrollActive = useActiveSection(SECTION_IDS)
  const active = path.startsWith('/services')
    ? 'services'
    : path.startsWith('/providers')
      ? 'providers'
      : path.startsWith('/contact')
        ? 'contact'
        : path.startsWith('/resources')
          ? 'resources'
          : scrollActive

  // Single rAF-throttled listener; we only flip booleans, so the bar re-renders
  // on threshold crossings (and scroll start/stop), never every scroll frame.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    let raf = 0
    const apply = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 24)
      setPast60(y > 60)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply)
      setIsScrolling(true)
      clearTimeout(timer)
      timer = setTimeout(() => setIsScrolling(false), 280)
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // While actively scrolling (past the hero), collapse to a compact links-only
  // bar; expand again when scrolling stops.
  const compact = isScrolling && past60 && !open

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
        className={`pointer-events-auto relative mx-auto flex w-full max-w-[1140px] items-center justify-between gap-6 rounded-[80px] border border-white/60 bg-navy p-2.5 transition-[max-width,box-shadow] duration-300 ease-out lg:min-h-[70px] lg:justify-center ${
          scrolled ? 'shadow-[0_12px_34px_rgba(0,0,0,0.28)]' : 'shadow-none'
        } ${compact ? 'lg:max-w-[680px]' : ''}`}
      >
        {/* Logo: in-flow on mobile, absolute on lg so it can fade (opacity only) without animating layout */}
        <a
          href="/"
          className={`flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-[36px] bg-white px-5 transition-[opacity,transform] duration-300 ease-out hover:scale-[1.03] lg:absolute lg:inset-y-0 lg:left-2.5 lg:my-auto lg:h-12 ${
            compact ? 'lg:pointer-events-none lg:opacity-0' : 'lg:opacity-100'
          }`}
          aria-label="First MD — home"
        >
          <img src="/assets/logo-navy.svg" alt="First MD" className="h-7 w-auto lg:h-8" />
        </a>

        <ul className="hidden items-center gap-5 font-poppins text-base lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="group/nav relative">
              <a
                href={item.href}
                className={`relative flex items-center gap-1 py-1 transition-colors hover:text-white ${active === item.id ? 'text-white' : 'text-white/70'}`}
              >
                {item.label}
                {item.children && (
                  <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-200 group-hover/nav:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    active === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>

              {item.children && (
                // pt-3 bridges the gap so hover doesn't drop when moving onto the panel
                <div className="invisible absolute left-1/2 top-full z-50 w-[290px] -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                  <div className="flex flex-col gap-0.5 rounded-2xl border border-white/10 bg-navy p-2 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="rounded-xl px-4 py-2.5 font-poppins text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Book button: absolute on lg so it fades (opacity only), no layout animation */}
        <a
          href={BOOK}
          className={`hidden shrink-0 items-center justify-center rounded-full border-4 border-white/10 bg-white py-2.5 font-poppins text-sm font-bold text-navy shadow-[0px_12px_10px_rgba(0,0,0,0.1)] transition-[opacity,transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 lg:absolute lg:inset-y-0 lg:right-2.5 lg:my-auto lg:inline-flex lg:h-12 lg:px-6 ${
            compact ? 'lg:pointer-events-none lg:opacity-0' : 'lg:opacity-100'
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
          open ? 'max-h-[700px] py-5 opacity-100' : 'max-h-0 border-transparent py-0 opacity-0'
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
              {item.children && (
                <ul className="mb-1 ml-4 flex flex-col gap-0.5 border-l border-white/15 pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-4 py-2 font-poppins text-base text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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

type Provider = { id: string; name: string; title: string; img?: string; bio?: string }

const PROVIDERS: Provider[] = [
  { id: 'foram', name: 'Foram Mehta', title: 'FNP', img: '/assets/prov-foram-hd.png' },
  { id: 'edward', name: 'Edward Martinez', title: 'PA-C', img: '/assets/prov-edward.png' },
  { id: 'manny', name: 'Manny Trevino', title: 'DC', img: '/assets/prov-manny.png' },
  { id: 'ranjit', name: 'Ranjit Dhelaria', title: 'MD, MRCP', img: '/assets/prov-ranjit.png' },
]

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <a
      href={`/providers#${provider.id}`}
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
    ],
  },
  {
    heading: 'Services',
    links: SERVICE_LINKS,
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
            <ul key={i} className="flex flex-col gap-2 font-poppins text-base">
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
          <address className="flex flex-col gap-4 font-poppins text-base not-italic">
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
            <div className="text-sm text-white/80">
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
