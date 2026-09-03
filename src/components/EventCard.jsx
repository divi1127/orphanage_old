import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const categoryColors = {
  Children: 'bg-golden/20 text-golden-700',
  'Senior Citizens': 'bg-sage/20 text-forest',
  Health: 'bg-terracotta/15 text-terracotta-dark',
  Education: 'bg-forest/10 text-forest',
  Community: 'bg-golden/20 text-golden-700',
  Fundraising: 'bg-terracotta/15 text-terracotta-dark',
  Volunteers: 'bg-sage/20 text-forest',
};

export default function EventCard({ event, index = 0 }) {
  // color fallback
  const colorClass = categoryColors[event.category] || 'bg-forest/10 text-forest';

  return (
    <AnimatedSection direction="up" delay={index * 0.06}>
      <div
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card cursor-default"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-forest backdrop-blur">
            {new Date(event.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </div>
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${colorClass}`}
          >
            {event.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold group-hover:text-forest transition-colors">
            {event.title}
          </h3>
          <p className="mt-2 text-sm text-charcoal-muted leading-relaxed flex-1">
            {event.shortDesc}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-charcoal-muted">
            <MapPin size={14} className="text-terracotta" />
            <span className="truncate">{event.location}</span>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta transition-all duration-300 group-hover:gap-3">
            View Event
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}