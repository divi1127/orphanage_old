import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Heart, BookOpen, UtensilsCrossed, Stethoscope, Users, MessageCircleHeart,
  GraduationCap, Home as HomeIcon, Palette, HandHeart, Check, ArrowRight,
  Brain, Activity,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';
import logoImg from '../assets/logo1.png';

const iconMap = {
  Heart, BookOpen, UtensilsCrossed, Stethoscope, Users, MessageCircleHeart,
  GraduationCap, Home: HomeIcon, Palette, HandHeart, Brain, Activity,
};

/* ── Gradient color variants cycling through golden / black / green ── */
const accentVariants = [
  {
    icon: 'bg-golden/20 text-golden-DEFAULT border border-golden/30',
    iconHover: 'group-hover:bg-golden group-hover:text-charcoal',
    badge: 'bg-golden/10 text-golden-DEFAULT border border-golden/20',
    impact: 'bg-gradient-to-r from-golden/10 to-golden/5 border border-golden/20',
    impactText: 'text-golden-DEFAULT',
    headingAccent: 'text-golden-DEFAULT',
    checkColor: 'text-golden-DEFAULT',
    // overlay gradient – fades from right (content side) to transparent left
    overlayLeft: 'from-[#0F3328]/80',
    overlayRight: 'to-transparent',
    panelGlow: 'shadow-[0_0_40px_rgba(216,179,106,0.25)]',
  },
  {
    icon: 'bg-charcoal/10 text-charcoal-soft border border-charcoal/20',
    iconHover: 'group-hover:bg-charcoal group-hover:text-golden',
    badge: 'bg-charcoal/5 text-charcoal-soft border border-charcoal/15',
    impact: 'bg-gradient-to-r from-charcoal/10 to-charcoal/5 border border-charcoal/15',
    impactText: 'text-charcoal-soft',
    headingAccent: 'text-charcoal-soft',
    checkColor: 'text-charcoal-soft',
    overlayLeft: 'from-charcoal/80',
    overlayRight: 'to-transparent',
    panelGlow: 'shadow-[0_0_40px_rgba(32,37,34,0.30)]',
  },
  {
    icon: 'bg-forest/10 text-forest border border-forest/20',
    iconHover: 'group-hover:bg-forest group-hover:text-golden',
    badge: 'bg-forest/10 text-forest border border-forest/20',
    impact: 'bg-gradient-to-r from-forest/10 to-forest/5 border border-forest/20',
    impactText: 'text-forest',
    headingAccent: 'text-forest',
    checkColor: 'text-forest',
    overlayLeft: 'from-charcoal-DEFAULT/75',
    overlayRight: 'to-transparent',
    panelGlow: 'shadow-[0_0_40px_rgba(23,76,60,0.30)]',
  },
];

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
        titleClassName="text-golden-light"
        subtitle="From a warm meal to an education to a listening ear — discover the comprehensive programs that nurture every life at Rudra Anandha illam."
        crumb="Home / Services"
      />

      <section className="section-pad bg-cream">
        <div className="container-x">
          <SectionTitle
            label="What We Do"
            title="Comprehensive Care, Endless Compassion"
            description="Every service is thoughtfully designed to address the physical, emotional, and developmental needs of our residents."
          />

          <div className="mt-14 space-y-24">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Heart;
              const flip = i % 2 === 1;
              const accent = accentVariants[i % accentVariants.length];

              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={`group grid lg:grid-cols-2 gap-0 items-stretch scroll-mt-28 rounded-[2.5rem] overflow-hidden shadow-card border border-white/60 hover:shadow-lift transition-shadow duration-500`}
                >
                  {/* ── IMAGE PANEL ── */}
                  <AnimatedSection
                    direction={flip ? 'right' : 'left'}
                    className={`relative overflow-hidden ${accent.panelGlow} ${flip ? 'lg:order-2' : ''}`}
                    style={{ minHeight: '380px' }}
                  >
                    {/* Background image — blurred */}
                    <img
                      src={s.image}
                      alt={`${siteConfig.name} — ${s.title}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover scale-110 blur-[3px] brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:blur-[1px]"
                    />

                    {/* Fade-out gradient overlay — fades toward content panel */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-${flip ? 'l' : 'r'} ${accent.overlayLeft} ${accent.overlayRight} pointer-events-none`}
                    />
                    {/* Top & bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20 pointer-events-none" />

                    {/* Logo centered on top */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lift p-3 transition-transform duration-500 group-hover:scale-110">
                        <img
                          src={logoImg}
                          alt={siteConfig.name}
                          className="h-full w-full object-contain drop-shadow-lg"
                        />
                        {/* Golden ring pulse */}
                        <span className="absolute inset-0 rounded-3xl ring-2 ring-golden/50 animate-ping opacity-30" />
                      </div>
                      {/* Service title badge on image */}
                      <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm ${accent.badge} text-white border-white/20`}>
                        <Icon size={13} />
                        {s.title}
                      </span>
                    </div>
                  </AnimatedSection>

                  {/* ── CONTENT PANEL ── */}
                  <div className={`bg-white flex flex-col justify-center px-8 py-10 lg:px-12 ${flip ? 'lg:order-1' : ''}`}>
                    <AnimatedSection direction="up">
                      {/* Icon + heading */}
                      <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${accent.icon} ${accent.iconHover}`}>
                        <Icon size={24} />
                      </div>
                      <h3 className={`text-3xl font-extrabold tracking-tight ${accent.headingAccent}`}>
                        {s.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-charcoal-muted">
                        {s.fullDesc}
                      </p>

                      {/* Provides list */}
                      <div className="mt-6">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-charcoal-soft mb-3">
                          What We Provide
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {s.provides.map((p) => (
                            <li key={p} className="flex items-center gap-2.5 text-sm text-charcoal-muted">
                              <Check size={15} className={`flex-shrink-0 ${accent.checkColor}`} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact pill */}
                      <div className={`mt-6 rounded-2xl p-4 text-sm text-charcoal-muted ${accent.impact}`}>
                        <span className={`font-bold ${accent.impactText}`}>Impact: </span>
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