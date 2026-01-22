// Image imports for artisan profiles and galleries
import bimesProfile from "@/assets/bimes-profile.jpg";
import bimes1 from "@/assets/bimes-1.jpg";
import bimes2 from "@/assets/bimes-2.jpg";
import bimes3 from "@/assets/bimes-3.jpg";
import bimes4 from "@/assets/bimes-4.jpg";
import bimes5 from "@/assets/bimes-5.jpg";

import sunitaProfile from "@/assets/sunita-profile.jpg";
import sunita1 from "@/assets/sunita-1.jpg";
import sunita2 from "@/assets/sunita-2.jpg";

import meenaProfile from "@/assets/meena-profile.jpg";
import meena1 from "@/assets/meena-1.jpg";
import meena2 from "@/assets/meena-2.jpg";
import meena3 from "@/assets/meena-3.jpg";

import rameshProfile from "@/assets/ramesh-profile.jpg";
import ramesh1 from "@/assets/ramesh-1.jpg";

import bandhuProfile from "@/assets/bandhu-profile.jpg";
import bandhu1 from "@/assets/bandhu-1.jpg";

import babulalProfile from "@/assets/babulal-profile.jpg";
import babulal1 from "@/assets/babulal-1.jpg";
import babulal2 from "@/assets/babulal-2.jpg";

import princeProfile from "@/assets/prince-profile.jpg";
import prince1 from "@/assets/prince-1.jpg";
import prince2 from "@/assets/prince-2.jpg";
import prince3 from "@/assets/prince-3.jpg";

import munnaProfile from "@/assets/munna-profile.jpg";
import munna1 from "@/assets/munna-1.jpg";

import babluProfileNew from "@/assets/bablu-profile-new.jpg";
import bablu4 from "@/assets/bablu-4.jpg";
import bablu5 from "@/assets/bablu-5.jpg";
import bablu6 from "@/assets/bablu-6.jpg";
import bablu7 from "@/assets/bablu-7.jpg";

import mlMukuProfile from "@/assets/ml-muku-profile.jpg";
import mlMuku1 from "@/assets/ml-muku-1.jpg";
import mlMuku2 from "@/assets/ml-muku-2.jpg";
import mlMuku3 from "@/assets/ml-muku-3.jpg";
import mlMuku4 from "@/assets/ml-muku-4.jpg";
import mlMuku5 from "@/assets/ml-muku-5.jpg";

import gauriProfile from "@/assets/gauri-profile.jpg";
import gauri1 from "@/assets/gauri-1.jpg";
import gauri2 from "@/assets/gauri-2.jpg";
import gauri3 from "@/assets/gauri-3.jpg";

import urmilaProfile from "@/assets/urmila-profile.jpg";
import urmila1 from "@/assets/urmila-1.jpg";
import urmila2 from "@/assets/urmila-2.jpg";

// Note: For artisans whose profile photo shows products (not portraits),
// we include the profile image in the gallery so products are shown in the "work" section.

import sarthakProfile from "@/assets/sarthak-profile.jpg";
import sarthak1 from "@/assets/sarthak-1.jpg";
import sarthak2 from "@/assets/sarthak-2.jpg";
import sarthak3 from "@/assets/sarthak-3.jpg";

import anasProfile from "@/assets/anas-profile.jpg";
import anas1 from "@/assets/anas-1.jpg";
import anas2 from "@/assets/anas-2.jpg";
import anas3 from "@/assets/anas-3.jpg";
import anas4 from "@/assets/anas-4.jpg";
import anas5 from "@/assets/anas-5.jpg";
import anas6 from "@/assets/anas-6.jpg";

import rajeenProfile from "@/assets/rajeen-profile.jpg";
import rajeen1 from "@/assets/rajeen-1.jpg";
import rajeen2 from "@/assets/rajeen-2.jpg";

export type ProductCategory = 
  | "Puppets"
  | "Textiles"
  | "Jewellery"
  | "Bags & Accessories"
  | "Home Decor"
  | "Art & Paintings"
  | "Fragrance";

export const productCategories: ProductCategory[] = [
  "Puppets",
  "Textiles",
  "Jewellery",
  "Bags & Accessories",
  "Home Decor",
  "Art & Paintings",
  "Fragrance",
];

export type Artisan = {
  id: number;
  name: string;
  age?: number;
  story?: string;
  phone?: string;
  email?: string;
  website?: string;
  homeVillage?: string;
  educationBackground?: string;
  family?: string;
  products?: string;
  craft?: string;
  location?: string;
  workLocation?: string;
  businessName?: string;
  workingYears?: string;
  timings?: string;
  howTheyStarted?: string;
  reasonForDoingThisWork?: string;
  challengesFaced?: string;
  goals?: string;
  priceRange?: string;
  materials?: string;
  image?: string;
  gallery?: string[];
  categories?: ProductCategory[];
};

const templateImages = [
  "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
] as const;

const baseArtisans: Artisan[] = [
  {
    id: 1,
    name: "Bimes Trivedi",
    age: 45,
    phone: "+91 9873051302",
    homeVillage: "Delhi",
    products: "Handmade bags",
    craft: "Handcrafted Bags",
    workLocation: "Delhi Haat, INA",
    location: "Delhi",
    workingYears: "15 yrs (since Delhi Haat opened)",
    timings: "11:00 AM – 8:00 PM",
    reasonForDoingThisWork: "To raise money for children's education",
    challengesFaced: "Very difficult to manage work; often feels overburdened",
    goals: "To pay for children's education",
    priceRange: "₹100 – ₹5,000",
    categories: ["Bags & Accessories"],
    image: bimesProfile,
    gallery: [bimes1, bimes2, bimes3, bimes4, bimes5],
    story:
      "Bimes Trivedi began selling hand-crafted bags since Dilli Haat opened 15 years ago to support her children's education. She works morning to night and often feels overburdened by work, but struggles to make ends meet. Every purchase makes a difference and can be life-changing.",
  },
  {
    id: 2,
    name: "Sunita Bhatt",
    phone: "+91 9873051302",
    products: "Rajasthani dolls / puppets",
    craft: "Rajasthani Puppets",
    workLocation: "Delhi Haat, INA",
    timings: "11:00 AM – 8:00 PM",
    categories: ["Puppets"],
    image: sunitaProfile,
    gallery: [sunita1, sunita2],
    story:
      "Sunita Bhatt makes Rajasthani puppets entirely by hand—meticulously carving wood, cutting fabric, and painting each puppet. Despite the intricacy and skill in her work, she struggles to find enough customers to sustain a consistent income. She sells her work at INA in hopes her art can support her and her family.",
  },
  {
    id: 3,
    name: "Meena Das",
    age: 48,
    phone: "+91 971814388",
    homeVillage: "Bengal",
    educationBackground: "None",
    family: "Son, sister",
    products: "Entirely handmade jewellery",
    craft: "Handmade Jewellery",
    workLocation: "Delhi Haat, INA",
    businessName: "N/A",
    workingYears: "20 years",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted: "Through her sister; gradually started selling",
    reasonForDoingThisWork: "To provide for family",
    challengesFaced: "Selling consistently and finding buyers",
    categories: ["Jewellery"],
    image: meenaProfile,
    gallery: [meena1, meena2, meena3],
    story:
      "Meena Das has been making handmade jewellery for the past twenty years. Originally from Bengal, she entered the craft to provide for her sister and son and slowly began selling her pieces. With no formal education, this work became her only way to earn and provide. Her jewellery is made entirely by hand, but selling enough to survive is a constant struggle. Yet she continues working every day at INA, hoping her craft will be valued enough for her to keep providing for her family.",
  },
  {
    id: 4,
    name: "Ramesh Thakur",
    age: 52,
    phone: "+91 9654994315",
    homeVillage: "Bihar",
    products: "Handmade diaries",
    craft: "Handmade Diaries",
    workLocation: "Delhi Haat, INA",
    workingYears: "20 years",
    timings: "1:00 PM – 10:30 PM",
    reasonForDoingThisWork: "Employment; to provide for family",
    challengesFaced: "Exploitation—corporations collecting his work; hard to get it back",
    priceRange: "₹100 – ₹350",
    categories: ["Art & Paintings"],
    image: rameshProfile,
    gallery: [rameshProfile, ramesh1],
    story:
      "An artisan from Bihar, Ramesh Thakur has spent the last 20 years handcrafting diaries to support his family. Despite his craft being his only source of income, he has faced exploitation, yet perseveres—working tirelessly and masterfully at his trade to make a living. Every purchase helps him provide for his family, despite a market that often values convenience over artistic integrity and effort.",
  },
  {
    id: 5,
    name: "Bandhu Khan",
    age: 42,
    phone: "+91 8381949528",
    homeVillage: "Uttar Pradesh",
    products: "Rajasthani puppets (Kathputli), decorative hanging charms (chains)",
    craft: "Kathputli Puppets and Hanging Charms",
    workLocation: "Delhi Haat, INA",
    workingYears: "15 years",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted: "Family business",
    reasonForDoingThisWork: "To continue his father's legacy and provide for family",
    challengesFaced: "Getting visibility and buyers for stable income",
    priceRange: "₹150 – ₹2,000",
    categories: ["Puppets", "Home Decor"],
    image: bandhuProfile,
    gallery: [bandhuProfile, bandhu1],
    story:
      "Bandhu Khan has been selling Rajasthani puppets at Dilli Haat since it was established nearly 16 years ago, sustaining a family tradition and keeping his father's legacy alive. His craft supports his family and deserves to be valued—helping create a better quality of life.",
  },
  {
    id: 6,
    name: "Babulal Bhaat",
    age: 62,
    phone: "+91 9871804451",
    homeVillage: "Rajasthan",
    products: "Rajasthani puppets (Kathputli), decorative hanging charms (chains)",
    craft: "Kathputli & Hanging Charms",
    workLocation: "Delhi Haat, INA",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted: "Family business; used to do shows in the village, then started making puppets",
    reasonForDoingThisWork: "Family heritage, passion, and continued income",
    challengesFaced: "Very time-consuming handiwork; requires day-and-night effort",
    priceRange: "₹150 – ₹1,500 (based on requirement)",
    categories: ["Puppets", "Home Decor"],
    image: babulalProfile,
    gallery: [babulalProfile, babulal1, babulal2],
    story:
      "Babulal Bhaat is an artisan from Rajasthan, selling entirely handmade decorative hanging charms and Rajasthani puppets, pouring hours of work into each piece. His work at INA is a testament to family tradition and a dying art. Every purchase helps preserve Rajasthani artistic heritage and supports a household trying to make ends meet.",
  },
  {
    id: 7,
    name: "Prince Kumar",
    age: 34,
    phone: "+91 9113793148",
    homeVillage: "Bapudham Motihari, Bihar",
    products: "Crochet flowers",
    craft: "Crochet Flowers",
    workLocation: "Delhi Haat, INA",
    workingYears: "14 years",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted:
      "Learned crochet from YouTube after seeing a crochet flower in Mumbai; started selling in 2011",
    reasonForDoingThisWork: "Support the household + genuine interest",
    challengesFaced: "Eyesight issues, long hours sitting, extensive effort, lack of visibility",
    categories: ["Home Decor"],
    image: princeProfile,
    gallery: [prince1, prince2, prince3],
    story:
      "After coming across a small shop in Mumbai, Prince Kumar taught himself crochet through YouTube and began selling his pieces in 2011 to support his household. Despite the physical strain of long working hours and ongoing eyesight issues, Prince continues with a strong artistic eye.",
  },
  {
    id: 8,
    name: "Munna Lal",
    phone: "+91 9911287431",
    products: "Handcrafted jewellery",
    craft: "Handcrafted Jewellery",
    workLocation: "Delhi Haat, INA",
    timings: "11:00 AM – 8:00 PM",
    categories: ["Jewellery"],
    image: munnaProfile,
    gallery: [munnaProfile, munna1],
    story:
      "Munna Lal works tirelessly, creating handcrafted jewellery from scratch to support his family. It is his sole source of income—often unreliable in a market that overlooks meticulous manual effort. Every customer makes a huge difference.",
  },
  {
    id: 9,
    name: "Bablu",
    age: 50,
    phone: "+91 8826758049",
    products: "Handmade jewellery",
    craft: "Handmade Jewellery",
    workLocation: "Delhi Haat, INA",
    businessName: "N/A",
    workingYears: "6 years",
    howTheyStarted:
      "Formerly worked at a passport office; after an accident and leg injury, discovered jewellery-making as a sitting job",
    challengesFaced:
      "Recovering from injury; difficult to sell jewellery and find buyers",
    priceRange: "₹50 – ₹250",
    categories: ["Jewellery"],
    image: babluProfileNew,
    gallery: [bablu4, bablu5, bablu6, bablu7],
    story:
      "Bablu had a stable job at the local passport office until an accident changed his future overnight. A severe leg injury made it impossible to continue working. Sitting at a small table each day, he began experimenting with handcrafted jewellery. He now creates each piece by hand, but selling in a market that often overlooks craftsmanship remains challenging. Supporting artisans like him can make a real difference.",
  },
  { id: 10, name: "Nomaan Mansuri" },
  {
    id: 13,
    name: "ML Muku",
    age: 70,
    phone: "+91 9818387672",
    email: "mlmuku@yahoo.com",
    homeVillage: "Kashmir",
    products: "Pashmina shawls, Kashmiri shawls & hand embroidery",
    craft: "Pashmina & Hand Embroidery",
    businessName: "CraftsPoint",
    workingYears: "50 years",
    workLocation: "Noida Haat",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted: "Family business; works with his sons",
    priceRange: "₹300 – ₹1,500 (20% discount currently)",
    categories: ["Textiles"],
    image: mlMukuProfile,
    gallery: [mlMuku1, mlMuku2, mlMuku3, mlMuku4, mlMuku5],
  },
  {
    id: 14,
    name: "Sonu",
    age: 30,
    phone: "+91 9667079631",
    homeVillage: "Chhattisgarh",
    products: "Dokra art pieces (statues, showpieces)",
    craft: "Dokra Art",
    workLocation: "Noida Haat",
    businessName: "Kuldeep Handiworks",
    workingYears: "20 years",
    timings: "12:00 PM – 9:00 PM",
    priceRange: "₹200+ (varies by piece)",
    categories: ["Home Decor"],
    story:
      "Sonu is a Dokra artisan from Chhattisgarh, selling traditional metal statues and showpieces at Noida Haat under the name Kuldeep Handiworks. She describes Dokra as time-consuming and physically taxing, yet it competes with cheap factory-made decor that sells faster and draws more attention.",
  },
  {
    id: 15,
    name: "Salman",
    age: 21,
    phone: "+91 8423866933",
    homeVillage: "Havada, Bihar",
    products: "Madhubani hand-embroidered suits, sarees; block painted sarees",
    craft: "Madhubani Textiles",
    workingYears: "15 years",
    workLocation: "Noida Haat",
    timings: "11:00 AM – 9:00 PM",
    reasonForDoingThisWork: "Family business (weavers for nearly 200 years)",
    priceRange: "₹1,500 – ₹6,000",
    categories: ["Textiles"],
  },
  {
    id: 16,
    name: "Aratna Bose",
    age: 62,
    phone: "+91 9319148567",
    homeVillage: "Kolkata",
    products: "Block print and hand embroidered suits, sarees, blouses",
    craft: "Block Print & Embroidery",
    workingYears: "4–5 years",
    timings: "11:00 AM – 8:00 PM",
    priceRange: "₹350 – ₹3,500",
    businessName: "Ratna Creations",
    workLocation: "Noida Haat",
    family: "Husband, son, granddaughter",
    reasonForDoingThisWork:
      "Former Kathak dancer; began crafting during COVID and turned it into income",
    categories: ["Textiles"],
    story:
      "Originally from Kolkata, Aratna Bose is a former Kathak dancer whose life changed during the COVID-19 pandemic. As performances stopped and age made it harder to continue, she turned to crafting during lockdown. Encouraged by her son, she transformed her passion into income. With no formal education, this became one of her few ways to support herself. She now runs a permanent shop at Noida Haat, and all products are made entirely by her.",
  },
  {
    id: 17,
    name: "Mohammed Imtiyaz",
    age: 34,
    phone: "+91 9622852570",
    homeVillage: "Srinagar, Kashmir",
    products: "Kashmiri suits, Pashmina shawls, silk sarees (handwork)",
    craft: "Kashmiri Textiles",
    workLocation: "Noida Haat",
    businessName: "GM Textiles",
    workingYears: "25 years (family business)",
    timings: "12:00 PM – 7:00 PM",
    howTheyStarted: "Family business (started in Pahalgam)",
    reasonForDoingThisWork: "Family business",
    priceRange: "₹1,200 – ₹34,000",
    materials: "Wool, Pashmina, Silk",
    categories: ["Textiles"],
  },
  {
    id: 18,
    name: "Jitendra",
    age: 38,
    phone: "+91 7988849208",
    homeVillage: "Haryana (handiwork sourced from Jaipur)",
    products: "Bedsheets, bedcovers, cushion covers, jute items",
    craft: "Handmade Home Textiles",
    workLocation: "Noida Haat",
    businessName: "Art Creation",
    materials: "Cotton, Jute",
    workingYears: "20 years",
    timings: "11:00 AM – 8:00 PM",
    reasonForDoingThisWork: "Personal business; to provide for himself",
    challengesFaced: "Financial security",
    goals: "To provide for himself",
    priceRange: "₹700/₹1,200 – ₹3,000/₹4,000",
    categories: ["Textiles"],
    story:
      "Jitendra is an artisan from Haryana whose handcrafted bedsheets, bedcovers, cushion covers, and jute work are made using materials sourced from Jaipur. Under the name Art Creation, he has spent 20 years building a small business with no other financial security to fall back on. He struggles to find buyers who understand handmade value in a market full of machine-made alternatives.",
  },
  {
    id: 19,
    name: "Gauri Devi",
    age: 55,
    products: "Ceramic painting",
    craft: "Ceramic Painting",
    workLocation: "Delhi Haat, INA",
    workingYears: "15 years",
    timings: "11:00 AM – 9:00 PM",
    reasonForDoingThisWork: "To provide for family",
    challengesFaced:
      "Visibility, managing buyers, getting buyers, long work hours",
    categories: ["Art & Paintings"],
    image: gauriProfile,
    gallery: [gauri1, gauri2, gauri3],
    story:
      "In order to support her family, Gauri Devi began selling her ceramic paintings at Dilli Haat 15 years ago, carefully hand-painting each piece with great attention to detail, spending hours attending to her craft. Despite the time and effort required to create each piece, earning a sustainable income through ceramic painting remains a challenge, with her ceramic handiwork being a primary source of income, as well a catalyst to keeping the tradition of Indian handicraft alive. With just the support of a few buyers, Gauri Devi can turn a dying art form into a living income.",
  },
  {
    id: 20,
    name: "Urmila Ben",
    phone: "+91 8750343453",
    homeVillage: "Kutch district, Gujarat",
    products: "Handmade Gujarati bags",
    craft: "Gujarati Weaving",
    workLocation: "Delhi Haat, INA",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted: "Family business",
    reasonForDoingThisWork:
      "Keeping a decades-old family tradition alive while making a living",
    challengesFaced: "Visibility, finding buyers, long working hours",
    categories: ["Bags & Accessories"],
    image: urmilaProfile,
    gallery: [urmilaProfile, urmila1, urmila2],
    story:
      "Urmila Ben crafts handmade Gujarati bags distinct to the Kutch region. Her family has been weaving these bags for decades and selling across the country. Her work keeps a rich tradition alive and is the only source of income for her household—small support makes a big difference.",
  },
  {
    id: 21,
    name: "Sarthak Chawla",
    age: 36,
    phone: "+91 9910002780",
    products: "Handcrafted dupattas",
    craft: "Handcrafted Dupattas",
    workLocation: "Lajpat Nagar",
    howTheyStarted: "Family shop started in 1980 (third generation)",
    reasonForDoingThisWork: "Family business; keeping the craft alive",
    categories: ["Textiles"],
    image: sarthak2,
    gallery: [sarthakProfile, sarthak1, sarthak2, sarthak3],
    story:
      "Sarthak Chawla sells handcrafted dupattas from his family's shop in Lajpat Nagar. The business began in 1980 and has now reached its third generation. For him, it's more than income—it's continuing a family craft in a market dominated by mass-produced clothing.",
  },
  {
    id: 22,
    name: "Anas Khan",
    age: 28,
    phone: "+91 9837049624",
    products: "Oud",
    craft: "Hand-crafted Oud",
    workLocation: "Delhi Haat, INA",
    workingYears: "10 years",
    timings: "11:00 AM – 8:00 PM",
    howTheyStarted:
      "His father used to collect and resell; Anas began making Oud himself and selling it",
    reasonForDoingThisWork:
      "Continuing and strengthening a family livelihood",
    priceRange: "₹250 – ₹800",
    categories: ["Fragrance"],
    image: anasProfile,
    gallery: [anas1, anas2, anas3, anas4, anas5, anas6],
    story:
      "Anas Khan has been selling hand-crafted Oud for 10 years at Dilli Haat, continuing a family tradition his father started. What began as reselling has become a generational livelihood, and Anas now makes Oud from scratch with technical skill and dedication.",
  },
  {
    id: 23,
    name: "Rajeen Mishra",
    age: 45,
    phone: "+91 8076687999",
    products: "Paper mâché plates, handmade bags",
    craft: "Paper Mâché & Handmade Bags",
    workLocation: "Delhi Haat, INA",
    priceRange: "₹150 – ₹750",
    categories: ["Bags & Accessories"],
    image: rajeenProfile,
    gallery: [rajeen1, rajeen2],
  },
];

const normalizeInaLocation = (loc?: string) => {
  if (!loc) return loc;
  return loc.trim().toLowerCase() === "ina" ? "Delhi Haat, INA" : loc;
};

const shouldBeNoidaHaat = (a: Artisan) =>
  ["ML Muku", "Sonu", "Salman", "Aratna Bose", "Mohammed Imtiyaz", "Jitendra"].includes(
    a.name
  );

const normalizeWorkLocation = (a: Artisan): Artisan => {
  const next = {
    ...a,
    workLocation: normalizeInaLocation(a.workLocation),
  };

  if (shouldBeNoidaHaat(next)) {
    return { ...next, workLocation: "Noida Haat" };
  }

  return next;
};

const normalizeTimings = (a: Artisan): Artisan => {
  // All artisans at Delhi Haat, INA should be 11-9pm EXCEPT Ramesh Thakur.
  if (a.name !== "Ramesh Thakur" && a.workLocation === "Delhi Haat, INA") {
    return { ...a, timings: "11:00 AM – 9:00 PM" };
  }

  // Explicit timing overrides for Noida Haat list.
  const noidaOverrides: Record<string, string> = {
    "ML Muku": "11:00 AM – 8:00 PM",
    Sonu: "12:00 PM – 9:00 PM",
    Salman: "11:00 AM – 9:00 PM",
    "Aratna Bose": "11:00 AM – 8:00 PM",
    "Mohammed Imtiyaz": "12:00 PM – 7:00 PM",
    Jitendra: "11:00 AM – 8:00 PM",
  };
  if (a.workLocation === "Noida Haat" && noidaOverrides[a.name]) {
    return { ...a, timings: noidaOverrides[a.name] };
  }

  return a;
};

export const artisans: Artisan[] = baseArtisans.map((a, idx) => ({
  ...normalizeTimings(normalizeWorkLocation(a)),
  image: a.image ?? templateImages[idx % templateImages.length],
}));
