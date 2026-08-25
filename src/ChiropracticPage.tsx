/**
 * First MD — Chiropractic Care service page (/services/chiropractic).
 *
 * Built to match the Figma reference "Chiropractic Care" (node 521:405):
 * hero → marquee → What Is Chiropractic Care → Chiropractic Services (6 cards)
 * → Conditions We Help Address (navy band) → Why Choose First MD → Insurance
 * Made Simple → FAQ. Shared chrome from ./shared.
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
  { icon: '/assets/chiro-chip-personalized.svg', label: ['Personalized', 'Care'] },
  { icon: '/assets/chiro-chip-mobility.svg', label: ['Pain & Mobility', 'Support'] },
  { icon: '/assets/chiro-chip-providers.svg', label: ['Experienced', 'Providers'] },
  { icon: '/assets/chiro-chip-wholebody.svg', label: ['Whole-Body', 'Approach'] },
]

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: stacked banner photo (whole subject visible, no text overlay) */}
      <div className="relative lg:hidden">
        <img src="/assets/svc-chiro-hero.webp" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/svc-chiro-hero.webp"
          alt=""
          ref={heroRef}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-25% to-transparent to-65%" />
      </div>

      <Container className="relative flex flex-col gap-10 py-10 lg:min-h-svh lg:justify-center lg:gap-14 lg:pt-40 lg:pb-16">
        <div className="flex max-w-[732px] flex-col gap-3">
          <p className="hero-rise font-poppins text-xl font-bold text-navy lg:text-2xl" style={{ animationDelay: '20ms' }}>
            Services
          </p>
          <h1
            className="hero-rise font-poppins text-[40px] font-bold leading-[1.1] text-navy sm:text-[40px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 2xl:leading-[1.12]"
            style={{ animationDelay: '80ms' }}
          >
            Chiropractic Care in Roanoke, TX
          </h1>
          <p className="hero-rise max-w-[672px] font-poppins text-base text-navy lg:text-lg" style={{ animationDelay: '180ms' }}>
            Personalized chiropractic care to help relieve pain, improve mobility, and support your body&rsquo;s natural
            healing process.
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
 * What Is Chiropractic Care? — capsule collage left, intro right
 * ------------------------------------------------------------------------- */

function WhatIs() {
  return (
    <section id="chiropractic" className="relative scroll-mt-28 overflow-hidden">
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[74px]">
          <Reveal className="flex justify-center lg:justify-start">
            <img loading="lazy"
              src="/assets/svc-chiro-whatis-pills.webp"
              alt="A First MD chiropractor examining a patient's spine and posture"
              className="h-auto w-full max-w-[616px]"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-8">
            <SectionHeading eyebrow="What Is Chiropractic Care?" title="Move Better. Feel Better." size="md" className="max-w-[613px]" />
            <div className="flex max-w-[602px] flex-col gap-5 font-poppins text-xl text-navy">
              <p>
                Chiropractic care uses hands-on techniques to address problems involving the spine, joints, and muscles.
                It can help reduce discomfort, improve mobility, and support better physical function.
              </p>
              <p>
                At First MD, we take time to understand your symptoms, health concerns, and goals so your care can be
                tailored to your needs.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Chiropractic Services — six icon cards
 * ------------------------------------------------------------------------- */

const SERVICES = [
  {
    icon: '/assets/svc-chiro-adjustments.svg',
    title: 'Chiropractic Adjustments',
    desc: 'Gentle, controlled adjustments designed to improve spinal and joint movement and help relieve discomfort.',
  },
  {
    icon: '/assets/svc-chiro-massage.svg',
    title: 'Chiropractic Massage',
    desc: 'Targeted massage to reduce muscle tension, improve circulation, and support mobility.',
  },
  {
    icon: '/assets/svc-chiro-decompression.svg',
    title: 'Spinal Decompression',
    desc: 'Non-surgical therapy designed to reduce pressure on affected spinal discs and nerves.',
  },
  {
    icon: '/assets/svc-chiro-sports.svg',
    title: 'Sports Injury Rehabilitation',
    desc: 'Personalized care and targeted exercises to support recovery and help you return to activity.',
  },
  {
    icon: '/assets/svc-chiro-auto.svg',
    title: 'Auto Accident Recovery',
    desc: 'Care focused on common accident-related concerns such as whiplash, pain, and reduced mobility.',
  },
  {
    icon: '/assets/svc-chiro-prenatal.svg',
    title: 'Prenatal Chiropractic Care',
    desc: 'Gentle, pregnancy-focused care to help address back pain, sciatica, and joint discomfort.',
  },
]

function Services() {
  return (
    <section id="treatments" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-3.svg" className="right-[-60px] top-[2%] w-[240px]" />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <Reveal className="flex flex-col gap-12">
          <h2 className={`${SECTION_TITLE} text-navy`}>Chiropractic Services</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 90} className="h-full">
                <div className="flex h-full items-center gap-6 rounded-3xl border border-navy bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_18px_36px_rgba(0,48,94,0.14)] lg:p-7">
                  <img loading="lazy" src={card.icon} alt="" className="size-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-poppins text-xl font-bold leading-[1.3] text-navy lg:text-2xl">{card.title}</h3>
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
 * Conditions We Help Address — navy band, two lists with divider
 * ------------------------------------------------------------------------- */

const PAIN_CONDITIONS = ['Back Pain', 'Neck Pain', 'Joint Pain', 'Muscle Tension', 'Sciatica', 'Headaches & Migraines']

const MOBILITY_CONDITIONS = ['Sports Injuries', 'Whiplash', 'Posture Issues', 'Disc-Related Conditions', 'Limited Mobility']

function Conditions() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Massage-hands motif peeking in from the right, faded into the band */}
      <img
        aria-hidden
        alt=""
        src="/assets/chiro-conditions-graphic.svg"
        className="pointer-events-none absolute right-[-8px] top-1/2 hidden w-[440px] -translate-y-1/2 -scale-x-100 select-none opacity-20 lg:block xl:w-[512px]"
      />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <Reveal className="flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-3">
            <p className="font-poppins text-lg font-bold text-page/90">Conditions We Help Address</p>
            <h2 className={`${SECTION_TITLE} text-page`}>Care for Pain &amp; Movement</h2>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row lg:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-xl font-bold text-white lg:text-2xl">Pain &amp; Discomfort</h3>
              <ul className="flex list-disc flex-col gap-2 pl-6 font-poppins text-xl text-page">
                {PAIN_CONDITIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div aria-hidden className="hidden w-px self-stretch bg-white/40 sm:block" />
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-xl font-bold text-white lg:text-2xl">Injuries &amp; Mobility</h3>
              <ul className="flex list-disc flex-col gap-2 pl-6 font-poppins text-xl text-page">
                {MOBILITY_CONDITIONS.map((item) => (
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
 * Why Choose First MD — photo left, checklist with descriptions right
 * ------------------------------------------------------------------------- */

const WHY_POINTS: { title: string; desc: string }[] = [
  { title: 'Personalized Treatment', desc: 'Care plans built around your condition, lifestyle, and goals.' },
  { title: 'Whole-Person Approach', desc: 'We consider movement, function, and overall well-being.' },
  { title: 'Evidence-Based Care', desc: 'Treatment is selected based on your needs and clinical assessment.' },
  { title: 'Focused Recovery', desc: 'Support designed to help you move comfortably and return to the activities you enjoy.' },
]

function WhyChoose() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-1.svg" className="left-[-60px] top-[4%] w-[240px]" />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[83px]">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="max-h-[560px] w-full max-w-[656px] overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] lg:max-h-[640px]">
              <img loading="lazy"
                src="/assets/svc-chiro-why.webp"
                alt="A First MD chiropractor adjusting a patient's neck and shoulders"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-poppins text-lg font-bold text-blue">WHY CHOOSE FIRST MD</p>
              <h2 className={`${SECTION_TITLE} max-w-[653px] text-navy`}>Care That Goes Beyond the Pain</h2>
              <p className="max-w-[653px] font-poppins text-xl text-ink">
                We focus on understanding the source of your discomfort and creating a care approach around your
                individual needs — not simply treating the symptoms.
              </p>
            </div>
            <ul className="flex flex-col gap-6">
              {WHY_POINTS.map((point) => (
                <li key={point.title} className="flex items-center gap-3">
                  <CheckCircle />
                  <div className="flex flex-col">
                    <span className="font-poppins text-xl font-bold text-ink lg:text-2xl">{point.title}</span>
                    <span className="font-poppins text-base text-ink">{point.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <PillButton variant="accent" href={BOOK} className="self-start">
              Schedule a Consultation
            </PillButton>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Insurance Made Simple — checklist left, capsule collage right
 * ------------------------------------------------------------------------- */

const INSURANCE_POINTS = [
  'Personalized Treatment Plans',
  'Convenient Appointments',
  'Flexible Care Options',
  'Dedicated Patient Support',
]

function Insurance() {
  return (
    <section id="insurance" className="relative scroll-mt-28 overflow-hidden">
      <CrossDecor src="/assets/cross-2.svg" className="right-[-60px] bottom-[6%] w-[240px]" />
      <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[104px]">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading eyebrow="Insurance Made Simple" title="We Make Care Easy" size="md" className="max-w-[550px]" />
            <p className="max-w-[550px] font-poppins text-xl text-ink">
              We can help you understand your care options, insurance coverage, and what to expect before starting
              treatment.
            </p>
            <ul className="flex flex-col gap-4">
              {INSURANCE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="font-poppins text-xl font-bold text-ink lg:text-2xl">{point}</span>
                </li>
              ))}
            </ul>
            <PillButton variant="accent" href={BOOK} className="self-start">
              Verify Your Insurance
            </PillButton>
          </Reveal>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <img loading="lazy"
              src="/assets/svc-chiro-insurance-pills.webp"
              alt="First MD providers guiding chiropractic patients through their care"
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

// FAQ — Chiropractic Care Q&As
const CHIRO_FAQS = [
  {
    q: 'What does a chiropractic adjustment do?',
    a: 'A chiropractic adjustment uses controlled hands-on techniques to improve spinal and joint movement and may help reduce pain and discomfort.',
  },
  {
    q: 'What conditions can chiropractic care help with?',
    a: 'Common concerns include back and neck pain, joint pain, muscle tension, sciatica, headaches, sports injuries, whiplash, posture issues, and limited mobility.',
  },
  {
    q: 'Is chiropractic care only for back pain?',
    a: 'Not at all. Chiropractic care addresses the spine, joints, and muscles throughout the body — supporting mobility, posture, and overall physical function.',
  },
  {
    q: 'What happens during my first visit?',
    a: 'Your provider reviews your symptoms, health history, and goals, performs a physical assessment, and builds a care plan tailored to your needs.',
  },
]

export default function ChiropracticPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhatIs />
        <Services />
        <Conditions />
        <WhyChoose />
        <Insurance />
        <FAQ items={CHIRO_FAQS} />
      </main>
      <Footer />
    </div>
  )
}
