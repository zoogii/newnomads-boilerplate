# Claude Project Instructions

You are working in the New Nomads Academy Next.js boilerplate.

## Goal
Build and maintain a premium, production-ready, Figma-first frontend starter that students can extend quickly from a Figma MCP link.

## Stack
- Next.js App Router
- TypeScript with `strict: true`
- Tailwind CSS
- Lucide React
- Cal.com embed
- byl.mn payment scaffolding

## Current Product Shape
- The homepage is intentionally a single hero-led instruction page.
- The hero explains the workflow students should follow when they receive a Figma MCP link.
- Keep the page elegant, minimal, and premium.

## Agent Workflow
1. Start from the most concrete file or failing behavior.
2. Prefer the smallest focused change.
3. Validate with `npm run lint` and `npm run build` after edits.
4. Do not widen scope unless the current slice is stable.

## Figma-to-Code Rules
- Treat a Figma MCP link as the source of truth for layout, spacing, hierarchy, and asset placement.
- Read the Figma MCP link from the user prompt, not from environment variables.
- Set typography through `lib/design-tokens.ts` (`DESIGN_TYPOGRAPHY.primaryFontFamily`) based on Figma context.
- Keep typography limited to Google-hosted UTF-8-safe fonts with Inter fallback.
- Map design tokens in `app/globals.css` and `tailwind.config.ts` first.
- Reuse existing components before creating new ones.
- Add assets locally under `public/assets`; never hotlink Figma images in production code.

## Design Direction
- Avoid generic or flat visuals.
- Prefer layered gradients, soft shadows, restrained borders, and strong typographic hierarchy.
- Keep the interface premium, calm, and easy to read.

## Integration Rules
- Cal.com link comes from `NEXT_PUBLIC_CAL_LINK`.
- byl.mn environment settings come from `.env.local`.
- Keep payment and callback routes server-side.
- Use typed request/response contracts in `lib/byl.ts` and `types/`.

## Editing Rules
- Use ASCII unless a file already contains Unicode.
- Preserve existing conventions.
- Do not revert unrelated user changes.
- Keep comments short and only when the code is not self-explanatory.

## Validation
- Required after meaningful changes:
  - `npm run lint`
  - `npm run build`
- If a change affects runtime behavior, update the relevant docs or example env file.
