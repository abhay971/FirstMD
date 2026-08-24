/**
 * Shared scaffold for long-form legal / informational pages (Privacy Policy,
 * Accessibility Statement, …): centered title hero → body copy → "Visit our
 * Roanoke Clinic" contact block → footer. Matches the Figma "Patient resources
 * page — First MD" (node 397:2827). Pages pass a title, optional subtitle, and
 * an array of content blocks.
 *
 * The body is rendered as plain flow (no scroll-reveal wrapper): a single
 * Reveal around a very tall element only crosses its visibility threshold after
 * scrolling, which would hide the copy on first paint.
 */

import { type ReactNode } from 'react'
import {
  ARROW,
  Container,
  Footer,
  MAPS_HREF,
  Navbar,
  PHONE_DISPLAY,
  Reveal,
  SectionHeading,
} from './shared'

/* Block kinds mirror the design's text styling: bold standalone subheadings,
 * regular paragraphs, fully-bold paragraphs, and paragraphs with a bold lead-in
 * (or bold trailing emphasis). */
export type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'bold'; text: string }
  | { kind: 'lead'; bold: string; rest: string }
  | { kind: 'trail'; rest: string; bold: string }

const bodyText = 'font-poppins text-lg leading-relaxed text-ink lg:text-xl'

function DocBody({ blocks }: { blocks: Block[] }) {
  return (
    <Container className="pt-10 pb-12 lg:pt-12 lg:pb-20">
      <div className="flex flex-col gap-5 lg:gap-6">
        {blocks.map((block, i) => {
          switch (block.kind) {
            case 'heading':
              return (
                <h2 key={i} className="mt-2 font-poppins text-xl font-bold text-navy sm:text-2xl lg:text-[26px]">
                  {block.text}
                </h2>
              )
            case 'bold':
              return (
                <p key={i} className={`${bodyText} font-bold`}>
                  {block.text}
                </p>
              )
            case 'lead':
              return (
                <p key={i} className={bodyText}>
                  <span className="font-bold">{block.bold}</span>
                  {block.rest}
                </p>
              )
            case 'trail':
              return (
                <p key={i} className={bodyText}>
                  {block.rest}
                  <span className="font-bold">{block.bold}</span>
                </p>
              )
            default:
              return (
                <p key={i} className={bodyText}>
                  {block.text}
                </p>
              )
          }
        })}
      </div>
    </Container>
  )
}

function Hero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-page pt-32 lg:pt-40">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-poppins text-4xl font-bold leading-[1.05] text-navy sm:text-6xl lg:text-[80px]">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-[1271px] font-poppins text-base font-bold uppercase leading-snug text-navy/60 sm:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Visit our Roanoke Clinic — map + copy, then Office Hours / Urgent Care cards
 * ------------------------------------------------------------------------- */

const HOURS: [string, string][] = [
  ['Mon–Fri', '8:00 AM – 6:00 PM'],
  ['Saturday', '9:00 AM – 1:00 PM'],
  ['Sunday', 'Closed'],
]

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col justify-center gap-6 rounded-3xl p-7 shadow-sm transition-shadow hover:shadow-lg lg:p-10 ${className}`}>
      {children}
    </div>
  )
}

function ClinicVisit() {
  return (
    <Container className="py-12 lg:py-16">
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
            <p className="font-poppins text-lg text-black lg:text-xl">
              Getting quality healthcare should be easy. We’re conveniently located and here to provide the care you
              need, when you need it.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-9 lg:grid-cols-2">
          {/* Office hours */}
          <Card className="border border-navy bg-white">
            <div className="flex items-center gap-4">
              <img src="/assets/icon-schedule.svg" alt="" className="size-9" />
              <p className="font-poppins text-2xl font-bold text-navy">Office Hours</p>
            </div>
            <dl className="flex flex-col font-poppins text-lg text-ink lg:text-xl">
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
          </Card>

          {/* Urgent care */}
          <Card className="border border-accent bg-accent-soft">
            <div className="flex items-center gap-4">
              <img src="/assets/icon-hospital.svg" alt="" className="size-9" />
              <p className="font-poppins text-2xl font-bold text-accent">Urgent Care</p>
            </div>
            <p className="font-poppins text-lg text-ink lg:text-xl">
              Same-day care for non-life threatening illness and injuries
            </p>
            <span className="block h-px w-full bg-accent/30" />
            <a href="tel:911" className="flex items-center gap-4">
              <img src="/assets/icon-call.svg" alt="" className="size-8 shrink-0" />
              <p className="font-poppins text-lg font-bold lg:text-xl">
                <span className="text-navy">For Life-threatening emergencies, call </span>
                <span className="text-accent underline">911</span>
              </p>
            </a>
          </Card>
        </div>

        <p className="font-poppins text-base text-navy/70 lg:text-lg">
          Prefer to call? Reach us at{' '}
          <a href="tel:+16828311591" className="font-bold text-navy hover:text-accent">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Page scaffold
 * ------------------------------------------------------------------------- */

export default function LegalDocPage({
  title,
  subtitle,
  blocks,
}: {
  title: string
  subtitle?: string
  blocks: Block[]
}) {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero title={title} subtitle={subtitle} />
        <DocBody blocks={blocks} />
        <ClinicVisit />
      </main>
      <Footer />
    </div>
  )
}
