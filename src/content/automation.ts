import { method } from './method'

/**
 * The live automation diagram on Home: one repeat task's journey from done-by-hand to a managed
 * workflow, drawn stage by stage as the page scrolls (repeat task -> slow spot -> starting point ->
 * connected tools -> AI assist -> human check -> outcomes).
 *
 * Coordinates are in the diagram's own 1200 x 600 units: the main path is the top row, the outcomes
 * the bottom row. `plane` is who moves it: `lead` = your team, `auto` = the system does it.
 * `step` is the method step (0, 1 or 2: the three steps in method.ts). Nodes are listed in build order.
 */
export type FlowPlane = 'lead' | 'auto'
export type FlowIcon = 'form' | 'email' | 'booked' | 'reminder' | 'alarm' | 'call' | 'proposal' | 'won' | 'later' | 'nurture' | 'lost'

export type FlowNode = {
  id: string
  title: string
  tag: string
  plane: FlowPlane
  icon: FlowIcon
  x: number
  y: number
  w: number
  h: number
  step: number
  /** One line for the inspector. */
  about: string
}

/** `solid` links are the main path (arrows a packet runs); `dashed` links reroute it: a refinement loops back, the check branches out. */
export type FlowLink = { from: string; to: string; style: 'solid' | 'dashed'; label?: string }

const ROWS = [64, 376]
const box = (col: number, row: number) => ({ x: 24 + col * 200, y: ROWS[row]!, w: 156, h: 136 })


export const liveAutomation = {
  eyebrow: 'Live automation',
  titleThin: 'Audit. Integrate.',
  titleBold: 'Workflow Care.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'Manual to', rest: 'Managed Workflow.' },
  legend: { auto: 'Automation', lead: 'Your team' },
  zones: { booking: 'Your Tools', pipeline: 'Keeping It Running' },
  connected: 'System live',
  hint: { hover: 'Hover a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    { id: 'form', title: 'Repeat Task', tag: 'Done by hand', plane: 'lead', icon: 'form', ...box(0, 0), step: 0, about: 'A recurring task your team does by hand, the same way, again and again.' },
    { id: 'email', title: 'Slow Spot', tag: 'Where it stalls', plane: 'lead', icon: 'email', ...box(1, 0), step: 0, about: 'The point where messages pile up, work waits, and your team keeps doing it manually.' },
    { id: 'booked', title: 'Starting Point', tag: 'Clear next step', plane: 'lead', icon: 'booked', ...box(2, 0), step: 0, about: 'You leave the audit with one clear place to start making it simpler.' },
    { id: 'day', title: 'Tools Connected', tag: 'Less copying', plane: 'auto', icon: 'reminder', ...box(3, 0), step: 1, about: 'The tools you already use are linked, so less time goes on copying, sorting, and chasing updates.' },
    { id: 'hour', title: 'AI Assist', tag: 'Sort + draft', plane: 'auto', icon: 'alarm', ...box(4, 0), step: 1, about: 'Where it helps, AI organizes incoming messages or prepares drafts.' },
    { id: 'call', title: 'Human Check', tag: 'People decide', plane: 'lead', icon: 'call', ...box(5, 0), step: 1, about: 'A person reviews the draft before anything goes out. Judgment stays with your team.' },
    { id: 'proposal', title: 'Workflow Live', tag: 'Approved', plane: 'lead', icon: 'proposal', ...box(0, 1), step: 2, about: 'The checked workflow goes live, with clear instructions for your team.' },
    { id: 'later', title: 'Needs a Fix', tag: 'Troubleshoot', plane: 'lead', icon: 'later', ...box(3, 1), step: 2, about: 'When a tool or your business changes, the workflow gets troubleshooting and a tweak.' },
    { id: 'lost', title: 'Stay Manual', tag: 'Not worth it', plane: 'lead', icon: 'lost', ...box(5, 1), step: 2, about: 'Some tasks are better left as they are, and that is a perfectly good answer.' },
    { id: 'won', title: 'Running Smoothly', tag: 'Steady', plane: 'auto', icon: 'won', ...box(1, 1), step: 2, about: 'The workflow runs quietly in the background, with agreed support if it needs one.' },
    { id: 'nurture', title: 'Kept Current', tag: 'Updated steps', plane: 'auto', icon: 'nurture', ...box(4, 1), step: 2, about: 'The steps and instructions are updated, so the workflow stays useful as things change.' },
  ] satisfies FlowNode[],
  links: [
    { from: 'form', to: 'email', style: 'solid' },
    { from: 'email', to: 'booked', style: 'solid' },
    { from: 'booked', to: 'day', style: 'solid' },
    { from: 'day', to: 'hour', style: 'solid' },
    { from: 'hour', to: 'call', style: 'solid' },
    { from: 'hour', to: 'booked', style: 'dashed', label: 'Refine the steps' },
    { from: 'call', to: 'proposal', style: 'dashed' },
    { from: 'call', to: 'later', style: 'dashed' },
    { from: 'call', to: 'lost', style: 'dashed' },
    { from: 'proposal', to: 'won', style: 'solid' },
    { from: 'later', to: 'nurture', style: 'solid' },
  ] satisfies FlowLink[],
}