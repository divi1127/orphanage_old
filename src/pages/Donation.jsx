import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import DonationCard from '../components/DonationCard';
import Button from '../components/Button';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';
import { siteConfig } from '../data/siteConfig';
import { openWhatsApp, buildLines } from '../utils/whatsapp';

const presets = [500, 1000, 2500, 5000];

export default function Donation() {
  useDocumentTitle(getPageTitle('Donate'));
  const [frequency, setFrequency] = useState('onetime');
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [address, setAddress] = useState('');
  const [purpose, setPurpose] = useState('General Fund');
  const [showModal, setShowModal] = useState(false);

  const selectAmount = (val) => {
    setAmount(val);
    setCustom('');
  };

  const handleCustom = (e) => {
    const v = e.target.value;
    setCustom(v);
    if (v) setAmount(Number(v.replace(/[^0-9]/g, '')) || 0);
  };

  const handleContinue = () => {
    if (amount <= 0) return;
    const message = buildLines([
      'Hello ' + siteConfig.trustName + '! I would like to donate.',
      '',
      'Donor Name: ' + (name || '-'),
      'Email: ' + (email || '-'),
      'Phone: ' + (phone || '-'),
      'PAN: ' + (pan || '-'),
      'Address: ' + (address || '-'),
      '',
      'Amount: Rs. ' + amount.toLocaleString(),
      'Frequency: ' + (frequency === 'monthly' ? 'Monthly' : 'One Time'),
      'Purpose: ' + purpose,
      '',
      'Please help me confirm this donation.',
    ]);
    openWhatsApp(message);
    setShowModal(true);
  };

  const reset = () => {
    setFrequency('onetime');
    setAmount(1000);
    setCustom('');
    setName('');
    setEmail('');
    setPhone('');
    setPan('');
    setAddress('');
    setPurpose('General Fund');
  };

  return (
    <>
      <PageHero
        badge="Donate"
        title="Give Hope. Give Dignity. Give a Future."
        subtitle="Your support provides care, food, medical support, and a loving home for senior citizens who need it most."
        crumb="Home / Donate"
      />

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          {/* Left - form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="up">
              <h2 className="text-2xl font-extrabold">Choose Your Contribution</h2>

              {/* Frequency toggle */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { key: 'onetime', label: 'One Time', icon: Heart }
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFrequency('onetime')}
                    className={`flex items-center justify-center gap-2 rounded-full border-2 py-3.5 font-bold transition-all ${
                      frequency === 'onetime'
                        ? 'border-forest bg-forest text-white'
                        : 'border-forest/20 text-forest hover:border-forest/50'
                    }`}
                  >
                    <f.icon size={18} /> {f.label}
                  </button>
                ))}
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`flex items-center justify-center gap-2 rounded-full border-2 py-3.5 font-bold transition-all ${
                    frequency === 'monthly'
                      ? 'border-forest bg-forest text-white'
                      : 'border-forest/20 text-forest hover:border-forest/50'
                  }`}
                >
                  <HeartHandshake size={18} /> Monthly
                </button>
              </div>

              {/* Amount buttons */}
              <p className="mt-8 mb-3 text-sm font-semibold text-charcoal-muted">
                Select an amount
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {presets.map((val) => (
                  <button
                    key={val}
                    onClick={() => selectAmount(val)}
                    className={`rounded-2xl border-2 py-5 text-xl font-extrabold transition-all ${
                      amount === val && !custom
                        ? 'border-terracotta bg-terracotta text-white'
                        : 'border-forest/15 bg-white text-forest hover:border-terracotta/50'
                    }`}
                  >
                    ₹{val.toLocaleString()}
                  </button>
                ))}
                {/* Custom amount */}
                <div
                  className={`rounded-2xl border-2 px-4 py-3 flex items-center bg-white transition-all ${
                    custom ? 'border-terracotta' : 'border-forest/15'
                  }`}
                >
                  <span className="font-extrabold text-forest">₹</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={custom}
                    onChange={handleCustom}
                    placeholder="Custom"
                    aria-label="Custom amount"
                    className="w-full ml-1 bg-transparent py-1 text-lg font-bold text-forest placeholder-charcoal-muted focus:outline-none"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="donor-name" className="mb-1.5 block text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    id="donor-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
                <div>
                  <label htmlFor="donor-email" className="mb-1.5 block text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    id="donor-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>
              
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="donor-phone" className="mb-1.5 block text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    id="donor-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91"
                    className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
                <div>
                  <label htmlFor="donor-pan" className="mb-1.5 block text-sm font-semibold">
                    PAN Number <span className="text-charcoal-muted font-normal">(For 80G)</span>
                  </label>
                  <input
                    id="donor-pan"
                    type="text"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="donor-address" className="mb-1.5 block text-sm font-semibold">
                  Address
                </label>
                <textarea
                  id="donor-address"
                  rows="2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your full address"
                  className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="donor-purpose" className="mb-1.5 block text-sm font-semibold">
                  Donation Purpose
                </label>
                <select
                  id="donor-purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest"
                >
                  <option value="General Fund">General Fund (Area of Greatest Need)</option>
                  <option value="Medical Care">Medical & Physiotherapy</option>
                  <option value="Meals">Nutritious Meals</option>
                  <option value="Adopt a Grandparent">Adopt a Grandparent Program</option>
                </select>
              </div>

              <div className="mt-8 rounded-2xl bg-cream p-5 flex items-start gap-3">
                <ShieldCheck className="text-forest flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-charcoal-muted">
                  {siteConfig.placeholders.donationInfo} Your contribution is used
                  transparently across our care, education, and health programs.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - summary card */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <DonationCard
                amount={amount}
                frequency={frequency}
                onContinue={handleContinue}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Confirmation modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-forest-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-lift text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-2xl font-extrabold">WhatsApp Opened!</h2>
              <p className="mt-3 text-charcoal-muted leading-relaxed">
                Your intention to donate{' '}
                <span className="font-bold text-forest">
                  ₹{amount.toLocaleString()}
                </span>{' '}
                {frequency === 'monthly' ? 'monthly' : 'one-time'} has been sent to our
                WhatsApp. Please share the amount with our team in the chat and they'll help
                you complete the donation — no online payment needed.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <Button onClick={() => setShowModal(false)} variant="primary">
                  Done
                </Button>
                <Button onClick={reset} variant="ghost">
                  Make Another Donation
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}