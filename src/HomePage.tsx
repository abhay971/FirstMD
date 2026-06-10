/**
 * First MD — Home page. Section components are home-specific; shared chrome
 * (Navbar, Marquee, FAQ, Footer) and primitives come from ./shared.
 */

import {
  ARROW,
  ArrowLink,
  BOOK,
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
  Reveal,
  SectionHeading,
  SoftTexture,
  useScrollY,
} from './shared'

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  const y = useScrollY()
  const shift = Math.min(y, 900) * 0.04 // gentle parallax on the backdrop

  return (
    <section id="home" className="relative scroll-mt-0 overflow-hidden bg-page">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/assets/hero-bg.png"
          alt=""
          style={{ transform: `translate3d(0, ${shift}px, 0)` }}
          className="absolute inset-x-0 top-[-5%] h-[110%] w-full object-cover object-[center_right] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-15% to-transparent to-52%" />
      </div>

      <Container className="relative flex min-h-svh items-center pt-40 pb-24">
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
    <Container className="pt-16 pb-16">
      <Reveal className="mx-auto max-w-[1000px]">
        <div className="relative rounded-2xl bg-navy px-8 py-6 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:px-14 lg:py-7">
          {/* Concentric rings — clipped to the rounded banner, centered behind the providers */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '-92px', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[540px] max-w-none select-none md:block"
            />
          </div>

          {/* Copy */}
          <div className="relative z-10 max-w-[460px]">
            <h2 className="font-poppins text-2xl font-bold lg:text-3xl">Need Care Today?</h2>
            <p className="mt-2 max-w-[420px] font-poppins text-base text-white/60 lg:text-lg">
              Same-day appointments and walk-in visits available for urgent medical needs.
            </p>
            <ArrowLink href={BOOK} className="mt-3 text-base font-bold text-white hover:opacity-90 lg:text-lg">
              Get Care Today
            </ArrowLink>
          </div>

          {/* Providers — overlapping, clipped to the banner bottom, heads popping above the top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden md:block"
            style={{ clipPath: 'inset(-300px 0px 0px 0px round 16px)' }}
          >
            <div className="absolute bottom-0 right-2 flex items-end lg:right-4">
              <img src="/assets/need-doc-1.png" alt="" className="h-[214px] w-auto lg:h-[258px]" />
              <img
                src="/assets/need-doc-2.png"
                alt="First MD providers"
                className="-ml-24 h-[230px] w-auto lg:h-[276px] lg:-ml-32"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Services
 * ------------------------------------------------------------------------- */

const SERVICES = ['Family Medicine', 'Chronic Illness Treatment', 'ProPellet Therapy', 'IV Hydration Therapy', 'On-Site Facilities']

function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img src="/assets/services-doctor.png" alt="" className="h-full w-full -scale-x-100 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-0% via-page/25 via-55% to-transparent to-100%" />
      </div>

      <Container className="relative z-10 py-20 lg:py-28">
        <Reveal className="flex max-w-[665px] flex-col gap-8">
          <SectionHeading eyebrow="Our Services" title="Healthcare Services Designed Around Your Family" className="max-w-[640px]" />
          <ul className="flex w-full max-w-[330px] flex-col">
            {SERVICES.map((service, i) => (
              <li key={service}>
                <a href={BOOK} className="group flex items-center gap-3 py-2 transition-colors">
                  <span className="size-2 shrink-0 rounded-full bg-blue transition-transform group-hover:scale-125" />
                  <span className="font-poppins text-lg font-bold text-black transition-colors group-hover:text-blue">{service}</span>
                  <span className="ml-auto text-blue opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">{ARROW}</span>
                </a>
                {i < SERVICES.length - 1 && <span className="block h-px w-full bg-black/15" />}
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
      <Container className="relative z-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[119px]">
          {/* Arch image composition */}
          <Reveal className="flex items-center justify-center gap-5">
            {/* Doctor arch with a subtle outline tucked behind for depth */}
            <div className="relative h-[440px] w-[200px] shrink-0 sm:h-[560px] sm:w-[268px]">
              <div className="absolute inset-0 -translate-x-2 translate-y-3 rounded-[140px] border border-navy/30" />
              <div className="absolute inset-0 overflow-hidden rounded-[140px] shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <img src="/assets/why-b.png" alt="First MD physician" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Anatomy arch — flipped vertically so the figure stands upright */}
            <div className="hidden h-[440px] w-[200px] shrink-0 overflow-hidden rounded-[140px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:block sm:h-[560px] sm:w-[268px]">
              <img src="/assets/why-c.png" alt="" className="h-full w-full -scale-y-100 object-cover" />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120} className="flex flex-col gap-8">
            <SectionHeading eyebrow="Why to us" title="Why Families Choose First MD" className="max-w-[550px]" />
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
            <PillButton variant="accent" href="/#services" className="w-[307px] max-w-full">
              Explore More {ARROW}
            </PillButton>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Providers (home preview)
 * ------------------------------------------------------------------------- */

type Provider = { name: string; title: string; img?: string; bio?: string }

const PROVIDERS: Provider[] = [
  {
    name: 'Foram Mehta',
    title: 'FNP',
    bio: 'Foram Mehta, FNP brings over 12 years of critical care experience and specializes in primary care, women’s health, medical weight loss, hormone therapy, and aesthetic treatments, delivering personalized, compassionate care.',
  },
  { name: 'Edward Martinez', title: 'PA-C', img: '/assets/prov-edward.png' },
  { name: 'Manny Trevino', title: 'DC', img: '/assets/prov-manny.png' },
  { name: 'Ranjit Dhelaria', title: 'MD, MRCP', img: '/assets/prov-ranjit.png' },
]

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <a
      href="/providers"
      aria-label={`Learn more about ${provider.name}`}
      className="group relative mx-auto block w-full max-w-[306px] transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="aspect-square w-full overflow-hidden rounded-[30px] bg-navy shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
        {provider.img ? (
          <img
            src={provider.img}
            alt={provider.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <p className="p-6 pb-16 text-center font-poppins text-sm leading-relaxed text-white">{provider.bio}</p>
        )}
      </div>
      <div className="absolute -bottom-6 left-1/2 w-[197px] max-w-[80%] -translate-x-1/2 rounded-[20px] border border-navy bg-white py-2 text-center shadow-md transition-colors group-hover:border-accent">
        <p className="font-outfit text-lg font-bold text-navy">{provider.name}</p>
        <p className="font-outfit text-sm text-navy">{provider.title}</p>
      </div>
    </a>
  )
}

function Providers() {
  return (
    <section id="providers" className="relative scroll-mt-28 overflow-hidden">
      <SoftTexture />
      <CrossDecor src="/assets/cross-2.svg" className="right-[-60px] bottom-[12%] w-[210px]" />
      <Container className="relative z-10 py-20">
        <Reveal className="flex flex-col items-center gap-12">
          <h2 className="text-center font-poppins text-4xl font-bold text-navy lg:text-6xl">Meet our Providers</h2>
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
            {PROVIDERS.map((p) => (
              <ProviderCard key={p.name} provider={p} />
            ))}
          </div>
          <ArrowLink href="/providers" className="mt-4 text-2xl text-navy">
            View more
          </ArrowLink>
        </Reveal>
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
      <Container className="relative z-10 py-20 lg:py-24">
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
      <Container className="relative z-10 py-20">
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
          <div className="grid gap-9 lg:grid-cols-[1fr_436px_324px]">
            {/* Office hours */}
            <div className="flex flex-col justify-center gap-6 rounded-3xl border border-navy bg-white p-10 shadow-sm transition-shadow hover:shadow-lg">
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
            <div className="flex flex-col justify-center gap-6 rounded-3xl border border-accent bg-accent-soft p-10 shadow-sm transition-shadow hover:shadow-lg">
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

            {/* CTAs */}
            <div className="flex flex-col gap-6">
              <PillButton variant="accent" href={MAPS_HREF} newTab className="h-[91px] w-full">
                Get Directions
              </PillButton>
              <PillButton variant="white" href={PHONE_HREF} className="h-[91px] w-full">
                Book Appointment
              </PillButton>
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
