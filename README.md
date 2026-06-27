# RCMAlpha — Next.js Website

Modern, professional redesign of rcmalpha.vercel.app built with Next.js 14 + TypeScript + CSS Modules.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Design tokens & global styles
└── components/
    ├── Navbar.tsx / .module.css
    ├── Hero.tsx / .module.css
    ├── WhyChoose.tsx / .module.css
    ├── Curriculum.tsx / .module.css
    ├── Pricing.tsx / .module.css
    ├── Instructor.tsx / .module.css
    ├── Careers.tsx / .module.css
    ├── Contact.tsx / .module.css
    └── Footer.tsx / .module.css
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done!

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (zero external CSS libraries)
- **Google Fonts** — Plus Jakarta Sans + Inter

## Customization
- Colors → `src/app/globals.css` (`:root` variables)
- Content → edit the data arrays inside each component
- Add form backend → replace the `handleSubmit` in `Contact.tsx` with your API call (e.g. EmailJS, Resend, Formspree)
