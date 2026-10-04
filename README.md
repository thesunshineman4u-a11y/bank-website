# Banking Insight × AI Growth

A production-ready lead-generation website for a Nepal-based digital growth consultancy combining corporate banking experience with AI-powered marketing. The site includes a conversion-focused homepage, About, Services, service details, content hub, article templates, Contact, legal placeholders, SEO infrastructure, analytics hooks, and a transparent booking/form integration path.

## Stack

- Next.js App Router, React, and TypeScript
- Tailwind CSS 4 plus project-specific design tokens and responsive CSS
- Lucide icons
- Zod validation
- Vinext / Cloudflare Workers build used by OpenAI Sites

## Local development

```bash
pnpm install
pnpm dev
```

Open the local URL printed by the development command.

## Production build

```bash
pnpm build
```

The Sites workflow creates the verified Cloudflare-compatible build and deployment archive.

## Configuration

Copy `.env.example` to `.env.local` and set only the services you use:

- `NEXT_PUBLIC_SITE_URL`: final public origin used by canonical links, sitemap, and structured data.
- `NEXT_PUBLIC_BOOKING_URL`: a full Calendly or Cal.com scheduling URL. When omitted, consultation CTAs route to the contact form and clearly say booking is coming soon.
- `FORMSPREE_ENDPOINT`: server-side Formspree endpoint. Without it, the form validates but openly states that delivery is not connected. The API route can be adapted to Resend, SendGrid, HubSpot, or another CRM.
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 measurement ID.
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager container ID.
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID.

No secrets should use a `NEXT_PUBLIC_` prefix. Configure production values through the hosting environment rather than committing them.

## Editing business details

Update `lib/config.ts`. The organization name, founder, role, qualifications, contact placeholders, location, booking URL, and site URL are centralized there.

## Editing services

Service content lives in `content/services.ts`. Each item generates:

- a homepage card;
- an entry on `/services`; and
- a detail route at `/services/[slug]`.

Keep slugs unique and URL-safe. The route list is generated automatically.

## Editing and adding articles

Blog content lives in `content/blog.ts`. Add an item to the `articles` array with a unique slug, category, title, excerpt, date, reading time, and structured sections. It automatically appears in the filterable content hub and generates `/blog/[slug]` with metadata and `BlogPosting` structured data.

For a future CMS, replace these TypeScript arrays with content fetched from Sanity, Contentful, Strapi, Payload, or a headless WordPress API while keeping the UI components and types.

## Booking integration

Set `NEXT_PUBLIC_BOOKING_URL` to a valid Calendly or Cal.com event URL. Consultation buttons will open it in a new tab. If it is absent, the site never renders a fake or broken calendar; visitors are directed to the consultation form.

## Contact form integration

The form posts to `/api/contact`, which provides server-side validation, a honeypot, input limits, and a lightweight per-instance rate limit. Set `FORMSPREE_ENDPOINT` to activate delivery. For another provider, replace the forwarding block in `app/api/contact/route.ts`; store API keys only as server-side hosting secrets.

For high-volume production use, replace the in-memory limiter with a durable rate-limiting service because serverless instances do not share memory.

## Analytics and conversion events

Analytics scripts are injected only when their environment variables are present. `lib/analytics.ts` defines the event vocabulary:

- `consultation_cta_click`
- `contact_form_start`
- `contact_form_submit`
- `service_view`
- `blog_article_view`
- `phone_click`
- `email_click`
- `booking_click`

Extend click handlers as you connect real contact details and campaign destinations. Review consent and privacy requirements before enabling analytics or advertising tools.

## SEO

The project includes route metadata, canonical support, Open Graph and X metadata, `sitemap.xml`, `robots.txt`, Organization/ProfessionalService structured data, BlogPosting data, semantic headings, and accessible breadcrumbs. Set the final production URL before launch.

## Deployment

The project is configured for OpenAI Sites. It can also be adapted for Vercel: connect the repository, add environment variables, and use the standard Next.js build command. Confirm the final URL, form provider, analytics consent, and legal copy after deployment.

## Before public launch

1. Replace all bracketed personal and organization placeholders in `lib/config.ts`.
2. Add a professional photo or intentionally keep the current branded placeholder.
3. Connect a booking URL and message-delivery provider.
4. Review Privacy Policy and Terms with qualified legal counsel.
5. Verify all financial product statements against current official information.
6. Test analytics and conversion events in the selected platforms.
