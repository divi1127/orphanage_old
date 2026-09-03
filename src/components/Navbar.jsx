import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/siteConfig';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // The home hero uses a light cream background, so we always keep the
  // navbar light (dark text) for constant readability. "heroTheme" now
  // always renders dark text on a semi-transparent cream bar.
  const heroTheme = false;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const activeNavClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold tracking-wide transition-colors link-focus ${
      isActive ? 'text-forest' : 'text-charcoal-soft hover:text-forest'
    } ${
      isActive
        ? "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-golden"
        : ''
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md transition-all duration-500 ${
        scrolled ? 'shadow-card' : 'shadow-soft'
      }`}
    >
      <nav
        className="container-x flex items-center justify-between py-3 lg:py-4"
        aria-label="Main navigation"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={activeNavClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/donation"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-terracotta px-4 xl:px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-terracotta-dark link-focus"
          >
            <Heart size={16} aria-hidden="true" />
            <span className="hidden xl:inline">DONATE NOW</span>
            <span className="xl:hidden">DONATE</span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-lg text-forest transition-colors link-focus lg:hidden"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 h-[100dvh] bg-cream z-40 overflow-y-auto border-t border-forest/10"
          >
            <ul className="container-x flex flex-col gap-1 py-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors link-focus ${
                        isActive
                          ? 'bg-forest text-white'
                          : 'text-charcoal hover:bg-forest/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  to="/donation"
                  className="flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 text-base font-bold text-white"
                >
                  <Heart size={18} aria-hidden="true" />
                  DONATE NOW
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}