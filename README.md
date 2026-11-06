# Adhyapak Connect — website

The public site for **adhyapakconnect.in** — verified home & online tutors in
North-West Delhi. *Learning begins with trust.*

Built with Next.js 16, Tailwind CSS v4 and shadcn/ui (Base UI). See
[CLAUDE.md](CLAUDE.md) for structure and conventions.

## Getting started

```bash
cp .env.example .env.local   # fill in what you have
npm install
npm run dev                  # http://localhost:3000
```

## Go-live checklist (Build Doc §6)

- [ ] Deploy (Vercel / Netlify / Cloudflare Pages), HTTPS on
- [ ] Point `adhyapakconnect.in`; add `adhyapakconnect.com` to the same project (it 301s to `.in`)
- [ ] `NEXT_PUBLIC_DEMO_FORM_URL` = Google Form link (until then, "Book Free Demo" goes to the call band)
- [ ] `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` set — `book_demo_click`, `whatsapp_click`, `call_click`, `tutor_apply_click` fire
- [ ] Final Privacy / Terms / Refund / Service / Disclaimer text in `src/static-pages/legal`, then drop their `noindex`
- [ ] Confirm all `[CHECK]` items, then set `NEXT_PUBLIC_REVIEW_MODE=false` (hides the demo banner and markers)
- [ ] Reviews: real ones collected, or section labelled honestly (§5.2)
- [ ] Tutor directory: consent for real tutors, or keep marked as examples (§5.3)
- [ ] Submit `https://adhyapakconnect.in/sitemap.xml` in Google Search Console
- [ ] Test on a real phone over mobile data
