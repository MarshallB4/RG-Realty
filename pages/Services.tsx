import React, { useState } from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  BadgeCheck,
  MapPinned,
  ChartNoAxesCombined,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Feature Strip */}
      <section className="border-b border-[#ddd4c7] bg-[#f3efe8] pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <BadgeCheck size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Tailored Approach</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Every strategy is built around your goals, property type, and timeline.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <MapPinned size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Local Market Insight</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Grounded guidance shaped by Calgary neighborhoods, pricing, and market movement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <ChartNoAxesCombined size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Strategic Execution</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Clear planning, strong positioning, and practical next steps at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Split Hero */}
      <section className="bg-[#f7f4ee] border-b border-[#ddd4c7]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
          <div className="relative min-h-[320px] lg:min-h-full overflow-hidden">
            <img
              src="/images/sunset.webp"
              alt="Luxury real estate service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c2822]/25" />
          </div>

          <div className="relative flex items-center bg-[#e9e1d2] px-8 md:px-14 lg:px-20 py-16 md:py-20">
            <div className="max-w-xl">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
                Expertise
              </span>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1f1d1a] leading-[0.95] mb-8">
                Real Estate
                <br />
                Services That
                <br />
                Move With You
              </h1>

              <p className="text-[#4f4a42] text-lg md:text-xl font-light leading-relaxed mb-8">
                Buying, selling, first-time guidance, and home valuation support built around your
                goals, timeline, and the realities of the Calgary market.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#6f675b] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
                >
                  Work With Roland
                </Link>

                <Link
                  to="/evaluation"
                  className="inline-flex items-center justify-center border border-[#b9a98c] text-[#1f1d1a] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#f7f4ee] transition-all duration-300"
                >
                  Free Evaluation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-14">
            <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
              What Roland Offers
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1f1d1a] mb-5">
              Guidance for every stage
            </h2>
            <p className="text-[#5f584e] text-lg font-light leading-relaxed">
              Explore the services available and expand each section for more detail on how Roland
              can support your next move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service, index) => {
              // @ts-ignore
              const iconKey =
  service.icon.charAt(0).toUpperCase() +
  service.icon
    .slice(1)
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const IconComponent =
  ((Icons as unknown) as Record<string, React.ComponentType<any>>)[iconKey] || Icons.HelpCircle;

              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`flex flex-col p-10 border bg-[#f9f6f0] border-[#ddd4c7] hover:border-[#b9a98c] transition-all duration-300 relative group ${
                    isExpanded ? 'border-[#b9a98c] shadow-[0_12px_30px_rgba(0,0,0,0.05)]' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-[#efe7da] rounded-none flex items-center justify-center text-[#8c7b5f] group-hover:bg-[#8c7b5f] group-hover:text-white transition-colors duration-300">
                        <IconComponent size={32} strokeWidth={1} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif text-[#1f1d1a] mb-4">{service.title}</h3>
                      <p className="text-[#5f584e] leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-6 border-t border-[#ddd4c7] text-[#4f4a42] font-light leading-relaxed">
                      {service.longDescription}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleService(index)}
                    className="mt-8 mx-auto flex items-center justify-center w-9 h-9 rounded-full bg-[#efe7da] hover:bg-[#8c7b5f] hover:text-white text-[#6f675b] transition-colors focus:outline-none"
                    aria-label={isExpanded ? 'Show less' : 'Show more'}
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
<section className="relative overflow-hidden border-t border-[#ddd4c7] bg-[#efe9df]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_transparent_60%)] opacity-30" />

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
    <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
      Personalized Support
    </span>

    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f1d1a] mb-6 leading-tight">
      Need something specific?
    </h2>

    <p className="text-[#5f584e] mb-10 text-lg font-light max-w-3xl mx-auto leading-relaxed">
      Every client situation is different. Whether you're planning a move, exploring an
      investment, or simply want expert direction, Roland can help you map out the right next
      step.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center bg-[#8c7b5f] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
      >
        Discuss Your Needs
      </Link>

      <Link
        to="/testimonials"
        className="inline-flex items-center justify-center border border-[#b9a98c] text-[#1f1d1a] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#f7f4ee] transition-all duration-300"
      >
        Read Client Stories <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};