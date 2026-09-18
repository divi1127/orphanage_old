import { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    if (!event) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [event, onClose]);

  return (
    <AnimatePresence>
      {event && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-dark/80 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={event.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-lift lg:flex-row"
          >
            <button
              onClick={onClose}
              aria-label="Close event details"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-forest transition-colors hover:bg-white link-focus"
            >
              <X size={22} />
            </button>

            {/* Left — content */}
            <div className="order-2 flex-1 overflow-y-auto p-6 sm:p-8 lg:order-1 lg:w-[58%] lg:flex-none">
              <span className="rounded-full bg-golden px-3 py-1 text-xs font-bold text-forest-dark">
                {event.category}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-charcoal leading-tight text-balance">
                {event.title}
              </h2>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-cream-alt p-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <Calendar size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase text-charcoal-muted">Date</p>
                    <p className="text-sm font-bold">
                      {event.dateText ||
                        new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
                        })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-cream-alt p-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <Clock size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase text-charcoal-muted">Time</p>
                    <p className="text-sm font-bold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-cream-alt p-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase text-charcoal-muted">Location</p>
                    <p className="text-sm font-bold leading-snug">{event.location}</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-extrabold">About This Event</h3>
              <p className="mt-3 leading-relaxed text-charcoal-muted">
                {event.fullDesc || event.description}
              </p>

              {event.agenda && event.agenda.length > 0 && (
                <>
                  <h3 className="mt-8 text-xl font-extrabold">Program Schedule</h3>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-forest/10">
                    {event.agenda.map((a, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-4 px-5 py-3.5 text-sm ${
                          i % 2 === 0 ? 'bg-cream' : 'bg-white'
                        }`}
                      >
                        <span className="w-40 flex-shrink-0 font-bold text-forest">{a.time}</span>
                        <span className="text-charcoal-muted">{a.activity}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-8 flex items-center gap-2.5 rounded-2xl bg-cream p-4 text-sm text-charcoal-muted">
                <Users size={16} className="text-forest flex-shrink-0" />
                Organized by {siteConfig.trustName}, {event.organizer || 'Rudra Trust Women Empowerment Program'}
              </div>
              <div className="mt-2 flex items-start gap-2.5 rounded-2xl bg-cream p-4 text-sm text-charcoal-muted">
                <Check size={16} className="mt-0.5 text-forest flex-shrink-0" />
                <span>
                  Registered office: {siteConfig.trustName}, {siteConfig.address}
                </span>
              </div>
            </div>

            {/* Right — photo */}
            <div className="relative order-1 h-60 sm:h-72 flex-shrink-0 lg:order-2 lg:h-auto lg:w-[42%] lg:flex-none">
              <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-forest-dark/40 lg:to-transparent" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}