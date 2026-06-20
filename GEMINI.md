# Gemini Project Instructions

This repository is a New Nomads Academy Next.js boilerplate for turning Figma designs into implementation-ready code.

## What to optimize for
- Fast, accurate interpretation of Figma MCP links
- Clean, student-friendly implementation steps
- Premium visual polish with minimal complexity
- Safe, typed integrations for Cal.com and byl.mn

## Repository Rules
- Keep the homepage focused and instructional.
- Keep token definitions centralized.
- Keep section components small and readable.
- Keep payment logic on the server.

## Recommended Workflow
1. Inspect `README.md`, `app/page.tsx`, `app/layout.tsx`, `components/sections/`, and `lib/` before changing anything.
2. Convert design requirements into tokens and component structure first.
3. Add or update the smallest number of files needed.
4. Validate with lint/build before finishing.

## Figma Guidance
- When given a Figma MCP link, extract layout intent, spacing scale, component hierarchy, and asset needs.
- Document how students should translate the design into code.
- Prefer locally stored assets from `public/assets`.

## Code Style
- Use TypeScript types for request and response data.
- Prefer small reusable components over large monolithic files.
- Favor strong visual hierarchy and restrained motion.
- Avoid default-looking layouts and generic starter styles.

## Payment Guidance
- byl.mn invoice creation should be handled server-side.
- Callback handling should validate incoming payloads and signatures when available.
- Keep mock behavior explicit and easy to replace with live credentials.

## Delivery Expectations
- Keep explanations concise and actionable.
- If you change behavior, update the README or env example as needed.
- Always mention any assumptions that matter to implementation.
