import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What do you actually build?',
    answer: 'Automations that eliminate repetitive tasks across your business. I build workflows that move data between systems, auto-generate reports, handle customer follow-ups, and process transactions. If you are doing it manually twice a week, I can certainly automate it.',
  },
  startSpeed: {
    question: 'How fast can you start?',
    answer: 'We can begin within 24 hours. Once you share your process and tools, we scope the automation and have a plan ready in under 48 hours. The first workflow is typically live in 5 business days or less.',
  },
  needStack: {
    question: 'Do I need a specific platform?',
    answer: 'Not at all. We work with whatever you already use. Shopify, QuickBooks, CRMs, email, spreadsheets, APIs, or databases. We integrate directly into your existing tools so your team never has to learn a new system.',
  },
  // pricing: {
  //   question: 'How much do you charge?',
  //   answer: 'PLACEHOLDER - tell me what to put here: how you price (fixed, hourly, retainer), what comes before a quote, and what is included.',
  // },
  afterWrite: {
    question: 'What happens after I write?',
    answer: 'I will review your submission and get back within 24 hours to schedule your discovery call. From there, we walk through your pain points, identify automation opportunities, and deliver your first live workflow in under a week.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
