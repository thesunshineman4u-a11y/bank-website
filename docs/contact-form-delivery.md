# Contact form email delivery

The public form posts JSON to the same-origin `/api/contact` route. The route validates the payload, applies basic origin, size, honeypot, and rate-limit checks, and submits a plain-text transactional email through Resend. A success response is returned only when Resend accepts the message and returns a message ID.

## Required Vercel environment variables

Configure these values in **Vercel → Project → Settings → Environment Variables** for Production and any Preview environment used for testing:

- `RESEND_API_KEY`: a Resend sending API key. Store it as a sensitive server-side value.
- `CONTACT_FROM_EMAIL`: a sender on a domain verified in Resend, for example `Manjushree Finance Website <website@notifications.manjushreefinance.com.np>`.
- `CONTACT_TO_EMAIL`: the organization-controlled inbox that should receive enquiries.

Never prefix these variables with `NEXT_PUBLIC_`; they must remain server-only. Redeploy after adding or changing them.

## Vercel build settings

The repository configuration is authoritative and selects the `nitro` framework preset with `pnpm run build`. Do not set a dashboard Build Command or Output Directory override. Nitro detects Vercel during the build and writes the Vercel Build Output API structure to `.vercel/output`, including the server function that handles `/api/contact`.

## Provider setup

1. Create or use an organization-controlled Resend account.
2. Add a dedicated sending subdomain, such as `notifications.manjushreefinance.com.np`.
3. Publish the DNS records supplied by Resend and wait for the domain to show as verified.
4. Create a sending-only API key and store it as `RESEND_API_KEY` in Vercel.
5. Set `CONTACT_FROM_EMAIL` to an address on the verified domain.
6. Set `CONTACT_TO_EMAIL` to the designated monitored inbox.
7. Redeploy, submit a non-sensitive test enquiry, confirm the API returns HTTP 202, confirm a Resend message ID appears in Vercel logs, and confirm the message arrives in the designated inbox.

An HTTP 202 response confirms provider acceptance, not final inbox placement. Check Resend delivery events and the destination inbox before declaring end-to-end delivery successful.
