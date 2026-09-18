import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, HandHeart, Users, Package, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';
import { openWhatsApp, buildLines } from '../utils/whatsapp';

const options = [
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Make a one-time or monthly donation to power our care and medical programs. Every contribution, large or small, changes lives.',
    to: '/donation',
    image: 'https://i.pinimg.com/736x/2b/c5/da/2bc5da5274f1186d21a9d961fff355d4.jpg',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    desc: 'Give your time and skills to bring joy and support to our seniors. From companionship to activities, your presence matters.',
    to: '/volunteer',
    image: 'https://i.pinimg.com/736x/49/c6/23/49c6231178e080b6585f602f44afb65d.jpg',
  },
  {
    icon: Users,
    title: 'Sponsor',
    desc: "Sponsor a senior's medical care or meals. Corporate and individual sponsorships create lasting, meaningful impact in our community.",
    type: 'sponsor',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    icon: Package,
    title: 'Support With Supplies',
    desc: 'Donate medicines, adult diapers, clothing, food, and other essentials that keep our home running and our residents comfortable.',
    type: 'supplies',
    image: 'https://i.pinimg.com/1200x/57/64/6a/57646a470b0a9ee0f7572b82d041e53a.jpg',
  },
];

export default function GetInvolved() {
  useDocumentTitle(getPageTitle('Get Involved'));
  const [activeType, setActiveType] = useState(null);
  const [sent, setSent] = useState(false);

  const closeModal = () => {
    setActiveType(null);
    setSent(false);
  };

  return (
    <>
      <PageHero
        badge="Get Involved"
        title="Every Kind of Support Makes a Difference"
        titleClassName="text-golden-light"
        subtitle="However you choose to help — with money, time, skills, or supplies — you become part of something beautiful."
        crumb="Home / Get Involved"
      />

      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="Ways to Help"
            title="Choose How You Want to Make an Impact"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {options.map((o, i) => (
              <AnimatedSection
                key={o.title}
                direction="up"
                delay={i * 0.08}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 bottom-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-forest shadow-soft">
                    <o.icon size={26} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold">{o.title}</h3>
                  <p className="mt-3 text-charcoal-muted leading-relaxed">{o.desc}</p>
                  <div className="mt-6">
                    {o.to ? (
                      <Button to={o.to} variant="outline">
                        {o.title === 'Volunteer' ? 'Start Volunteering' : 'Donate Now'}
                        <ArrowRight size={16} />
                      </Button>
                    ) : (
                      <Button variant="outline" onClick={() => setActiveType(o.type)}>
                        Get Started
                        <ArrowRight size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Family?"
        text="The people of Rudra Anandha illam are waiting to welcome you. Your help today creates a brighter tomorrow."
        primary={{ label: 'Donate Now', props: { to: '/donation' } }}
        secondary={{ label: 'Become a Volunteer', props: { to: '/volunteer' } }}
      />

      <AnimatePresence>
        {activeType && (
          <WhatsAppModal
            type={activeType}
            sent={sent}
            onSent={() => setSent(true)}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function WhatsAppModal({ type, sent, onSent, onClose }) {
  const isSponsor = type === 'sponsor';
  const title = isSponsor ? 'Sponsor a Senior' : 'Support With Supplies';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }
    const message = buildLines([
      isSponsor
        ? 'Hello! I would like to SPONSOR a senior (meals / medical care).'
        : 'Hello! I would like to SUPPORT WITH SUPPLIES.',
      '',
      'Name: ' + name.trim(),
      'Phone: ' + phone.trim(),
      isSponsor ? 'Sponsorship details: ' + (details.trim() || '-') : 'Supplies I can provide: ' + (details.trim() || '-'),
      '',
      'Please guide me on how to proceed.',
    ]);
    openWhatsApp(message);
    onSent();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-forest-dark/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-lift"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-charcoal-soft transition-colors hover:bg-terracotta hover:text-white"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="text-center py-6">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-2xl font-extrabold">WhatsApp Opened!</h2>
            <p className="mt-3 text-charcoal-muted leading-relaxed">
              Your details have been sent to our WhatsApp. Please reply in the chat so our
              team can take it forward — no online payment needed.
            </p>
            <Button onClick={onClose} variant="primary" className="mt-7">
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="text-2xl font-extrabold">{title}</h2>
            <p className="mt-2 text-sm text-charcoal-muted">
              Fill in your details and we'll connect with you on WhatsApp to discuss the next steps.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="mb-1.5 block text-sm font-semibold">
                  Full Name <span className="text-terracotta">*</span>
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>
              <div>
                <label htmlFor="inquiry-phone" className="mb-1.5 block text-sm font-semibold">
                  Phone Number <span className="text-terracotta">*</span>
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>
              <div>
                <label htmlFor="inquiry-details" className="mb-1.5 block text-sm font-semibold">
                  {isSponsor ? 'Sponsorship Details' : 'Supplies You Can Provide'}
                </label>
                <textarea
                  id="inquiry-details"
                  rows="3"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={isSponsor ? 'Which senior\'s care would you like to sponsor?' : 'e.g. medicines, adult diapers, clothing, food...'}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>
              {error && <p className="text-xs font-semibold text-terracotta">{error}</p>}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send via WhatsApp
              </Button>
              <p className="text-center text-xs text-charcoal-muted">
                Your details open in WhatsApp so our team can connect with you.
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}