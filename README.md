# New Nomads Academy Boilerplate

Production-ready Next.js App Router starter for Figma-to-code workflows with:
- Tailwind design token hooks for fast visual matching
- Cal.com booking embed
- byl.mn payment invoice and callback API scaffolding

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env.local
```

3. Run dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Environment Variables

Set these in .env.local:

- NEXT_PUBLIC_CAL_LINK
- BYL_API_BASE_URL
- BYL_PROJECT_ID
- BYL_MODE
- BYL_API_TOKEN
- BYL_WEBHOOK_SECRET

Typography notes:
- Students provide a Figma MCP link directly in the prompt/chat (not in `.env.local`).
- Copilot reads typography from the shared Figma context and updates `lib/design-tokens.ts` (`primaryFontFamily`).
- The app only loads Google-hosted UTF-8-safe fonts from an allowlist.
- If the chosen font is not in the allowlist, it falls back to Inter automatically.
- Do not add Figma link or Figma token environment variables for font setup.

## Student Prompt Template

Use this exact prompt pattern when starting from a Figma MCP link:

"Here is my Figma MCP link: <PASTE_LINK>. Read the design context, set `DESIGN_TYPOGRAPHY.primaryFontFamily` in `lib/design-tokens.ts` from the Figma typography, keep only Google UTF-8-safe fonts, and implement the page sections to match the design."

Payment notes:
- `BYL_MODE=test` keeps the flow in test mode and normalizes invoice creation for safe development.
- `BYL_MODE=live` uses the real project endpoint and real invoice amounts.
- If `BYL_API_TOKEN` or `BYL_PROJECT_ID` is missing, the app falls back to a mock payment link so the UI still works during development.

## Boilerplate Structure

```text
app/
	api/payment/create-invoice/route.ts
	api/payment/callback/route.ts
	globals.css
	layout.tsx
	page.tsx
components/
	ui/
		button.tsx
		input.tsx
		modal.tsx
	sections/
		HeroSection.tsx
		FeaturesSection.tsx
		PricingSection.tsx
		BookingEmbed.tsx
		CheckoutForm.tsx
lib/
	byl.ts
	cal.ts
	utils.ts
types/
	booking.ts
	payment.ts
public/assets/
	images/
	icons/
	logos/
	README.md
```

## Student Workflow

1. Share the Figma MCP link in prompt/chat.
2. Let Copilot read typography and set `lib/design-tokens.ts` (`DESIGN_TYPOGRAPHY.primaryFontFamily`).
3. Export assets from Figma and place them in public/assets (do not hotlink Figma URLs).
4. Map design tokens in app/globals.css and tailwind.config.ts.
5. Build reusable atoms in components/ui.
6. Compose pages from components/sections.
7. Replace mocked byl.mn payload mapping in lib/byl.ts with your production contract.

## Run Notes

- `npm run dev` starts the local app in development mode.
- `npm run build` validates the production build.
- The project is structured so these commands work without extra manual file setup, as long as dependencies are installed and `.env.local` is present when you want real payment behavior.
