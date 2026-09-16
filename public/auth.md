# auth.md — Taxi Service KSA

## Booking a transfer: no authentication required

Booking a private taxi/chauffeur transfer through Taxi Service KSA does
**not** require account registration, login, or an OAuth flow of any
kind. Any agent (human or AI) can submit a booking request directly:

- **Booking form (human/browser):** `https://taxiserviceksa.com/booking/`
- **Booking API (agents/programmatic):** `POST https://taxiserviceksa.com/api/booking/create/`
  with a JSON body — see [`/.well-known/agent-card.json`](https://taxiserviceksa.com/.well-known/agent-card.json)
  for the supported skills, and request `Accept: text/markdown` on any
  page (e.g. `https://taxiserviceksa.com/booking/`) for a markdown
  rendering of that page's content.

There is no per-user account, API key, or bearer token needed to create
a booking, look one up, or track its status
(`https://taxiserviceksa.com/track-booking/`).

## Agent auth flow

[`/.well-known/oauth-protected-resource`](https://taxiserviceksa.com/.well-known/oauth-protected-resource)
declares this as `agent_auth`:

- `skill`: `book-taxi`
- `identity_types_supported`: `["anonymous"]` — no credential of any kind
- `register_uri`: `POST https://taxiserviceksa.com/api/booking/create/` —
  there's no separate "registration" step; submitting a booking *is* the
  action, and it returns a booking `id`
- `claim_uri`: `POST https://taxiserviceksa.com/api/booking/lookup/` —
  look up that booking's current status later using its `id` or the
  sender's email, again with no credential

## Administrative access

Taxi Service KSA's admin dashboard (`/admin/**`) is a separate,
credentialed system for the business's own staff — it is not something
a customer-facing booking agent registers for or uses. It is protected
by Supabase Auth (see
[`/.well-known/openid-configuration`](https://taxiserviceksa.com/.well-known/openid-configuration)
and
[`/.well-known/oauth-protected-resource`](https://taxiserviceksa.com/.well-known/oauth-protected-resource)
for its OIDC/OAuth metadata) and an email allowlist, and access is only
ever granted directly by the business owner. If your use case involves
booking, quoting, or tracking transfers on behalf of a user, use the
unauthenticated booking flow above instead — there is nothing to
register for.
