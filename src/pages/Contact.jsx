import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';
import { openWhatsApp, buildLines } from '../utils/whatsapp';

export default function Contact() {
  useDocumentTitle(getPageTitle('Contact'));
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please enter a subject.';
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const message = buildLines([
        'Hello ' + siteConfig.trustName + '! You received a message from your website:',
        '',
        'Name: ' + form.name,
        'Email: ' + form.email,
        'Phone: ' + (form.phone || '-'),
        '',
        'Subject: ' + form.subject,
        'Message: ' + form.message,
      ]);
      openWhatsApp(message);
      setSubmitted(true);
    }
  };

  const reset = () => {
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest ${
      errors[field] ? 'border-terracotta' : 'border-forest/15'
    }`;

  const contactItems = [
    { icon: MapPin, label: 'Address', value: siteConfig.address },
    { icon: Phone, label: 'Phone', value: siteConfig.phoneDisplay },
    { icon: Clock, label: 'Working Hours', value: siteConfig.hours },
    ...(siteConfig.email ? [{ icon: Mail, label: 'Email', value: siteConfig.email }] : []),
  ];

  return (
    <>
      <section className="section-pad pt-32 lg:pt-40">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <AnimatedSection direction="up" className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-charcoal-muted">{item.label}</p>
                    <p className="mt-1 font-semibold text-charcoal">{item.value}</p>
                  </div>
                </div>
              ))}
            </AnimatedSection>

            {/* Google Map */}
            <AnimatedSection direction="up" className="mt-6">
              <div className="overflow-hidden rounded-3xl bg-cream-alt h-72 shadow-soft">
                <iframe
                  title="Rudra Anandha illam Senior Citizens Home on Google Maps"
                  src="https://www.google.com/maps?q=Rudra+Anandha+illam+Senior+Citizens+Home&z=16&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection direction="right" className="rounded-3xl bg-white p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-extrabold">WhatsApp Opened!</h3>
                <p className="mt-3 text-charcoal-muted leading-relaxed">
                  Your message has been sent to our WhatsApp. Please reply in the chat if you
                  have any more questions — our team will respond shortly.
                </p>
                <div className="mt-7">
                  <Button onClick={reset} variant="primary">Send Another Message</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-2xl font-extrabold mb-6">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold">Name <span className="text-terracotta">*</span></label>
                    <input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass('name')} placeholder="Your full name" />
                    {errors.name && <p className="mt-1 text-xs text-terracotta-dark">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold">Email <span className="text-terracotta">*</span></label>
                    <input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass('email')} placeholder="you@example.com" />
                    {errors.email && <p className="mt-1 text-xs text-terracotta-dark">{errors.email}</p>}
                  </div>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold">Phone</label>
                    <input id="c-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass('phone')} placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="mb-1.5 block text-sm font-semibold">Subject <span className="text-terracotta">*</span></label>
                    <input id="c-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass('subject')} placeholder="How can we help?" />
                    {errors.subject && <p className="mt-1 text-xs text-terracotta-dark">{errors.subject}</p>}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold">Message <span className="text-terracotta">*</span></label>
                  <textarea id="c-message" rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass('message')} placeholder="Write your message here..." />
                  {errors.message && <p className="mt-1 text-xs text-terracotta-dark">{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg" className="mt-6 w-full" icon={Send}>
                  Send Message
                </Button>
                <p className="mt-3 text-center text-xs text-charcoal-muted">
                  Your details open in WhatsApp so our team can connect with you.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}