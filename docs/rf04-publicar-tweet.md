# RF-04: Tweet publishing

Issue: #5. Route: `/tweets/new`.

The page provides a multiline composer, a Publish button, empty-message feedback,
and confirmation with the latest published tweet. Whitespace-only messages are
rejected. New tweets receive a unique ID, an author ID and an ISO timestamp.
React renders the message as text and preserves line breaks.

`TweetsProvider` owns the in-memory collection above the social routes. Navigation
preserves publications; reloading resets the data to `mockTweets`. No backend is used.

`User` and `Tweet` in `src/exex/types/social.ts` are provisional contracts.
`mockCurrentUser` in `src/data/tweets.ts` is a temporary identity, not a login.
Replace it with the agreed authentication context when it is available.
The existing authentication pages, home page and shared header are preserved.
Open `/tweets/new` directly for now; the home-page owner can connect its Tweet link
when integrating the screens.

Bootstrap remains loaded through the existing CDN. Page-specific CSS controls
width, textarea resizing and message wrapping. The 280-character limit belongs
to Milestone 2 in the supplied assignment and is not required by this issue.

## Manual checks

- Submit an empty or whitespace-only message: an error appears without a publication.
- Publish multiline text: the form clears, confirmation appears, and the latest
  tweet shows the author's name, username, local date/time and body.
- Navigate home and return through history: the latest publication remains.
- Reload: the initial mock collection is restored.
- Check a narrow viewport and long unbroken text for horizontal overflow.

## Verification (2026-10-23)

- `npm run build`: passed.
- `npm run lint`: passed (Oxlint).
- Browser check on the production preview: empty and whitespace-only messages
  rejected; multiline publication accepted; input cleared; confirmation, author
  and timestamp displayed; navigation preserved data; reload reset the data.
- Desktop screenshot captured. A mobile viewport has not been checked.
- The dev-server attempt encountered a locked Vite dependency-cache directory
  (EPERM); the production preview on port 5180 was used for browser verification.
- Authentication integration and the home-page Tweet link remain coordination
  points with Camilo, outside this issue's implementation.
