import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Yana barber Toronto",
  tagline: "Barber shop in Etobicoke, Toronto. Haircuts and hair colour.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Etobicoke, Toronto, ON",
  siteUrl: "https://yana-barber-toronto.vercel.app",

  theme: { preset: "barber-bold" },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Barber in Etobicoke, Toronto",
    headline: "Fresh cuts and colour in Etobicoke",
    subhead: "Haircuts and hair colour by Yana. See the full price list and book your chair online in a few taps.",
    images: [
      { src: "/images/post-5.jpg", alt: "Before and after hair colour by Yana barber Toronto" },
      { src: "/images/post-3.jpg", alt: "Fresh haircut by Yana barber Toronto" },
      { src: "/images/post-4.jpg", alt: "Client in the barber shop" },
    ],
    primaryCta: { label: "Book now", href: "https://taplink.cc/yanabarber" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: ["Haircuts", "Hair colour", "Etobicoke, Toronto", "Book online"],

  menu: {
    label: "Services",
    title: "What we do",
    variant: "list",
    showPrices: false,
    priceNote: "See the full price list on the booking page.",
    groups: [
      { title: "Hair", items: [{ name: "Haircuts" }, { name: "Hair colour" }] },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-5.jpg", width: 1000, height: 1778, alt: "Hair colour before and after", caption: "Colour change", href: "https://www.instagram.com/reel/Dc4RfEEJvs2/" },
      { src: "/images/post-3.jpg", width: 1000, height: 1778, alt: "Haircut before and after", caption: "Ready for a change", href: "https://www.instagram.com/reel/DeHUZyOhYDL/" },
      { src: "/images/post-1.jpg", width: 640, height: 1138, alt: "Haircut before and after", caption: "Before and after", href: "https://www.instagram.com/reel/DeclDXhB6wR/" },
      { src: "/images/post-4.jpg", width: 720, height: 1280, alt: "Client in the shop", caption: "In the chair", href: "https://www.instagram.com/reel/DduTqK6v7Vk/" },
      { src: "/images/post-6.jpg", width: 663, height: 829, alt: "Back to school haircut poster", caption: "Back to school", href: "https://www.instagram.com/p/Dcv41kcINad/" },
      { src: "/images/post-7.jpg", width: 720, height: 1280, alt: "Toronto skyline at sunset", caption: "Toronto evenings", href: "https://www.instagram.com/p/DcuPysMu5Pp/" },
    ],
  },

  instagram: { handle: "yana_barber_toronto" },

  order: {
    label: "How to book",
    title: "Book your chair",
    intro: "Pick a time and see prices on the booking page, or send a quick DM on Instagram.",
    dmMessage: "Hi Yana! I would like to book an appointment.\nDate and time:\nService (cut, colour, or both):\nStyle idea (I can send a photo):",
    links: [{ label: "Booking and price list", href: "https://taplink.cc/yanabarber" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the Book now button to see the price list and choose a time, or send a DM on Instagram." },
    { q: "Where are you?", a: "We are a barber shop in Etobicoke, Toronto." },
    { q: "Do you do colour?", a: "Yes. Along with haircuts, we do hair colour." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Etobicoke, Toronto, Ontario",
    socials: [{ label: "Booking and prices", href: "https://taplink.cc/yanabarber" }],
  },

  seo: {
    title: "Yana barber Toronto | Barber in Etobicoke",
    description: "Yana barber Toronto is a barber shop in Etobicoke offering haircuts and hair colour. See the price list and book online, or send a DM on Instagram.",
    keywords: ["barber Etobicoke", "barber Toronto", "haircut Etobicoke", "hair colour Etobicoke"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
