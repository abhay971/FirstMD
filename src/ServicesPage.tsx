/**
 * First MD — Services page (/services): Integrated Family Medicine & Urgent Care.
 *
 * Built to match the Figma reference "Service Page Family Medicine - First MD"
 * (node 335:497): hero → marquee → What Is Family Medicine → Wellness &
 * Preventive Care (6 cards) → Conditions We Treat (navy, acute) → Providers →
 * Insurance Made Simple → FAQ. Shared chrome comes from ./shared.
 */

import {
  BOOK,
  CheckCircle,
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
  SECTION_TITLE,
  SectionHeading,
  useParallax,
} from './shared'

/* ----------------------------------------------------------------------------
 * Hero — full-bleed photo, copy left, trust chips along the bottom
 * ------------------------------------------------------------------------- */

const HERO_CHIPS: { icon: string; label: [string, string] }[] = [
  { icon: '/assets/chip-insurance.svg', label: ['Most Major', 'Insurance Accepted'] },
  { icon: '/assets/chip-sameday.svg', label: ['Same-Day', 'Appointments'] },
  { icon: '/assets/chip-providers.svg', label: ['Experienced', 'Providers'] },
  { icon: '/assets/chip-diagnostics.svg', label: ['On-Site', 'Diagnostics'] },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/services-hero.png" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/services-hero.png"
          alt=""
          ref={heroRef}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-25% to-transparent to-65%" />
      </div>

      <Container className="relative flex flex-col gap-10 py-10 lg:min-h-svh lg:justify-center lg:gap-14 lg:pt-40 lg:pb-16">
        <div className="flex max-w-[676px] flex-col gap-3">
          <p className="hero-rise font-poppins text-xl font-bold text-navy lg:text-2xl" style={{ animationDelay: '20ms' }}>
            Services
          </p>
          <h1
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            Integrated Family Medicine &amp; Urgent Care
          </h1>
          <p className="hero-rise max-w-[640px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            Personalized healthcare for children, adults, and seniors—all under one roof.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '280ms' }}>
            <PillButton variant="accent" href={BOOK}>
              Book Appointment
            </PillButton>
            <PillButton variant="outline" href={PHONE_HREF}>
              Call Clinic
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
 * What Is Family Medicine? — pill collage left, intro right
 * ------------------------------------------------------------------------- */

function WhatIs() {
  return (
    <section id="family-medicine" className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <Reveal className="flex justify-center lg:justify-start">
            <img
              src="/assets/fm-intro-pills.png"
              alt="A First MD provider consulting a patient, and a family protected by caring hands"
              className="h-auto w-full max-w-[616px]"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-8">
            <SectionHeading eyebrow="What Is Family Medicine?" title="Your Partner in Lifelong Health" size="md" className="max-w-[504px]" />
            <p className="max-w-[583px] font-poppins text-xl text-ink">
              Family medicine focuses on preventing illness, managing chronic conditions, and helping you maintain your
              health through every stage of life. Whether you need a routine physical, treatment for an illness, or
              ongoing management of a chronic condition, our team is here to help.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Wellness & Preventive Care — 2-col grid of icon cards
 * ------------------------------------------------------------------------- */

const SERVICES = [
  {
    icon: '/assets/fm-icon-physicals.svg',
    title: 'Annual, School & Sports Physicals',
    desc: 'Exams for school, sports, and wellness.',
  },
  {
    icon: '/assets/fm-icon-preventive.svg',
    title: 'Wellness & Preventive Care',
    desc: 'Proactive care to support lifelong health.',
  },
  {
    icon: '/assets/fm-icon-functional.svg',
    title: 'Functional Medicine',
    desc: 'Root-cause care for overall wellness.',
  },
  {
    icon: '/assets/fm-icon-womens.svg',
    title: 'Pap Smears, Prostate Exams & STD Testing',
    desc: 'Essential screenings for preventive care.',
  },
  {
    icon: '/assets/fm-icon-lab.svg',
    title: 'On-Site Lab, X-Ray & EKG',
    desc: 'Fast diagnostics in one location.',
  },
  {
    icon: '/assets/svc-icon-hormone.svg',
    title: 'Chronic Illness Management',
    desc: 'Ongoing care for chronic conditions.',
  },
]

function WellnessCare() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-3.svg" className="right-[-60px] top-[2%] w-[240px]" />
      <Container className="relative z-10 py-12 lg:py-20">
        <Reveal className="flex flex-col gap-9">
          <h2 className={`${SECTION_TITLE} text-navy`}>Wellness &amp; Preventive Care</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {SERVICES.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 90}>
                <div className="flex h-full items-center gap-5 rounded-3xl border border-navy bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] lg:p-7">
                  <img src={card.icon} alt="" className="size-14 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-poppins text-xl font-bold leading-[1.25] text-navy lg:text-2xl">{card.title}</h3>
                    <p className="font-poppins text-base text-ink lg:text-lg">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Conditions We Treat — navy band, acute conditions across two columns
 * ------------------------------------------------------------------------- */

const ACUTE_COL_1 = [
  'Colds, flu, fevers & respiratory infections',
  'Headaches, migraines & seasonal allergies',
  'Sprains, strains, minor fractures & sports injuries',
]

const ACUTE_COL_2 = [
  'Cuts, burns, lacerations & stitches',
  'UTIs, ear infections, sinusitis & strep throat',
  'Skin conditions, rashes & minor procedures',
]

function Conditions() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Hand-with-cross motif peeking in from the right edge */}
      <img
        aria-hidden
        alt=""
        src="/assets/fm-conditions-graphic.svg"
        className="pointer-events-none absolute right-[-20px] top-1/2 hidden w-[440px] -translate-y-1/2 select-none lg:block xl:w-[520px]"
      />
      <Container className="relative z-10 py-14 lg:py-24">
        <Reveal className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-3">
            <p className="font-poppins text-lg font-bold text-page">Conditions We Treat</p>
            <h2 className={`${SECTION_TITLE} max-w-[794px] text-page`}>Care for Everyday Health Concerns</h2>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-poppins text-2xl font-bold text-white lg:text-[32px]">Acute Conditions</h3>
            <div className="flex flex-col gap-x-16 gap-y-1.5 sm:flex-row">
              <ul className="flex list-disc flex-col gap-1.5 pl-6 font-poppins text-xl text-page">
                {ACUTE_COL_1.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="flex list-disc flex-col gap-1.5 pl-6 font-poppins text-xl text-page">
                {ACUTE_COL_2.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Start with us — Insurance Made Simple (pill collage right)
 * ------------------------------------------------------------------------- */

const INSURANCE_POINTS = ['Coverage Verification', 'Transparent Billing', 'Dedicated Patient Support']

function StartWithUs() {
  return (
    <section id="insurance" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-1.svg" className="left-[-80px] bottom-[6%] w-[280px]" />
      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading eyebrow="Start with us" title="Insurance Made Simple" size="md" className="max-w-[550px]" />
            <p className="max-w-[505px] font-poppins text-xl text-ink">
              We accept most major insurance plans and can help verify your coverage before your visit.
            </p>
            <ul className="flex flex-col gap-4">
              {INSURANCE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="font-poppins text-xl font-bold text-navy lg:text-2xl">{point}</span>
                </li>
              ))}
            </ul>
            <PillButton variant="accent" href="/#insurance" className="self-start">
              Verify Insurance
            </PillButton>
          </Reveal>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <img
              src="/assets/fm-insurance-pills.png"
              alt="First MD team members helping patients with insurance"
              className="h-auto w-full max-w-[616px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

// FAQ — brochure Q&As for Family Medicine & Urgent Care
const SERVICE_FAQS = [
  {
    q: 'Do I need an appointment?',
    a: `No appointment is needed for Urgent Care. Simply walk in during clinic hours or call ${PHONE_DISPLAY} to reserve a same-day spot. Family Care appointments may be required.`,
  },
  {
    q: 'Do you treat both adults and children?',
    a: 'Yes. We care for the whole family — from toddlers to grandparents.',
  },
  {
    q: 'Can First MD be my regular primary care provider?',
    a: "Absolutely. Many of our patients come for urgent visits and stay for ongoing primary care. We'd love to be your medical home.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhatIs />
        <WellnessCare />
        <Conditions />
        <StartWithUs />
        <FAQ items={SERVICE_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
