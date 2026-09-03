import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../data/siteConfig';

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const programs = [
  { label: 'Child Care', path: '/services' },
  { label: 'Education Support', path: '/services' },
  { label: 'Elderly Care', path: '/services' },
  { label: 'Healthcare', path: '/services' },
  { label: 'Events', path: '/events' },
  { label: 'Get Involved', path: '/get-involved' },
];

const getInvolved = [
  { label: 'Donate Now', path: '/donation' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Sponsor a Child', path: '/get-involved' },
  { label: 'Support With Supplies', path: '/get-involved' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram },
  { icon: Facebook, label: 'Facebook', href: siteConfig.social.facebook },
  { icon: Youtube, label: 'YouTube', href: siteConfig.social.youtube },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-forest-dark text-white">
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Organization */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              We provide a safe, caring and nurturing environment for children and
              senior citizens, helping them live with dignity, confidence, and hope.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/80">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-golden flex-shrink-0" />
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-golden flex-shrink-0" />
                {siteConfig.phoneDisplay}
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={16} className="text-golden flex-shrink-0" />
                {siteConfig.email}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-golden mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-white/75 hover:text-golden transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-golden mb-5">
              Programs
            </h3>
            <ul className="space-y-3 text-sm">
              {programs.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-white/75 hover:text-golden transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-golden mb-5">
              Get Involved
            </h3>
            <ul className="space-y-3 text-sm">
              {getInvolved.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-white/75 hover:text-golden transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Stay Connected</h3>
              <p className="mt-2 text-sm text-white/70">
                Join our newsletter for inspiring stories, upcoming events, and ways
                to make a difference.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-golden px-7 py-3.5 text-sm font-bold text-forest-dark hover:bg-golden-light transition-colors link-focus"
              >
                {subscribed ? <Check size={16} /> : <Send size={16} />}
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Social */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-golden hover:text-forest-dark transition-colors link-focus"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/60">
            {siteConfig.placeholders.registrationNo}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-sm text-white/70">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-white/70 hover:text-golden transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-golden transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}