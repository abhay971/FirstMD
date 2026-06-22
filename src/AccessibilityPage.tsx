/**
 * First MD — Accessibility Statement page (/accessibility). Uses the shared
 * LegalDocPage scaffold; this file only supplies the title and body content.
 */

import LegalDocPage, { type Block } from './LegalDocPage'

const BLOCKS: Block[] = [
  { kind: 'heading', text: 'General' },
  {
    kind: 'p',
    text: 'First MD Family Walk-In Clinic strives to ensure that its services are accessible to people with disabilities. First MD Family Walk-In Clinic has invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.',
  },
  { kind: 'heading', text: 'Accessibility on www.roanokefirstmed.com' },
  {
    kind: 'p',
    text: 'First MD Family Walk-In Clinic makes available an accessibility tool that is powered by a dedicated server. The software allows www.roanokefirstmed.com to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).',
  },
  { kind: 'heading', text: 'Enabling the Accessibility Menu' },
  {
    kind: 'p',
    text: 'The www.roanokefirstmed.com accessibility menu can be enabled by clicking the accessibility menu icon that appears on the corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety.',
  },
  { kind: 'heading', text: 'Disclaimer' },
  {
    kind: 'p',
    text: 'First MD Family Walk-In Clinic continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities.',
  },
  {
    kind: 'p',
    text: 'Despite our efforts to make all pages and content on www.roanokefirstmed.com fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution.',
  },
  { kind: 'heading', text: 'Here For You' },
  {
    kind: 'p',
    text: 'If you are experiencing difficulty with any content on www.roanokefirstmed.com or require assistance with any part of our site, please contact us and we will be happy to assist.',
  },
  { kind: 'heading', text: 'Contact Us' },
  {
    kind: 'p',
    text: 'If you wish to report an accessibility issue, have any questions or need assistance, please contact First MD Family Walk-In Clinic as follows:',
  },
]

export default function AccessibilityPage() {
  return <LegalDocPage title="Accessibility Statement" blocks={BLOCKS} />
}
