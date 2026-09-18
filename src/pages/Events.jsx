import { useState } from 'react';
import { CalendarClock } from 'lucide-react';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { events, plannedEvents } from '../data/events';
import { siteConfig } from '../data/siteConfig';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const filters = ['All', 'Education', 'Community'];

export default function Events() {
  useDocumentTitle(getPageTitle('Events'));
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered =
    activeFilter === 'All'
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <>
      <section className="section-pad pt-32 lg:pt-40">
        <div className="container-x space-y-20">
          {/* Events & trainings (dates as given in the annual report) */}
          <div>
            <SectionTitle
              label="Events & Trainings"
              title="Activities & Trainings — April 2023 to March 2024"
              description="The events and capacity-building programmes reported in the Self Help Group Program Annual Report (2023 – 24)."
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-3">
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

            {filtered.length > 0 ? (
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((e, i) => (
                  <EventCard key={e.id} event={e} index={i} onOpen={setSelected} />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-3xl bg-white p-12 text-center text-charcoal-muted">
                No events in this category at the moment.
              </div>
            )}
            <p className="mt-6 text-sm text-charcoal-muted">
              No confirmed upcoming event dates are available yet. Dates shown above are exactly
              as mentioned in the annual report.
            </p>
          </div>

          {/* Planned / Coming Soon (no confirmed dates) */}
          <div className="rounded-[2.5rem] bg-forest p-8 sm:p-12">
            <SectionTitle
              label="Upcoming Events"
              title="Planned / Coming Soon"
              description="These programmes are planned by the Trust. Dates will be announced here as soon as they are confirmed."
              light
              align="left"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {plannedEvents.map((p, i) => (
                <AnimatedSection
                  key={p.title}
                  direction="up"
                  delay={i * 0.05}
                  className="rounded-2xl bg-white/5 p-6 text-white ring-1 ring-white/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <CalendarClock size={22} className="text-golden flex-shrink-0" />
                    <span className="rounded-full bg-golden/15 px-3 py-1 text-xs font-bold text-golden">
                      Planned / Coming Soon
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Date to be confirmed by {siteConfig.trustName}
                  </p>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection direction="up" className="mt-10 rounded-2xl bg-white/5 p-5 text-sm text-white/75 ring-1 ring-white/10">
              No confirmed dates are available yet — these programmes will be updated as soon as
              the Trust shares the schedule.
            </AnimatedSection>
          </div>
        </div>
      </section>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}