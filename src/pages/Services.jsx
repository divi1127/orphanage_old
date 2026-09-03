import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Heart, BookOpen, UtensilsCrossed, Stethoscope, Users, MessageCircleHeart,
  GraduationCap, Home as HomeIcon, Palette, HandHeart, Check, ArrowRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const iconMap = {
  Heart, BookOpen, UtensilsCrossed, Stethoscope, Users, MessageCircleHeart,
  GraduationCap, Home: HomeIcon, Palette, HandHeart,
};

export default function Services() {
  useDocumentTitle(getPageTitle('Our Services'));
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <PageHero
        badge="Our Services"
        title="Care That Goes Beyond Shelter"
        subtitle="From a warm meal to an education to a listening ear — discover the comprehensive programs that nurture every life at HopeCare."
        crumb="Home / Services"
      />

      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="What We Do"
            title="Comprehensive Care, Endless Compassion"
            description="Every service is thoughtfully designed to address the physical, emotional, and developmental needs of our residents."
          />

          <div className="mt-14 space-y-16">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Heart;
              const flip = i % 2 === 1;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={`grid lg:grid-cols-2 gap-10 items-center scroll-mt-28`}
                >
                  <AnimatedSection
                    direction={flip ? 'right' : 'left'}
                    className={`overflow-hidden rounded-[2.5rem] shadow-card ${flip ? 'lg:order-2' : ''}`}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-[340px] sm:h-[400px] w-full object-cover"
                    />
                  </AnimatedSection>
                  <div className={flip ? 'lg:order-1' : ''}>
                    <AnimatedSection direction="up">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-3xl font-extrabold">{s.title}</h3>
                      <p className="mt-4 leading-relaxed text-charcoal-muted">{s.fullDesc}</p>

                      <div className="mt-6">
                        <h4 className="font-bold text-sm uppercase tracking-wide text-charcoal-soft mb-3">
                          What We Provide
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2.5">
                          {s.provides.map((p) => (
                            <li key={p} className="flex items-center gap-2.5 text-sm text-charcoal-muted">
                              <Check size={16} className="text-forest flex-shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 rounded-2xl bg-cream p-4 text-sm text-charcoal-muted">
                        <span className="font-bold text-forest">Impact: </span>
                        {s.impact}
                      </div>

                      <div className="mt-7">
                        <Button to="/donation" variant="primary">
                          Support This Cause <ArrowRight size={16} />
                        </Button>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Help Us Keep Caring"
        text="Every service we provide is powered by the generosity of people like you."
        primary={{ label: 'Donate Now', props: { to: '/donation' } }}
        secondary={{ label: 'Get Involved', props: { to: '/get-involved' } }}
      />
    </>
  );
}