import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Set up with care. Supported over time.',
  lede: 'Let’s talk about the task, the tools, and the support you need to keep it working.',
}

/**
 * The Home Services section: a stack of cards dealt onto a pile as the page scrolls. The display line
 * is the thin + bold pair below.
 */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Set up with care.',
  titleBold: 'Supported over time.',
  explore: 'Explore',
  /** The Work chapter each card opens, by service id (a chapter id from home.ts). */
  work: { 'service-1': 'screens' } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'AI AUTOMATION & OPERATIONS MANAGEMENT',
    summary: 'Real work. Familiar tools.',
    outcome: 'Less sorting and chasing. More time for the work that needs you.',
    bullets: [
      'Team Communication & Collaboration',
      'Centralized Document Management',
      'Data-Driven Operational Insights',
      'Tool Integration & Automation',
    ],
    tools: [tools.toolA, tools.toolD, tools.toolK, tools.toolC],
  },
]