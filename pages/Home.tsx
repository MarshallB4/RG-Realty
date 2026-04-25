import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Home as HomeIcon,
  Key,
  Search,
  MapPin,
  ShieldCheck,
  BadgeDollarSign,
  Megaphone,
  LineChart,
  X,
} from 'lucide-react';
import { AGENT_NAME, AGENCY_NAME } from '../constants';

const SEARCH_BANNER_IMAGES = [
  '/images/banner1.webp',
  '/images/banner2.webp',
  '/images/banner3.webp',
];

const BROWSE_CATEGORIES = [
  {
    title: 'Apartments & Condos',
    subtitle: 'Urban living and low-maintenance options',
    image:
      '/images/apartment.webp',
    category: 'apartments',
  },
  {
    title: 'Townhouses',
    subtitle: 'Flexible space with modern convenience',
    image:
      '/images/townhouse.webp',
    category: 'townhouses',
  },
  {
    title: 'Semi-Detached Homes',
    subtitle: 'Practical space with value and versatility',
    image:
      '/images/duplex.webp',
    category: 'semi-detached',
  },
  {
    title: 'Detached Homes <$800K',
    subtitle: 'Entry-level detached options across Calgary',
    image:
      '/images/800k.webp',
    category: 'detached-under-800',
  },
  {
    title: 'Detached Homes $800K – $1.2M',
    subtitle: 'Move-up homes with more space and features',
    image:
      '/images/1mil.webp',
    category: 'detached-800-1200',
  },
  {
    title: 'Luxury Listings',
    subtitle: 'Elevated homes and standout properties from $1.2M+',
    image:
      '/images/luxury.webp',
    category: 'luxury',
  },
];

type PaymentFrequency = 'Monthly' | 'Bi-Weekly' | 'Weekly';

export const Home: React.FC = () => {
  const [activeSearchImage, setActiveSearchImage] = useState(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const [homePrice, setHomePrice] = useState<number | ''>(500000);
const [downPaymentPercent, setDownPaymentPercent] = useState<number | ''>(10);
const [interestRate, setInterestRate] = useState<number | ''>(4.49);
const [amortizationYears, setAmortizationYears] = useState<number | ''>(25);
  const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>('Monthly');

  const getMinimumDownPayment = (price: number) => {
  if (price >= 1500000) {
    return price * 0.2;
  }

  if (price > 500000) {
    return 500000 * 0.05 + (price - 500000) * 0.1;
  }

  return price * 0.05;
};

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSearchImage((prev) => (prev + 1) % SEARCH_BANNER_IMAGES.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isCalculatorOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isCalculatorOpen]);

  const mortgageResult = useMemo(() => {
  if (
    homePrice === '' ||
    downPaymentPercent === '' ||
    interestRate === '' ||
    amortizationYears === ''
  ) {
    return {
      label: paymentFrequency,
      value: 0,
    };
  }

  const downPaymentAmount =
  homePrice > 0 && downPaymentPercent > 0
    ? (Number(homePrice) * Number(downPaymentPercent)) / 100
    : 0;

const principal = Math.max(Number(homePrice) - downPaymentAmount, 0);
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = amortizationYears * 12;

  if (principal <= 0 || monthlyRate <= 0 || totalPayments <= 0) {
    return {
      label: paymentFrequency,
      value: 0,
    };
  }

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  let paymentValue = monthlyPayment;

  if (paymentFrequency === 'Bi-Weekly') {
    paymentValue = (monthlyPayment * 12) / 26;
  } else if (paymentFrequency === 'Weekly') {
    paymentValue = (monthlyPayment * 12) / 52;
  }

  return {
    label: paymentFrequency,
    value: paymentValue,
  };
}, [homePrice, downPaymentPercent, interestRate, amortizationYears, paymentFrequency]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(value);

  const resetCalculator = () => {
    setHomePrice(500000);
    setDownPaymentPercent(10);
    setInterestRate(4.49);
    setAmortizationYears(25);
    setPaymentFrequency('Monthly');
  };

  const getListingsHref = (category: string) => {
    const base = `${window.location.origin}${window.location.pathname}`;
    return `${base}?idx=${Date.now()}#/listings?category=${category}`;
  };

  return (
    <>
      <div className="animate-fade-in bg-[#f5f2eb] text-[#1f1d1a]">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/grey-kitchen.webp"
              alt="Luxury Real Estate"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1d1a]/55 via-[#1e1d1a]/28 to-[#f5f2eb]/8"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-16">
            <span className="animate-fade-up opacity-0 text-[#d6c09a] font-bold tracking-[0.3em] uppercase text-xs mb-6">
              Calgary • Alberta
            </span>

            <h1 className="animate-fade-up opacity-0 [animation-delay:200ms] text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight font-extrabold">
              Elevate Your <br />
              <span className="text-[#e9e1d2] font-light">Living Experience</span>
            </h1>

            <p className="animate-fade-up opacity-0 [animation-delay:400ms] text-[#f2ede4] text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed">
              Curating exceptional properties for exceptional lives. Partner with {AGENT_NAME} for
              a seamless real estate journey.
            </p>

            <div className="animate-fade-up opacity-0 [animation-delay:600ms] flex flex-col sm:flex-row gap-5">
  <a
    href={`${window.location.origin}${window.location.pathname}?idx=${Date.now()}#/listings`}
    onClick={(e) => {
      e.preventDefault();
      const base = `${window.location.origin}${window.location.pathname}`;
      window.location.assign(`${base}?idx=${Date.now()}#/listings`);
    }}
    className="group bg-[#8c7b5f] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1f1d1a] transition-all duration-300"
  >
    Browse Listings
  </a>

              <Link
                to="/contact"
                className="group border border-white/40 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1f1d1a] transition-all duration-300 backdrop-blur-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-28 md:py-36 px-6 lg:px-8 max-w-7xl mx-auto bg-[#f7f4ee] text-[#1f1d1a] relative">
          <div className="absolute inset-0 bg-[#f7f4ee] z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 items-center relative z-10">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 aspect-[3/4]">
                <img
                  src="/images/headshot.webp"
                  alt={AGENT_NAME}
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>

              <div className="absolute -bottom-10 -left-10 w-full h-full border border-[#b9a98c]/35 -z-10 hidden lg:block"></div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                The Philosophy
              </span>

              <h2 className="text-4xl md:text-5xl font-serif text-[#1f1d1a] mb-8 leading-tight font-bold">
                Real Estate Redefined <br />
                <span className="text-[#7d7468] font-light">by Intelligence.</span>
              </h2>

              <div className="prose prose-lg max-w-none text-[#5f584e] mb-10">
                <p className="mb-6">
                  Roland Gjelaj (RGRealty) isn&apos;t just selling homes; he&apos;s crafting
                  lifestyles. In the dynamic Calgary market, you need more than a realtor—you need a
                  strategist.
                </p>
                <p>
                  Backed by the global power of {AGENCY_NAME}, we leverage cutting-edge market data,
                  tailored marketing strategies, and relentless negotiation to ensure your success.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-serif text-3xl text-[#1f1d1a] mb-1 font-bold">5+</h4>
                  <p className="text-xs uppercase tracking-widest text-[#7d7468]">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-[#1f1d1a] mb-1 font-bold">$70M+</h4>
                  <p className="text-xs uppercase tracking-widest text-[#7d7468]">Volume Sold</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center text-[#1f1d1a] font-bold uppercase tracking-widest text-xs border-b border-[#1f1d1a] pb-1 hover:text-[#8c7b5f] hover:border-[#8c7b5f] transition-colors"
              >
                Read More About Roland <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#efe9df] text-[#1f1d1a] py-24 md:py-28 border-y border-[#ddd4c7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#d8d0c3] pb-8">
              <div>
                <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a]">
                  Comprehensive Solutions
                </h2>
              </div>

              <Link
                to="/services"
                className="text-[#6f675b] hover:text-[#1f1d1a] transition-colors text-sm mt-4 md:mt-0 flex items-center"
              >
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  icon: HomeIcon,
                  title: 'Buying & Selling',
                  desc: 'Navigating complex transactions with ease and precision.',
                },
                {
                  icon: TrendingUp,
                  title: 'Market Analysis',
                  desc: 'Data-driven insights to maximize your investment potential.',
                },
                {
                  icon: Key,
                  title: 'First Time Home Buying',
                  desc: 'Navigating your first purchase with confidence and clarity.',
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group p-8 md:p-9 bg-[#f8f5ef] border border-[#e2d8ca] hover:border-[#c3b298] transition-colors duration-300"
                >
                  <service.icon
                    size={32}
                    strokeWidth={1}
                    className="text-[#8c7b5f] mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-serif mb-3 font-bold text-[#1f1d1a]">
                    {service.title}
                  </h3>
                  <p className="text-[#6a6358] font-light leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Banner Slideshow */}
        <section className="relative py-28 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            {SEARCH_BANNER_IMAGES.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Luxury property search"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ${
                  index === activeSearchImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-[#2b2925]/55"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-[#d6c09a] font-bold tracking-[0.2em] uppercase text-xs block mb-6">
              Property Search
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-7 leading-[1.02]">
              Start Your Calgary <br className="hidden md:block" />
              Home Search
            </h2>

            <p className="text-[#efe7da] text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore live MLS® listings across Calgary and surrounding areas with search tools
              designed to help you narrow down the right fit faster.
            </p>

            <a
  href={`${window.location.origin}${window.location.pathname}?idx=${Date.now()}#/listings`}
  onClick={(e) => {
    e.preventDefault();
    const base = `${window.location.origin}${window.location.pathname}`;
    window.location.assign(`${base}?idx=${Date.now()}#/listings`);
  }}
  className="inline-block bg-[#8c7b5f] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1f1d1a] transition-all duration-300"
>
  Search Properties
</a>
          </div>
        </section>

        {/* Mortgage Calculator CTA Section */}
        <section className="bg-[#efe9df] py-24 md:py-32 lg:py-36 border-y border-[#ddd4c7]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-6">
            <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
              Mortgage Planning
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-[#1f1d1a] font-bold mb-8 leading-tight">
              Get a Clear Picture of Your Budget
            </h2>

            <p className="text-[#4f4a42] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Before you start browsing homes, it helps to understand what makes sense financially.
              Use the mortgage calculator to estimate your monthly payments and explore different
              price points, so you can move forward with clarity and confidence in the Calgary
              market.
            </p>

            <button
              type="button"
              onClick={() => setIsCalculatorOpen(true)}
              className="inline-flex items-center justify-center bg-[#6f675b] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
            >
              Open Mortgage Calculator
            </button>
          </div>
        </section>

        {/* Browse By Category Grid */}
        <section className="bg-[#f7f4ee] py-24 md:py-28 border-b border-[#ddd4c7]">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                Browse by Category
              </span>

              <h2 className="text-4xl md:text-5xl font-serif text-[#1f1d1a] font-bold mb-6">
                Explore Calgary properties your way
              </h2>

              <p className="text-[#5f584e] text-lg font-light leading-relaxed max-w-3xl mx-auto">
                Browse by property type and price point to quickly jump into the homes that best
                match your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {BROWSE_CATEGORIES.map((category) => (
                <a
                  key={category.title + category.subtitle}
                  href={getListingsHref(category.category)}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.assign(getListingsHref(category.category));
                  }}
                  className="group relative min-h-[300px] md:min-h-[340px] overflow-hidden block"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1d1a]/75 via-[#1f1d1a]/28 to-transparent transition-all duration-500 group-hover:from-[#1f1d1a]/82 group-hover:via-[#1f1d1a]/40 group-hover:to-[#1f1d1a]/10" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                    <h3 className="text-white text-3xl md:text-4xl font-serif font-bold leading-tight mb-3 max-w-md transition-transform duration-500 group-hover:-translate-y-1">
                      {category.title}
                    </h3>
                    <p className="text-[#efe7da] text-base md:text-lg font-light transition-transform duration-500 group-hover:-translate-y-1">
                      {category.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Home Valuation CTA */}
        <section className="bg-[#efe9df] py-24 md:py-28 border-b border-[#ddd4c7]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-6">
              Home Valuation
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-[#1f1d1a] mb-8 font-bold leading-tight">
              What is your home worth?
            </h2>

            <p className="text-[#5f584e] text-lg md:text-xl mb-10 font-light leading-relaxed max-w-3xl mx-auto">
              Curious about the market? Request a complimentary property assessment <br></br>with zero strings attached!
            </p>

            <Link
              to="/evaluation"
              className="inline-block bg-[#8c7b5f] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
            >
              Request Free Evaluation
            </Link>
          </div>
        </section>

        {/* Buyer / Seller Split */}
        <section className="bg-[#f7f4ee]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="min-h-[420px] md:min-h-[520px]">
              <img
                src="/images/sbs1.webp"
                alt="Buying a home in Calgary"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#d9d1c2] px-8 md:px-14 lg:px-20 py-20 md:py-28 lg:py-32 flex items-center">
              <div className="max-w-xl space-y-6">
                <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  For Buyers
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-[#1f1d1a] font-bold mb-8 leading-tight">
                  Buying a Home in Calgary
                </h2>

                <p className="text-[#4f4a42] text-lg leading-relaxed mb-7">
                  Looking for your next home? Roland helps buyers navigate Calgary&apos;s
                  neighborhoods with confidence, from narrowing down the right communities to
                  negotiating the best possible deal.
                </p>

                <p className="text-[#4f4a42] text-lg leading-relaxed mb-12">
                  Whether you&apos;re a first-time buyer or moving into your next property,
                  you&apos;ll have expert guidance through every step of the process.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Search size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                        Smart Search
                      </h3>
                      <p className="text-sm text-[#5f584e] leading-relaxed">
                        Target the right homes faster with tailored search guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                        Local Insight
                      </h3>
                      <p className="text-sm text-[#5f584e] leading-relaxed">
                        Learn which neighborhoods best fit your lifestyle and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                        Expert Guidance
                      </h3>
                      <p className="text-sm text-[#5f584e] leading-relaxed">
                        Get clarity through every stage of the buying process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#f3efe8] px-8 md:px-14 lg:px-20 py-20 md:py-28 lg:py-32 flex items-center order-2 lg:order-1">
              <div className="max-w-xl space-y-6">
                <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  For Sellers
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-[#1f1d1a] font-bold mb-8 leading-tight">
                  Selling a Home in Calgary
                </h2>

                <p className="text-[#4f4a42] text-lg leading-relaxed mb-7">
                  From pricing strategy and market positioning to marketing and negotiation, Roland
                  helps sellers present their property effectively and maximize its value.
                </p>

                <p className="text-[#4f4a42] text-lg leading-relaxed mb-12">
                  Get a tailored selling approach built around your goals, timeline, and the
                  realities of today&apos;s market.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <BadgeDollarSign size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                        Pricing Strategy
                      </h3>
                      <p className="text-sm text-[#5f584e] leading-relaxed">
                        Position your home correctly for today&apos;s market.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Megaphone size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                        Marketing Plan
                      </h3>
                      <p className="text-sm text-[#5f584e] leading-relaxed">
                        Showcase your property with polished, targeted exposure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <LineChart size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                        Market Timing
                      </h3>
                      <p className="text-sm text-[#5f584e] leading-relaxed">
                        Align your sale with data-backed market opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[520px] order-1 lg:order-2">
              <img
                src="/images/sbs2.webp"
                alt="Selling a home in Calgary"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Mortgage Calculator Modal */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label="Close mortgage calculator"
            className="absolute inset-0 bg-black/45"
            onClick={() => setIsCalculatorOpen(false)}
          />

          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#f7f4ee] border border-[#cfc6b8] shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-[#2f2b26] px-6 md:px-8 py-5">
              <h3 className="text-white text-3xl font-serif font-bold">Mortgage Calculator</h3>

              <button
                type="button"
                onClick={() => setIsCalculatorOpen(false)}
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-10">
                <h4 className="text-2xl font-serif text-[#1f1d1a] mb-4">Property Details</h4>
                <div className="h-px bg-[#b8a893] mb-6" />

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3f3932] mb-2">
                      Home Price ($)
                    </label>
                    <input
  type="number"
  min={0}
  value={homePrice}
  onChange={(e) => {
    const value = e.target.value;
    setHomePrice(value === '' ? '' : Number(value));
  }}
  className="w-full bg-white border border-[#d5cdc1] px-4 py-4 text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0"
/>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
  <div className="flex items-center gap-2 mb-2">
    <label className="block text-sm font-medium text-[#3f3932]">
      Down Payment (%)
    </label>

    <div className="group relative">
      <button
        type="button"
        aria-label="Down payment information"
        className="w-5 h-5 rounded-full border border-[#b9a98c] text-[#8c7b5f] text-[11px] font-bold flex items-center justify-center hover:bg-[#efe9df] transition-colors"
      >
        ?
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-80 -translate-x-1/2 bg-[#2f2b26] text-white text-xs leading-relaxed p-3 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Enter your down payment as a percentage of the purchase price.<br /><br />

Typical minimums in Canada:<br />
• 5% on the first $500,000<br />
• 10% on the portion above $500,000 (up to $1.49M)<br />
• 20% for homes $1.5M+
      </div>
    </div>
  </div>

  <input
    type="number"
    min={0}
    max={100}
    value={downPaymentPercent}
    onChange={(e) => {
      const value = e.target.value;
      setDownPaymentPercent(value === '' ? '' : Number(value));
    }}
    className="w-full bg-white border border-[#d5cdc1] px-4 py-4 text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0"
  />

  <p className="text-sm !text-[#9a8874] mt-2">
    {homePrice && downPaymentPercent !== ''
      ? `${formatCurrency((homePrice * Number(downPaymentPercent)) / 100)} down payment`
      : '$0 down payment'}
  </p>

  {homePrice !== '' && homePrice > 0 && (
    <p className="text-sm !text-[#9a8874] mt-1">
      Estimated minimum: {formatCurrency(getMinimumDownPayment(homePrice))}
    </p>
  )}

  {homePrice !== '' &&
    downPaymentPercent !== '' &&
    (homePrice * Number(downPaymentPercent)) / 100 < getMinimumDownPayment(homePrice) && (
      <p className="text-sm text-[#b85c5c] mt-1">
        Down payment is below estimated minimum for this price.
      </p>
    )}
</div>

                    <div>
  <div className="flex items-center gap-2 mb-2">
    <label className="block text-sm font-medium text-[#3f3932]">
      Interest Rate (%)
    </label>

    <div className="group relative">
      <button
        type="button"
        aria-label="Interest rate information"
        className="w-5 h-5 rounded-full border border-[#b9a98c] text-[#8c7b5f] text-[11px] font-bold flex items-center justify-center hover:bg-[#efe9df] transition-colors"
      >
        ?
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-72 -translate-x-1/2 bg-[#2f2b26] text-white text-xs leading-relaxed p-3 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Mortgage rates change over time.<br></br>

This is a sample rate for planning purposes only.

Your actual rate will depend on your lender, mortgage type, and financial profile.
      </div>
    </div>
  </div>

  <input
  type="number"
  min={0}
  step="0.01"
  value={interestRate}
  onChange={(e) => {
    const value = e.target.value;
    setInterestRate(value === '' ? '' : Number(value));
  }}
  className="w-full bg-white border border-[#d5cdc1] px-4 py-4 text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0"
/>

  <p className="text-sm text-[#9a8874] mt-2">
    Using 4.49% as a planning estimate. You can adjust this anytime.
  </p>
</div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-2xl font-serif text-[#1f1d1a] mb-4">Loan Terms</h4>
                <div className="h-px bg-[#b8a893] mb-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3f3932] mb-2">
                      Amortization (years)
                    </label>
                    <input
  type="number"
  min={1}
  value={amortizationYears}
  onChange={(e) => {
    const value = e.target.value;
    setAmortizationYears(value === '' ? '' : Number(value));
  }}
  className="w-full bg-white border border-[#d5cdc1] px-4 py-4 text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0"
/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3f3932] mb-2">
                      Payment Frequency
                    </label>
                    <select
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value as PaymentFrequency)}
                      className="w-full bg-white border border-[#d5cdc1] px-4 py-4 text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Bi-Weekly">Bi-Weekly</option>
                      <option value="Weekly">Weekly</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-2xl font-serif text-[#1f1d1a] mb-4">
                  Payment Estimate
                </h4>
                <div className="h-px bg-[#b8a893] mb-6" />

                <div className="bg-[#f3efe8] border border-[#d5cdc1] p-6 md:p-8">
                  <p className="text-[#5f584e] text-lg mb-3">
                    {mortgageResult.label} Payment:{' '}
                    <span className="text-[#1f1d1a] text-3xl font-bold">
                      {formatCurrency(mortgageResult.value)}
                    </span>
                  </p>

                  <p className="text-[#8a7d6e] text-base leading-relaxed">
                    This is an estimate based on your inputs and does not include property tax, insurance, condo fees, or mortgage insurance (if applicable).
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-[#d9d1c2] text-[#1f1d1a] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#cbbfae] transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};