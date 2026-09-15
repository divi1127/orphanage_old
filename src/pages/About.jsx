import { Heart, GraduationCap, Scale, Users, ShieldCheck, Compass, Eye, Sparkles, HandHeart, BookOpen, Home as HomeIcon, Stethoscope } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { stats } from '../data/stats';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We lead with empathy in everything we do.' },
  { icon: ShieldCheck, title: 'Dignity', desc: 'Every senior is treated with respect and worth.' },
  { icon: Heart, title: 'Care', desc: 'Health and well-being are our top priorities.' },
  { icon: Scale, title: 'Equality', desc: 'Every life holds equal value and opportunity.' },
  { icon: Users, title: 'Community', desc: 'We grow stronger when we grow together.' },
  { icon: Sparkles, title: 'Integrity', desc: 'We act honestly and transparently always.' },
];

const timeline = [
  { year: '2015', title: 'Our Humble Beginning', desc: 'Rudra Anandha illam Senior Citizens Home opened its doors with just 15 elderly residents and a single home, driven by a simple belief: everyone deserves a safe haven in their golden years.' },
  { year: '2018', title: 'Medical Wing Expanded', desc: 'We expanded our campus to include a dedicated 24/7 medical and physiotherapy wing for our residents.' },
  { year: '2020', title: 'Memory Care Center', desc: 'Our specialized memory care unit opened, providing structured cognitive support for seniors with dementia and Alzheimer\'s.' },
  { year: '2023', title: 'Reaching 1,000+ Seniors', desc: 'A milestone year as our comprehensive care programs touched over 1,000 senior lives.' },
  { year: '2026', title: 'A Growing Community', desc: 'Today, we support 1,250+ seniors with a vibrant community of caregivers, doctors, and volunteers.' },
];

const team = [
  { name: 'Meera Krishnan', role: 'Founder & Director', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop' },
  { name: 'Arjun Mehta', role: 'Facility Manager', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
  { name: 'Dr. Sanjay Kumar', role: 'Chief Medical Officer', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop' },
  { name: 'Priya Sharma', role: 'Senior Care Coordinator', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
];

const facilities = [
  { icon: HomeIcon, title: 'Safe Living Spaces', desc: 'Warm, senior-friendly rooms designed to feel like home.' },
  { icon: Stethoscope, title: 'On-Site Clinic', desc: 'Medical care, nursing, and checkups available 24/7.' },
  { icon: Heart, title: 'Physiotherapy Center', desc: 'Dedicated spaces for rehabilitation and mobility exercises.' },
  { icon: Users, title: 'Recreation Areas', desc: 'Gardens, yoga spaces, and activity halls for socializing.' },
];

export default function About() {
  useDocumentTitle(getPageTitle('About Us'));

  return (
    <>
      <PageHero
        badge="About Us"
        title="A Home Built on Love, Care, and Respect"
        subtitle="For over a decade, we have been a family to senior citizens, restoring dignity, health, and joy to their golden years."
        crumb="Home / About"
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-card">
              <img
                src="https://i.pinimg.com/736x/81/f6/31/81f6314d07631d700e73162b905deb03.jpg"
                alt="The Rudra Anandha illam senior community together"
                loading="lazy"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <div>
            <SectionTitle label="Our Story" title="Honor Every Elder, Celebrate Every Life" align="left" />
            <AnimatedSection className="mt-6 space-y-4 text-charcoal-muted leading-relaxed" direction="up">
              <p>
                Rudra Anandha illam Senior Citizens Home began in 2015 with fifteen elderly residents, a small house, and a
                conviction that no senior should face their twilight years in isolation. We started small
                because that's where meaningful change begins — with one life at a time.
              </p>
              <p>
                As we grew, we recognized the growing need for specialized care, from assisted living to
                memory care. So we expanded our facilities, welcoming senior citizens into a
                comprehensive care environment where their wisdom is celebrated and their health is prioritized.
              </p>
              <p>
                Today, Rudra Anandha illam is a thriving community of seniors, compassionate caregivers, doctors,
                and volunteers — all joined by one shared belief: every elderly person deserves love,
                respect, and the highest quality of life.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle label="Our Purpose" title="What Drives Us Every Day" />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <AnimatedSection direction="up" className="rounded-3xl bg-white p-9 shadow-soft">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-extrabold">Our Mission</h3>
              <p className="mt-3 text-lg text-charcoal-muted leading-relaxed">
                To provide unparalleled safety, medical care, and dignity to every senior citizen,
                so they can live their golden years with confidence and peace.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1} className="rounded-3xl bg-white p-9 shadow-soft">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden text-forest-dark">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-extrabold">Our Vision</h3>
              <p className="mt-3 text-lg text-charcoal-muted leading-relaxed">
                A society where every elderly person is respected, cherished, and has a safe, loving place
                to call home — a world where no senior is ever left behind.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="Our Values"
            title="The Principles That Guide Us"
            description="These are not just words on a wall. They are the values we practice every single day in our caregiving."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection
                key={v.title}
                direction="up"
                delay={i * 0.06}
                className="group rounded-3xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                  <v.icon size={26} />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle
            label="Our Journey"
            title="A Decade of Growing Hope"
            description="From fifteen residents in one home to a thriving community of 1,250+ seniors."
          />
          <div className="relative mt-14">
            <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-forest/15" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <AnimatedSection
                  key={t.year}
                  direction={i % 2 === 0 ? 'right' : 'left'}
                  className={`relative flex ${
                    i % 2 === 0 ? 'sm:justify-end' : ''
                  }`}
                >
                  <div className={`pl-14 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right sm:w-1/2' : 'sm:pl-12 sm:w-1/2'}`}>
                    <div className="absolute left-5 sm:left-1/2 top-1 -translate-x-1/2 flex h-5 w-5 items-center justify-center">
                      <span className="absolute inline-flex h-5 w-5 rounded-full bg-forest/20" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-forest" />
                    </div>
                    <span className="inline-block rounded-full bg-terracotta/15 px-4 py-1.5 text-sm font-bold text-terracotta-dark">
                      {t.year}
                    </span>
                    <h3 className="mt-3 text-xl font-bold">{t.title}</h3>
                    <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">{t.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle label="Leadership" title="The Hearts Behind Rudra Anandha illam" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} direction="up" delay={i * 0.08} className="text-center">
                <div className="overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold">{m.name}</h3>
                <p className="text-sm text-terracotta-dark">{m.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle
            label="Our Facilities"
            title="A Campus That Feels Like Home"
            description="Thoughtfully designed senior-friendly spaces to provide comfort, care, and community."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.title} direction="up" delay={i * 0.08} className="rounded-3xl bg-white p-7 shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <f.icon size={24} />
                </div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">{f.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle label="Our Impact" title="The Numbers Behind Our Care" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} direction="up" delay={i * 0.1} className="rounded-3xl bg-cream p-8 text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-forest">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-charcoal-muted">
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of Our Story"
        text="Whether you donate, volunteer, or spend time with our seniors, you become part of something beautiful."
        primary={{ label: 'Donate Now', props: { to: '/donation' } }}
        secondary={{ label: 'Get Involved', props: { to: '/get-involved' } }}
      />
    </>
  );
}