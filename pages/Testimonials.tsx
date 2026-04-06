import React from 'react';
import { MOCK_TESTIMONIALS as TESTIMONIALS } from '../constants';
import { Quote, Star, HeartHandshake, BadgeCheck, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Testimonials: React.FC = () => {
  const featuredTestimonial = TESTIMONIALS[0];

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Hero / Intro */}
      <section className="relative border-b border-[#ddd4c7] bg-[#f7f4ee] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
          {/* Left image block */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full overflow-hidden">
            <img
              src="/assets/images/beige-kitchen.jpg"
              alt="Luxury home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c2822]/16" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f7f4ee]/8" />
          </div>

          {/* Right content block */}
<div className="lg:col-span-6 bg-[#e9e1d2] px-8 md:px-12 lg:px-14 py-14 md:py-16 lg:py-18 flex items-center relative">
  <div className="max-w-2xl w-full flex flex-col justify-center gap-6">
    <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block">
      Client Stories
    </span>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1f1d1a] leading-[0.96]">
      Results That
      <br />
      Feel Personal
    </h1>

    <p className="text-[#4f4a42] text-lg md:text-xl font-light leading-relaxed max-w-xl">
      Great real estate experiences are built on trust, communication, and confidence.
      These stories reflect the care Roland brings to every step of the process.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
      <div className="flex items-start gap-3">
        <HeartHandshake size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
            Trust
          </p>
          <p className="text-sm text-[#5f584e] leading-relaxed">
            Relationships built on honesty and care.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MessagesSquare size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
            Clarity
          </p>
          <p className="text-sm text-[#5f584e] leading-relaxed">
            Straightforward guidance from start to finish.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <BadgeCheck size={18} className="text-[#8c7b5f] mt-1 shrink-0" />
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
            Results
          </p>
          <p className="text-sm text-[#5f584e] leading-relaxed">
            Strategy backed by strong local market knowledge.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

        {/* Overlapping featured highlight */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="lg:max-w-[560px] bg-[#f9f6f0] border border-[#ddd4c7] p-6 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.05)] -mt-10 md:-mt-12 relative">
    <Quote size={32} className="text-[#b9a98c]/40 absolute top-5 right-5" />

    <div className="flex gap-1 mb-4">
      {[...Array(featuredTestimonial.rating)].map((_, i) => (
        <Star key={i} size={14} className="fill-[#8c7b5f] text-[#8c7b5f]" />
      ))}
    </div>

    <p className="text-[#1f1d1a] font-serif text-xl md:text-2xl leading-snug mb-4 max-w-xl">
      “Roland made the entire process smooth, clear, and stress-free.”
    </p>

    <div className="text-[#5f584e] text-sm">
      <span className="font-semibold text-[#1f1d1a]">
        {featuredTestimonial.name}
      </span>
      <span className="mx-2">•</span>
      <span className="uppercase tracking-wide text-xs">
        {featuredTestimonial.role}
      </span>
    </div>
  </div>
</div>

        {/* Testimonials Section Wrapper */}
<section>
  {/* Trust strip */}
  <div className="bg-[#f7f4ee]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#ddd4c7] pt-8">
        <div>
          <p className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a]">5★</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#7d7468] mt-2">
            Client Satisfaction
          </p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a]">Repeat</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#7d7468] mt-2">
            Referral Driven
          </p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a]">Local</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#7d7468] mt-2">
            Calgary Market Focus
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Testimonials Grid */}
  <div className="py-16 md:py-20 bg-[#f7f4ee]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 pt-6">
        <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
          Real Experiences
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1f1d1a] mb-5">
          What clients are saying
        </h2>
        <p className="max-w-3xl text-[#5f584e] text-lg font-light leading-relaxed">
          Every testimonial reflects a unique journey, but the common thread is consistent:
          trusted advice, thoughtful service, and a more confident experience throughout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#fbfaf7] p-10 border border-[#ddd4c7] relative group hover:border-[#b9a98c] transition-all duration-300 flex flex-col h-full"
          >
            <Quote
              size={48}
              className="text-[#b9a98c]/35 absolute top-8 right-8 group-hover:text-[#8c7b5f]/50 transition-colors"
            />

            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#8c7b5f] text-[#8c7b5f]" />
              ))}
            </div>

            <p className="text-[#4f4a42] text-lg leading-relaxed mb-8 font-light italic relative z-10">
              “{testimonial.content}”
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-[#e9e1d2] rounded-full flex items-center justify-center text-xl font-serif font-bold text-[#1f1d1a]">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-[#1f1d1a] font-serif font-bold">{testimonial.name}</h4>
                <p className="text-[#8c7b5f] text-xs uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
</section>

      {/* CTA */}
<section className="bg-[#efe9df] py-24 md:py-28 border-t border-[#ddd4c7]">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-6">
      Start Your Journey
    </span>

    <h2 className="text-4xl md:text-6xl font-serif text-[#1f1d1a] mb-8 font-bold leading-tight">
      Ready to find your next home?
    </h2>

    <p className="text-[#5f584e] text-lg md:text-xl mb-10 font-light leading-relaxed max-w-3xl mx-auto">
      If you&apos;re planning your next move, Roland can help you navigate the process with
      clarity, strategy, and personalized support from the first conversation onward.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center bg-[#8c7b5f] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
      >
        Start Your Journey
      </Link>

      <a
        href="https://www.google.com/search?sca_esv=0c31bef99e93436e&rlz=1C1ONGR_enCA1136CA1136&sxsrf=ANbL-n6ExswjDRWTmc-0LI_1fMrlPgUDcw:1772759332387&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOaiufdzZ_DgONP0wVxPaCJPa3Zbv7b41OCKOztu38qs3oSnmzGUUAItaRlhnmDK7TSGzW1ZrKn0VhKb1RYQ9dVIc7JMG&q=RG+Realty+Reviews&sa=X&ved=2ahUKEwinxZ2Si4qTAxX1AzQIHbDyLMkQ0bkNegQIIxAF&biw=1920&bih=945&dpr=1#lrd=0x4f565df552215509:0x753616295dffbceb,3,,,,"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-[#b9a98c] text-[#1f1d1a] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#f7f4ee] transition-all duration-300"
      >
        Leave a Google Review
      </a>
    </div>
  </div>
</section>
    </div>
  );
};