# Codex Project Instructions

You are working on a Next.js App Router boilerplate for New Nomads Academy.

## Primary Objective
Help students convert Figma MCP links into polished frontend implementations with as little friction as possible.

## Core Constraints
- TypeScript strict mode stays on.
- Tailwind token system must remain centralized.
- The homepage should stay lightweight and instructional.
- Public assets must be local.
- Payment and webhook logic must remain server-side.

## When Editing
- Make the smallest change that solves the task.
- Prefer the owning component or utility rather than broad refactors.
- Avoid unnecessary abstractions.
- Preserve existing file organization and naming conventions.

## Figma Implementation Workflow
1. Read the Figma MCP link or design context.
2. Identify tokens, hierarchy, sections, and asset references.
3. Update `app/globals.css` and `tailwind.config.ts` if the visual system changes.
4. Update the relevant section or UI component.
5. Update docs if the setup or environment contract changed.

## Validation Rules
- Run `npm run lint` after editing application code.
- Run `npm run build` before closing the task when possible.
- If validation fails, fix the exact failing slice before widening scope.

## Visual Style Guidance
- Use layered gradients and refined surfaces instead of flat white blocks.
- Keep typography intentional and balanced.
- Favor premium spacing and composition over busy decoration.

## Integration Notes
- Cal.com link is configured via `NEXT_PUBLIC_CAL_LINK`.
- byl.mn configuration is read from `.env.local`.
- Any mock invoice or checkout behavior should be clearly labeled as mock or fallback.

## Communication Style
- Be direct and concrete.
- State assumptions only when they matter.
- Do not overexplain when a short instruction is enough.
