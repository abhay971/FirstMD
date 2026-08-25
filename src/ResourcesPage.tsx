/**
 * First MD — Patient Resources page (/resources).
 *
 * Layout follows the Figma reference "Patient resources page - First MD"
 * (node 241:4836): hero with trust chips, marquee, "What to Expect on Your
 * First Visit", navy Forms + Telehealth band, health-articles scroller,
 * "Ready to Get Started?" banner, FAQ, footer.
 * Shared chrome (Navbar, Marquee, FAQ, Footer) comes from ./shared.
 */

import {
  ARROW,
  BOOK,
  Container,
  CrossDecor,
  FAQ,
  Footer,
  HeroChips,
  MarqueeStrip,
  Navbar,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillButton,
  Reveal,
  SectionHeading,
  useParallax,
} from './shared'
import { ArticleRail } from './ArticlePage'

/* ----------------------------------------------------------------------------
 * Hero — full-bleed photo, copy left, trust chips along the bottom
 * ------------------------------------------------------------------------- */

const HERO_CHIPS: { icon: string; label: [string, string] }[] = [
  { icon: '/assets/chip-newpatient.svg', label: ['New Patient', 'Friendly'] },
  { icon: '/assets/chip-sameday.svg', label: ['Same-Day', 'Appointments'] },
  { icon: '/assets/chip-major-insurance.svg', label: ['Most Major', 'Insurance Accepted'] },
  { icon: '/assets/chip-support.svg', label: ['Dedicated', 'Patient Support'] },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/resources-hero.webp" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/resources-hero.webp"
          alt=""
          ref={heroRef}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        {/* Figma stacks two white washes: a wide veil over most of the photo + a stronger one on the left half */}
        <div className="absolute inset-y-0 left-0 w-[92%] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[57%] bg-gradient-to-r from-white to-transparent" />
      </div>

      <Container className="relative flex flex-col gap-10 py-10 lg:min-h-svh lg:justify-center lg:gap-14 lg:pt-40 lg:pb-16">
        <div className="flex max-w-[703px] flex-col gap-3">
          <p className="hero-rise font-poppins text-xl font-bold text-navy lg:text-2xl" style={{ animationDelay: '20ms' }}>
            Patient Resources
          </p>
          <h1
            className="hero-rise max-w-[8.8em] font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[76px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            Everything You Need Before Your Visit
          </h1>
          <p className="hero-rise max-w-[672px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            Access forms, appointment information, telehealth instructions, and helpful healthcare resources all in
            one place.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '280ms' }}>
            <PillButton variant="accent" href={BOOK}>
              Book Appointment
            </PillButton>
            <PillButton variant="outline" href="/#contact">
              Contact Clinic
            </PillButton>
          </div>
        </div>

        {/* Trust chips */}
        <HeroChips chips={HERO_CHIPS} />
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * What to Expect on Your First Visit — two checklists flanking a provider
 * photo over soft concentric rings
 * ------------------------------------------------------------------------- */

const BEFORE_ITEMS = [
  'Complete patient forms',
  'Bring your photo ID',
  'Bring your insurance card',
  'Bring a list of medications',
  'Arrive 15 minutes early',
]

const DURING_ITEMS = [
  'Review your medical history',
  'Discuss symptoms and concerns',
  'Answer your questions',
  'Create a personalized care plan',
]

/** Soft blue concentric rings centered behind the provider photo. */
function ExpectRings() {
  const rings = [
    { size: 900, color: '#dae9f6' },
    { size: 706, color: '#c4daee' },
    { size: 534, color: '#b0cde7' },
    { size: 378, color: '#9dc2e1' },
  ]
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {rings.map((r) => (
        <span
          key={r.size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: r.size, height: r.size, background: r.color }}
        />
      ))}
    </div>
  )
}

function ChecklistPill({ children }: { children: string }) {
  return (
    <li className="inline-flex rounded-full bg-white px-5 py-2 font-poppins text-base font-bold text-navy shadow-[0px_8px_18px_rgba(0,48,94,0.10)]">
      {children}
    </li>
  )
}

function WhatToExpect() {
  const cardBase =
    'relative flex flex-col gap-5 rounded-[32px] bg-white p-8 shadow-[0px_12px_30px_rgba(0,48,94,0.08)]'

  return (
    <section className="relative overflow-hidden bg-page pt-12 lg:pt-20">
      <Container className="relative z-10">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.08] text-navy sm:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-[60px]">
            What to Expect on Your First Visit
          </h2>
          <p className="font-poppins text-lg text-blue lg:text-xl">
            We want your first appointment to be comfortable, efficient, and stress-free.
          </p>
        </Reveal>
      </Container>

      {/* Cards flank the bottom-anchored provider photo; rings sit behind everything */}
      <div className="relative mt-12 lg:mt-0 lg:h-[580px]">
        <ExpectRings />

        <img loading="lazy"
          src="/assets/res-visit-shield.webp"
          alt=""
          className="relative mx-auto block h-[300px] w-auto drop-shadow-[0_24px_40px_rgba(0,48,94,0.25)] lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:h-[420px] lg:-translate-x-1/2 lg:-translate-y-1/2"
        />

        <div className="relative flex flex-col gap-8 px-6 pb-16 lg:absolute lg:inset-x-0 lg:top-[80px] lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:pb-0">
          {/* Before Your Appointment — bleeds off the left edge on desktop */}
          <Reveal className="lg:w-[609px] lg:max-w-[44%]">
            <div className={`${cardBase} lg:min-h-[430px] lg:rounded-l-none lg:pl-[max(2.5rem,calc((100vw-1272px)/2))]`}>
              <h3 className="max-w-[378px] font-poppins text-2xl font-bold leading-[1.4] text-navy lg:text-[28px]">
                Before Your Appointment
              </h3>
              <span className="block h-px w-full max-w-[378px] bg-navy/20" />
              <ul className="flex max-w-[378px] flex-col items-start gap-3">
                {BEFORE_ITEMS.map((item) => (
                  <ChecklistPill key={item}>{item}</ChecklistPill>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* During Your Visit — bleeds off the right edge on desktop */}
          <Reveal delay={120} className="lg:w-[609px] lg:max-w-[44%]">
            <div
              className={`${cardBase} items-start lg:min-h-[430px] lg:items-end lg:rounded-r-none lg:pr-[max(2.5rem,calc((100vw-1272px)/2))] lg:text-right`}
            >
              <div className="flex flex-col gap-1 lg:items-end">
                <h3 className="font-poppins text-2xl font-bold text-navy lg:text-[28px]">During Your Visit</h3>
                <p className="font-poppins text-lg font-semibold text-navy lg:text-xl">Your provider will:</p>
              </div>
              <span className="block h-px w-full max-w-[389px] bg-navy/20" />
              <ul className="flex max-w-[389px] flex-col items-start gap-3 lg:items-end">
                {DURING_ITEMS.map((item) => (
                  <ChecklistPill key={item}>{item}</ChecklistPill>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Telehealth Made Easy — full-width navy band: 2×2 steps + tips bar
 * ------------------------------------------------------------------------- */

const TELEHEALTH_STEPS = [
  'Schedule your telehealth appointment.',
  'Check your email or text for your appointment link.',
  'Join from your phone, tablet, or computer.',
  'Talk with your provider and receive your care plan.',
]

const TELEHEALTH_TIPS = [
  'Strong internet connection',
  'Have medications available',
  'Camera and microphone enabled',
  'Quiet environment',
]

function Telehealth() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <Container className="relative z-10 py-14 lg:py-16">
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h2 className="font-poppins text-3xl font-bold text-page lg:text-[32px]">Telehealth Made Easy</h2>
            <p className="font-poppins text-base text-page/60 lg:text-lg">
              Connect with your provider from the comfort of your home.
            </p>
          </div>

          {/* Numbered steps — 2×2 grid on desktop */}
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
            {TELEHEALTH_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-full border-[5px] border-navy bg-page font-poppins text-[26px] font-bold text-navy lg:size-[72px] lg:border-[6px] lg:text-[30px]">
                  {i + 1}
                </span>
                <p className="font-poppins text-base text-white lg:text-lg">{step}</p>
              </li>
            ))}
          </ol>

          {/* Tips bar */}
          <div className="flex flex-col gap-3 rounded-3xl bg-blue px-8 py-6 lg:px-10">
            <p className="font-poppins text-base font-bold text-white lg:text-lg">Tips for a Successful Visit</p>
            <span className="block h-px w-full bg-white/40" />
            <ul className="grid list-disc grid-cols-2 gap-x-8 gap-y-1.5 pl-5 font-poppins text-sm text-white lg:grid-cols-4 lg:text-base">
              {TELEHEALTH_TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Health articles — horizontally scrolling cards
 * ------------------------------------------------------------------------- */

function HealthArticles() {
  return <ArticleRail />
}

/* ----------------------------------------------------------------------------
 * Insurance — checklist + photo (mirrors the home Insurance section)
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
      <Container className="relative z-10 py-14 lg:py-24">
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
            <img loading="lazy" src="/assets/insurance.webp" alt="Insurance support at First MD" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * "Ready to Get Started?" banner
 * ------------------------------------------------------------------------- */

function ReadyBanner() {
  return (
    <Container className="pb-12 lg:pb-16">
      <Reveal>
        <div className="relative rounded-3xl bg-navy px-6 py-9 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:min-h-[240px] lg:px-14 lg:py-10">
          {/* Concentric rings — clipped to the rounded banner, centered behind the doctor */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '-133px', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[790px] max-w-none select-none md:block"
            />
          </div>

          {/* Copy */}
          <div className="relative z-10 max-w-[720px]">
            <h2 className="font-poppins text-2xl font-bold lg:text-[28px]">Ready to Get Started?</h2>
            <p className="mt-2 max-w-[720px] font-poppins text-base text-white/60 lg:text-lg">
              Whether you're a new patient or returning for continued care, we're here to help make your healthcare
              experience simple and stress-free.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <PillButton variant="accent" href={BOOK} className="!text-base lg:!text-lg">
                Book Appointment
              </PillButton>
              <a href={PHONE_HREF} className="font-poppins text-lg font-bold text-white hover:underline lg:text-xl">
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Doctor — clipped to the banner bottom, head popping above the top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
            style={{ clipPath: 'inset(-300px 0px 0px 0px round 24px)' }}
          >
            <img loading="lazy"
              src="/assets/res-cta-doctor.webp"
              alt=""
              className="absolute bottom-0 right-12 h-[330px] w-auto"
            />
          </div>
        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

// FAQ — patient-resources flavored Q&As
const RESOURCE_FAQS = [
  { q: 'Do you accept walk-ins?', a: 'Yes, walk-ins are welcome based on availability.' },
  {
    q: 'What should I bring to my first visit?',
    a: 'Your photo ID, insurance card, a list of current medications, and your completed new-patient forms. Arriving 15 minutes early helps us get you checked in smoothly.',
  },
  {
    q: 'How do telehealth appointments work?',
    a: 'Schedule your visit, then check your email or text for the appointment link. You can join from your phone, tablet, or computer.',
  },
  {
    q: 'Do you offer same-day appointments?',
    a: 'Same-day appointments are often available — call the clinic to check current openings.',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhatToExpect />
        <Telehealth />
        <HealthArticles />
        <Insurance />
        <ReadyBanner />
        <FAQ items={RESOURCE_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
