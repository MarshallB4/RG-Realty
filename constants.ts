import { ServiceItem, Testimonial } from './types';

export const COMPANY_NAME = "RGRealty";
export const AGENT_NAME = "Roland Gjelaj";
export const AGENCY_NAME = "eXp Realty";
export const LOCATION = "Calgary, Alberta";
export const PHONE_WORK = '587-326-5480';
export const PHONE_PERSONAL = '403-852-0242';

/* =========================
   CALGARY MARKET DATA (REAL)
   ========================= */

export const CALGARY_MARKET_DATA = [
  { month: 'Apr', year: 2025, sales: 2230, newListings: 4037, inventory: 5868, benchmarkPrice: 589200, averagePrice: 646566, daysOnMarket: 29 },
  { month: 'May', year: 2025, sales: 2559, newListings: 4840, inventory: 6744, benchmarkPrice: 588300, averagePrice: 650228, daysOnMarket: 32 },
  { month: 'Jun', year: 2025, sales: 2284, newListings: 4223, inventory: 6944, benchmarkPrice: 584600, averagePrice: 646410, daysOnMarket: 33 },
  { month: 'Jul', year: 2025, sales: 2096, newListings: 3911, inventory: 6919, benchmarkPrice: 581100, averagePrice: 617291, daysOnMarket: 37 },
  { month: 'Aug', year: 2025, sales: 1986, newListings: 3477, inventory: 6659, benchmarkPrice: 576000, averagePrice: 612165, daysOnMarket: 38 },
  { month: 'Sep', year: 2025, sales: 1716, newListings: 3782, inventory: 6919, benchmarkPrice: 571400, averagePrice: 615813, daysOnMarket: 42 },
  { month: 'Oct', year: 2025, sales: 1879, newListings: 3232, inventory: 6472, benchmarkPrice: 566200, averagePrice: 643261, daysOnMarket: 43 },
  { month: 'Nov', year: 2025, sales: 1547, newListings: 2251, inventory: 5587, benchmarkPrice: 559000, averagePrice: 616045, daysOnMarket: 49 },
  { month: 'Dec', year: 2025, sales: 1123, newListings: 1219, inventory: 3873, benchmarkPrice: 554700, averagePrice: 605325, daysOnMarket: 53 },
  { month: 'Jan', year: 2026, sales: 1234, newListings: 2785, inventory: 4394, benchmarkPrice: 554400, averagePrice: 617844, daysOnMarket: 54 },
  { month: 'Feb', year: 2026, sales: 1525, newListings: 2766, inventory: 4825, benchmarkPrice: 560500, averagePrice: 628343, daysOnMarket: 42 },
  { month: 'Mar', year: 2026, sales: 1881, newListings: 3409, inventory: 5395, benchmarkPrice: 565600, averagePrice: 641844, daysOnMarket: 35 },
];

/* =========================
   SERVICES (IN USE)
   ========================= */

export const SERVICES: ServiceItem[] = [
  {
    title: "Buying a Home",
    description: "Expert guidance through the home buying process, from search to keys.",
    longDescription: "Finding your dream home should be an exciting and stress-free experience. Whether you're a first-time buyer or looking for your next property, we guide you through every step of the process. With market insights, expert advice, and a focus on your needs, we ensure you find the perfect home that fits your lifestyle and budget.",
    icon: "home"
  },
  {
    title: "Selling Your Property",
    description: "Strategic marketing and negotiation to get you the best price for your home.",
    longDescription: "Selling your property doesn’t have to be overwhelming. At RG Realty, we create personalized strategies to maximize your home’s value and ensure it stands out in the market. From staging tips to professional marketing and negotiations, we make the process seamless and ensure you get the best possible results.",
    icon: "trending-up"
  },
  {
    title: "First Time Home Buying",
    description: "Navigating your first purchase with confidence and clarity.",
    longDescription: "Buying your first home is a big step, but you don't have to take it alone. We demystify the process, helping you understand financing, incentives, and property values. Let us help you unlock the door to your very first home with confidence and ease.",
    icon: "key"
  },
  {
    title: "Home Evaluation",
    description: "Accurate, data-driven market assessments to determine your home's true value.",
    longDescription: "Curious about your home’s value in today’s market? We offer free, no-obligation home evaluations to help you understand your property’s worth. With our in-depth knowledge of local trends and market conditions, you’ll have a clear picture of where your home stands",
    icon: "bar-chart"
  }
];

/* =========================
   TESTIMONIALS (REAL)
   ========================= */

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jolanda Ostermeier",
    role: "Home Seller & Buyer",
    rating: 5,
    content:
      "I can’t recommend Roland Gjelaj of RG Realty highly enough. His patience, professionalism, and constant support made selling in a challenging market feel manageable and stress-free. He also helped me find and purchase my dream home."
  },
  {
    id: 2,
    name: "Margaret",
    role: "Repeat Client",
    rating: 5,
    content:
      "Roland guided us every step of the way with honest, straightforward advice. This was our second property in two years, and he made the process effortless. He truly has his clients’ best interests at heart."
  },
  {
    id: 3,
    name: "Ricardo Carbone",
    role: "Home Buyer",
    rating: 5,
    content:
      "Roland helped my grandparents through every step of buying a home with patience, care, and expert guidance. He made sure they felt confident and comfortable with every decision. His professionalism and personal touch made all the difference."
  },
  {
    id: 4,
    name: "Michelle",
    role: "Home Buyer",
    rating: 5,
    content:
      "Our experience with RG Realty was exceptional. Roland’s market knowledge, professionalism, and communication made the home buying process smooth and stress-free. We felt completely supported throughout."
  },
  {
    id: 5,
    name: "Diego Vasquez Somoza",
    role: "Home Buyer",
    rating: 5,
    content:
      "Beyond impressed and grateful for everything Roland did for my family. He brought experience, professionalism, and made the entire process worry-free. RG Realty is everything you want in a realtor."
  },
  {
    id: 6,
    name: "Obiageri Ekwueme",
    role: "Home Buyer",
    rating: 5,
    content:
      "Roland is a gem—attentive, knowledgeable, and always looking out for my best interest. Possession day went smoothly and I couldn’t have asked for a better experience."
  }
];