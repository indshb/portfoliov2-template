import type { Faq, Image, ProductFilm, ProductTab } from './schema'
import { externalLinks } from './site'

/** The address shown in the browser-window bars around the film and the room screens. */
export const showcaseHost = 'Workflow Optimization'

export const showcasePage = {
  eyebrow: 'DIGITAL SERVICES · REMOTE OPERATIONS · AI AUTOMATION',
  titleThin: 'Less Chasing.',
  titleBold: 'Clear Work.',
  lede: 'More room for your business.',
  footnote: 'I use established, widely used tools to bring structure to your daily operations. Start with the systems you have, solve the steps that slow you down, and give your team a clearer way to work.',
  cta: { label: 'Talk about your workflow', href: externalLinks.showcase, external: true },
  roomsTitle: 'case studies',
}

/** A room capture (1600 wide) with 800 / 1200 copies: the rooms show at 343-970px (scripts/make-image-variants.py). */
const room = (file: string, alt: string, height: number): Image => ({
  src: `/images/showcase/${file}.webp`,
  alt,
  width: 1600,
  height,
  srcSet: `/images/showcase/800/${file}.webp 800w, /images/showcase/1200/${file}.webp 1200w, /images/showcase/${file}.webp 1600w`,
})

/** The product film: a short muted loop, no audio. Keep it small (a couple of MB). */
export const showcaseFilm: ProductFilm = {
  src: '/media/showcase-film.mp4',
  poster: { src: '/images/showcase/film-poster.webp', alt: 'Product Name film', width: 1280, height: 720 },
  pagePosters: { phone: '/images/showcase/film-poster-640.webp', wide: '/images/showcase/film-poster-960.webp' },
  name: 'Product Name: a short tour',
  description: 'PLACEHOLDER - tell me what to put here: one sentence on what the film shows, in the order it shows it.',
  duration: '0:10',
  // The date the film was first published (YYYY-MM-DD), used in the page's structured data.
  published: '2026-01-01',
}

/** Number + unit. Use only figures you can state as fact. */
export const showcaseStats: [string, string][] = [
  ['10+', 'years in banking ops'],
  ['4', 'ways I help'],
  ['2', 'sides to every build: human + AI'],
  ['3-4', 'hours of US Pacific overlap'],
]

/** The five rooms of the product, each with a caption and a screen. */
export const productTabs: ProductTab[] = [
  {
    id: 'room-1',
    label: 'AI Receptionist',
    body: 'AI RECEPTIONIST USING VAPI - When you are busy serving customers, appointment requests can become another task to keep up with. This project connects a Vapi voice assistant to an n8n workflow for checking availability and managing bookings.',
    image: room('room-1-v2', 'Screen of the first room', 1000),
  },
  {
    id: 'room-2',
    label: 'Knowledge Base Assistant (RAG)',
    body: 'An AI chatbot that answers customer questions using a business\’s own documents, and updates automatically when the owner edits a Google Doc.',
    image: room('room-2-v2', 'Screen of the second room', 1000),
  },
  {
    id: 'room-3',
    label: 'Automated Bank Transaction Export & Task Delivery',
    body: 'An automation that pulls bank account transactions from Xero, saves them as a dated CSV file, and uploads it to Asana, so the finance data reaches the team without anyone exporting it by hand. Built with Make, Xero, and Asana.',
    image: room('room-3-v2', 'Screen of the third room', 1000),
  },
  // {
  //   id: 'room-4',
  //   label: 'Room Four',
  //   body: 'PLACEHOLDER - tell me what to put here: two sentences on what this part of the product does for the person using it.',
  //   image: room('room-4', 'Screen of the fourth room', 1000),
  // },
  // {
  //   id: 'room-5',
  //   label: 'Room Five',
  //   body: 'PLACEHOLDER - tell me what to put here: two sentences on what this part of the product does for the person using it.',
  //   image: room('room-5', 'Screen of the fifth room', 1000),
  // },
]

/** Three questions people ask about the product, answered the way the product itself answers them. */
 export const showcaseFaq: Faq[] = [
   {
     question: 'What tools do you use?',
     answer: 'I integrate with your existing stack (Shopify, QuickBooks, CRMs, APIs, Gmail, spreadsheets). No new software. I automate directly within your current tools, adding intelligence and workflow logic without disrupting a familiar environment.'},
   {
     question: 'How long does setup take?',
     answer: 'First workflow automated within 5 business days. Full automation suite operational within 2-4 weeks. I work inside your existing processes, so there is no learning curve or system migration. Your team keeps doing what they know.',
   },
   {
     question: 'What happens when an automation breaks or fails?',
     answer: 'Built-in error recovery with human handoffs and real-time alerts — no silent failures. 48-hour fix.',
   },
 ]
