import type { Image, ToolMark } from './schema'
import { certification, externalLinks, site } from './site'
import { tools } from './tools'

/**
 * The Home About section: the desk illustration stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'My approach starts with understanding the task, the people doing it, and the output they need.',
  lead: 'I spent 10 years in banking—supporting customers, leading a team, and finding better ways to get everyday work done.',
  leadQuiet: 'Today, I build practical AI and automation workflows that simplify operations, reduce repetitive tasks, and give people more time for work that needs their attention.',
  note: {
    company: `I am an ${site.brand}`,
    product: { label: 'I connect the tools, tasks, and people behind everyday operations—building practical workflows that reduce manual work and keep things moving.', href: externalLinks.showcase },
    //rest: 'PLACEHOLDER - tell me what to put here: one sentence on how the product relates to your company, or delete this note.',
  },
  picture: {
    src: '/images/profile/desk-v2.webp',
    srcSet: '/images/profile/800/desk-v2.webp 800w, /images/profile/desk-v2.webp 1200w',
    alt: `Illustration of ${site.name} at a desk, working at a monitor with a coffee beside them`,
    width: 1200,
    height: 889,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'Workflow Automation', tools: [tools.toolD, tools.toolE, tools.toolK] },
  { title: 'Data Preparation & Reporting', tools: [tools.toolC, tools.toolG] },
  { title: 'AI Lead Intake & Follow-ups', tools: [tools.toolA, tools.toolB, tools.toolC, tools.toolH] },
  { title: 'Process Documentation & Team Support', tools: [tools.toolF, tools.toolG, tools.toolJ] },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  /** A dark-theme version of the mark, when the light one would vanish on a dark ground (or the reverse). */
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'cert', title: certification.title, detail: certification.detail, image: { ...certification.image!, alt: '' } },
  { id: 'place', title: `Based ${site.timePlace}`, detail: 'GMT+8, PHILIPPINES' },
  {
    id: 'community',
    title: 'Banking / Finance',
    detail: 'Admin & Operations',
    href: '#',
    image: { src: '/images/badges/64/community.webp', alt: '', width: 64, height: 64 },
  },
  // {
  //   id: 'partner',
  //   title: 'Your Partner',
  //   detail: 'Your role',
  //   href: '#',
  //   image: { src: '/images/badges/64/partner-light.webp', alt: '', width: 64, height: 64 },
  //   imageDark: { src: '/images/badges/64/partner.webp', alt: '', width: 64, height: 64 },
  // },
]
