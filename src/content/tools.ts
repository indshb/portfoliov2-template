import type { ToolMark } from './schema'

const mark = (name: string, file: string, mono?: true): ToolMark => ({ name, logo: `/images/tools/${file}`, mono })

/**
 * Every tool logo the site can show. Pages reference these, never a raw path. The twelve marks are
 * generic placeholders (public/images/tools/tool-01.svg ... tool-12.svg): swap each name and file for a
 * real tool you use. A black one-colour logo takes a third argument, `true`, so it is inverted on dark
 * grounds and never disappears.
 */
export const tools = {
  toolA: mark('n8n', 'n8n.svg'),
  toolB: mark('Gmail', 'gmail.svg'),
  toolC: mark('Google Sheets', 'google-sheets.svg'),
  toolD: mark('Make', 'make.svg'),
  toolE: mark('n8n', 'n8n.svg'),
  toolF: mark('Outlook', 'outlook.svg'),
  toolG: mark('SharePoint', 'sharepoint.svg'),
  toolH: mark('Slack', 'slack.svg'),
  toolI: mark('Vapi', 'vapi.svg'),
  toolJ: mark('Word', 'word.svg'),
  toolK: mark('Zapier', 'zapier.svg'),
  toolL: mark('Tool L', 'tool-12.svg'),
} satisfies Record<string, ToolMark>

/** The daily drivers, in the order you want them shown. */
export const dailyTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolC,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolG,
  tools.toolH,
  tools.toolI,
  tools.toolJ,
  tools.toolK,
  tools.toolL,
]
