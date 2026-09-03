import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import Modal from '../components/Modal';
import { events } from '../data/events';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [regOpen, setRegOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useDocumentTitle(event ? `${event.title} | ${getPageTitle('Events')}` : getPageTitle('Event'));

  if (!event) return <Navigate to="/events" replace />;

  const related = events.filter((e) => e.category === event.category && e.id !== event.id).slice(0, 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setRegOpen(false);
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '' });
  };

  return (
    <>
      <div className="relative h-[52vh] sm:h-[60vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-x pb-10 sm:pb-14 pt-40">
            <span className="rounded-full bg-golden px-4 py-1.5 text-sm font-bold text-forest-dark">
              {event.category}
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection direction="up">
              <div className="rounded-3xl bg-cream-alt p-6 grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-white">
                    <Calendar size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase text-charcoal-muted">Date</p>
                    <p className="font-bold">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-white">
                    <Clock size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase text-charcoal-muted">Time</p>
                    <p className="font-bold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-white">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase text-charcoal-muted">Location</p>
                    <p className="font-bold leading-snug">{event.location}</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-10 text-2xl font-extrabold">About This Event</h2>
              <p className="mt-4 leading-relaxed text-charcoal-muted">{event.fullDesc}</p>

              {event.whatToExpect.length > 0 && (
                <>
                  <h2 className="mt-10 text-2xl font-extrabold">What to Expect</h2>
                  <ul className="mt-4 space-y-2.5">
                    {event.whatToExpect.map((w) => (
                      <li key={w} className="flex items-center gap-3 text-charcoal-muted">
                        <Check size={18} className="text-forest flex-shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {event.gallery.length > 0 && (
                <>
                  <h2 className="mt-10 text-2xl font-extrabold">Event Gallery</h2>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {event.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className="overflow-hidden rounded-2xl link-focus"
                        aria-label="View event photo"
                      >
                        <img
                          src={img}
                          alt={`${event.title} photo ${i + 1}`}
                          loading="lazy"
                          className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </AnimatedSection>
          </div>

          <div>
            <div className="sticky top-28">
              <AnimatedSection direction="left" className="rounded-3xl bg-white p-7 shadow-card">
                <h3 className="text-lg font-bold">Register to Participate</h3>
                <p className="mt-2 text-sm text-charcoal-muted">
                  Join us and be part of this meaningful event. Registration is open
                  to all.
                </p>
                <div className="mt-5 flex items-center gap-2.5 rounded-xl bg-cream p-3 text-sm text-charcoal-muted">
                  <Users size={16} className="text-forest" />
                  Organized by: {event.organizer}
                </div>
                <div className="mt-6">
                  {event.upcoming ? (
                    <Button onClick={() => setRegOpen(true)} variant="terracotta" className="w-full" size="lg">
                      Register Now
                    </Button>
                  ) : (
                    <Button variant="primary" className="w-full" size="lg" disabled>
                      Event Completed
                    </Button>
                  )}
                </div>
              </AnimatedSection>

              {related.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-charcoal-muted">
                    Related Events
                  </h4>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.id}
                        to={`/events/${r.id}`}
                        className="group flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft hover:shadow-card transition-shadow"
                      >
                        <img
                          src={r.image}
                          alt={r.title}
                          loading="lazy"
                          className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm leading-snug group-hover:text-forest">
                            {r.title}
                          </p>
                          <p className="text-xs text-charcoal-muted mt-1">{r.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        items={event.gallery.map((g) => ({ id: g, src: g, caption: event.title }))}
        index={lightboxIndex}
        setIndex={(v) => setLightboxIndex(typeof v === 'function' ? v(lightboxIndex) : v)}
        onClose={() => setLightboxIndex(null)}
      />

      <Modal open={regOpen} onClose={closeModal} labelledBy="reg-title">
        {submitted ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
              <Check size={32} />
            </div>
            <h3 id="reg-title" className="text-2xl font-extrabold">Registration Received</h3>
            <p className="mt-3 text-charcoal-muted text-sm leading-relaxed">
              Thank you, {form.name || 'friend'}! This is a demonstration only — no real
              registration was sent. Our team will share official registration details
              soon.
            </p>
            <Button onClick={closeModal} variant="primary" className="mt-6 w-full">
              Done
            </Button>
          </div>
        ) : (
          <>
            <h3 id="reg-title" className="text-xl font-extrabold">{event.title}</h3>
            <p className="mt-1 text-sm text-charcoal-muted">Register for this event</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="reg-name" className="mb-1 block text-sm font-semibold">Full Name</label>
                <input id="reg-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="reg-email" className="mb-1 block text-sm font-semibold">Email</label>
                <input id="reg-email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="reg-phone" className="mb-1 block text-sm font-semibold">Phone</label>
                <input id="reg-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest" placeholder="Optional" />
              </div>
              <Button type="submit" variant="primary" className="w-full" size="lg">Submit Registration</Button>
            </form>
          </>
        )}
      </Modal>
    </>
  );
}