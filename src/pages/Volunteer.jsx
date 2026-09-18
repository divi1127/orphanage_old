import { useState } from 'react';
import { HandHeart, UserCheck, Clock, Award, Check, Users, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';
import { openWhatsApp, buildLines } from '../utils/whatsapp';

const roles = [
  { icon: Sparkles, title: 'Teaching & Mentoring', desc: 'Tutor children, teach skills, or share your knowledge.' },
  { icon: HandHeart, title: 'Care & Companionship', desc: 'Spend time with our seniors, lending a listening ear and warm presence.' },
  { icon: Users, title: 'Events & Activities', desc: 'Help organize celebrations, drives, and community events.' },
  { icon: Award, title: 'Skills & Professional', desc: 'Offer your professional skills — medical, technical, creative, or more.' },
];

const timeOptions = ['Once a week', 'Twice a week', 'On weekends', 'Once a month', 'Flexible'];

export default function Volunteer() {
  useDocumentTitle(getPageTitle('Volunteer'));
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', time: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.role) e.role = 'Please select how you would like to help.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const message = buildLines([
        'Hello! I would like to volunteer with your organization.',
        '',
        'Name: ' + form.name,
        'Email: ' + form.email,
        'Phone: ' + (form.phone || '-'),
        '',
        'How I can help: ' + form.role,
        'Availability: ' + (form.time || '-'),
        'About me: ' + (form.message || '-'),
      ]);
      openWhatsApp(message);
      setSubmitted(true);
    }
  };

  const reset = () => {
    setForm({ name: '', email: '', phone: '', role: '', time: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <PageHero
        badge="Volunteer"
        title="Your Time Can Become Someone's Hope"
        subtitle="Whether you can give an hour, a day, or a skill, your presence can make a meaningful difference in someone's life."
        crumb="Home / Volunteer"
      />

      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="Ways to Volunteer"
            title="There Is a Place for Every Kind of Heart"
            description="No matter your skills or schedule, there is a meaningful way for you to get involved."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, i) => (
              <AnimatedSection key={r.title} direction="up" delay={i * 0.08} className="rounded-3xl bg-white p-7 shadow-soft">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  <r.icon size={26} />
                </div>
                <h3 className="font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">{r.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-alt">
        <div className="container-x grid lg:grid-cols-2 gap-14">
          <div>
            <SectionTitle
              label="Why Volunteer"
              title="Give Back, Grow Forward"
              align="left"
            />
            <AnimatedSection className="mt-6 space-y-4" direction="up">
              {[
                'Make a real, visible difference in someone\u2019s life',
                'Learn new skills and gain meaningful experience',
                'Join a warm, supportive community of givers',
                'Bring joy to children and seniors who cherish your presence',
                'Feel the deep fulfillment of purposeful giving',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest text-white">
                    <Check size={14} />
                  </span>
                  <p className="text-charcoal-soft">{point}</p>
                </div>
              ))}
            </AnimatedSection>
            <div className="mt-8 rounded-3xl bg-forest p-7 text-white">
              <div className="flex items-center gap-3">
                <UserCheck size={28} className="text-golden" />
                <p className="font-bold text-xl">95+ Active Volunteers</p>
              </div>
              <p className="mt-2 text-sm text-white/80">Join our growing family of everyday heroes.</p>
            </div>
          </div>

          <AnimatedSection direction="up" className="rounded-3xl bg-white p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-2xl font-extrabold">WhatsApp Opened!</h3>
                <p className="mt-3 text-charcoal-muted leading-relaxed">
                  Thank you, {form.name.split(' ')[0] || 'Friend'}! Your application details
                  have been sent to our WhatsApp. Please reply in the chat so our volunteer
                  team can take it forward.
                </p>
                <Button onClick={reset} variant="primary" className="mt-7">Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-2xl font-extrabold mb-6">Volunteer Application</h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="v-name" className="mb-1.5 block text-sm font-semibold">Full Name <span className="text-terracotta">*</span></label>
                    <input id="v-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest ${errors.name ? 'border-terracotta' : 'border-forest/15'}`} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-terracotta-dark">{errors.name}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="v-email" className="mb-1.5 block text-sm font-semibold">Email <span className="text-terracotta">*</span></label>
                      <input id="v-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest ${errors.email ? 'border-terracotta' : 'border-forest/15'}`} placeholder="you@example.com" />
                      {errors.email && <p className="mt-1 text-xs text-terracotta-dark">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="v-phone" className="mb-1.5 block text-sm font-semibold">Phone</label>
                      <input id="v-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest" placeholder="Optional" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="v-role" className="mb-1.5 block text-sm font-semibold">How would you like to help? <span className="text-terracotta">*</span></label>
                    <select id="v-role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest ${errors.role ? 'border-terracotta' : 'border-forest/15'}`}>
                      <option value="">Select an area...</option>
                      {roles.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                    </select>
                    {errors.role && <p className="mt-1 text-xs text-terracotta-dark">{errors.role}</p>}
                  </div>
                  <div>
                    <label htmlFor="v-time" className="mb-1.5 block text-sm font-semibold">Availability</label>
                    <div className="flex flex-wrap gap-2">
                      {timeOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setForm({ ...form, time: t })}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                            form.time === t ? 'bg-forest text-white' : 'bg-cream text-charcoal-soft hover:bg-forest/10'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="v-message" className="mb-1.5 block text-sm font-semibold">Tell Us About Yourself</label>
                    <textarea id="v-message" rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-forest" placeholder="Share your interests, skills, or experience..." />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Application
                  </Button>
                  <p className="text-center text-xs text-charcoal-muted">
                    Your details open in WhatsApp so our team can connect with you.
                  </p>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}