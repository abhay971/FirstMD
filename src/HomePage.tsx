/**
 * First MD — Home page
 * Built from the Figma design "Home PageV2 - First MD" (node 234:1502), then
 * developed into a real, interactive site: sticky scroll-aware navbar with a
 * working mobile menu + active-section highlighting, every control wired to a
 * real action (smooth-scroll anchors, tel:, Google Maps), lively scroll-reveal
 * and parallax motion, and consistent alignment.
 *
 * Palette: navy #00305E (primary), blue #005BA8 (secondary), red #E3173E (accent),
 * ink #121212 (body), page background #F3F9FF.
 */

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const ARROW = '→'

/* Real-world action targets ------------------------------------------------ */
const BOOK = '#contact' // primary CTAs smooth-scroll to the Contact section
const PHONE_DISPLAY = '(682) 831-1591'
const PHONE_HREF = 'tel:+16828311591'
const ADDRESS_LINES = ['208 East TX-114, Suite 300', 'Roanoke, TX 76262']
const MAPS_HREF =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('208 East TX-114, Suite 300, Roanoke, TX 76262')

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Providers', id: 'providers' },
  { label: 'Insurance', id: 'insurance' },
  { label: 'Contact', id: 'contact' },
]
const SECTION_IDS = ['home', 'about', 'services', 'providers', 'insurance', 'contact']

/* ----------------------------------------------------------------------------
 * Hooks
 * ------------------------------------------------------------------------- */

/** Tracks vertical scroll position (rAF-throttled) for parallax + navbar state. */
function useScrollY() {
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

function PillButton({ children, variant = 'accent', className = '', href = '#', newTab = false }: ButtonProps) {
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
function ArrowLink({ children, href = '#', className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 font-poppins transition-colors ${className}`}>
      <span className="group-hover:underline">{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">{ARROW}</span>
    </a>
  )
}

function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1272px] px-6 lg:px-8 ${className}`}>{children}</div>
}

/** Wraps content so it rises + fades into view on scroll. */
function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionHeading({ eyebrow, title, className = '' }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="font-poppins text-lg font-bold text-blue">{eyebrow}</p>
      <h2 className="font-poppins text-[30px] font-bold leading-[1.08] text-navy sm:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-[60px]">
        {title}
      </h2>
    </div>
  )
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#005ba8" />
      <path d="M9 16.5l4.5 4.5L23 11" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Soft tinted gradient band that sits full-bleed behind the light sections. */
function SoftTexture() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <img src="/assets/section-texture.png" alt="" className="h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-transparent to-page/70" />
    </div>
  )
}

/** Decorative light-blue medical "plus" motif anchored to a section edge. */
function CrossDecor({ src, className = '' }: { src: string; className?: string }) {
  return <img aria-hidden alt="" src={src} className={`pointer-events-none absolute select-none ${className}`} />
}

/* ----------------------------------------------------------------------------
 * Navbar
 * ------------------------------------------------------------------------- */

function Navbar() {
  const y = useScrollY()
  const scrolled = y > 24
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const active = useActiveSection(SECTION_IDS)

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

  // Don't collapse right at the very top, and never while the mobile menu is open.
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
        className={`pointer-events-auto mx-auto flex w-full max-w-[1080px] items-center justify-between gap-6 rounded-[80px] border border-white/60 p-2.5 transition-all duration-300 ${
          scrolled ? 'bg-navy shadow-[0_12px_34px_rgba(0,0,0,0.28)]' : 'bg-navy'
        } ${compact ? 'lg:max-w-[600px] lg:justify-center' : ''}`}
      >
        <a
          href="#home"
          className={`flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-[36px] bg-white px-5 transition-all duration-300 hover:scale-[1.03] lg:h-12 ${
            compact ? 'lg:max-w-0 lg:px-0 lg:opacity-0' : 'lg:max-w-[180px] lg:px-5'
          }`}
          aria-label="First MD — home"
        >
          <img src="/assets/logo-navy.svg" alt="First MD" className="h-7 w-auto lg:h-8" />
        </a>

        <ul className="hidden items-center gap-8 font-poppins text-base lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
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
                href={`#${item.id}`}
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
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  const y = useScrollY()
  const shift = Math.min(y, 900) * 0.04 // gentle parallax on the backdrop

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/assets/hero-bg.png"
          alt=""
          style={{ transform: `translate3d(0, ${shift}px, 0)` }}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-15% to-transparent to-52%" />
      </div>

      <Container className="relative flex min-h-svh items-center pt-40 pb-24">
        <div className="flex max-w-[560px] flex-col gap-6">
          <h1
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.08] text-navy sm:text-5xl lg:max-w-[560px] lg:text-[52px] lg:leading-[1.05] xl:text-[64px] 2xl:text-[76px] 2xl:leading-[1.06]"
            style={{ animationDelay: '60ms' }}
          >
            Healthcare That Puts Your Family First
          </h1>
          <p className="hero-rise max-w-[520px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '160ms' }}>
            From routine checkups to urgent care needs, First MD delivers personalized medical
            services with compassion, convenience, and expert attention all under one roof.
          </p>
          <div className="hero-rise flex flex-wrap items-center gap-4" style={{ animationDelay: '260ms' }}>
            <PillButton variant="accent" href={BOOK}>
              Book Appointment
            </PillButton>
            <PillButton variant="outline" href={PHONE_HREF}>
              Call Clinic
            </PillButton>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * "Need Care Today?" banner
 * ------------------------------------------------------------------------- */

function NeedCareBanner() {
  return (
    <Container className="pt-16 pb-16">
      <Reveal className="mx-auto max-w-[1000px]">
        <div className="relative rounded-2xl bg-navy px-8 py-6 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:px-14 lg:py-7">
          {/* Concentric rings — clipped to the rounded banner, centered behind the providers */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '-92px', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[540px] max-w-none select-none md:block"
            />
          </div>

          {/* Copy */}
          <div className="relative z-10 max-w-[460px]">
            <h2 className="font-poppins text-2xl font-bold lg:text-3xl">Need Care Today?</h2>
            <p className="mt-2 max-w-[420px] font-poppins text-base text-white/60 lg:text-lg">
              Same-day appointments and walk-in visits available for urgent medical needs.
            </p>
            <ArrowLink href={BOOK} className="mt-3 text-base font-bold text-white hover:opacity-90 lg:text-lg">
              Get Care Today
            </ArrowLink>
          </div>

          {/* Providers — overlapping, clipped to the banner bottom, heads popping above the top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden md:block"
            style={{ clipPath: 'inset(-300px 0px 0px 0px round 16px)' }}
          >
            <div className="absolute bottom-0 right-2 flex items-end lg:right-4">
              <img src="/assets/need-doc-1.png" alt="" className="h-[214px] w-auto lg:h-[258px]" />
              <img
                src="/assets/need-doc-2.png"
                alt="First MD providers"
                className="-ml-24 h-[230px] w-auto lg:h-[276px] lg:-ml-32"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Services
 * ------------------------------------------------------------------------- */

const SERVICES = ['Family Medicine', 'Chronic Illness Treatment', 'ProPellet Therapy', 'IV Hydration Therapy', 'On-Site Facilities']

function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img src="/assets/services-doctor.png" alt="" className="h-full w-full -scale-x-100 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-0% via-page/25 via-55% to-transparent to-100%" />
      </div>

      <Container className="relative z-10 py-20 lg:py-28">
        <Reveal className="flex max-w-[665px] flex-col gap-8">
          <SectionHeading eyebrow="Our Services" title="Healthcare Services Designed Around Your Family" className="max-w-[640px]" />
          <ul className="flex w-full max-w-[330px] flex-col">
            {SERVICES.map((service, i) => (
              <li key={service}>
                <a href={BOOK} className="group flex items-center gap-3 py-2 transition-colors">
                  <span className="size-2 shrink-0 rounded-full bg-blue transition-transform group-hover:scale-125" />
                  <span className="font-poppins text-lg font-bold text-black transition-colors group-hover:text-blue">{service}</span>
                  <span className="ml-auto text-blue opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">{ARROW}</span>
                </a>
                {i < SERVICES.length - 1 && <span className="block h-px w-full bg-black/15" />}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Why Choose First MD  (anchored as "About")
 * ------------------------------------------------------------------------- */

const WHY_POINTS = ['Minimal Wait Times', 'Experienced Medical Team', 'Convenient Walk-In Access', 'Modern On-Site Facilities']

function WhyChoose() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden">
      <SoftTexture />
      <CrossDecor src="/assets/cross-3.svg" className="right-[2%] top-3 w-[260px]" />
      <Container className="relative z-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[119px]">
          {/* Arch image composition */}
          <Reveal className="flex items-center justify-center gap-5">
            {/* Doctor arch with a subtle outline tucked behind for depth */}
            <div className="relative h-[440px] w-[200px] shrink-0 sm:h-[560px] sm:w-[268px]">
              <div className="absolute inset-0 -translate-x-2 translate-y-3 rounded-[140px] border border-navy/30" />
              <div className="absolute inset-0 overflow-hidden rounded-[140px] shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <img src="/assets/why-b.png" alt="First MD physician" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Anatomy arch — flipped vertically so the figure stands upright */}
            <div className="hidden h-[440px] w-[200px] shrink-0 overflow-hidden rounded-[140px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:block sm:h-[560px] sm:w-[268px]">
              <img src="/assets/why-c.png" alt="" className="h-full w-full -scale-y-100 object-cover" />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120} className="flex flex-col gap-8">
            <SectionHeading eyebrow="Why to us" title="Why Families Choose First MD" className="max-w-[550px]" />
            <p className="max-w-[505px] font-poppins text-xl text-ink">
              We take time to understand your health concerns and provide treatment tailored to your needs.
            </p>
            <ul className="flex flex-col gap-4">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="font-poppins text-2xl font-bold text-black">{point}</span>
                </li>
              ))}
            </ul>
            <PillButton variant="accent" href="#services" className="w-[307px] max-w-full">
              Explore More {ARROW}
            </PillButton>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Providers
 * ------------------------------------------------------------------------- */

type Provider = { name: string; title: string; img?: string; bio?: string }

const PROVIDERS: Provider[] = [
  {
    name: 'Foram Mehta',
    title: 'FNP',
    bio: 'Foram Mehta, FNP brings over 12 years of critical care experience and specializes in primary care, women’s health, medical weight loss, hormone therapy, and aesthetic treatments, delivering personalized, compassionate care.',
  },
  { name: 'Edward Martinez', title: 'PA-C', img: '/assets/prov-edward.png' },
  { name: 'Manny Trevino', title: 'DC', img: '/assets/prov-manny.png' },
  { name: 'Ranjit Dhelaria', title: 'MD, MRCP', img: '/assets/prov-ranjit.png' },
]

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <a
      href={BOOK}
      aria-label={`Book an appointment with ${provider.name}`}
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

function Providers() {
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
          <ArrowLink href="#providers" className="mt-4 text-2xl text-navy">
            View more
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Marquee strip
 * ------------------------------------------------------------------------- */

function MarqueeStrip() {
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
 * Insurance
 * ------------------------------------------------------------------------- */

const INSURANCE_POINTS = [
  'Same-Day Appointments',
  'Most Major Insurance Accepted',
  'Comprehensive Family Care',
  'On-Site Diagnostics',
  'Patient-First Approach',
]

function Insurance() {
  return (
    <section id="insurance" className="relative scroll-mt-28 overflow-hidden bg-white">
      <CrossDecor src="/assets/cross-3.svg" className="left-[-70px] top-[15%] w-[180px] opacity-70" />
      <Container className="relative z-10 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[653px_1fr] lg:gap-[83px]">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading eyebrow="Insurance" title="Insurance Made Simple" className="max-w-[450px]" />
            <ul className="flex flex-col gap-4">
              {INSURANCE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 font-poppins text-xl font-bold text-navy">
                  <span className="size-2 shrink-0 rounded-full bg-navy" />
                  {point}
                </li>
              ))}
            </ul>
            <PillButton variant="accent" href={BOOK} className="w-fit">
              Verify Insurance Coverage {ARROW}
            </PillButton>
          </Reveal>

          <Reveal delay={120} className="h-[420px] w-full overflow-hidden rounded-2xl bg-[#d9d9d9] shadow-xl lg:h-[810px]">
            <img src="/assets/insurance.png" alt="Insurance support at First MD" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * FAQ
 * ------------------------------------------------------------------------- */

const FAQS = [
  { q: 'Do you accept walk-ins?', a: 'Yes, walk-ins are welcome based on availability.', open: true },
  { q: 'Do you provide pediatric care?', a: 'Yes, our family medicine practice cares for patients of all ages, including children.' },
  { q: 'Do you offer same-day appointments?', a: 'Same-day appointments are often available — call the clinic to check current openings.' },
  { q: 'What insurance plans do you accept?', a: 'We accept most major insurance providers. Reach out and our team will confirm your coverage.' },
]

function FAQ() {
  return (
    <section className="relative overflow-hidden">
      <SoftTexture />
      <CrossDecor src="/assets/cross-1.svg" className="left-[-50px] bottom-[14%] w-[260px]" />
      <Container className="relative z-10 py-20 lg:py-24">
      <Reveal className="flex flex-col items-center gap-10">
        <h2 className="text-center font-poppins text-4xl font-bold text-navy lg:text-6xl">FAQ</h2>
        <div className="flex w-full flex-col gap-6">
          {FAQS.map((faq, i) => (
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
 * Contact
 * ------------------------------------------------------------------------- */

const HOURS: [string, string][] = [
  ['Mon–Fri', '8:00 AM – 6:00 PM'],
  ['Saturday', '9:00 AM – 1:00 PM'],
  ['Sunday', 'Closed'],
]

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-white">
      <CrossDecor src="/assets/cross-2.svg" className="right-[-60px] top-[16%] w-[200px] opacity-70" />
      <Container className="relative z-10 py-20">
        <Reveal className="flex flex-col gap-10">
          {/* Intro: map + copy */}
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-[280px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[358px]"
              aria-label="Open directions in Google Maps"
            >
              <img
                src="/assets/contact-map.png"
                alt="Map to First MD clinic"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 font-poppins text-sm font-bold text-navy shadow-md transition-colors group-hover:bg-white">
                Open in Maps {ARROW}
              </span>
            </a>
            <div className="flex max-w-[550px] flex-col gap-8">
              <SectionHeading eyebrow="Contact Us" title="Visit our Roanoke Clinic" />
              <p className="font-poppins text-xl text-black">
                Getting quality healthcare should be easy. We’re conveniently located and here to provide the care
                you need, when you need it.
              </p>
              <a href={PHONE_HREF} className="font-poppins text-xl font-bold text-navy hover:text-accent">
                Phone: {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Cards row */}
          <div className="grid gap-9 lg:grid-cols-[1fr_436px_324px]">
            {/* Office hours */}
            <div className="flex flex-col justify-center gap-6 rounded-3xl border border-navy bg-white p-10 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-4">
                <img src="/assets/icon-schedule.svg" alt="" className="size-9" />
                <p className="font-poppins text-2xl font-bold text-navy">Office Hours</p>
              </div>
              <dl className="flex flex-col font-poppins text-xl text-ink">
                {HOURS.map(([day, time], i) => (
                  <div key={day}>
                    <div className="flex items-center justify-between gap-6 py-2">
                      <dt>{day}</dt>
                      <dd className="font-semibold">{time}</dd>
                    </div>
                    {i < HOURS.length - 1 && <span className="block h-px w-full bg-black/15" />}
                  </div>
                ))}
              </dl>
            </div>

            {/* Urgent care */}
            <div className="flex flex-col justify-center gap-6 rounded-3xl border border-accent bg-accent-soft p-10 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-4">
                <img src="/assets/icon-hospital.svg" alt="" className="size-9" />
                <p className="font-poppins text-2xl font-bold text-accent">Urgent Care</p>
              </div>
              <p className="font-poppins text-xl text-ink">Same-day care for non-life threatening illness and injuries</p>
              <span className="block h-px w-full bg-accent/30" />
              <a href="tel:911" className="flex items-center gap-4">
                <img src="/assets/icon-call.svg" alt="" className="size-8 shrink-0" />
                <p className="font-poppins text-xl font-bold">
                  <span className="text-navy">For Life-threatening emergencies, call </span>
                  <span className="text-accent underline">911</span>
                </p>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-6">
              <PillButton variant="accent" href={MAPS_HREF} newTab className="h-[91px] w-full">
                Get Directions
              </PillButton>
              <PillButton variant="white" href={PHONE_HREF} className="h-[91px] w-full">
                Book Appointment
              </PillButton>
            </div>
          </div>
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
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Providers', href: '#providers' },
      { label: 'Insurance', href: '#insurance' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: '',
    links: [
      { label: 'HIPAA Privacy Policy', href: '#' },
      { label: 'Accessibility Statement', href: '#' },
      { label: 'Sitemap', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Family Medicine', href: '#services' },
      { label: 'Urgent Care', href: '#services' },
      { label: 'IV Hydration', href: '#services' },
      { label: 'Chronic Care', href: '#services' },
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

function Footer() {
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

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <NeedCareBanner />
        <Services />
        <Providers />
        <MarqueeStrip />
        <Insurance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
