import React, { useState } from 'react';
import { Mail, ChartNoAxesCombined, BellRing, House } from 'lucide-react';
import { AGENT_NAME } from '../constants';

const FORMSPREE_NEWSLETTER_ENDPOINT = 'https://formspree.io/f/mykngvdd';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export const Newsletter: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !firstName) return;

    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_NEWSLETTER_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        setFirstName('');
        setEmail('');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Intro */}
<section className="relative border-b border-[#ddd4c7] bg-[#f7f4ee] overflow-hidden">
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(185,169,140,0.25),_transparent_55%)]" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16 md:pb-20 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-3">
        Newsletter
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1f1d1a] leading-[0.95] mb-6">
        Stay Connected to
        <br />
        Calgary Real Estate
      </h1>

      <p className="max-w-3xl mx-auto text-[#5f584e] text-lg md:text-xl font-light leading-relaxed">
        Subscribe for monthly updates from {AGENT_NAME}, including market insights,
        notable listings, and practical guidance for buyers and sellers in Calgary.
      </p>

      
      
    </div>
  </div>
</section>

      

      {/* Signup Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left side */}
            <div className="lg:col-span-5">
              <div className="bg-[#e9e1d2] border border-[#d6cab7] p-8 sticky top-28">
                <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  Why Subscribe
                </span>

                <h2 className="text-3xl font-serif font-bold text-[#1f1d1a] mb-5 leading-tight">
                  Real estate insight without the noise
                </h2>

                <p className="text-[#5f584e] leading-relaxed mb-6">
                  This is a simple monthly email list for people who want useful Calgary real estate updates
                  without being overwhelmed. Expect thoughtful market context, featured opportunities, and
                  relevant advice you can actually use.
                </p>

                <div className="space-y-4 text-sm text-[#4f4a42]">
                  <div className="pt-4 border-t border-[#d6cab7]">
                    ✓ Monthly market updates
                  </div>
                  <div className="pt-4 border-t border-[#d6cab7]">
                    ✓ Featured listings and opportunities
                  </div>
                  <div className="pt-4 border-t border-[#d6cab7]">
                    ✓ Practical tips for buyers and sellers
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#f9f6f0] border border-[#ddd4c7] shadow-[0_12px_30px_rgba(0,0,0,0.05)] p-8 md:p-10">
                {status !== 'success' ? (
                  <>
                    <div className="mb-8 border-b border-[#ddd4c7] pb-6">
                      <div className="w-14 h-14 bg-[#e9e1d2] rounded-full flex items-center justify-center text-[#8c7b5f] mb-5">
                        <Mail size={26} strokeWidth={1.5} />
                      </div>

                      <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-3">
                        Join the List
                      </span>

                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a] mb-3">
                        Subscribe for monthly updates
                      </h2>

                      <p className="text-[#5f584e] text-base md:text-lg font-light leading-relaxed">
                        Enter your details below to receive future newsletter updates directly in your inbox.
                      </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="_gotcha"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <input
                        type="hidden"
                        name="_subject"
                        value="New newsletter signup (soldbyrg.ca)"
                      />

                      <input type="hidden" name="source" value="Website Newsletter" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2"
                          >
                            First Name
                          </label>
                          <input
                            id="first-name"
                            name="firstName"
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                            placeholder="Your first name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email-address"
                            className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-bold uppercase tracking-widest text-white bg-[#6f675b] hover:bg-[#1f1d1a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? 'Subscribing...' : 'Subscribe Now'}
                      </button>

                      <p className="text-xs text-[#7d7468] text-center leading-relaxed">
                        By subscribing, you agree to receive occasional real estate updates and market information.
                      </p>

                      {status === 'error' && (
                        <p className="text-sm text-red-500 pt-2 text-center">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[#e9e1d2] rounded-full flex items-center justify-center mx-auto mb-5">
                      <span className="text-3xl text-[#8c7b5f]">✓</span>
                    </div>

                    <h3 className="text-3xl font-serif font-bold text-[#1f1d1a] mb-3">
                      You&apos;re Subscribed
                    </h3>

                    <p className="text-[#5f584e] max-w-md mx-auto leading-relaxed">
                      Thanks for joining the list. Keep an eye on your inbox for upcoming market updates,
                      featured listings, and monthly insight.
                    </p>

                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 inline-flex items-center justify-center bg-[#6f675b] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
                    >
                      Subscribe Another Email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};