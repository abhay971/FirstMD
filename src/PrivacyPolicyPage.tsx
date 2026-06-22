/**
 * First MD — Privacy Policy (HIPAA Notice of Privacy Practices) page (/privacy-policy).
 *
 * Built to match the Figma reference "Patient resources page — First MD"
 * (node 397:2827): centered title hero → long legal body copy → "Visit our
 * Roanoke Clinic" contact block → footer. Shared chrome + primitives from ./shared.
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

/* ----------------------------------------------------------------------------
 * Legal body content
 *
 * Block kinds mirror the Figma text styling: bold standalone subheadings,
 * regular paragraphs, fully-bold paragraphs, and paragraphs with a bold
 * lead-in (or bold trailing emphasis).
 * ------------------------------------------------------------------------- */

type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'bold'; text: string }
  | { kind: 'lead'; bold: string; rest: string }
  | { kind: 'trail'; rest: string; bold: string }

const BLOCKS: Block[] = [
  {
    kind: 'p',
    text: 'The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal program that requires that all medical and dental records and other individually identifiable health information used or disclosed by us in any form, whether electronically, on paper or orally, are kept properly confidential. This Act gives you, the patient, significant new rights to understand and control how your health information is used. HIPAA provides penalties for covered entities that misuse Protected Health Information (PHI).',
  },
  {
    kind: 'p',
    text: 'This Notice of Privacy Practices describes how we may use and disclose your Protected Health Information (PHI) to carry out treatment, payment or health care operations (TPO) and for other purposes that are permitted or required by law. It also describes your rights to access and control your protected health information. “Protected health information” is information about you, including demographic information, that may identify you and that relates to your past, present or future physical or mental health or condition and related health care services.',
  },
  { kind: 'heading', text: 'Uses and Disclosures of Protected Health Information' },
  {
    kind: 'p',
    text: 'Your Protected Health Information may be used and disclosed by your physician, our office staff and others outside of our office that are involved in your care and treatment for the purpose of providing health care services to you, to pay your health care bills, to support the operation of the practice, and any other use required by law.',
  },
  {
    kind: 'lead',
    bold: 'Treatment:',
    rest: ' We will use and disclose your Protected Health Information to provide, coordinate, or manage your health care and any related services. This includes the coordination or management of your health care with a third party. For example, your protected health information may be provided to a physician to whom you have been referred to ensure that the health care professional has the necessary information to diagnose or treat you.',
  },
  {
    kind: 'lead',
    bold: 'Payment:',
    rest: ' Your protected health information will be used, as needed, to obtain payment for health care services. For example, obtaining approval for a hospital stay may require that your relevant protected health information be disclosed to the health plan to obtain approval for the hospital admission.',
  },
  {
    kind: 'lead',
    bold: 'Healthcare Operations:',
    rest: ' We may use or disclose, as-needed, your protected health information in order to support the business activities of your physician’s practice. These activities include, but are not limited to, quality assessment activities, employee review activities, and conducting or arranging for other business activities. We may use or disclose, as needed, your protected health information to support the business activities of this practice. In addition, we may use a sign-in sheet at the registration desk where you will be asked to sign your name and indicate your physician. We may also call you by name in the waiting room when your physician is ready to see you. We may use or disclose your protected health information, as necessary, to contact you to remind you of your appointment. We may call your home and leave a message (either on an answering machine or with the person answering the phone) to remind you of an upcoming appointment, the need to schedule a new appointment or to call our office. We may also mail a postcard reminder to your home address. If you would prefer that we call or contact you at another telephone number or location, please let us know.',
  },
  {
    kind: 'bold',
    text: 'We may use or disclose your protected health information in the following situations without your authorization. These situations include: as Required By Law, Public Health issues required by law, Communicable Diseases: Health Oversight: Abuse or Neglect: Food and Drug Administration requirements: Legal Proceedings: Law Enforcement: Coroners, Funeral Directors, and Organ Donation: Research: Criminal Activity: Military Activity and National Security: Workers’ Compensation: Inmates: Required Uses and Disclosures: Under the law, we must make disclosures to you and when required by the Secretary of the Department of Health and Human Services to investigate or determine our compliance with the requirements of HIPAA.',
  },
  {
    kind: 'lead',
    bold: 'Other Permitted and Required Uses and Disclosures',
    rest: ' Will Be Made Only With Your Consent, Authorization or Opportunity to Object unless required by law.',
  },
  {
    kind: 'lead',
    bold: 'You may revoke this authorization,',
    rest: ' at any time, in writing, except to the extent that your physician or the physician’s practice has taken an action in reliance on the use or disclosure indicated in the authorization.',
  },
  { kind: 'heading', text: 'Your Rights' },
  {
    kind: 'p',
    text: 'The Following is a statement of your rights with respect to your protected health information.',
  },
  {
    kind: 'lead',
    bold: 'You have the right to inspect and copy your protected health information.',
    rest: ' Under federal law, however, you may not inspect or copy the following records; psychotherapy notes; information compiled in reasonable anticipation of, or use in, a civil, criminal, or administrative action or proceeding, and protected health information that is subject to law that prohibits access to protected health information.',
  },
  {
    kind: 'p',
    text: 'You have the right to request a restriction of your health information. This means you may ask us not to use or disclose any part of your protected health information for the purposes of treatment, payment or healthcare operations. You may also request that any part of your protected health information not be disclosed to family members or friends who may be involved in you care or for notification purposes described in this Notice of Privacy Practices. Your request must state the specific restriction and to whom you want the restriction to apply.',
  },
  {
    kind: 'p',
    text: 'Your physician is not required to agree to a restriction you may request. If your physician believes it is in your best interest to permit use and disclosure of your protected health information, your protected health information will not be restricted. You then have the right to use another Healthcare Professional.',
  },
  {
    kind: 'lead',
    bold: 'You have the right to request to receive confidential communications from us by alternative means or at an alternative location. You have the right to obtain a paper copy of this Notice from us,',
    rest: ' upon request, even if you have agreed to accept this Notice alternatively (i.e. electronically).',
  },
  {
    kind: 'lead',
    bold: 'You may have the right to have your physician amend your protected health information.',
    rest: ' If we deny your request for amendment, you have the right to file a statement of disagreement with us and we may prepare a rebuttal to your statement and will provide you with a copy of any such rebuttal.',
  },
  {
    kind: 'bold',
    text: 'You have the right to receive an accounting of certain disclosures we have made, if any, of your protected health information.',
  },
  {
    kind: 'p',
    text: 'We reserve the right to change the terms of this Notice and will inform you of any changes. You then have the right to object or withdraw as provided in this Notice.',
  },
  { kind: 'heading', text: 'Complaints' },
  {
    kind: 'trail',
    rest: 'You may complain to us or to the Secretary of Health and Human Services if you believe your privacy rights have been violated by us. You may file a complaint with us by notifying our privacy officer of your complaint at our office and main telephone number. ',
    bold: 'We will not retaliate against you for filing a complaint.',
  },
  {
    kind: 'p',
    text: 'This Notice was published and becomes effective on/or before 6/17/2026.',
  },
]

const bodyText = 'font-poppins text-lg leading-relaxed text-ink lg:text-xl'

function PolicyBody() {
  return (
    <Container className="pt-10 pb-12 lg:pt-12 lg:pb-20">
      <Reveal className="flex flex-col gap-5 lg:gap-6">
        {BLOCKS.map((block, i) => {
          switch (block.kind) {
            case 'heading':
              return (
                <h2 key={i} className="font-poppins text-xl font-bold text-navy sm:text-2xl lg:text-[26px]">
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
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Title hero
 * ------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="bg-page pt-32 lg:pt-40">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-poppins text-4xl font-bold leading-[1.05] text-navy sm:text-6xl lg:text-[80px]">
            Privacy Policy
          </h1>
          <p className="max-w-[1271px] font-poppins text-base font-bold uppercase leading-snug text-navy/60 sm:text-xl lg:text-2xl">
            This notice describes how medical information about you may be used and disclosed and how you can get access
            to this information. Please review it carefully.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Visit our Roanoke Clinic — map + copy, then Office Hours / Urgent Care / CTAs
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
          <a href={`tel:+16828311591`} className="font-bold text-navy hover:text-accent">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <PolicyBody />
        <ClinicVisit />
      </main>
      <Footer />
    </div>
  )
}
