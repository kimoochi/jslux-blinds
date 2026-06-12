// =============================================
// Site-wide constants & data
// =============================================

export const SITE_NAME = "JS Lux Blinds";
export const SITE_TAGLINE =
  "Customized Korean Window Blinds. Elegance and Style on your windows.";
export const SITE_DESCRIPTION =
  "JS Lux Blinds offers premium custom Korean window blinds — the finest dual-layer zebra blinds crafted for elegance, light control, and privacy. Affordable price without compromising quality. Serving Mindanao and Visayas.";

export const CONTACT = {
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Cebu City, Philippines",
  phone:   process.env.NEXT_PUBLIC_BUSINESS_PHONE   ?? "+63 XXX XXX XXXX",
  email:   process.env.NEXT_PUBLIC_BUSINESS_EMAIL   ?? "info@jsluxblinds.com",
  hoursWeekday: process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAY ?? "Monday – Saturday: 8:00 AM – 6:00 PM",
  hoursWeekend: process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKEND ?? "Sunday: By Appointment Only",
  facebook:  process.env.NEXT_PUBLIC_FACEBOOK_URL  ?? "https://facebook.com/jsluxblinds",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/jsluxblinds",
  mapEmbed:  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125809.63738515178!2d123.84830264013964!3d10.295443373862327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99b2a68a6d4b9%3A0x5c5e7f5d4f3b2a1!2sCebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1234567890",
};

export const NAV_LINKS = [
  { label: "Home",     href: "/"             },
  { label: "About",    href: "/about"        },
  { label: "Fabrics",  href: "/fabrics"      },
  { label: "Gallery",  href: "/gallery"      },
  { label: "Quote",    href: "/quote"        },
  { label: "Contact",  href: "/contact"      },
];

export const WHY_CHOOSE_US = [
  {
    icon: "BadgeCheck",
    title: "Premium Korean Quality",
    description:
      "Our blinds are sourced from top Korean manufacturers, renowned for their superior fabrics and precise engineering.",
  },
  {
    icon: "Ruler",
    title: "Custom Sizing",
    description:
      "Every blind is made-to-measure for your exact window dimensions — no awkward gaps or ill-fitting panels.",
  },
  {
    icon: "Wallet",
    title: "Affordable Pricing",
    description:
      "Luxury doesn't have to break the bank. We offer competitive pricing without compromising on quality.",
  },
  {
    icon: "Wrench",
    title: "Professional Installation",
    description:
      "Our trained installers ensure a flawless, secure fit every time. Sit back and let us handle everything.",
  },
  {
    icon: "ShieldCheck",
    title: "Warranty Included",
    description:
      "Every purchase comes with a manufacturer's warranty so you can shop with complete peace of mind.",
  },
  {
    icon: "Palette",
    title: "Wide Style Selection",
    description:
      "From minimalist to traditional, we have hundreds of fabric colors, textures, and opacities to match your vision.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Santos",
    location: "Cebu City",
    rating: 5,
    review:
      "Absolutely love our new zebra blinds! The quality exceeded our expectations and the installation team was so professional. Will definitely order more for our other rooms.",
    product: "Zebra Blinds",
  },
  {
    name: "John & Claire Reyes",
    location: "Davao City",
    rating: 5,
    review:
      "We got motorized blinds for our living room and bedroom. The difference is amazing — controlling them with our phones feels so luxurious. Very reasonably priced!",
    product: "Motorized Blinds",
  },
  {
    name: "Ana Lim",
    location: "Iloilo City",
    rating: 5,
    review:
      "JS Lux Blinds transformed our whole home! The Roman blinds they installed look like something from a design magazine. Highly recommended for anyone wanting premium quality.",
    product: "Roman Blinds",
  },
  {
    name: "Robert Dela Cruz",
    location: "Cagayan de Oro",
    rating: 5,
    review:
      "Fast response, great customer service, and the blinds are top-notch. We got blackout roller blinds for the bedroom and the kids sleep so much better now.",
    product: "Roller Blinds",
  },
  {
    name: "Theresa Gonzales",
    location: "Bacolod City",
    rating: 5,
    review:
      "Excellent quality at a very affordable price. The sheer curtains in our sala are stunning — everyone who visits always compliments them. Thank you JS Lux!",
    product: "Sheer Curtains",
  },
];

export const GALLERY = [
  {
    src: "/images/home-service.png",
    fallback: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80",
    alt: "Korean blinds home service installation",
    label: "Home Service",
    location: "Home Service",
  },
  {
    src: "/images/claver.png",
    fallback: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
    alt: "Korean blinds installation in Claver, Surigao del Norte",
    label: "Home Service",
    location: "Claver, Surigao",
  },
  {
    src: "/images/itpark.png",
    fallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    alt: "Korean blinds installed at IT Park Cebu",
    label: "IT Park",
    location: "IT Park, Cebu",
  },
  {
    src: "/images/kauswagan.png",
    fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    alt: "Korean blinds installation in Kauswagan, Iligan City",
    label: "Kauswagan",
    location: "Kauswagan, Iligan",
  },
  {
    src: "/images/workplace.png",
    fallback: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    alt: "Korean blinds at Workplace Cafe Cebu",
    label: "Workplace Cafe",
    location: "Workplace Cafe, Cebu",
  },
];

export const ROOM_TYPES = [
  "Living Room",
  "Bedroom",
  "Home Office",
  "Dining Room",
  "Bathroom",
  "Kitchen",
  "Commercial / Office",
  "Other",
];
