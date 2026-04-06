import React, { useState } from 'react';
import { Mail, Phone, Send, Clock3, MessageSquare, MapPin } from 'lucide-react';
import { AGENT_NAME } from '../constants';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqeyznvg';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
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
      {/* Intro Band */}
      <section className="relative border-b border-[#ddd4c7] bg-[#f7f4ee] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(185,169,140,0.25),_transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12 text-center relative z-10">
          <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
            Connect
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1f1d1a] leading-[0.95] mb-6">
            Start the
            <br />
            Conversation
          </h1>

          <p className="max-w-3xl mx-auto text-[#5f584e] text-lg md:text-xl font-light leading-relaxed">
            Whether you’re planning a move, exploring the market, or simply have a question,
            {` ${AGENT_NAME} `}is here to help with thoughtful guidance and a personal response.
          </p>
        </div>

        {/* Contact methods (minimal strip) */}
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-[#ddd4c7] pt-8">
    
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
        Call
      </p>
      <a
        href="tel:15873265480"
        className="text-[#1f1d1a] font-medium hover:text-[#8c7b5f] transition-colors"
      >
        (587) 326-5480
      </a>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
        Email
      </p>
      <p className="text-[#1f1d1a] font-medium">
        roland@soldbyrg.ca
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
        Availability
      </p>
      <p className="text-[#1f1d1a] font-medium">
        9am – 9pm Daily
      </p>
    </div>

  </div>
</div>
      </section>

      {/* Form + Side Notes */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <div className="xl:col-span-8">
              <div className="bg-[#f9f6f0] border border-[#ddd4c7] shadow-[0_12px_30px_rgba(0,0,0,0.05)] p-8 md:p-10">
                {status !== 'success' ? (
                  <>
                    <div className="mb-8 border-b border-[#ddd4c7] pb-6">
                      <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-3">
                        Send a Message
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1a] mb-3">
                        How can we help?
                      </h2>
                      <p className="text-[#5f584e] text-base md:text-lg font-light leading-relaxed">
                        Share a few details and Roland will follow up with the right information,
                        guidance, or next steps.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                        value="New message from soldbyrg.ca (Contact)"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                            placeholder="Your Name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-bold uppercase tracking-widest text-white bg-[#6f675b] hover:bg-[#1f1d1a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Send size={18} className="mr-2" />
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>

                      {status === 'error' && (
                        <p className="text-sm text-red-500 pt-2">
                          Something went wrong. Please try again, or email directly.
                        </p>
                      )}
                    </form>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-[#e9e1d2] rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl text-[#8c7b5f]">✓</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-[#1f1d1a] mb-3">
                      Message Sent
                    </h3>
                    <p className="text-[#5f584e] max-w-md leading-relaxed">
                      Thank you for reaching out. Roland will get back to you shortly with a personal response.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 inline-flex items-center justify-center bg-[#6f675b] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Side editorial notes */}
            <div className="xl:col-span-4 space-y-6">
              <div className="bg-[#e9e1d2] border border-[#d6cab7] p-8">
                <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  Concierge Approach
                </span>
                <h3 className="text-2xl font-serif text-[#1f1d1a] mb-4">
                  Thoughtful guidance starts here
                </h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Buying, selling, planning, or simply exploring your options. Start with a message,
                  and Roland can help you determine the best next step based on your goals.
                </p>
              </div>

              <div className="bg-[#f9f6f0] border border-[#ddd4c7] p-8">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#8c7b5f] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif text-[#1f1d1a] mb-2">Calgary Focused</h3>
                    <p className="text-[#5f584e] text-sm leading-relaxed">
                      Local market knowledge and neighborhood insight across Calgary and surrounding areas.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#ddd4c7]">
                  <p className="text-[#5f584e] text-sm leading-relaxed">
                    A little context goes a long way. Mention your timeline, budget range,
                    neighborhood interests, or property goals for a more tailored response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};