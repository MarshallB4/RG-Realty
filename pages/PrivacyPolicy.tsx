import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Header */}
      <section className="relative border-b border-[#ddd4c7] bg-[#f7f4ee] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(185,169,140,0.25),_transparent_55%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12 relative z-10">
          <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
            Privacy
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[0.95] mb-6">
            Privacy Policy
          </h1>

          <p className="max-w-3xl text-[#5f584e] text-lg md:text-xl font-light leading-relaxed">
            This Privacy Policy explains how information is collected, used, and protected when you use this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9f6f0] border border-[#ddd4c7] p-8 md:p-10 space-y-8 text-[#4f4a42] leading-relaxed">

            {/* Info Collected */}
            <div>
              <h2 className="text-2xl font-serif mb-3">Information We Collect</h2>
              <p>
                When you submit a form through this website, we may collect personal information such as your name, email address,
                phone number, and any additional details you choose to provide.
              </p>
            </div>

            {/* Usage */}
            <div>
              <h2 className="text-2xl font-serif mb-3">How Your Information Is Used</h2>
              <p>
                Information you provide may be used to respond to inquiries, provide requested services, follow up regarding real estate
                interests, and improve communication with prospective clients.
              </p>
            </div>

            {/* Third Party */}
            <div>
              <h2 className="text-2xl font-serif mb-3">Third-Party Services</h2>
              <p>
                This website uses third-party services including Formspree for handling form submissions and MyRealPage for MLS/IDX
                property search functionality. These services may collect and process data according to their own privacy policies.
              </p>
            </div>

            {/* IDX */}
            <div>
              <h2 className="text-2xl font-serif mb-3">MLS / IDX Search</h2>
              <p>
                Property search tools available on this website are powered by a third-party IDX provider. When using these features,
                you may interact with systems outside of this website, and their policies may apply.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-serif mb-3">Cookies</h2>
              <p>
                This website and connected third-party services may use cookies or similar technologies to support functionality,
                improve user experience, and analyze site usage.
              </p>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-serif mb-3">Data Sharing</h2>
              <p>
                Personal information is not sold. Information may be shared only when necessary to operate the website, respond to
                inquiries, provide requested services, or comply with legal obligations.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-serif mb-3">Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, you can contact Roland Gjelaj at{' '}
                <a
                  href="mailto:roland@soldbyrg.ca"
                  className="underline hover:text-[#8c7b5f] transition-colors"
                >
                  roland@soldbyrg.ca
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;