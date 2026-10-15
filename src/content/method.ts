import type { MethodStep } from './schema'

/** Your method: the three jobs your service does for a client, in order. It names the steps of the Home automation diagram. */
export const method = {
  eyebrow: 'Human expertise. Practical AI.',
  title: 'PROCESS AUDIT. AUTOMATION & AI INTEGRATION. ONGOING WORKFLOW CARE.',
  summary: 'Start with one task. Make the day a little easier',
  steps: [
    { name: 'Process Audit', body: 'We look at how a recurring task gets done, where it slows down, and what your team keeps doing by hand. You leave with a clear starting point for making it simpler.', inputs: ['Input A', 'Input B', 'Input C', 'Input D'] },
    { name: 'Automation & AI Integration', body: 'Connect the tools you already use so your team can spend less time copying, sorting, and chasing updates. Where it helps, AI can organize incoming messages or prepare drafts for someone to check.', inputs: ['Input A', 'Input B', 'Input C'] },
    { name: 'Ongoing Workflow Care', body: 'Keep your workflow useful as your tools and business change, with troubleshooting, clear instructions, and agreed support.', inputs: ['Input A', 'Input B', 'Input C'] },
  ] satisfies MethodStep[],
}
