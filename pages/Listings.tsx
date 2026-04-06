import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, ArrowRight } from 'lucide-react';

type ListingCategory =
  | 'apartments'
  | 'townhouses'
  | 'semi-detached'
  | 'detached-under-800'
  | 'detached-800-1200'
  | 'luxury';

const idxEmbeds: Record<'default' | ListingCategory, string> = {
  default:
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.05895596959559%7C-114.08123238303182,idx_v2_map_radius~4/-/idx.browse.searchform/in.js',
  apartments:
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.03824288851837%7C-114.05778467822294,idx_v2_map_radius~5,omni~list_area%3A0046%5BCalgary%5D%24city%3AChestermere%5BChestermere%5D%24city%3AAirdrie%5BAirdrie%5D%24city%3ACochrane%5BCochrane%5D,ibf_property_type~DWELLING_TYPE%40APAR,ibf_sort~date_desc/-/idx.browse.searchform/in.js',
  townhouses:
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.03824288851837%7C-114.05778467822294,idx_v2_map_radius~5,omni~list_area%3A0046%5BCalgary%5D%24city%3AChestermere%5BChestermere%5D%24city%3AAirdrie%5BAirdrie%5D%24city%3ACochrane%5BCochrane%5D,ibf_property_type~DWELLING_TYPE%40RTHS,ibf_sort~date_desc/-/idx.browse.searchform/in.js',
  'semi-detached':
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.04472668666631%7C-114.05897451150516,idx_v2_map_radius~5,omni~list_area%3A0046%5BCalgary%5D%24city%3AChestermere%5BChestermere%5D%24city%3AAirdrie%5BAirdrie%5D%24city%3ACochrane%5BCochrane%5D,ibf_property_type~DWELLING_TYPE%40SDET%7CDWELLING_TYPE%40DUPX,ibf_sort~date_desc/-/idx.browse.searchform/in.js',
  'detached-under-800':
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.0447485109776%7C-114.05897451150514,idx_v2_map_radius~5,omni~list_area%3A0046%5BCalgary%5D%24city%3AChestermere%5BChestermere%5D%24city%3AAirdrie%5BAirdrie%5D%24city%3ACochrane%5BCochrane%5D,ibf_property_type~DWELLING_TYPE%40DET,ibf_price~%7C800000,ibf_sort~date_desc/-/idx.browse.searchform/in.js',
  'detached-800-1200':
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.0447485109776%7C-114.05897451150514,idx_v2_map_radius~5,omni~list_area%3A0046%5BCalgary%5D%24city%3AChestermere%5BChestermere%5D%24city%3AAirdrie%5BAirdrie%5D%24city%3ACochrane%5BCochrane%5D,ibf_property_type~DWELLING_TYPE%40DET,ibf_price~800000%7C1200000,ibf_sort~date_desc/-/idx.browse.searchform/in.js',
  luxury:
    'https://idx.myrealpage.com/wps/rest/66925/l/idx2/recip/tmpl~v2,idx_v2_map_pos~51.0447485109776%7C-114.05897451150514,idx_v2_map_radius~5,omni~list_area%3A0046%5BCalgary%5D%24city%3AChestermere%5BChestermere%5D%24city%3AAirdrie%5BAirdrie%5D%24city%3ACochrane%5BCochrane%5D,ibf_property_type~DWELLING_TYPE%40APAR%7CDWELLING_TYPE%40DET%7CDWELLING_TYPE%40DUPX%7CDWELLING_TYPE%40RTHS%7CDWELLING_TYPE%40SDET,ibf_price~1200000%7C,ibf_sort~date_desc/-/idx.browse.searchform/in.js',
};

const categoryLabels: Record<ListingCategory, string> = {
  apartments: 'Apartments & Condos',
  townhouses: 'Townhouses',
  'semi-detached': 'Semi-Detached Homes',
  'detached-under-800': 'Detached Homes Under $800K',
  'detached-800-1200': 'Detached Homes $800K – $1.2M',
  luxury: 'Luxury Listings',
};

const isValidCategory = (value: string | null): value is ListingCategory => {
  return !!value && value in idxEmbeds && value !== 'default';
};

export const Listings: React.FC = () => {
  const location = useLocation();

  const categoryParam = useMemo(() => {
    const hash = window.location.hash || '';
    const hashQuery = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(hashQuery);
    return params.get('category');
  }, [location.key]);

  const activeCategory = useMemo(() => {
    return isValidCategory(categoryParam) ? categoryParam : null;
  }, [categoryParam]);

  const activeEmbed = useMemo(() => {
    return activeCategory ? idxEmbeds[activeCategory] : idxEmbeds.default;
  }, [activeCategory]);

  const idxContainerRef = useRef<HTMLDivElement | null>(null);
  const [containerKey] = useState(
    () => `idx-${Date.now()}-${Math.random().toString(36).slice(2)}`
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = idxContainerRef.current;
    if (!container) return;

    let cancelled = false;
    let retryCount = 0;
    let retryTimeout: number | null = null;
    let startTimeout: number | null = null;
    let observer: MutationObserver | null = null;

    const MAX_RETRIES = 10;
    const RETRY_DELAY = 900;

    const removeInjectedScripts = () => {
      document.querySelectorAll('#mrpscript').forEach((el) => el.remove());
      document.querySelectorAll('script[src*="idx.myrealpage.com"]').forEach((el) => el.remove());
    };

    const clearIdx = () => {
      setIsLoaded(false);
      container.innerHTML = '';
      removeInjectedScripts();
    };

    const hasRenderedContent = () => {
      const html = container.innerHTML.trim();
      const height = container.clientHeight;
      const children = container.childElementCount;

      return html !== '' && children > 0 && height > 120;
    };

    const canSafelyInject = () => {
      const rect = container.getBoundingClientRect();
      return rect.width > 0;
    };

    const injectScript = () => {
      if (cancelled || !canSafelyInject()) return;

      clearIdx();

      const script = document.createElement('script');
      script.src = `${activeEmbed}${activeEmbed.includes('?') ? '&' : '?'}v=${Date.now()}`;
      script.async = true;
      script.id = 'mrpscript';

      container.appendChild(script);
    };

    const scheduleRetry = () => {
      if (cancelled) return;

      retryTimeout = window.setTimeout(() => {
        if (cancelled) return;

        if (hasRenderedContent()) {
          setIsLoaded(true);
          observer?.disconnect();
          return;
        }

        retryCount += 1;

        if (retryCount <= MAX_RETRIES) {
          injectScript();
          scheduleRetry();
        }
      }, RETRY_DELAY);
    };

    const attemptMount = () => {
      if (cancelled) return;

      if (!canSafelyInject()) {
        scheduleRetry();
        return;
      }

      injectScript();

      observer = new MutationObserver(() => {
        if (hasRenderedContent()) {
          setIsLoaded(true);
          if (retryTimeout) window.clearTimeout(retryTimeout);
          observer?.disconnect();
        }
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
      });

      scheduleRetry();
    };

    startTimeout = window.setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          attemptMount();
        });
      });
    }, 350);

    return () => {
      cancelled = true;

      if (startTimeout) window.clearTimeout(startTimeout);
      if (retryTimeout) window.clearTimeout(retryTimeout);
      observer?.disconnect();

      clearIdx();
    };
  }, [containerKey, activeEmbed, location.key]);

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Intro / Hero */}
      <section className="relative overflow-hidden border-b border-[#ddd4c7] bg-[#f7f4ee]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(185,169,140,0.25),_transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
                Property Search
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1f1d1a] leading-[0.95] mb-6">
                Explore Calgary
                <br />
                Homes with Clarity
              </h1>

              <p className="max-w-2xl text-[#5f584e] text-lg md:text-xl font-light leading-relaxed">
                Browse live MLS® listings across Calgary and surrounding areas through a search
                experience designed to help you narrow down the right fit faster.
              </p>

              {activeCategory && (
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#8c7b5f]">
                  Showing: {categoryLabels[activeCategory]}
                </p>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#e9e1d2] border border-[#d6cab7] p-8 lg:ml-auto max-w-md">
                <span className="text-[#8c7b5f] font-bold tracking-[0.18em] uppercase text-[11px] block mb-3">
                  Search Support
                </span>

                <p className="text-[#4f4a42] leading-relaxed mb-6">
                  The MLS feed gives you live access to available properties, while Roland helps
                  you filter the noise, compare options, and focus on homes that actually match
                  your goals.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#1f1d1a] font-bold uppercase tracking-widest text-xs border-b border-[#1f1d1a] pb-1 hover:text-[#8c7b5f] hover:border-[#8c7b5f] transition-colors"
                >
                  Get Personalized Help <ArrowRight size={15} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#ddd4c7] pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <Search size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Live MLS Access</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Browse active listings in real time across Calgary and surrounding communities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <SlidersHorizontal size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Refined Filtering</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Narrow your search by price, home type, features, and location preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <MapPin size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Calgary Focus</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Search with local context and get guidance on neighborhoods, value, and fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDX Section */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[#f5f2eb]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#efe9df] to-transparent pointer-events-none" />

        <div className="relative z-10 w-full px-3 md:px-5 lg:px-8 xl:px-10">
          <div className="max-w-[1800px] mx-auto">
            <div className="bg-[#efe9df] border border-[#ddd4c7] p-3 md:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
              <div className="bg-[#f9f6f0] border border-[#d8d0c3] px-4 md:px-6 py-4 md:py-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-[#8c7b5f] font-bold tracking-[0.18em] uppercase text-[11px] block mb-2">
                      Live Search Experience
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#1f1d1a]">
                      Calgary MLS® Search
                    </h2>
                  </div>

                  <p className="text-[#5f584e] text-sm md:text-base max-w-2xl font-light leading-relaxed">
                    Use the map and search tools below to explore homes currently on the market.
                  </p>
                </div>
              </div>

              <div className="bg-white border-x border-b border-[#d8d0c3] overflow-x-auto min-h-[140px]">
                <div className="px-2 md:px-4 lg:px-6 py-4 min-h-[180px] relative">
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-[#7d7468] text-sm pointer-events-none">
                      Loading live listings...
                    </div>
                  )}

                  <div
                    key={`${location.key}-${activeCategory || 'default'}-${containerKey}`}
                    ref={idxContainerRef}
                    className="relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-[#ddd4c7] bg-[#efe9df]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_transparent_60%)] opacity-30" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center relative z-10">
          <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
            Need Guidance
          </span>

          <h2 className="text-3xl md:text-5xl font-serif text-[#1f1d1a] font-bold mb-5 leading-tight">
            Need help narrowing down the right homes?
          </h2>

          <p className="text-[#5f584e] text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Roland can help you compare options, schedule private showings, and build a search
            strategy around the neighborhoods, property types, and price points that make the most
            sense for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#8c7b5f] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-all duration-300"
            >
              Schedule a Consultation
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-[#b9a98c] text-[#1f1d1a] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#f7f4ee] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};