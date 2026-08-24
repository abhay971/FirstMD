/**
 * First MD — Providers page (Figma node 240:4386).
 * Shared chrome (Navbar, Marquee, FAQ, Footer) + primitives come from ./shared.
 */

import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ARROW,
  BOOK,
  CapsuleFrame,
  Container,
  Footer,
  FAQ,
  MarqueeStrip,
  Navbar,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillButton,
  Reveal,
  SectionHeading,
  useParallax,
} from './shared'

/* ----------------------------------------------------------------------------
 * Small inline icons
 * ------------------------------------------------------------------------- */

function Badge({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e3eefb] text-blue sm:size-14">{icon}</span>
      <p className="font-poppins text-sm font-bold leading-tight text-ink sm:whitespace-nowrap sm:text-base">{children}</p>
    </div>
  )
}

const ICON = 'size-7'
const IconStethoscope = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v5a4 4 0 0 0 8 0V3" />
    <path d="M10 14v2a5 5 0 0 0 10 0v-2" />
    <circle cx="20" cy="11" r="2" />
  </svg>
)
const IconHeart = (
  <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
)
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

function CheckRing({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#005ba8" />
      <path d="M7 12.5l3 3 7-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden>
      <path
        d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95z"
        fill="#f5a623"
      />
    </svg>
  )
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

const HERO_BADGES = [
  {
    icon: IconStethoscope,
    label: (
      <>
        Experienced
        <br />
        Providers
      </>
    ),
  },
  {
    icon: IconHeart,
    label: (
      <>
        Patient-Focused
        <br />
        Care
      </>
    ),
  },
  {
    icon: IconCalendar,
    label: (
      <>
        Same-Day
        <br />
        Appointments
      </>
    ),
  },
  {
    icon: IconShield,
    label: (
      <>
        Most Major
        <br />
        Insurance Accepted
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
        <img src="/assets/providers-hero.png" alt="" className="block w-full object-cover" />
        <div aria-hidden className="absolute inset-x-0 top-0 -bottom-2 bg-gradient-to-b from-page/30 via-page/0 via-40% to-page to-92%" />
      </div>
      {/* Desktop: full-bleed background photo with text overlaid */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/assets/providers-hero.png"
          alt=""
          ref={heroRef}
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-page from-0% via-page/82 via-42% to-transparent to-66%" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-page" />
      </div>

      <Container className="relative z-10 flex flex-col gap-8 py-10 lg:flex-1 lg:gap-0 lg:pt-36 lg:pb-8">
        <div className="hero-rise flex max-w-[680px] flex-col gap-4" style={{ animationDelay: '60ms' }}>
          <p className="font-poppins text-lg font-bold text-blue">Meet the Providers</p>
          <h1 className="font-poppins text-[36px] font-bold leading-[1.04] text-navy sm:text-5xl lg:text-[52px] xl:text-[58px] 2xl:text-[64px]">
            Compassionate Care Starts With the Right Team
          </h1>
          <p className="font-poppins text-lg font-bold text-navy">Rehydrate. Recover. Recharge.</p>
          <p className="max-w-[600px] font-poppins text-base text-navy lg:text-lg">
            Our experienced healthcare professionals are committed to providing personalized care,
            building long-term relationships, and helping patients achieve better health outcomes.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <PillButton variant="accent" href={BOOK}>
              Book Appointment
            </PillButton>
            <PillButton variant="outline" href="/#contact">
              Contact Us
            </PillButton>
          </div>
        </div>

        {/* Feature badges — pinned to the bottom of the viewport, single row on desktop */}
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
 * Team introduction
 * ------------------------------------------------------------------------- */

function TeamIntro() {
  return (
    <Container className="py-14 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[480px_1fr] lg:gap-[60px]">
        <Reveal className="aspect-[635/694] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-xl">
          <img src="/assets/team-photo.png" alt="The First MD care team" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal delay={120} className="flex max-w-[600px] flex-col gap-8">
          <SectionHeading eyebrow="Team Introduction" title="Healthcare Professionals You Can Trust" />
          <div className="flex flex-col gap-4 font-poppins text-lg text-navy">
            <p>
              At First MD, we believe great healthcare starts with meaningful relationships. Our providers
              take the time to listen, educate, and create personalized treatment plans that support your
              health goals.
            </p>
            <p>
              Whether you're visiting for preventive care, chronic disease management, urgent care, or
              wellness services, our team is here to help.
            </p>
          </div>
        </Reveal>
      </div>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Provider cards
 * ------------------------------------------------------------------------- */

type Provider = {
  id: string
  name: string
  title: string
  /** Omit while a photo is pending — the tile/popup fall back to initials. */
  img?: string
  specialties: string[]
  experience: string
  bio: string[]
}

const PROVIDERS: Provider[] = [
  {
    id: 'edward',
    name: 'Edward Martinez',
    title: 'PA-C · Co-Founder',
    img: '/assets/prov-src-2.png',
    specialties: ['Family & Internal Medicine', 'Bioidentical Hormone Therapy', 'Peptide Therapy'],
    experience: '20+ Years Experience',
    bio: [
      'Edward Martinez is a licensed Physician Associate and co-founder of First MD. He started in healthcare after graduating with a BSN from Texas Tech University in 1997. After several years as a registered nurse, he continued his education and graduated with a PA degree from University of Texas - Pan American in 2004. Edward has experience in a variety of disciplines including surgery, internal medicine and family medicine. He is constantly learning how to better care for his patients and is certified in bio-identical hormone replacement therapy and has peptide therapy certification by the International Peptide Society. With a focus on disease prevention, he is also a member of the American Academy of Anti-Aging Medicine and pursuing a functional medicine certification.',
      'Edward considers it a privilege to collaborate with you in your healthcare journey. He is thorough in his assessments and takes the time to listen to your concerns in order to develop a personalized treatment plan.',
      'Edward enjoys teaching and is a preceptor for Nurse Practitioner and PA students from regional universities. He lives locally, enjoys spending time with his family and reading about science-related topics. He is a health and fitness enthusiast and a 2-time Ironman finisher.',
    ],
  },
  {
    id: 'courtney',
    name: 'Courtney',
    title: 'FNP',
    img: '/assets/prov-courtney.png',
    specialties: ['Primary & Urgent Care', 'Family Medicine', 'Patient Education'],
    experience: '12+ Years Experience',
    bio: [
      "Courtney is a Family Nurse Practitioner who graduated from Texas Woman's University. With more than 12 years of experience as a critical care RN, she brings a strong clinical foundation and compassionate approach to patient care. Currently specializing in primary and urgent care, Courtney is dedicated to providing thorough, personalized treatment while prioritizing patient well-being and optimal health outcomes.",
      'Known for a personable and attentive bedside manner, Courtney values building trusting relationships with patients and creating an environment where individuals feel heard and supported. She is passionate about patient education and believes informed patients are empowered to make confident decisions about their health. By combining evidence-based practice with compassionate care, Courtney strives to help patients achieve long-term wellness and improved quality of life.',
    ],
  },
  {
    id: 'deevers',
    name: 'Dr. Robert Deevers',
    title: 'DC · Chiropractor',
    specialties: ['Chiropractic Care', 'Sports Injury', 'Manual & Soft Tissue Therapy', 'Extremity Adjusting'],
    experience: '15+ Years Experience',
    bio: [
      'Dr. Robert Deevers is a Doctor of Chiropractic who graduated from Parker University in Dallas, TX in 2009. While at Parker, he concurrently earned a Bachelor’s degree in Anatomy & Physiology and a Bachelor’s in Health and Wellness. He has since completed additional training in sports injury, manual therapy techniques, soft tissue therapies, and extremity adjusting techniques.',
      'Dr. Deevers uses hands-on techniques to address problems involving the spine, joints, and muscles, helping patients reduce discomfort, improve mobility, and get back to the activities they love. He takes time to understand each patient’s symptoms, health concerns, and goals so care can be tailored to their needs.',
      'A Roanoke resident, Dr. Deevers lives locally with his wife, Jamie, and their four active children. The Deevers family is involved in their local church, and when he is not in the clinic you may find him coaching a local sports team or volunteering in the community.',
    ],
  },
]

/** Placeholder shown in place of a photo until one is supplied. */
function ProviderInitials({ name }: { name: string }) {
  const initials = name
    .replace(/^Dr\.\s+/, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="flex size-32 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 font-poppins text-5xl font-bold text-white">
        {initials}
      </span>
    </div>
  )
}

/** Compact clickable tile — opens the provider's popup. */
function ProviderTile({ provider, onOpen }: { provider: Provider; onOpen: () => void }) {
  return (
    <button
      id={provider.id}
      type="button"
      onClick={onOpen}
      aria-label={`View ${provider.name}'s profile`}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[360px] overflow-hidden bg-gradient-to-b from-blue to-navy">
        {provider.img ? (
          <img
            src={provider.img}
            alt={provider.name}
            className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <ProviderInitials name={provider.name} />
        )}
      </div>
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <p className="font-poppins text-xl font-bold text-navy">{provider.name}</p>
          <p className="font-poppins text-base font-bold text-blue">{provider.title}</p>
        </div>
        <span className="whitespace-nowrap font-poppins text-sm font-bold text-blue transition-colors group-hover:text-navy">
          View profile {ARROW}
        </span>
      </div>
    </button>
  )
}

/** Full-detail popup for a provider. */
function ProviderModal({ provider, onClose }: { provider: Provider; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={provider.name}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={onClose} />

      {/* Card */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-[1120px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row lg:items-stretch">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-white/85 text-navy shadow-md backdrop-blur transition-colors hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Photo */}
        <div className="relative h-[300px] shrink-0 overflow-hidden bg-gradient-to-b from-blue to-navy sm:h-[380px] lg:h-auto lg:w-[44%]">
          {provider.img ? (
            <img
              src={provider.img}
              alt={provider.name}
              className="absolute inset-0 h-full w-full object-contain object-bottom"
            />
          ) : (
            <ProviderInitials name={provider.name} />
          )}
        </div>

        {/* Content (scrolls if long) */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-7 lg:p-10">
          <div>
            <p className="font-poppins text-3xl font-bold text-navy">{provider.name}</p>
            <p className="font-poppins text-lg font-bold text-blue">{provider.title}</p>
          </div>
          <div className="flex flex-col gap-3">
            {provider.bio.map((para, i) => (
              <p key={i} className="font-poppins text-base leading-relaxed text-ink">
                {para}
              </p>
            ))}
          </div>
          <span className="block h-px w-full bg-navy/15" />
          <ul className="flex flex-col gap-2.5">
            {provider.specialties.map((s) => (
              <li key={s} className="flex items-start gap-3 font-poppins text-base text-navy">
                <CheckRing />
                {s}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Star />
            <span className="font-poppins text-lg text-navy">{provider.experience}</span>
          </div>
          <PillButton variant="accent" href={BOOK} className="mt-1 self-start">
            Book Appointment
          </PillButton>
        </div>
      </div>
    </div>
  )
}

function ProvidersGrid() {
  const hash = useLocation().hash.replace('#', '')
  const [activeId, setActiveId] = useState<string | null>(null)

  // Deep link (e.g. /providers#courtney) auto-opens that provider's popup.
  useEffect(() => {
    if (hash && PROVIDERS.some((p) => p.id === hash)) setActiveId(hash)
  }, [hash])

  const active = PROVIDERS.find((p) => p.id === activeId) ?? null

  return (
    <Container className="py-12">
      <Reveal className="mx-auto grid w-full max-w-[840px] grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-[1272px] lg:grid-cols-3">
        {PROVIDERS.map((p) => (
          <ProviderTile key={p.id} provider={p} onOpen={() => setActiveId(p.id)} />
        ))}
      </Reveal>
      {active && <ProviderModal provider={active} onClose={() => setActiveId(null)} />}
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Why patients trust (navy)
 * ------------------------------------------------------------------------- */

const TRUST_POINTS = [
  { title: 'Personalized Attention', desc: 'We take time to understand your concerns and goals.' },
  { title: 'Experienced Medical Team', desc: 'Trusted providers with extensive clinical experience.' },
  {
    title: 'Comprehensive Care',
    desc: 'Routine care, chronic care, diagnostics, and wellness services in one location.',
  },
  { title: 'Patient Education', desc: 'Helping patients make informed decisions about their health.' },
  { title: 'Convenient Access', desc: 'Same-day appointments and flexible scheduling options.' },
]

function WhyTrust() {
  return (
    <section className="relative overflow-hidden bg-navy py-12 text-page lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <Reveal className="flex max-w-[540px] flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-poppins text-base font-bold">Why Patients Trust First MD</p>
              <h2 className="font-poppins text-3xl font-bold leading-[1.08] lg:text-[44px]">
                More Than Healthcare. A Long-Term Partnership.
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {TRUST_POINTS.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <CheckRing className="mt-0.5 size-6" />
                  <div>
                    <p className="font-poppins text-lg font-bold">{p.title}</p>
                    <p className="font-poppins text-sm text-page/70">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Capsule collage — staggered stadium photos matching the Services page */}
          <Reveal delay={120} className="hidden shrink-0 items-center justify-center gap-4 sm:gap-5 lg:flex">
            <CapsuleFrame className="h-[460px] w-[210px] -translate-y-6" outlineClassName="border-page/40">
              <div className="absolute inset-0 [transform:scaleX(-1)]">
                <img
                  src="/assets/trust-group.png"
                  alt="First MD physician"
                  className="absolute max-w-none"
                  style={{ width: '660%', height: '161.3%', left: '-189.5%', top: '-35%' }}
                />
              </div>
            </CapsuleFrame>
            <CapsuleFrame sharp="bl" className="h-[460px] w-[210px] translate-y-6" outlineClassName="border-page/40">
              <img src="/assets/trust-nurse.png" alt="First MD nurse" className="h-full w-full -scale-y-100 object-cover object-center" />
            </CapsuleFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * CTA banner
 * ------------------------------------------------------------------------- */

function CtaBanner() {
  return (
    <Container className="py-12 lg:py-16">
      <Reveal>
        <div className="relative rounded-2xl bg-navy px-6 py-8 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:px-14 lg:py-9">
          {/* Concentric rings — clipped to the banner, centered behind the provider */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '6%', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[440px] max-w-none select-none lg:block"
            />
          </div>

          {/* Provider — pops above the top edge, clipped at the rounded bottom */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
            style={{ clipPath: 'inset(-70px 0px 0px 0px round 16px)' }}
          >
            <img src="/assets/cta-doctor.png" alt="" className="absolute bottom-0 right-[3%] h-[128%] w-auto object-contain" />
          </div>

          {/* Copy */}
          <div className="relative z-10 max-w-[600px]">
            <h2 className="font-poppins text-2xl font-bold lg:text-3xl">Ready to Meet Your Provider?</h2>
            <p className="mt-2 max-w-[560px] font-poppins text-base text-white/60 lg:text-lg">
              Whether you're looking for a primary care physician, preventive care, or help managing a
              chronic condition, our team is ready to help.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <PillButton variant="accent" href={BOOK}>
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

export default function ProvidersPage() {
  return (
    <div className="relative min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <TeamIntro />
        <ProvidersGrid />
        <WhyTrust />
        <CtaBanner />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
