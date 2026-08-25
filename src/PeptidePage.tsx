/**
 * First MD — Peptide Therapy service page (/services/peptide).
 *
 * Built to match the Figma reference (node 357:1014): hero → marquee → Potential
 * Benefits (8 icon cards) → Why Peptides Are Different (navy band) → Providers →
 * Insurance & Treatment Information → FAQ. Content reconciled with the Peptide
 * Therapy brochure. Shared chrome + primitives come from ./shared.
 */

import {
  BOOK,
  CapsuleFrame,
  CheckCircle,
  Container,
  CrossDecor,
  FAQ,
  Footer,
  HeroChips,
  MarqueeStrip,
  Navbar,
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
  { icon: '/assets/chip-providers.svg', label: ['Provider-Guided', 'Protocols'] },
  { icon: '/assets/chip-diagnostics.svg', label: ['Custom Peptide', 'Stacks'] },
  { icon: '/assets/chip-insurance.svg', label: ['Experienced', 'Medical Team'] },
  { icon: '/assets/chip-sameday.svg', label: ['Convenient', 'At-Home Dosing'] },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/svc-peptide-hero.webp" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          ref={heroRef}
          src="/assets/svc-peptide-hero.webp"
          alt=""
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
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-[40px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            Peptide Therapy
          </h1>
          <p className="hero-rise max-w-[640px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            <span className="font-bold">Smart molecules. Targeted results.</span> Peptides are short chains of amino
            acids that signal your body's cells — directing healing, growth, recovery, and renewal. As we age, our
            natural levels decline. Peptide therapy gently replenishes them.
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
 * Potential Benefits — 2-col grid of icon cards
 * ------------------------------------------------------------------------- */

const BENEFITS = [
  { icon: '/assets/svc-peptide-sleep.svg', title: 'Better sleep & deeper recovery' },
  { icon: '/assets/svc-peptide-cognition.svg', title: 'Sharper cognition & mental focus' },
  { icon: '/assets/svc-peptide-immune.svg', title: 'Stronger immune resilience' },
  { icon: '/assets/svc-peptide-muscle.svg', title: 'Lean muscle growth & body composition' },
  { icon: '/assets/svc-peptide-injury.svg', title: 'Faster injury & joint recovery' },
  { icon: '/assets/svc-peptide-metabolic.svg', title: 'Improved metabolic & gut health' },
  { icon: '/assets/svc-peptide-aging.svg', title: 'Healthy aging & longevity support' },
  { icon: '/assets/svc-peptide-hair.svg', title: 'Hair retention & regrowth (with select peptides)' },
]

function Benefits() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-3.svg" className="right-[-60px] top-[2%] w-[240px]" />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <Reveal className="flex flex-col gap-12">
          <h2 className={`${SECTION_TITLE} text-navy`}>Potential Benefits</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {BENEFITS.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 90}>
                <div className="flex h-full items-center gap-6 rounded-3xl border border-navy bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] lg:p-7">
                  <img loading="lazy" src={card.icon} alt="" className="size-14 shrink-0" />
                  <h3 className="font-poppins text-xl font-bold leading-[1.3] text-navy lg:text-2xl">{card.title}</h3>
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
 * Why Peptides Are Different — navy band
 * ------------------------------------------------------------------------- */

function WhyDifferent() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        aria-hidden
        alt=""
        src="/assets/fm-conditions-graphic.svg"
        className="pointer-events-none absolute right-[-20px] top-1/2 hidden w-[440px] -translate-y-1/2 select-none lg:block xl:w-[520px]"
      />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <Reveal className="flex max-w-[820px] flex-col gap-6">
          <h2 className={`${SECTION_TITLE} text-page`}>Why Peptides Are Different</h2>
          <p className="font-poppins text-xl text-page">
            Peptides have extremely high specificity — they target their intended receptors precisely, which is why
            they tend to be well tolerated with very low side effect profiles when properly prescribed.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Insurance & Treatment Information — checklist left, pill collage right
 * ------------------------------------------------------------------------- */

const INFO_POINTS = [
  'Personalized Wellness Plans',
  'Experienced Medical Team',
  'Convenient Appointments',
  'Dedicated Patient Support',
]

function TreatmentInfo() {
  return (
    <section id="insurance" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-1.svg" className="left-[-80px] bottom-[6%] w-[280px]" />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading eyebrow="Feel Better, Faster" title="Insurance & Treatment Information" size="md" className="max-w-[550px]" />
            <p className="max-w-[505px] font-poppins text-xl text-ink">
              Our team can answer questions regarding consultations, treatment options, and available payment
              information for Peptide Therapy.
            </p>
            <ul className="flex flex-col gap-4">
              {INFO_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="font-poppins text-xl font-bold text-navy lg:text-2xl">{point}</span>
                </li>
              ))}
            </ul>
            <PillButton variant="accent" href={BOOK} className="self-start">
              Schedule Consultation
            </PillButton>
          </Reveal>

          {/* Capsule collage — left sharp at top-right (nudged down, outlined), right sharp at bottom-left */}
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-[616px] items-start gap-5 sm:gap-6">
              <CapsuleFrame className="aspect-[585/1300] w-[calc(50%-10px)] translate-y-3 sm:w-[calc(50%-12px)]">
                <img loading="lazy"
                  src="/assets/svc-insurance-stethoscope.webp"
                  alt="A stethoscope and a red heart on a blue background"
                  className="h-full w-full object-cover object-center"
                />
              </CapsuleFrame>
              <CapsuleFrame sharp="bl" outlineClassName="border-transparent" className="aspect-[577/1320] w-[calc(50%-10px)] sm:w-[calc(50%-12px)]">
                <img loading="lazy"
                  src="/assets/svc-insurance-glucose.webp"
                  alt="A provider checking a patient's blood sugar"
                  className="h-full w-full object-cover object-center"
                />
              </CapsuleFrame>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

// FAQ — brochure Q&As for Peptide Therapy
const PEPTIDE_FAQS = [
  {
    q: 'Are peptides safe?',
    a: 'When prescribed and monitored by a qualified provider, yes. Peptides are highly selective and generally well tolerated.',
  },
  {
    q: 'Are they pills or injections?',
    a: 'Most peptides are prescription injectable. Our team will show you exactly how to administer them safely and comfortably at home.',
  },
  {
    q: 'Will I get just one peptide?',
    a: 'Often, peptides are prescribed in carefully chosen "stacks" of two or more — designed around your specific goals.',
  },
  {
    q: 'How do I know if peptides are right for me?',
    a: 'It starts with a consultation. We review your health history, goals, and labs to determine if peptide therapy is appropriate — and which protocol fits.',
  },
]

export default function PeptidePage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Benefits />
        <WhyDifferent />
        <TreatmentInfo />
        <FAQ items={PEPTIDE_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
