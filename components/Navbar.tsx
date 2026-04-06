import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/listings' },
    { name: 'Services', path: '/services' },
    { name: 'Market', path: '/market-stats' },
    { name: 'Evaluation', path: '/evaluation' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const useTransparentNav = isHomePage && !scrolled && !isMobile;

  const navClasses = useTransparentNav
    ? 'bg-transparent py-6'
    : 'bg-[#f7f4ee] border-b border-[#ddd4c7] py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)]';

  const logoTextClasses = useTransparentNav ? 'text-white' : 'text-[#1f1d1a]';
  const logoSubTextClasses = useTransparentNav
    ? 'text-[#d6c09a] group-hover:text-white'
    : 'text-[#8c7b5f] group-hover:text-[#6f614b]';

  const linkDefaultClasses = useTransparentNav ? 'text-white' : 'text-[#5f584e]';
  const linkHoverClasses = useTransparentNav ? 'hover:text-[#d6c09a]' : 'hover:text-[#8c7b5f]';
  const linkActiveClasses = useTransparentNav
  ? 'text-white border-b border-white pb-1'
  : 'text-[#8c7b5f] border-b border-[#8c7b5f] pb-1';

  const contactButtonClasses = useTransparentNav
    ? 'bg-white text-[#1f1d1a] hover:bg-[#8c7b5f] hover:text-white'
    : 'bg-[#8c7b5f] text-white hover:bg-[#1f1d1a] hover:text-white';

  const forceListingsReload = () => {
    const base = `${window.location.origin}${window.location.pathname}`;
    window.location.assign(`${base}?idx=${Date.now()}#/listings`);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col z-[60] relative group">
              <span
                className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${logoTextClasses}`}
              >
                {COMPANY_NAME}
              </span>
              <span
                className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${logoSubTextClasses}`}
              >
                Roland Gjelaj
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link) =>
                link.path === '/listings' ? (
                  <a
                    key={link.path}
                    href={`${window.location.pathname}?idx=1#/listings`}
                    onClick={(e) => {
                      e.preventDefault();
                      forceListingsReload();
                    }}
                    className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 ${linkHoverClasses} ${
                      isActive(link.path) ? linkActiveClasses : linkDefaultClasses
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 ${linkHoverClasses} ${
                      isActive(link.path) ? linkActiveClasses : linkDefaultClasses
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              <Link
                to="/contact"
                className={`ml-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${contactButtonClasses}`}
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden z-[60]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none transition-colors duration-300 text-[#1f1d1a] hover:text-[#8c7b5f]"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[73px] bottom-0 bg-[#f7f4ee] z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-[110%] pointer-events-none'
        }`}
      >
        <div className="px-8 pt-10 pb-12">
          <div className="flex flex-col items-center text-center space-y-8">
            {navLinks.map((link) =>
              link.path === '/listings' ? (
                <a
                  key={link.path}
                  href={`${window.location.pathname}?idx=1#/listings`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    forceListingsReload();
                  }}
                  className={`text-2xl font-serif transition-colors ${
                    isActive(link.path) ? 'text-[#8c7b5f]' : 'text-[#4f4a42] hover:text-[#8c7b5f]'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif transition-colors ${
                    isActive(link.path) ? 'text-[#8c7b5f]' : 'text-[#4f4a42] hover:text-[#8c7b5f]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-8 py-3 bg-[#8c7b5f] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1f1d1a] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};