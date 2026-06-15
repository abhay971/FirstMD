/**
 * First MD — Hormone Therapy service page (/services/hormone).
 *
 * Built to match the Figma reference "Service Page — Hormone Therapy"
 * (node 336:1019): hero → marquee → What Is Hormone Therapy → What You May
 * Notice (navy band) → How It Works (5 steps) → Providers → FAQ. Content is
 * reconciled with the Hormone Therapy brochure. Shared chrome from ./shared.
 */

import {
  BOOK,
  Container,
  CrossDecor,
  FAQ,
  Footer,
  HeroChips,
  MarqueeStrip,
  Navbar,
  PHONE_HREF,
  PillButton,
  Providers,
  Reveal,
  SECTION_TITLE,
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
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/assets/svc-hormone-hero.png"
          alt=""
          ref={heroRef}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-25% to-transparent to-65%" />
      </div>

      <Container className="relative flex min-h-svh flex-col justify-center gap-14 pt-40 pb-16">
        <div className="flex max-w-[676px] flex-col gap-3">
          <p className="hero-rise font-poppins text-xl font-bold text-navy lg:text-2xl" style={{ animationDelay: '20ms' }}>
            Services
          </p>
          <h1
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            Hormone Therapy
          </h1>
          <p className="hero-rise max-w-[640px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            <span className="font-bold">Feel like yourself again — naturally.</span> Bioidentical hormones — chemically
            identical to the ones your body makes — placed as a tiny pellet just beneath the skin. Steady release. No
            daily pills. No spikes or crashes.
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
 * What Is Hormone Therapy? — pill collage left, intro right
 * ------------------------------------------------------------------------- */

function WhatIs() {
  return (
    <section id="hormone" className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <Reveal className="flex justify-center lg:justify-start">
            <img
              src="/assets/svc-hormone-pills.png"
              alt="A First MD provider consulting a patient, and a family protected by caring hands"
              className="h-auto w-full max-w-[616px]"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <h2 className={`${SECTION_TITLE} text-navy`}>What Is Hormone Therapy?</h2>
            <p className="max-w-[583px] font-poppins text-xl text-ink">
              Hormone therapy helps restore hormones that naturally decline with age. Using bioidentical hormones that
              closely match those produced by your body, treatment can help improve energy, mood, sleep, mental clarity,
              and overall well-being. For ProPellet® Therapy, tiny hormone pellets are placed beneath the skin to provide
              a steady release of hormones over several months — without daily pills, creams, or injections.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * What You May Notice — navy band, benefits in two columns
 * ------------------------------------------------------------------------- */

const NOTICE_COL_1 = ['More energy, strength & stamina', 'Improved libido & sexual wellness', 'Sharper focus & mental clarity']

const NOTICE_COL_2 = [
  'Better sleep & mood balance',
  'Easier weight management & lean muscle',
  'Long-term protection for bones, heart & brain',
]

function WhatYouMayNotice() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Hand-with-cross motif peeking in from the right edge */}
      <img
        aria-hidden
        alt=""
        src="/assets/fm-conditions-graphic.svg"
        className="pointer-events-none absolute right-[-20px] top-1/2 hidden w-[440px] -translate-y-1/2 select-none lg:block xl:w-[520px]"
      />
      <Container className="relative z-10 py-20 lg:py-24">
        <Reveal className="flex flex-col gap-12">
          <h2 className={`${SECTION_TITLE} max-w-[794px] text-page`}>What You May Notice</h2>
          <div className="flex flex-col gap-x-16 gap-y-2 sm:flex-row">
            <ul className="flex list-disc flex-col gap-2 pl-6 font-poppins text-xl text-page">
              {NOTICE_COL_1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 font-poppins text-xl text-page">
              {NOTICE_COL_2.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * How It Works — five numbered step cards
 * ------------------------------------------------------------------------- */

const STEPS = [
  'Consultation & bloodwork',
  'Custom-compounded pellet',
  'Quick in-office insertion (10–15 min)',
  'Post Pellet Lab Work',
  'Steady release for 3–6 months',
]

function HowItWorks() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-3.svg" className="right-[-60px] top-[2%] w-[240px]" />
      <Container className="relative z-10 py-20 lg:py-24">
        <Reveal className="flex flex-col gap-12">
          <h2 className={`${SECTION_TITLE} text-navy`}>How It Works</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {STEPS.map((step, i) => (
              <Reveal key={step} delay={(i % 2) * 90}>
                <div className="flex h-full items-center gap-6 rounded-3xl border border-navy bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] lg:p-7">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent font-poppins text-xl font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-poppins text-xl font-bold leading-[1.25] text-navy lg:text-2xl">{step}</h3>
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
 * Page
 * ------------------------------------------------------------------------- */

// FAQ — brochure Q&As for Hormone Therapy
const HORMONE_FAQS = [
  {
    q: 'How soon will I feel different?',
    a: 'Some patients notice improvements within 24–48 hours. For others, it takes a week or two for hormones to settle into balance.',
  },
  {
    q: 'Does the insertion hurt?',
    a: 'Not really. We use local anesthesia — most patients describe a quick pinch and mild pressure. The whole visit takes about 10–15 minutes.',
  },
  {
    q: 'Do I need to have the pellets removed?',
    a: 'No — pellets dissolve completely on their own. We simply schedule your next insertion every 3–6 months as needed.',
  },
  {
    q: 'Is this just for women?',
    a: 'Not at all. ProPellets are used for both men and women. Men typically benefit from testosterone replacement starting in their 40s and 50s — often younger.',
  },
]

export default function HormonePage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhatIs />
        <WhatYouMayNotice />
        <HowItWorks />
        <Providers />
        <FAQ items={HORMONE_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
