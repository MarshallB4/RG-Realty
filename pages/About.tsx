import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  HeartHandshake,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="border-b border-[#ddd4c7] bg-[#f7f4ee]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] min-h-[410px] md:min-h-[440px]">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src="/images/headshot2.webp"
              alt="Roland Gjelaj"
              className="w-full h-full object-cover object-[center_22%]"
            />
          </div>

          {/* Content */}
          <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 md:py-18">
            <div className="max-w-lg">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
                About
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[2.65rem] font-serif font-bold text-[#1f1d1a] leading-[1.05] mb-5">
                Meet Roland
              </h1>

              <p className="text-[#5f584e] text-base md:text-lg font-light leading-relaxed mb-5">
                Roland is a Calgary real estate professional known for his approachable style,
                strong communication, and ability to guide clients through every step with clarity.
              </p>

              <p className="text-[#5f584e] text-base md:text-lg font-light leading-relaxed">
                Whether you&apos;re buying, selling, or just exploring your options, his goal is
                simple: make the process feel straightforward, confident, and genuinely personal.
              </p>

              <div className="flex items-center gap-6 mt-7">
                <a
                  href="https://www.facebook.com/RGRealty1/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8c7b5f] hover:text-[#1f1d1a] transition"
                  aria-label="Facebook"
                >
                  <Facebook size={20} strokeWidth={1.6} />
                </a>

                <a
                  href="https://www.instagram.com/rgrealty_/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8c7b5f] hover:text-[#1f1d1a] transition"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={1.6} />
                </a>

                <a
                  href="https://www.linkedin.com/in/roland-gjelaj-5a7475300/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8c7b5f] hover:text-[#1f1d1a] transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.6} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 md:py-24 bg-white border-t border-[#ddd4c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left intro */}
            <div className="lg:col-span-4">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                His Approach
              </span>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1f1d1a] leading-tight">
                Real estate,
                <br />
                done differently
              </h2>
            </div>

            {/* Right story */}
            <div className="lg:col-span-8">
              <div className="space-y-6 text-[#4f4a42] text-lg font-light leading-relaxed max-w-4xl">
                <p>
                  Roland takes a people-first approach to real estate. He believes that every
                  client’s situation is unique, and that success comes from understanding goals, not
                  just transactions.
                </p>

                <p>
                  Known for being easy to talk to and highly responsive, he focuses on building
                  trust through honest advice, clear communication, and consistent follow-through.
                  His style is calm, personable, and practical. Helping clients feel informed
                  instead of overwhelmed.
                </p>

                <p>
                  Outside of real estate, Roland is passionate about soccer. He plays in a local
                  men’s league with Aces FC and is a dedicated Manchester United supporter,
                  something clients quickly learn when conversations go beyond just homes.
                </p>

                <p>
                  That balance of professionalism and personality is a big part of what makes
                  working with him different. He values real relationships, clear expectations, and
                  making every step of the process feel more comfortable and human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-24 bg-[#f7f4ee] border-t border-[#ddd4c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#fbfaf7] border border-[#ddd4c7] p-8 md:p-9">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] mb-5">
                <MessageSquare size={22} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1f1d1a] mb-3">
                Clear Communication
              </h3>
              <p className="text-[#5f584e] font-light leading-relaxed">
                You&apos;ll always know what&apos;s happening, what&apos;s next, and what it means
                for you. Roland focuses on keeping the process understandable, organized, and
                stress-free.
              </p>
            </div>

            <div className="bg-white border border-[#d8cfbf] p-9 md:p-10 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] mb-6">
                <HeartHandshake size={22} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1f1d1a] mb-3">
                Client-First Mindset
              </h3>
              <p className="text-[#5f584e] font-light leading-relaxed">
                Every recommendation is made with your goals in mind, not just the transaction.
                Roland values long-term relationships, honest guidance, and helping clients make
                confident decisions.
              </p>
            </div>

            <div className="bg-[#fbfaf7] border border-[#ddd4c7] p-8 md:p-9">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] mb-5">
                <MapPin size={22} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1f1d1a] mb-3">
                Local Perspective
              </h3>
              <p className="text-[#5f584e] font-light leading-relaxed">
                Deep understanding of Calgary&apos;s market and neighborhoods that actually matter.
                From community feel to pricing trends, Roland helps clients look beyond the listing
                and see the bigger picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage */}
      <section className="py-20 md:py-24 bg-white border-t border-[#ddd4c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left content */}
            <div className="lg:col-span-8">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                Brokerage
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a] mb-6 leading-tight">
                Backed by eXp Realty
              </h2>

              <div className="space-y-5 text-[#5f584e] text-lg font-light leading-relaxed max-w-3xl">
                <p>
                  Roland is backed by eXp Realty, one of the most recognized and innovative
                  brokerages in modern real estate. That means clients benefit from both a personal,
                  one-on-one experience and the broader support of a globally connected real estate
                  company.
                </p>

                <p>
                  With eXp&apos;s technology, marketing resources, and expansive network behind the
                  scenes, Roland is able to deliver a service that feels highly personal while still
                  being supported by strong systems and reach.
                </p>

                <p>
                  It&apos;s a combination that allows him to stay relationship-focused while
                  offering the professionalism, tools, and market presence clients expect from a
                  top-tier brokerage.
                </p>
              </div>
            </div>

            {/* Right visual/info block */}
            <div className="lg:col-span-4">
              <div className="bg-[#f7f4ee] border border-[#ddd4c7] p-7 md:p-8 max-w-md ml-auto">
                <div className="flex justify-start mb-7">
                  <img
                    src="/images/exp-black.png"
                    alt="eXp Realty"
                    className="h-9 md:h-10 w-auto object-contain"
                  />
                </div>

                <div className="space-y-5 text-[#4f4a42]">
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8c7b5f] mb-2">
                      Modern Brokerage
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A nationally recognized real estate brand with strong technology, marketing
                      tools, and agent support.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#ddd4c7]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8c7b5f] mb-2">
                      Client Benefit
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Personal service from Roland, backed by the systems and reach of a larger
                      network.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#ddd4c7]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8c7b5f] mb-2">
                      Why It Matters
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It creates a better balance of relationship-driven guidance and professional
                      resources throughout the buying or selling process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efe9df] py-24 md:py-28 border-t border-[#ddd4c7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-6">
            Let&apos;s Connect
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-[#1f1d1a] mb-8 font-bold leading-tight">
            Let&apos;s start the conversation
          </h2>

          <p className="text-[#5f584e] text-lg md:text-xl mb-10 font-light leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re ready to make a move or just want to ask a few questions, Roland is
            here to help with clear advice and a personal response.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#8c7b5f] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;