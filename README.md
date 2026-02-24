# Church Website Design

A Next.js church website with a landing page, service information, gallery, and contact form email delivery.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI components
- Brevo SMTP API (contact form)

## Features

- Single-page church website sections:
  - Header
  - Hero
  - About
  - Livestream / Program highlight
  - Service times
  - Gallery
  - Contact form
  - Footer
- API route for contact form submissions: `app/api/send-email/route.ts`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add:

```env
BREVO_API_KEY=your_brevo_api_key
BREVO_VERIFIED_SENDER=your_verified_sender_email
```

Notes:
- `BREVO_API_KEY` is used to authenticate requests to Brevo.
- `BREVO_VERIFIED_SENDER` must be a sender email verified in your Brevo account.

### 3. Run in development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```text
app/
  api/send-email/route.ts
  layout.tsx
  page.tsx
components/
  about.tsx
  contact.tsx
  footer.tsx
  gallery.tsx
  header.tsx
  hero.tsx
  livestream.tsx
  service-times.tsx
public/
  images/
```

## Deployment

Deploy on Vercel or any Node.js host that supports Next.js.

For production, make sure the environment variables are configured on your hosting platform.
