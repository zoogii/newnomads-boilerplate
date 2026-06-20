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

1. Export assets from Figma and place them in public/assets (do not hotlink Figma URLs).
2. Map design tokens in app/globals.css and tailwind.config.ts.
3. Build reusable atoms in components/ui.
4. Compose pages from components/sections.
5. Replace mocked byl.mn payload mapping in lib/byl.ts with your production contract.

## Run Notes

- `npm run dev` starts the local app in development mode.
- `npm run build` validates the production build.
- The project is structured so these commands work without extra manual file setup, as long as dependencies are installed and `.env.local` is present when you want real payment behavior.
