import React, { useState } from 'react';
import { Clock3, ShieldCheck, ChartNoAxesCombined } from 'lucide-react';

const FORMSPREE_EVALUATION_ENDPOINT = 'https://formspree.io/f/mjgabzpg';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

type PropertyType =
  | 'Detached House'
  | 'Semi-Detached'
  | 'Duplex'
  | 'Townhouse'
  | 'Rowhouse'
  | 'Condo / Apartment'
  | 'Mobile / Manufactured'
  | 'Other';

export const Evaluation: React.FC = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [step, setStep] = useState<1 | 2>(1);

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [beds, setBeds] = useState('1');
  const [baths, setBaths] = useState('1');
  const [propertyType, setPropertyType] = useState<PropertyType>('Detached House');
  const [sqft, setSqft] = useState('');
  const [timeframe, setTimeframe] = useState('Immediately');
  const [notes, setNotes] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (step !== 2) {
    if (!address.trim()) {
      setAddressError('Please enter your property address before continuing.');
    } else {
      setAddressError('');
      setStatus('idle');
      setStep(2);
    }
    return;
  }

  setStatus('sending');

    const formData = new FormData();

    formData.set('_gotcha', '');
    formData.set('source', 'Website Home Evaluation');

    formData.set('address', address);
    formData.set('beds', beds);
    formData.set('baths', baths);
    formData.set('propertyType', propertyType);
    formData.set('sqft', sqft);
    formData.set('timeframe', timeframe);
    formData.set('notes', notes);

    formData.set('firstName', firstName);
    formData.set('lastName', lastName);
    formData.set('email', email);
    formData.set('phone', phone);

    const safeFirst = firstName || 'Lead';
    const safeAddr = address || 'Property';
    formData.set('_subject', `Home Evaluation - ${safeFirst} - ${safeAddr}`);

    try {
      const res = await fetch(FORMSPREE_EVALUATION_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        setStep(1);

        setAddress('');
        setBeds('1');
        setBaths('1');
        setPropertyType('Detached House');
        setSqft('Not Sure');
        setTimeframe('Immediately');
        setNotes('');

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f2eb] px-4">
        <div className="bg-[#f9f6f0] p-8 md:p-10 border border-[#ddd4c7] text-center max-w-xl w-full shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
          <div className="w-16 h-16 bg-[#e9e1d2] rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl text-[#8c7b5f]">✓</span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-[#1f1d1a] mb-3">
            Request Received
          </h2>

          <p className="text-[#5f584e] mb-8 leading-relaxed">
            Roland will review your property details and follow up shortly with a personalized home
            evaluation based on current market conditions.
          </p>

          <button
            onClick={() => {
              setStatus('idle');
              setStep(1);
            }}
            className="inline-flex items-center justify-center bg-[#6f675b] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Editorial Intro */}
      <section className="relative border-b border-[#ddd4c7] bg-[#f7f4ee] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(185,169,140,0.24),_transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-14">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
              Valuation
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1f1d1a] leading-[0.95] mb-6">
              Find Out What
              <br />
              Your Home Could Be Worth
            </h1>

            <p className="max-w-3xl mx-auto text-[#5f584e] text-lg md:text-xl font-light leading-relaxed">
              Receive a tailored, no-obligation home evaluation based on your property details,
              local market activity, and current Calgary conditions.
            </p>
          </div>

          {/* Trust / process strip */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#ddd4c7] pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <ChartNoAxesCombined size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Market-Based Insight</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Your evaluation is informed by current neighborhood activity and local pricing
                  trends.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <ShieldCheck size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Private & No Pressure</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Your information stays private, and there’s no obligation to list or move
                  forward.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <Clock3 size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Quick Turnaround</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Most requests receive a response within 24 hours with clear next-step guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left info panel */}
            <div className="lg:col-span-4">
              <div className="bg-[#e9e1d2] border border-[#d6cab7] p-8 sticky top-24">
                <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  How It Works
                </span>

                <h2 className="text-3xl font-serif font-bold text-[#1f1d1a] mb-5 leading-tight">
                  A simple two-step process
                </h2>

                <div className="space-y-6 text-[#5f584e]">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                      01. Property Details
                    </p>
                    <p className="text-sm leading-relaxed">
                      Start with the basics of your home so the valuation has useful context.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#1f1d1a] mb-1">
                      02. Contact Information
                    </p>
                    <p className="text-sm leading-relaxed">
                      Leave your preferred contact details so Roland can send your estimate
                      directly.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#d6cab7]">
                    <p className="text-sm leading-relaxed">
                      The more accurate the details, the better the guidance. Renovations,
                      upgrades, finished basements, and suites can all help refine the estimate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-[#f9f6f0] p-8 md:p-10 border border-[#ddd4c7] shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
              >
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#7d7468]">
                    <span>{step === 1 ? 'Step 1 of 2' : 'Step 2 of 2'}</span>
                    <span>{step === 1 ? 'Property Details' : 'Contact Info'}</span>
                  </div>

                  <div className="mt-3 h-[2px] w-full bg-[#ddd4c7]">
                    <div
                      className={`h-[2px] bg-[#8c7b5f] transition-all duration-300 ${
                        step === 1 ? 'w-1/2' : 'w-full'
                      }`}
                    />
                  </div>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                        Property Address
                      </label>
                      <input
  type="text"
  required
  value={address}
  onChange={(e) => {
    setAddress(e.target.value);
    if (addressError) setAddressError('');
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (!address.trim()) {
        setAddressError('Please enter your property address before continuing.');
        return;
      }

      setAddressError('');
      setStatus('idle');
      setStep(2);
    }
  }}
  className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
  placeholder="e.g. 123 Main St, Calgary"
/>
                      <p className="text-xs text-[#7d7468] mt-2">
                        Your address is kept private and never shared publicly.
                      </p>

                      {addressError && (
                        <p className="text-xs text-red-500 mt-2">{addressError}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          Bedrooms
                        </label>
                        <select
                          value={beds}
                          onChange={(e) => setBeds(e.target.value)}
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          Bathrooms
                        </label>
                        <select
                          value={baths}
                          onChange={(e) => setBaths(e.target.value)}
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        >
                          <option value="1">1</option>
                          <option value="1.5">1.5</option>
                          <option value="2">2</option>
                          <option value="2.5">2.5</option>
                          <option value="3">3</option>
                          <option value="3.5">3.5</option>
                          <option value="4+">4+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          Property Type
                        </label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        >
                          <option value="Detached House">Detached House</option>
                          <option value="Semi-Detached">Semi-Detached</option>
                          <option value="Duplex">Duplex</option>
                          <option value="Townhouse">Townhouse</option>
                          <option value="Condo / Apartment">Condo / Apartment</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
  <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
    Approx. Square Footage
  </label>
  <input
    type="number"
  min="0"
  step="50"
    value={sqft}
    onChange={(e) => setSqft(e.target.value)}
    placeholder="e.g. 1850"
    className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
  />
</div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                        When are you planning to sell?
                      </label>
                      <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                      >
                        <option value="Immediately">Immediately</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="6-12 Months">6-12 Months</option>
                        <option value="Just Curious">Just Curious</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                        Additional Notes (optional)
                      </label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        placeholder="Any renovations, upgrades, suite/garage info, or anything else Roland should know..."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (!address.trim()) {
                          setAddressError('Please enter your property address before continuing.');
                          return;
                        }

                        setAddressError('');
                        setStatus('idle');
                        setStep(2);
                      }}
                      className="w-full flex justify-center py-4 px-4 text-sm font-bold uppercase tracking-widest text-white bg-[#8c7b5f] hover:bg-[#1f1d1a] transition-all duration-300 mt-3"
                    >
                      See My Home Value →
                    </button>
                  </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <>
                    <h3 className="text-[#1f1d1a] text-lg font-semibold text-center mb-2">
                      Where should we send your home value?
                    </h3>
                    <p className="text-[#5f584e] text-sm text-center mb-6">
                      Enter your contact info and Roland will send your estimate within 24 hours.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#7d7468] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="e.g. 403-555-1234"
                          className="block w-full bg-white border border-[#ddd4c7] text-[#1f1d1a] focus:border-[#8c7b5f] focus:ring-0 py-3 px-4 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#7d7468] text-center mt-2">
                      <div>✓ No obligation</div>
                      <div>✓ Local Calgary expert</div>
                      <div>✓ Professional valuation</div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mt-3">
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('idle');
                          setStep(1);
                        }}
                        className="w-full md:w-1/3 flex justify-center py-4 px-4 text-sm font-bold uppercase tracking-widest text-[#5f584e] border border-[#ddd4c7] hover:border-[#b9a98c] hover:text-[#1f1d1a] transition-all duration-300"
                      >
                        ← Back
                      </button>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full md:w-2/3 flex justify-center py-4 px-4 text-sm font-bold uppercase tracking-widest text-white bg-[#8c7b5f] hover:bg-[#1f1d1a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? 'Sending...' : 'Get My Free Home Value'}
                      </button>
                    </div>

                    <p className="text-xs text-[#7d7468] leading-relaxed text-center pt-4">
                      By submitting this form, you agree to be contacted regarding your home
                      evaluation.
                    </p>

                    {status === 'error' && (
                      <p className="text-sm text-red-500 pt-2 text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};