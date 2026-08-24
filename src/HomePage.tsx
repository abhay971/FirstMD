/**
 * First MD — Home page. Section components are home-specific; shared chrome
 * (Navbar, Marquee, FAQ, Footer) and primitives come from ./shared.
 */

import {
  ARROW,
  ArrowLink,
  BOOK,
  CapsuleFrame,
  CheckCircle,
  Container,
  CrossDecor,
  FAQ,
  Footer,
  MAPS_HREF,
  MarqueeStrip,
  Navbar,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillButton,
  Providers,
  Reveal,
  SectionHeading,
  SoftTexture,
  useParallax,
} from './shared'

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  const heroRef = useParallax<HTMLImageElement>()

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      {/* Mobile: full-bleed banner photo (flush to top, soft wash like desktop) */}
      <div className="relative lg:hidden">
        <img src="/assets/hero-bg.png" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/hero-bg.png"
          alt=""
          ref={heroRef}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-15% to-transparent to-52%" />
      </div>

      <Container className="relative flex flex-col py-10 lg:min-h-svh lg:flex-row lg:items-center lg:pt-40 lg:pb-24">
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
    <Container className="py-12 lg:py-16">
      <Reveal>
        <div className="relative rounded-2xl bg-navy px-6 py-8 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:px-14 lg:py-9">
          {/* Concentric rings — clipped to the rounded banner, centered behind the providers */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '55px', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[540px] max-w-none select-none md:block"
            />
          </div>

          {/* Copy */}
          <div className="relative z-10 max-w-[460px]">
            <h2 className="font-poppins text-2xl font-bold lg:text-3xl">Need Care Today?</h2>
            <p className="mt-2 max-w-[420px] font-poppins text-base text-white/60 lg:text-lg">
              Same day appointments and walk-in visits available for urgent medical needs.
            </p>
            <ArrowLink href={BOOK} className="mt-3 text-base font-bold text-white hover:opacity-90 lg:text-lg">
              Get Care Today
            </ArrowLink>
          </div>

          {/* Family cut-out — clipped to the banner bottom, heads popping above the top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden md:block"
            style={{ clipPath: 'inset(-220px 0px 0px 0px round 16px)' }}
          >
            <img
              src="/assets/need-family.png"
              alt="First MD providers"
              className="absolute -bottom-12 right-2 h-[380px] w-auto max-w-none lg:right-8 lg:-bottom-16 lg:h-[470px]"
            />
          </div>
        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Services
 * ------------------------------------------------------------------------- */

const SERVICES = [
  {
    name: 'Integrated Family Medicine & Urgent Care',
    desc: 'Same day urgent care plus ongoing primary care.',
    href: '/services',
  },
  {
    name: 'Hormone Therapy',
    desc: 'Bioidentical hormone pellets for steady energy, sleep, focus, and mood no daily pills.',
    href: '/services/hormone',
  },
  {
    name: 'IV Hydrating Therapy',
    desc: 'IV vitamin and hydration drips to restore energy, recovery, and wellness fast.',
    href: '/services/iv',
  },
  {
    name: 'Peptide Therapy',
    desc: 'Targeted peptide treatments to support recovery, metabolism, and healthy aging.',
    href: '/services/peptide',
  },
  {
    name: 'Chiropractic Care',
    desc: 'Hands-on care for the spine, joints, and muscles to ease discomfort and improve mobility.',
    href: '/services/chiropractic',
  },
]

function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img src="/assets/services-bp-check.jpg" alt="" className="h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-0% via-page/25 via-55% to-transparent to-100%" />
      </div>

      <Container className="relative z-10 py-14 lg:py-28">
        <Reveal className="flex max-w-[665px] flex-col gap-8">
          <SectionHeading eyebrow="Our Services" title="Healthcare Services Designed Around Your Family" className="max-w-[640px]" />
          <ul className="flex w-full max-w-[460px] flex-col">
            {SERVICES.map((service) => (
              <li key={service.name} className="group border-b border-black/15 last:border-0">
                <div className="py-3">
                  <div className="flex items-center gap-3">
                    <span className="size-2 shrink-0 rounded-full bg-blue transition-transform group-hover:scale-125" />
                    <span className="font-poppins text-lg font-bold text-black transition-colors group-hover:text-blue">
                      {service.name}
                    </span>
                  </div>
                  {/* Reveal description + "Know More" on hover */}
                  <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pl-5 pt-2 font-poppins text-sm text-black/70">{service.desc}</p>
                      <ArrowLink
                        href={service.href}
                        className="ml-5 mt-2 text-sm font-bold text-blue hover:opacity-90"
                      >
                        Know More
                      </ArrowLink>
                    </div>
                  </div>
                </div>
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
      <Container className="relative z-10 py-14 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[119px]">
          {/* Capsule collage — staggered stadium photos matching the Services page */}
          <Reveal className="flex items-center justify-center gap-4 sm:gap-5">
            {/* Doctor capsule — nudged up */}
            <CapsuleFrame className="h-[440px] w-[200px] -translate-y-4 sm:h-[560px] sm:w-[268px] sm:-translate-y-7">
              <img src="/assets/why-stethoscope.jpg" alt="A First MD provider holding out a stethoscope" className="h-full w-full object-cover object-center" />
            </CapsuleFrame>
            {/* Anatomy capsule — nudged down, flipped vertically so the figure stands upright */}
            <CapsuleFrame sharp="bl" className="hidden translate-y-4 sm:block sm:h-[560px] sm:w-[268px] sm:translate-y-7">
              <img src="/assets/why-c.png" alt="" className="h-full w-full -scale-y-100 object-cover" />
            </CapsuleFrame>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120} className="flex flex-col gap-8">
            <SectionHeading eyebrow="Why to choose us?" title="Why Families Choose First MD" className="max-w-[550px]" />
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
            {/* <PillButton variant="accent" href="/#services" className="w-[307px] max-w-full">
              Explore More {ARROW}
            </PillButton> */}
          </Reveal>
        </div>
      </Container>
    </section>
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
            <img src="/assets/insurance.png" alt="Insurance support at First MD" className="h-full w-full object-cover" />
          </Reveal>
        </div>
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
      <Container className="relative z-10 py-14 lg:py-20">
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
          <div className="grid gap-9 lg:grid-cols-2">
            {/* Office hours */}
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

            {/* Urgent care */}
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
    </section>
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
