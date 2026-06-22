/**
 * First MD — IV Hydration Therapy service page (/services/iv).
 *
 * Built to match the Figma reference "Service Page IV Hydration Therapy"
 * (node 238:3908): hero → marquee → What Is IV Hydration → Why People Choose IV
 * (6 cards) → Customized For You (navy band) → Providers → Insurance & Treatment
 * Info → FAQ. Content reconciled with the IV Hydrating Therapy brochure.
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
  { icon: '/assets/chip-sameday.svg', label: ['Fast Hydration', 'Support'] },
  { icon: '/assets/chip-insurance.svg', label: ['Essential Vitamins', '& Nutrients'] },
  { icon: '/assets/chip-providers.svg', label: ['Personalized', 'Wellness Solutions'] },
  { icon: '/assets/chip-diagnostics.svg', label: ['Experienced', 'Medical Team'] },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/svc-iv-hero.png" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          ref={heroRef}
          src="/assets/svc-iv-hero.png"
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
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            IV Hydration Therapy in Roanoke, TX
          </h1>
          <p className="hero-rise max-w-[672px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            <span className="font-bold">Hydrate. Recharge. Glow from the inside out.</span> Vitamins, minerals, and
            fluids delivered straight into your bloodstream — bypassing digestion for fast, full absorption. Ideal for
            busy lives, hard workouts, and recovery days.
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
 * What Is IV Hydration Therapy? — pill collage left, intro right
 * ------------------------------------------------------------------------- */

function WhatIs() {
  return (
    <section id="iv" className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <Reveal className="flex justify-center lg:justify-start">
            <img
              src="/assets/svc-iv-pills.png"
              alt="A patient receiving IV hydration therapy with a First MD nurse"
              className="h-auto w-full max-w-[616px]"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="What Is IV Hydration Therapy?"
              title="Wellness & Recovery Delivered Directly"
              size="md"
              className="max-w-[613px]"
            />
            <p className="max-w-[602px] font-poppins text-xl text-ink">
              IV Hydration Therapy is a treatment that delivers fluids, electrolytes, vitamins, and nutrients directly
              into your bloodstream. Because the nutrients bypass the digestive system, your body can absorb them quickly
              and efficiently. Whether you're recovering from illness, dehydration, intense physical activity, or simply
              feeling run down, IV therapy can help restore balance and support your overall well-being.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Why People Choose IV — 2-col grid of icon cards
 * ------------------------------------------------------------------------- */

const BENEFITS = [
  { icon: '/assets/svc-iv-energy.svg', title: 'Boosts energy & beats fatigue' },
  { icon: '/assets/svc-iv-hydration.svg', title: 'Rapid hydration for headaches, hangovers, jet lag' },
  { icon: '/assets/svc-iv-recovery.svg', title: 'Speeds recovery from illness, flu & overtraining' },
  { icon: '/assets/svc-iv-immunity.svg', title: 'Strengthens immunity in cold & flu season' },
  { icon: '/assets/svc-iv-skin.svg', title: 'Brightens skin & supports natural detox' },
  { icon: '/assets/svc-iv-focus.svg', title: 'Improves focus, mood & overall well being' },
]

function WhyChoose() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-3.svg" className="right-[-60px] top-[2%] w-[240px]" />
      <Container className="relative z-10 py-14 lg:py-24">
        <Reveal className="flex flex-col gap-12">
          <h2 className={`${SECTION_TITLE} text-navy`}>Why People Choose IV</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {BENEFITS.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 90}>
                <div className="flex h-full items-center gap-6 rounded-3xl border border-navy bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] lg:p-7">
                  <img src={card.icon} alt="" className="size-14 shrink-0" />
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
 * Customized For You — navy band
 * ------------------------------------------------------------------------- */

function Customized() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        aria-hidden
        alt=""
        src="/assets/fm-conditions-graphic.svg"
        className="pointer-events-none absolute right-[-20px] top-1/2 hidden w-[440px] -translate-y-1/2 select-none lg:block xl:w-[520px]"
      />
      <Container className="relative z-10 py-14 lg:py-24">
        <Reveal className="flex max-w-[820px] flex-col gap-6">
          <h2 className={`${SECTION_TITLE} text-page`}>Customized For You</h2>
          <p className="font-poppins text-xl text-page">
            Every drip is tailored — whether you need an immunity boost, an energy lift, an antioxidant flush, or a
            custom blend designed around your goals.
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
      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading eyebrow="Feel Better, Faster" title="Insurance & Treatment Information" size="md" className="max-w-[550px]" />
            <p className="max-w-[505px] font-poppins text-xl text-ink">
              Our team can answer questions regarding consultations, treatment options, and available payment information
              for IV Hydration Therapy.
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

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <img
              src="/assets/svc-iv-insurance-pills.png"
              alt="First MD medical team supporting IV hydration patients"
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

// FAQ — brochure Q&As for IV Hydration Therapy
const IV_FAQS = [
  {
    q: 'How long does a session take?',
    a: "Most IV sessions take 30–60 minutes. You'll relax in a comfortable chair while the drip runs.",
  },
  {
    q: 'Will I feel better right away?',
    a: 'Yes — most patients feel refreshed and re-energized within a few hours. Some notice improvements before they even leave the clinic.',
  },
  {
    q: 'Is IV therapy safe?',
    a: "Very. It's been used in hospitals for decades. Our medical providers review your health first and customize each treatment to your needs.",
  },
  {
    q: 'Do I need an appointment?',
    a: 'Walk-ins are welcome, and appointments make it easy to plan around your schedule.',
  },
]

export default function IVPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhatIs />
        <WhyChoose />
        <Customized />
        <TreatmentInfo />
        <FAQ items={IV_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
