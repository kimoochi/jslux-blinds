# JS Lux Blinds Website

Premium single-page website for **JS Lux Blinds** — custom Korean window blinds.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Web3Forms**.

---

## 🚀 Quick Start

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main page (all sections composed here)
│   └── globals.css         # Design system CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky animated navbar
│   │   └── Footer.tsx      # Footer with links & social
│   ├── sections/
│   │   ├── Hero.tsx        # Full-viewport hero
│   │   ├── About.tsx       # Company story
│   │   ├── Products.tsx    # 6-product card grid
│   │   ├── WhyChooseUs.tsx # Selling points
│   │   ├── Gallery.tsx     # Photo grid + lightbox
│   │   ├── Quote.tsx       # Quote request form
│   │   ├── Testimonials.tsx# Client reviews carousel
│   │   └── Contact.tsx     # Map + contact info
│   └── ui/
│       └── AnimatedSection.tsx  # Scroll-reveal wrapper
├── lib/
│   └── constants.ts        # All site data & config
└── types/
    └── index.ts
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Free key from [web3forms.com](https://web3forms.com) |
| `NEXT_PUBLIC_SITE_URL` | Your deployed domain |
| `NEXT_PUBLIC_BUSINESS_ADDRESS` | Business address |
| `NEXT_PUBLIC_BUSINESS_PHONE` | Business phone |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Business email |
| `NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAY` | Weekday hours |
| `NEXT_PUBLIC_BUSINESS_HOURS_WEEKEND` | Weekend hours |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook page URL |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram URL |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Google Maps embed src |

---

## 🌐 Deployment

### Vercel (Recommended — Free)
1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel Dashboard → Settings → Environment Variables
4. Deploy!

### Netlify
1. `npm run build`
2. Deploy the `.next` folder (or connect GitHub)
3. Add env vars in Netlify Dashboard → Site Settings → Environment Variables

---

## 📝 Form Setup (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address and click **"Create Access Key"**
3. Copy the key and paste it into `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`
4. Form submissions will be delivered to your email — **free forever, no account needed**

---

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors.brand`
- **Content**: Edit `src/lib/constants.ts` — all text, products, testimonials, gallery items
- **Logo**: Replace `public/logo.png` with your actual logo file
- **Images**: Replace files in `public/images/` with your real photos
- **Fonts**: Change in `src/app/layout.tsx` (uses `next/font/google`)

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15+ | Framework |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4+ | Styling |
| Framer Motion | latest | Animations |
| Lucide React | latest | Icons |
| React Hook Form | latest | Form state |
| Zod | latest | Validation |
| Web3Forms | Free API | Form submission |

---

© 2025 JS Lux Blinds. All rights reserved.
