/**
 * First MD — Contact Us page (Figma node 242:5357).
 * Shared chrome (Navbar, FAQ, Footer) + primitives come from ./shared.
 */

import { useState, type FormEvent, type ReactNode } from 'react'
import {
  ARROW,
  Container,
  FAQ,
  Footer,
  MAPS_HREF,
  Navbar,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillButton,
  Reveal,
  SectionHeading,
  useParallax,
} from './shared'

const FORM = '#appointment-form'

/* ----------------------------------------------------------------------------
 * Inline icons
 * ------------------------------------------------------------------------- */

const ICON = 'size-7'
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
const IconPin = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
const IconPhone = (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

function Badge({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e3eefb] text-blue sm:size-14">{icon}</span>
      <p className="font-poppins text-sm font-bold leading-tight text-ink sm:whitespace-nowrap sm:text-base">{children}</p>
    </div>
  )
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

const HERO_BADGES = [
  {
    icon: IconCalendar,
    label: (
      <>
        Same-Day
        <br />
        Appointments Available
      </>
    ),
  },
  {
    icon: IconShield,
    label: (
      <>
        Most Major Insurance
        <br />
        Accepted
      </>
    ),
  },
  {
    icon: IconPin,
    label: (
      <>
        Convenient Roanoke
        <br />
        Location
      </>
    ),
  },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section className="relative flex flex-col overflow-hidden bg-page lg:min-h-svh">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/contact-hero.webp" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/contact-hero.webp"
          alt=""
          ref={heroRef}
          className="absolute inset-0 h-full w-full object-cover object-[center_28%] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-0% via-page/82 via-42% to-transparent to-66%" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-page" />
      </div>

      <Container className="relative z-10 flex flex-col gap-8 py-10 lg:flex-1 lg:gap-0 lg:pt-36 lg:pb-8">
        <div className="hero-rise flex max-w-[700px] flex-col gap-3" style={{ animationDelay: '60ms' }}>
          <p className="font-poppins text-lg font-bold text-blue">Contact &amp; Book Online</p>
          <h1 className="font-poppins text-[32px] font-bold leading-[1.04] text-navy sm:text-[40px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]">
            Getting quality healthcare should be simple.
          </h1>
          <p className="max-w-[620px] font-poppins text-base text-navy lg:text-lg">
            Whether you're scheduling your first visit, requesting an appointment, or contacting our
            team with questions, we're here to help.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <PillButton variant="accent" href={PHONE_HREF}>
              Call now
            </PillButton>
            <PillButton variant="outline" href={MAPS_HREF} newTab>
              Get Directions
            </PillButton>
          </div>
        </div>

        <div
          className="hero-rise mt-auto grid grid-cols-2 gap-x-3 gap-y-5 rounded-[28px] bg-page/70 px-5 py-5 backdrop-blur-md sm:gap-x-6 sm:gap-y-6 sm:px-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0"
          style={{ animationDelay: '380ms' }}
        >
          {HERO_BADGES.map((b, i) => (
            <div key={i} className="flex items-center gap-3 lg:gap-4">
              <Badge icon={b.icon}>{b.label}</Badge>
              {i < HERO_BADGES.length - 1 && <span className="hidden h-12 w-px shrink-0 bg-navy/15 lg:block" />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Quick contact cards (navy band)
 * ------------------------------------------------------------------------- */

function QuickCards() {
  return (
    <section className="bg-navy py-10 lg:py-16">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-3">
          {/* Call */}
          <div className="flex flex-col gap-4 rounded-3xl border border-blue/20 bg-white p-8">
            <div>
              <p className="font-poppins text-2xl font-bold text-black">Call Our Office</p>
              <p className="font-poppins text-lg text-black">Speak directly with our team.</p>
            </div>
            <a href={PHONE_HREF} className="font-poppins text-2xl font-bold text-black hover:text-accent lg:text-3xl">
              {PHONE_DISPLAY}
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-page bg-blue px-6 py-2.5 font-poppins font-bold text-page transition-transform hover:-translate-y-0.5"
            >
              {IconPhone} Call Now
            </a>
          </div>

          {/* Request appointment */}
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-blue/20 bg-white p-8">
            <div>
              <p className="font-poppins text-2xl font-bold text-black">Request Appointment</p>
              <p className="font-poppins text-lg text-black">Schedule a visit at your convenience.</p>
            </div>
            <a
              href={FORM}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-page bg-blue px-6 py-2.5 font-poppins font-bold text-page transition-transform hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Directions */}
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-blue/20 bg-white p-8">
            <div>
              <p className="font-poppins text-2xl font-bold text-black">Get Directions</p>
              <p className="font-poppins text-lg text-black">Find our clinic easily with Google Maps.</p>
            </div>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-page bg-blue px-6 py-2.5 font-poppins font-bold text-page transition-transform hover:-translate-y-0.5"
            >
              Open Maps
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Appointment form
 * ------------------------------------------------------------------------- */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-poppins text-sm text-black">{label}</span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full rounded-md border border-[rgba(66,80,102,0.4)] bg-white px-4 py-3 font-poppins text-base text-black shadow-sm outline-none transition-colors focus:border-blue'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

function AppointmentForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = await res.json().catch(() => null)
      if (res.ok && body?.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(body?.error ?? 'Something went wrong. Please try again or call our office.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Could not reach the server. Please try again or call our office.')
    }
  }

  return (
    <Container className="py-10 lg:py-16">
      <Reveal className="scroll-mt-28 flex flex-col gap-10 rounded-3xl bg-white p-8 shadow-sm lg:p-16" id="appointment-form">
        <div>
          <h2 className="font-poppins text-2xl font-bold text-black sm:text-3xl lg:text-4xl">Request Appointment</h2>
          <p className="font-poppins text-lg text-black">Schedule a visit at your convenience.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Honeypot: hidden from humans; bots that fill it are silently dropped server-side */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full Name">
              <input className={inputCls} type="text" name="fullName" required placeholder="John Doe" />
            </Field>
            <Field label="Email Address">
              <input className={inputCls} type="email" name="email" required placeholder="john@test.com" />
            </Field>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Phone Number">
              <input className={inputCls} type="tel" name="phone" required placeholder="(682) 000-0000" />
            </Field>
            <Field label="Date of Birth">
              <input className={inputCls} type="date" name="dob" />
            </Field>
            <Field label="Preferred Appointment Date">
              <input className={inputCls} type="date" name="preferredDate" />
            </Field>
            <Field label="Preferred Appointment Time">
              <input className={inputCls} type="time" name="preferredTime" />
            </Field>
          </div>

          <Field label="Reason for Visit">
            <textarea
              className={`${inputCls} min-h-[150px] resize-y`}
              name="reason"
              required
              placeholder="Tell us briefly what you need help with…"
            />
          </Field>

          <Field label="Insurance Provider">
            <input className={`${inputCls} max-w-[612px]`} type="text" name="insurance" placeholder="e.g. Aetna, Cigna, BlueCross…" />
          </Field>

          {status === 'success' && (
            <p className="rounded-md border border-green-600/30 bg-green-50 px-4 py-3 font-poppins text-base font-semibold text-green-800">
              Thank you! Your appointment request has been sent. Our team will contact you shortly to confirm.
            </p>
          )}
          {status === 'error' && (
            <p className="rounded-md border border-accent/30 bg-accent-soft px-4 py-3 font-poppins text-base font-semibold text-accent">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border-4 border-white/10 bg-accent px-7 py-3.5 font-poppins text-lg font-bold text-white shadow-[0px_12px_10px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#c4006a] hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === 'sending' ? 'Sending…' : 'Submit Appointment Request'}
          </button>
        </form>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Clinic visit (map + hours + urgent care)
 * ------------------------------------------------------------------------- */

const HOURS: [string, string][] = [
  ['Mon–Fri', '8:00 AM – 6:00 PM'],
  ['Saturday', '9:00 AM – 1:00 PM'],
  ['Sunday', 'Closed'],
]

function ClinicVisit() {
  return (
    <Container className="py-10 lg:py-16">
      <Reveal className="flex flex-col gap-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[280px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[358px]"
            aria-label="Open directions in Google Maps"
          >
            <img loading="lazy"
              src="/assets/contact-map.webp"
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
              Getting quality healthcare should be easy. We're conveniently located and here to provide the
              care you need, when you need it.
            </p>
            <a href={PHONE_HREF} className="font-poppins text-xl font-bold text-navy hover:text-accent">
              Phone: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-navy bg-white p-7 shadow-sm transition-shadow hover:shadow-lg lg:p-10">
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

          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-accent bg-accent-soft p-7 shadow-sm transition-shadow hover:shadow-lg lg:p-10">
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

        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * What happens next
 * ------------------------------------------------------------------------- */

const STEPS = [
  'Our team reviews your request.',
  'We contact you to confirm availability.',
  "You'll receive appointment details.",
  'Visit our clinic and meet your provider.',
]

function WhatHappensNext() {
  return (
    <Container className="py-10 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[480px_1fr] lg:gap-[48px]">
        <Reveal className="aspect-[603/694] w-full max-w-[480px] overflow-hidden rounded-3xl bg-[#d9d9d9] shadow-xl">
          <img loading="lazy" src="/assets/happens-next.webp" alt="The First MD team" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal delay={120} className="flex max-w-[600px] flex-col gap-7">
          <div className="flex flex-col gap-2">
            <p className="font-poppins text-lg font-bold text-blue">What Happens Next?</p>
            <h2 className="font-poppins text-[26px] font-bold leading-[1.1] text-navy sm:text-[32px] lg:text-[44px]">
              After You Submit Your Appointment Request
            </h2>
          </div>
          <ul className="flex flex-col">
            {STEPS.map((step, i) => (
              <li key={step} className={`relative flex items-center gap-5 ${i > 0 ? '-mt-3' : ''}`} style={{ zIndex: i + 1 }}>
                <span className="grid size-20 shrink-0 place-items-center rounded-full border-[6px] border-navy bg-page font-poppins text-3xl font-bold text-navy lg:size-[88px] lg:text-[34px]">
                  {i + 1}
                </span>
                <span className="font-poppins text-base font-bold text-ink lg:text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Schedule CTA banner
 * ------------------------------------------------------------------------- */

function ScheduleCta() {
  return (
    <Container className="py-10 lg:py-16">
      <Reveal>
        <div className="relative rounded-2xl bg-navy px-6 py-8 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:px-14 lg:py-9">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '8%', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[440px] max-w-none select-none lg:block"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
            style={{ clipPath: 'inset(-70px 0px 0px 0px round 16px)' }}
          >
            <img loading="lazy" src="/assets/schedule-doctor.webp" alt="" className="absolute bottom-0 right-[8%] h-[128%] w-auto object-contain" />
          </div>

          <div className="relative z-10 max-w-[620px]">
            <h2 className="font-poppins text-2xl font-bold lg:text-3xl">Ready to Schedule Your Visit?</h2>
            <p className="mt-2 max-w-[620px] font-poppins text-base text-white/60 lg:text-lg">
              Our team is here to help you receive the care you need with convenient scheduling and
              personalized support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <PillButton variant="accent" href={FORM}>
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

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <QuickCards />
        <AppointmentForm />
        <ClinicVisit />
        <WhatHappensNext />
        <FAQ />
        <ScheduleCta />
      </main>
      <Footer />
    </div>
  )
}
