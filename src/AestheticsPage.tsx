/**
 * First MD — Medical Aesthetics & Wellness service page (/services/aesthetics).
 *
 * Built to match the Figma reference "Medical Aesthetics & Wellness in
 * Roanoke, TX" (node 461:783): hero → marquee → Backed by Medical Expertise →
 * Advanced Technology → Explore Our Treatments → HydraFacial Collection →
 * Why Choose First MD Wellness → FAQ. Shared chrome from ./shared.
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
  PillButton,
  Reveal,
  SECTION_TITLE,
  SoftTexture,
  useParallax,
} from './shared'

/* ----------------------------------------------------------------------------
 * Hero — full-bleed photo, copy left, trust chips along the bottom
 * ------------------------------------------------------------------------- */

const HERO_CHIPS: { icon: string; label: [string, string] }[] = [
  { icon: '/assets/aes-chip-physician.svg', label: ['Physician', 'Supervised'] },
  { icon: '/assets/aes-chip-technology.svg', label: ['Advanced', 'Technology'] },
  { icon: '/assets/aes-chip-plans.svg', label: ['Personalized', 'Treatment Plans'] },
  { icon: '/assets/aes-chip-downtime.svg', label: ['Minimal', 'Downtime'] },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/aes-hero.png" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/aes-hero.png"
          alt=""
          ref={heroRef}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-25% to-transparent to-65%" />
      </div>

      <Container className="relative flex flex-col gap-10 py-10 lg:min-h-svh lg:justify-center lg:gap-14 lg:pt-40 lg:pb-16">
        <div className="flex max-w-[720px] flex-col gap-3">
          <p className="hero-rise font-poppins text-xl font-bold text-navy lg:text-2xl" style={{ animationDelay: '20ms' }}>
            Services
          </p>
          <h1
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            Medical Aesthetics &amp; Wellness in Roanoke, TX
          </h1>
          <p className="hero-rise max-w-[672px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            Physician-supervised aesthetic treatments designed to help you achieve healthier skin, restore confidence,
            and enhance your natural beauty using advanced medical technology.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '280ms' }}>
            <PillButton variant="accent" href={BOOK}>
              Book Consultation
            </PillButton>
            <PillButton variant="outline" href="#treatments">
              View Treatments
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
 * Backed by Medical Expertise — capsule collage left, intro right
 * ------------------------------------------------------------------------- */

function Expertise() {
  return (
    <section id="aesthetics" className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[64px]">
          {/* Capsule collage — staggered stadium photos matching the other pages */}
          <Reveal className="flex items-center justify-center gap-4 sm:gap-5">
            <CapsuleFrame className="h-[440px] w-[200px] -translate-y-4 sm:h-[560px] sm:w-[268px] sm:-translate-y-7">
              <img
                src="/assets/aes-expertise-1.png"
                alt="A First MD aesthetician performing a facial treatment"
                className="h-full w-full object-cover object-[60%_center]"
              />
            </CapsuleFrame>
            <CapsuleFrame sharp="bl" className="hidden translate-y-4 sm:block sm:h-[560px] sm:w-[268px] sm:translate-y-7">
              <img
                src="/assets/aes-expertise-2.png"
                alt="A patient's skin being examined before treatment"
                className="h-full w-full object-cover object-[62%_center]"
              />
            </CapsuleFrame>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-poppins text-lg font-bold text-blue">Wellness Clinic</p>
              <h2 className={`${SECTION_TITLE} max-w-[639px] text-navy`}>Medical Aesthetics Backed by Medical Expertise</h2>
            </div>
            <p className="max-w-[583px] font-poppins text-xl text-ink">
              Unlike traditional spas, every treatment at First MD Wellness Clinic is performed under the supervision of
              an experienced physician. From skin rejuvenation to laser treatments, every plan is tailored to your
              unique goals and skin type.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Advanced Technology — two device cards
 * ------------------------------------------------------------------------- */

const DEVICES = [
  {
    name: 'HydraFacial™',
    desc: 'Deep cleansing, exfoliation, extraction, and hydration for healthier, glowing skin.',
    img: '/assets/aes-hydrafacial.png',
    href: '#hydrafacial',
  },
  {
    name: 'InMode Optimas™',
    desc: 'Featuring Morpheus8 RF Microneedling, IPL Photofacials, and Laser Treatments for visible skin transformation.',
    img: '/assets/aes-inmode.png',
    href: '#treatments',
  },
]

function AdvancedTechnology() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-14 lg:py-24">
        <Reveal className="flex flex-col gap-10 lg:gap-14">
          <h2 className={`${SECTION_TITLE} text-center text-navy`}>Advanced Technology</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {DEVICES.map((device, i) => (
              <Reveal key={device.name} delay={i * 90}>
                <div className="flex h-full flex-col gap-6 rounded-3xl border border-blue/40 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] sm:flex-row sm:items-center lg:p-7">
                  <img
                    src={device.img}
                    alt={device.name}
                    className="mx-auto h-[260px] w-auto shrink-0 object-contain sm:mx-0 sm:h-[280px]"
                  />
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-poppins text-2xl font-bold text-navy lg:text-[28px]">{device.name}</h3>
                      <p className="font-poppins text-base text-ink/80 lg:text-lg">{device.desc}</p>
                    </div>
                    <a
                      href={device.href}
                      className="rounded-lg bg-accent px-6 py-2.5 font-poppins text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c4006a] hover:shadow-lg"
                    >
                      Learn More
                    </a>
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
 * Explore Our Treatments — four category cards with icon rows
 * ------------------------------------------------------------------------- */

const TREATMENT_GROUPS: { title: string; items: { icon: string; label: string }[] }[] = [
  {
    title: 'Skin Rejuvenation',
    items: [
      { icon: '/assets/aes-tx-microneedling.svg', label: 'Microneedling' },
      { icon: '/assets/aes-tx-micro-prp.svg', label: 'Microneedling + PRP' },
      { icon: '/assets/aes-tx-salmon-dna.svg', label: 'Microneedling + Salmon DNA' },
      { icon: '/assets/aes-tx-hyaluronic.svg', label: 'Microneedling + Hyaluronic Acid' },
      { icon: '/assets/aes-tx-dermaplaning.svg', label: 'Dermaplaning' },
      { icon: '/assets/aes-tx-chemical-peels.svg', label: 'Chemical Peels' },
    ],
  },
  {
    title: 'Laser & Energy',
    items: [
      { icon: '/assets/aes-tx-laser-hair.svg', label: 'Laser Hair Removal' },
      { icon: '/assets/aes-tx-ipl.svg', label: 'IPL Photofacial' },
      { icon: '/assets/aes-tx-morpheus-face.svg', label: 'Morpheus8 Face' },
      { icon: '/assets/aes-tx-morpheus-body.svg', label: 'Morpheus8 Body' },
      { icon: '/assets/aes-tx-stretch-mark.svg', label: 'Stretch Mark Treatment' },
    ],
  },
  {
    title: 'Hair Restoration',
    items: [{ icon: '/assets/aes-tx-prp-hair.svg', label: 'PRP Hair Restoration' }],
  },
  {
    title: 'Specialty Treatments',
    items: [
      { icon: '/assets/aes-tx-teen-acne.svg', label: 'Teen Acne Treatment' },
      { icon: '/assets/aes-tx-led.svg', label: 'LED Light Therapy' },
    ],
  },
]

function Treatments() {
  return (
    <section id="treatments" className="relative scroll-mt-28 overflow-hidden">
      <SoftTexture />
      <CrossDecor src="/assets/cross-1.svg" className="left-[-50px] bottom-[8%] w-[240px]" />
      <Container className="relative z-10 py-14 lg:py-24">
        <Reveal className="flex flex-col gap-10 lg:gap-14">
          <h2 className={`${SECTION_TITLE} text-center text-navy`}>Explore Our Treatments</h2>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            {TREATMENT_GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 90}>
                <div className="flex flex-col gap-5 rounded-3xl border border-blue/40 bg-white p-6 lg:p-8">
                  <h3 className="font-poppins text-2xl font-bold text-blue lg:text-[28px]">{group.title}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item.label} className="group flex items-center justify-between gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-page">
                        <span className="flex items-center gap-4">
                          <img src={item.icon} alt="" className="size-8 shrink-0" />
                          <span className="font-poppins text-base text-ink lg:text-lg">{item.label}</span>
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          className="size-5 shrink-0 text-navy transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="m9 6 6 6-6 6" />
                        </svg>
                      </li>
                    ))}
                  </ul>
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
 * HydraFacial Collection — three tier cards
 * ------------------------------------------------------------------------- */

const TIERS: { name: string; minutes: string; items: string[]; featured?: boolean }[] = [
  { name: 'Signature', minutes: '45 Minutes', items: ['Cleanse', 'Exfoliate', 'Extract', 'Hydrate'] },
  { name: 'Platinum', minutes: '70 Minutes', items: ['Lymphatic Drainage', 'Booster', 'LED', 'Full Experience'], featured: true },
  { name: 'Deluxe', minutes: '60 Minutes', items: ['Signature', 'Booster', 'LED Therapy'] },
]

function HydraFacialCollection() {
  return (
    <section id="hydrafacial" className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-14 lg:py-24">
        <Reveal className="flex flex-col gap-10 lg:gap-14">
          <h2 className={`${SECTION_TITLE} text-center text-navy`}>HydraFacial Collection</h2>
          <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 90} className="h-full">
                <div
                  className={`flex h-full flex-col gap-6 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] lg:p-8 ${
                    tier.featured
                      ? 'border-2 border-t-8 border-blue bg-white'
                      : 'border border-blue/50 bg-gradient-to-br from-white to-accent-soft'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-poppins text-[28px] font-bold text-blue">{tier.name}</h3>
                      {tier.featured && (
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-poppins text-xs font-bold text-accent">
                          Most complete
                        </span>
                      )}
                    </div>
                    <p className="font-poppins text-base font-bold text-navy">{tier.minutes}</p>
                  </div>
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 font-poppins text-lg text-ink">
                    {tier.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
 * Why Choose First MD Wellness — checklist left, capsule collage right
 * ------------------------------------------------------------------------- */

const WHY_POINTS = [
  'FDA-cleared technology',
  'Personalized treatment plans',
  'Comfortable clinical environment',
  'Medical-grade skincare',
  'Proven treatment protocols',
]

function WhyChoose() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-3.svg" className="left-[-60px] top-[4%] w-[240px]" />
      <Container className="relative z-10 py-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
          <Reveal className="flex flex-col gap-8">
            <h2 className={`${SECTION_TITLE} max-w-[550px] text-navy`}>Why Choose First MD Wellness</h2>
            <ul className="flex flex-col gap-4">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="font-poppins text-lg font-bold text-ink lg:text-xl">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Capsule collage — staggered stadium photos matching the other pages */}
          <Reveal delay={120} className="flex items-center justify-center gap-4 sm:gap-5">
            <CapsuleFrame className="h-[440px] w-[200px] -translate-y-4 sm:h-[560px] sm:w-[268px] sm:-translate-y-7">
              <img
                src="/assets/aes-why-1.png"
                alt="A First MD physician caring for a young patient"
                className="h-full w-full object-cover object-[40%_center]"
              />
            </CapsuleFrame>
            <CapsuleFrame sharp="bl" className="hidden translate-y-4 sm:block sm:h-[560px] sm:w-[268px] sm:translate-y-7">
              <img src="/assets/aes-why-2.jpg" alt="" className="h-full w-full object-cover object-[55%_center]" />
            </CapsuleFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

// FAQ — Medical Aesthetics & Wellness Q&As
const AESTHETICS_FAQS = [
  {
    q: 'Are the treatments physician-supervised?',
    a: 'Yes — unlike traditional spas, every treatment at First MD Wellness Clinic is performed under the supervision of an experienced physician using FDA-cleared technology.',
  },
  {
    q: 'How do I know which treatment is right for me?',
    a: 'Every plan starts with a consultation. We review your goals, skin type, and medical history, then tailor a treatment plan to you — from HydraFacial to Morpheus8.',
  },
  {
    q: 'How much downtime should I expect?',
    a: 'Most treatments involve minimal downtime, and many patients return to their normal routine the same day. Your provider will walk you through exactly what to expect.',
  },
  {
    q: 'Do you offer treatments for teens?',
    a: 'Yes — our Specialty Treatments include Teen Acne Treatment, delivered in a comfortable clinical environment with medical-grade skincare.',
  },
]

export default function AestheticsPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Expertise />
        <AdvancedTechnology />
        <Treatments />
        <HydraFacialCollection />
        <WhyChoose />
        <FAQ items={AESTHETICS_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
