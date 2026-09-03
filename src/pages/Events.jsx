import { useState } from 'react';
import EventCard from '../components/EventCard';
import { events } from '../data/events';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const filters = ['All', 'Children', 'Senior Citizens', 'Health', 'Education', 'Community', 'Fundraising'];

export default function Events() {
  useDocumentTitle(getPageTitle('Events'));
  const [activeFilter, setActiveFilter] = useState('All');

  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  const filteredUpcoming =
    activeFilter === 'All'
      ? upcoming
      : upcoming.filter((e) => e.category === activeFilter);
  const filteredPast =
    activeFilter === 'All'
      ? past
      : past.filter((e) => e.category === activeFilter);

  return (
    <>
      <section className="section-pad pt-32 lg:pt-40">
        <div className="container-x">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all link-focus ${
                  activeFilter === f
                    ? 'bg-forest text-white'
                    : 'bg-white text-charcoal-soft hover:bg-forest/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Upcoming */}
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold">Upcoming Events</h2>
            {filteredUpcoming.length > 0 ? (
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcoming.map((e, i) => (
                  <EventCard key={e.id} event={e} index={i} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl bg-white p-12 text-center text-charcoal-muted">
                No upcoming events in this category at the moment.
              </div>
            )}
          </div>

          {/* Past */}
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold">Past Events</h2>
            {filteredPast.length > 0 ? (
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPast.map((e, i) => (
                  <EventCard key={e.id} event={e} index={i} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl bg-white p-12 text-center text-charcoal-muted">
                No past events in this category.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}