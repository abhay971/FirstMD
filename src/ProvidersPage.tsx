/**
 * First MD — Providers page (Figma node 240:4386).
 * Shared chrome (Navbar, Marquee, FAQ, Footer) + primitives come from ./shared.
 */

import type { ReactNode } from 'react'
import {
  BOOK,
  Container,
  Footer,
  FAQ,
  MarqueeStrip,
  Navbar,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillButton,
  Reveal,
  SectionHeading,
  useScrollY,
} from './shared'

/* ----------------------------------------------------------------------------
 * Small inline icons
 * ------------------------------------------------------------------------- */

function Badge({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#e3eefb] text-blue">{icon}</span>
      <p className="whitespace-nowrap font-poppins text-base font-bold leading-tight text-ink">{children}</p>
    </div>
  )
}

const ICON = 'size-7'
const IconStethoscope = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v5a4 4 0 0 0 8 0V3" />
    <path d="M10 14v2a5 5 0 0 0 10 0v-2" />
    <circle cx="20" cy="11" r="2" />
  </svg>
)
const IconHeart = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
)
const IconCalendar = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
    <path d="m9 14 2 2 4-4" />
  </svg>
)
const IconShield = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

function CheckRing({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#005ba8" />
      <path d="M7 12.5l3 3 7-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden>
      <path
        d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95z"
        fill="#f5a623"
      />
    </svg>
  )
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

const HERO_BADGES = [
  {
    icon: IconStethoscope,
    label: (
      <>
        Experienced
        <br />
        Providers
      </>
    ),
  },
  {
    icon: IconHeart,
    label: (
      <>
        Patient-Focused
        <br />
        Care
      </>
    ),
  },
  {
    icon: IconCalendar,
    label: (
      <>
        Same-Day
        <br />
        Appointments
      </>
    ),
  },
  {
    icon: IconShield,
    label: (
      <>
        Most Major
        <br />
        Insurance Accepted
      </>
    ),
  },
]

function Hero() {
  const y = useScrollY()
  const shift = Math.min(y, 900) * 0.04

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-page">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/assets/providers-hero.png"
          alt=""
          style={{ transform: `translate3d(0, ${shift}px, 0)` }}
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-0% via-page/82 via-42% to-transparent to-66%" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-page" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col pt-32 pb-8 lg:pt-36">
        <div className="hero-rise flex max-w-[680px] flex-col gap-4" style={{ animationDelay: '60ms' }}>
          <p className="font-poppins text-lg font-bold text-blue">Meet the Providers</p>
          <h1 className="font-poppins text-[36px] font-bold leading-[1.04] text-navy sm:text-5xl lg:text-[52px] xl:text-[58px] 2xl:text-[64px]">
            Compassionate Care Starts With the Right Team
          </h1>
          <p className="font-poppins text-lg font-bold text-navy">Rehydrate. Recover. Recharge.</p>
          <p className="max-w-[600px] font-poppins text-base text-navy lg:text-lg">
            Our experienced healthcare professionals are committed to providing personalized care,
            building long-term relationships, and helping patients achieve better health outcomes.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <PillButton variant="accent" href={BOOK}>
              Book Appointment
            </PillButton>
            <PillButton variant="outline" href="/#contact">
              Contact Us
            </PillButton>
          </div>
        </div>

        {/* Feature badges — pinned to the bottom of the viewport, single row on desktop */}
        <Reveal className="mt-auto flex flex-col gap-5 pt-10 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {HERO_BADGES.map((b, i) => (
            <div key={i} className="flex items-center gap-3 lg:gap-4">
              <Badge icon={b.icon}>{b.label}</Badge>
              {i < HERO_BADGES.length - 1 && <span className="hidden h-12 w-px shrink-0 bg-navy/15 lg:block" />}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Team introduction
 * ------------------------------------------------------------------------- */

function TeamIntro() {
  return (
    <Container className="py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[480px_1fr] lg:gap-[60px]">
        <Reveal className="aspect-[635/694] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-xl">
          <img src="/assets/team-photo.png" alt="The First MD care team" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal delay={120} className="flex max-w-[600px] flex-col gap-8">
          <SectionHeading eyebrow="Team Introduction" title="Healthcare Professionals You Can Trust" />
          <div className="flex flex-col gap-4 font-poppins text-lg text-navy">
            <p>
              At First MD, we believe great healthcare starts with meaningful relationships. Our providers
              take the time to listen, educate, and create personalized treatment plans that support your
              health goals.
            </p>
            <p>
              Whether you're visiting for preventive care, chronic disease management, urgent care, or
              wellness services, our team is here to help.
            </p>
          </div>
        </Reveal>
      </div>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Provider cards
 * ------------------------------------------------------------------------- */

type Crop = { width: string; height: string; left: string; top: string }
type Provider = { name: string; title: string; img: string; crop: Crop }

// Crops mirror the Figma node placements so each face is framed identically.
const PROVIDERS: Provider[] = [
  { name: 'Foram Mehta', title: 'FNP', img: '/assets/prov-src-1.png', crop: { width: '151.08%', height: '248.42%', left: '-25.54%', top: '-68.36%' } },
  { name: 'Edward Martinez', title: 'PA-C', img: '/assets/prov-src-2.png', crop: { width: '100%', height: '128.78%', left: '0%', top: '0%' } },
  { name: 'Manny Trevino', title: 'DC', img: '/assets/prov-src-3.png', crop: { width: '100%', height: '133.44%', left: '0%', top: '0%' } },
  { name: 'Dr. Ranjit Dhelaria', title: 'MD, MRCP (UK)', img: '/assets/prov-src-4.png', crop: { width: '119.6%', height: '161.31%', left: '-15.16%', top: '-17.44%' } },
]

const PROVIDER_SPECIALTIES = ['Family Medicine', 'Preventive Care', 'Chronic Disease Management']

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-navy bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[312/253] w-full overflow-hidden bg-navy">
        <img
          src={provider.img}
          alt={provider.name}
          className="absolute max-w-none"
          style={{
            width: provider.crop.width,
            height: provider.crop.height,
            left: provider.crop.left,
            top: provider.crop.top,
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="font-poppins text-2xl font-bold text-navy">{provider.name}</p>
          <p className="font-poppins text-lg font-bold text-navy">{provider.title}</p>
        </div>
        <span className="block h-px w-full bg-navy/15" />
        <ul className="flex flex-col gap-2">
          {PROVIDER_SPECIALTIES.map((s) => (
            <li key={s} className="flex items-start gap-3 font-poppins text-base text-navy">
              <CheckRing />
              {s}
            </li>
          ))}
        </ul>
        <span className="mt-auto block h-px w-full bg-navy/15" />
        <div className="flex items-center gap-3">
          <Star />
          <span className="font-poppins text-lg text-navy">20+ Years Experience</span>
        </div>
      </div>
    </div>
  )
}

function ProvidersGrid() {
  return (
    <Container className="py-12">
      <Reveal className="flex flex-col items-center gap-8">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROVIDERS.map((p) => (
            <ProviderCard key={p.name} provider={p} />
          ))}
        </div>
        <a
          href="#"
          className="rounded-full bg-navy px-6 py-4 font-poppins text-base text-page transition-transform hover:-translate-y-0.5"
        >
          View All providers
        </a>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Why patients trust (navy)
 * ------------------------------------------------------------------------- */

const TRUST_POINTS = [
  { title: 'Personalized Attention', desc: 'We take time to understand your concerns and goals.' },
  { title: 'Experienced Medical Team', desc: 'Trusted providers with extensive clinical experience.' },
  {
    title: 'Comprehensive Care',
    desc: 'Routine care, chronic care, diagnostics, and wellness services in one location.',
  },
  { title: 'Patient Education', desc: 'Helping patients make informed decisions about their health.' },
  { title: 'Convenient Access', desc: 'Same-day appointments and flexible scheduling options.' },
]

function WhyTrust() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-page lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <Reveal className="flex max-w-[540px] flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-poppins text-base font-bold">Why Patients Trust First MD</p>
              <h2 className="font-poppins text-3xl font-bold leading-[1.08] lg:text-[44px]">
                More Than Healthcare. A Long-Term Partnership.
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {TRUST_POINTS.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <CheckRing className="mt-0.5 size-6" />
                  <div>
                    <p className="font-poppins text-lg font-bold">{p.title}</p>
                    <p className="font-poppins text-sm text-page/70">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Arch images (figma-shaped, transparent corners) */}
          <Reveal delay={120} className="hidden shrink-0 items-center justify-center gap-4 lg:flex">
            <div className="h-[460px] w-[210px] overflow-hidden rounded-[110px] shadow-2xl">
              <img src="/assets/trust-group.png" alt="First MD physician" className="h-full w-full scale-[1.8] object-cover object-[24%_20%]" />
            </div>
            <img src="/assets/trust-nurse.png" alt="First MD nurse" className="h-[460px] w-auto -scale-y-100 drop-shadow-2xl" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * CTA banner
 * ------------------------------------------------------------------------- */

function CtaBanner() {
  return (
    <Container className="py-20">
      <Reveal>
        <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-navy px-8 py-10 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:px-14 lg:py-12">
          {/* Concentric rings */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '8%', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[520px] max-w-none select-none lg:block"
            />
          </div>
          {/* Doctor */}
          <img
            aria-hidden
            alt=""
            src="/assets/cta-doctor.png"
            className="pointer-events-none absolute bottom-0 right-6 hidden h-[110%] w-auto select-none object-contain lg:block"
          />

          <div className="relative z-10 max-w-[690px]">
            <h2 className="font-poppins text-3xl font-bold">Ready to Meet Your Provider?</h2>
            <p className="mt-2 max-w-[620px] font-poppins text-lg text-white/60">
              Whether you're looking for a primary care physician, preventive care, or help managing a
              chronic condition, our team is ready to help.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <PillButton variant="accent" href={BOOK}>
                Book Appointment
              </PillButton>
              <a href={PHONE_HREF} className="font-poppins text-lg font-bold text-white hover:underline">
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function ProvidersPage() {
  return (
    <div className="relative min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <TeamIntro />
        <ProvidersGrid />
        <WhyTrust />
        <CtaBanner />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
