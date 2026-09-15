import { ArrowRight, Sparkles, HandHeart } from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import ServiceCard from '../components/ServiceCard';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import HeroSequence from '../components/HeroSequence';
import { stats } from '../data/stats';
import { services } from '../data/services';
import { events } from '../data/events';
import { testimonials } from '../data/testimonials';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const supportCards = [
  { amount: '₹1,000', desc: 'Can support nutritious meals for a week.' },
  { amount: '₹2,500', desc: 'Can support essential medications.' },
  { amount: '₹5,000', desc: 'Can support physical therapy sessions.' },
  { amount: '₹10,000', desc: 'Can contribute toward comprehensive monthly care.' },
];

export default function Home() {
  useDocumentTitle('Rudra Anandha illam Senior Citizens Home — Dignity, Comfort, and Compassionate Care');

  const upcoming = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <>
      {/* HERO SCROLL ANIMATION */}
      <HeroSequence />

      {/* IMPACT STATISTICS */}
      <section className="section-pad bg-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection
              key={s.label}
              direction="up"
              delay={i * 0.1}
              className="rounded-3xl bg-cream p-8 text-center"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-forest">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-charcoal-muted">
                {s.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section className="section-pad">
        <div className="container-x max-w-4xl mx-auto text-center">
          <SectionTitle
            label="Who We Are"
            title="A Loving Home for the Golden Years."
            align="center"
          />
          <AnimatedSection
            direction="up"
            className="mt-6 space-y-4 text-charcoal-muted leading-relaxed text-lg"
          >
            <p>
              Rudra Anandha illam Senior Citizens Home is a sanctuary for elderly citizens who need a safe,
              caring, and dignified environment. We provide specialized care, medical support,
              and a warm community to ensure our seniors never feel alone.
            </p>
            <p>
              From nutritious, senior-friendly meals and physiotherapy to compassionate memory
              care and emotional support, every program we run is designed to restore dignity,
              promote health, and bring joy to their golden years.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 text-left">
            <AnimatedSection
              direction="up"
              delay={0.1}
              className="rounded-3xl bg-cream p-8 shadow-soft"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-charcoal-muted leading-relaxed">
                To provide safety, expert care, and utmost dignity to every senior citizen in our community.
              </p>
            </AnimatedSection>
            <AnimatedSection
              direction="up"
              delay={0.2}
              className="rounded-3xl bg-cream p-8 shadow-soft"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden text-forest-dark">
                <HandHeart size={24} />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-charcoal-muted leading-relaxed">
                A society where every elderly person is respected and has a place to call home.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle
            label="Our Services"
            title="Care That Goes Beyond Shelter"
            description="From assisted living to specialized memory care, our comprehensive programs nurture every aspect of senior life."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ELDERLY CARE FOCUS */}
      <section className="section-pad">
        <div className="container-x space-y-14">
          {/* Medical Care card */}
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2.5rem] overflow-hidden bg-white shadow-card">
            <AnimatedSection direction="left" className="overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=700&fit=crop"
                alt="A senior resident receiving medical care"
                loading="lazy"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </AnimatedSection>
            <AnimatedSection direction="right" className="p-8 sm:p-12">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-terracotta">
                Medical & Physiotherapy
              </span>
              <h3 className="mt-3 text-3xl font-extrabold">
                Dedicated Health Support
              </h3>
              <p className="mt-4 text-charcoal-muted leading-relaxed">
                We prioritize the physical well-being of our residents with round-the-clock medical
                assistance, regular doctor visits, and in-house physiotherapy sessions tailored to senior needs.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {['24/7 Nursing', 'Physiotherapy', 'Regular Checkups', 'Medication Mgmt'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-cream px-4 py-3 text-sm font-semibold"
                  >
                    <span className="h-2 w-2 rounded-full bg-forest" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/donation" variant="primary">
                  Support Health Programs
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Emotional Care card */}
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2.5rem] overflow-hidden bg-forest text-white shadow-card">
            <AnimatedSection direction="right" className="p-8 sm:p-12 lg:order-1">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-golden">
                Community & Comfort
              </span>
              <h3 className="mt-3 text-3xl font-extrabold text-white">
                Honoring Every Life
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed">
                We care for our elders with the compassion and dignity they deserve. 
                Through recreational activities and a supportive community, we ensure their golden years are filled with joy and companionship.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {['Companionship', 'Memory Care', 'Recreation', 'Counseling'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                  >
                    <span className="h-2 w-2 rounded-full bg-golden" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/donation" variant="terracotta">
                  Support Our Seniors
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="overflow-hidden h-full lg:order-2">
              <img
                src="https://i.pinimg.com/736x/24/d2/d5/24d2d55de123a76fb9265169861d1cb1.jpg"
                alt="A caregiver conversing warmly with a senior resident"
                loading="lazy"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* HOW YOUR SUPPORT HELPS */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle
            label="Your Impact"
            title="How Your Support Helps"
            description="Every contribution, no matter the size, helps us provide better care for our elderly residents."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportCards.map((c, i) => (
              <AnimatedSection
                key={c.amount}
                direction="up"
                delay={i * 0.08}
                className="rounded-3xl bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <p className="text-3xl font-extrabold text-forest">{c.amount}</p>
                <p className="mt-3 text-sm text-charcoal-muted leading-relaxed">{c.desc}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection
            direction="up"
            className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-[2rem] bg-forest px-8 py-8 text-white"
          >
            <h3 className="text-2xl font-extrabold">
              Your Small Act Can Create a Big Difference.
            </h3>
            <Button to="/donation" variant="white" size="lg">
              Donate Now
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <SectionTitle
              label="Upcoming Events"
              title="Join Us in Making a Difference"
              align="left"
            />
            <Button to="/events" variant="ghost">
              View All Events <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="Testimonials"
            title="Voices of Our Community"
            description="Hear from family members, residents, and volunteers about their experience with Rudra Anandha illam."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} direction="up" delay={i * 0.1}>
                <TestimonialCard t={t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT OPTIONS */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle
            label="Get Involved"
            title="Choose How You Want to Make an Impact"
            align="center"
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <AnimatedSection direction="up" delay={0.1} className="flex flex-col rounded-3xl bg-white overflow-hidden shadow-soft transition-transform hover:-translate-y-1">
              <img src="https://i.pinimg.com/736x/2b/c5/da/2bc5da5274f1186d21a9d961fff355d4.jpg" className="h-48 w-full object-cover" alt="Donate" />
              <div className="p-6 flex flex-col flex-grow items-start">
                <h3 className="text-xl font-bold">Donate Funds</h3>
                <p className="mt-2 text-charcoal-muted mb-6 flex-grow">Your financial support helps us provide medical care, meals, and safe shelter.</p>
                <Button to="/donation" variant="primary">Donate Now</Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.2} className="flex flex-col rounded-3xl bg-white overflow-hidden shadow-soft transition-transform hover:-translate-y-1">
              <img src="https://i.pinimg.com/736x/49/c6/23/49c6231178e080b6585f602f44afb65d.jpg" className="h-48 w-full object-cover" alt="Volunteer" />
              <div className="p-6 flex flex-col flex-grow items-start">
                <h3 className="text-xl font-bold">Become a Volunteer</h3>
                <p className="mt-2 text-charcoal-muted mb-6 flex-grow">Give your time to share stories, assist with activities, and bring smiles.</p>
                <Button to="/volunteer" variant="outline">Join Us</Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3} className="flex flex-col rounded-3xl bg-white overflow-hidden shadow-soft transition-transform hover:-translate-y-1">
              <img src="https://i.pinimg.com/1200x/57/64/6a/57646a470b0a9ee0f7572b82d041e53a.jpg" className="h-48 w-full object-cover" alt="Supplies" />
              <div className="p-6 flex flex-col flex-grow items-start">
                <h3 className="text-xl font-bold">Provide Supplies</h3>
                <p className="mt-2 text-charcoal-muted mb-6 flex-grow">Donate essential items like adult diapers, medicines, and food supplies.</p>
                <Button to="/contact" variant="outline">Contact Us</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section className="section-pad">
        <div className="container-x">
          <AnimatedSection
            direction="up"
            className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-20 sm:px-12 text-center text-white"
          >
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-golden/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />
            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-balance">
                Your Time Can Bring a Smile to a Senior.
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Whether you can give an hour to listen to their stories, or a day to help with activities, your presence matters.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button to="/volunteer" variant="white" size="lg">
                  Become a Volunteer
                </Button>
                <Button to="/get-involved" variant="outlineLight" size="lg">
                  Get Involved
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}