import { Heart, Scale, Users, ShieldCheck, Compass, Eye, Sparkles, HandHeart, Home as HomeIcon, Stethoscope, Banknote, FileCheck, Landmark } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { stats } from '../data/stats';
import { siteConfig } from '../data/siteConfig';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';
import image1 from '../assets/image1.jpeg';

const values = [
  { icon: HandHeart, title: 'Empowerment', desc: 'We empower women and seniors to live with dignity and independence.' },
  { icon: ShieldCheck, title: 'Dignity', desc: 'Every life is treated with respect, irrespective of caste, creed, or religion.' },
  { icon: Heart, title: 'Care', desc: 'Health and well-being are our top priorities.' },
  { icon: Scale, title: 'Equality', desc: 'Every life holds equal value and opportunity.' },
  { icon: Users, title: 'Community', desc: 'We grow stronger when we grow together.' },
  { icon: Sparkles, title: 'Integrity', desc: 'We act honestly and transparently always.' },
];

const timeline = [
  { year: '2021', title: 'Rudra Trust Established', desc: 'Rudra Trust was established and duly registered under the Indian Trust Act, 1882. Its journey began with Self Help Group (SHG) activities focused on socio-economic empowerment of women.' },
  { year: '2022', title: 'Strengthening SHGs', desc: 'In collaboration with PRADAN, trainings and workshops were organized for staff and SHG members — covering auditing, profit distribution, qualitative monitoring, and MIS.' },
  { year: '2023', title: 'Registered & Growing', desc: 'The Trust obtained its registration (Reg. No. 17/2023) and opened a dedicated Women Empowerment & micro-credit office in Madurai District. SHG cluster formation began.' },
  { year: '2023-24', title: 'Impact at Scale', desc: '85 awareness campaigns reached 2,556 women across 174 SHGs. Groups began contributing to audit and book-keeping costs — moving steadily toward self-reliance.' },
  { year: 'Today', title: 'A Loving Home for Seniors', desc: 'Rudra Anandha illam Senior Citizens Home extends the same compassion to our elders — offering care, comfort, dignified living, and a family that never lets them feel alone.' },
];

const registration = [
  { icon: Landmark, title: 'Trust Name', desc: siteConfig.trustName },
  { icon: FileCheck, title: 'Legal Status', desc: 'Registered under Indian Trust Act, 1882 (Reg. No. 17/2023)' },
  { icon: Sparkles, title: 'Established', desc: `Year ${siteConfig.established}` },
  { icon: Users, title: 'Legal Holder', desc: siteConfig.legalHolder },
  { icon: Banknote, title: 'Bank', desc: 'IndusInd Bank, Good Shed Street, Madurai — A/C No. 253103202305' },
  { icon: HomeIcon, title: 'Registered Office', desc: siteConfig.address },
];

export default function About() {
  useDocumentTitle(getPageTitle('About Us'));

  return (
    <>
      <PageHero
        badge="About Us"
        title="Care, Empowerment, and a Home That Honors Every Life"
        titleClassName="text-golden-light"
        subtitle="Founded in 2021 and registered under the Indian Trust Act, 1882, Rudra Trust serves communities across Madurai — and in its senior care wing, every golden year is lived with dignity and joy."
        crumb="Home / About"
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-card">
              <img
                src={image1}
                alt="The Rudra Anandha illam senior community together"
                loading="lazy"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <div>
            <SectionTitle label="Our Story" title="Honor Every Life, Empower Every Family" align="left" />
            <AnimatedSection className="mt-6 space-y-4 text-charcoal-muted leading-relaxed" direction="up">
              <p>
                {siteConfig.trustName} was established in the year {siteConfig.established} and duly
                registered under the Indian Trust Act. Its vision and mission have always been —
                <strong> Empowering women to earn a livelihood irrespective of caste, creed, or religion.</strong>
              </p>
              <p>
                {siteConfig.legalHolder}, the founder trustee of {siteConfig.trustName}, is one of the
                leading activists of Madurai. Their vision, contribution, and dedicated services
                have helped hundreds of children and families come up in their life. The Trust began
                with Self Help Group activities and today focuses on the socio-economic empowerment
                of women — which ultimately results in the development of families.
              </p>
              <p>
                Through the same spirit of compassion, {siteConfig.name} is our senior care wing — a
                thriving community of elders, caregivers, and volunteers joined by one shared belief:
                every elderly person deserves love, respect, and the highest quality of life.
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
                Empowering women to earn a livelihood irrespective of caste, creed, or religion —
                and providing every senior citizen with safety, care, and dignity in their golden years.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1} className="rounded-3xl bg-white p-9 shadow-soft">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden text-forest-dark">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-extrabold">Our Vision</h3>
              <p className="mt-3 text-lg text-charcoal-muted leading-relaxed">
                A society where every woman is financially independent, every child is educated, and
                every elderly person is respected, cherished, and has a safe, loving place to call home.
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
            description="These are not just words on a wall. They are the values we practice every single day in our care and community work."
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
            title="From Empowering Women to Caring for Senior Citizens"
            description="A short but deeply meaningful journey — from Self Help Groups to a home for the golden years."
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

      {/* About the Founder */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle label="Founder" title="The Heart Behind the Trust" />
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="left" className="mx-auto w-full max-w-sm">
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest to-forest-dark shadow-card">
                <img
                  src="/logo.jpg"
                  alt={`${siteConfig.trustName} logo`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-3xl font-extrabold">{siteConfig.legalHolder} <span className="text-terracotta-dark">·</span> <span className="text-2xl font-bold text-forest">Founder Trustee</span></h3>
              <p className="mt-4 text-lg text-charcoal-muted leading-relaxed">
                One of the leading activists of Madurai, {siteConfig.legalHolder} founded {siteConfig.trustName}
                in {siteConfig.established} with a steadfast vision of empowering women to earn a livelihood
                irrespective of caste, creed, or religion. Their vision, contribution, and dedicated services
                have helped hundreds of children and families come up in their life.
              </p>
              <p className="mt-4 text-lg text-charcoal-muted leading-relaxed">
                Under this leadership, the Trust started with Self Help Group activities and today drives
                the socio-economic empowerment of women across Madurai District — and cares for senior
                citizens through {siteConfig.name}.
              </p>
              <div className="mt-8">
                <Button to="/get-involved" variant="primary">
                  Join Our Mission
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle
            label="Trust Information"
            title="Official Registration & Bank Details"
            description="Transparency is at the heart of everything we do. Here are the official details of Rudra Trust."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {registration.map((r, i) => (
              <AnimatedSection key={r.title} direction="up" delay={i * 0.06} className="rounded-3xl bg-white p-7 shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <r.icon size={24} />
                </div>
                <h3 className="font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">{r.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="Our Facilities"
            title="A Campus That Feels Like Home"
            description="Thoughtfully designed senior-friendly spaces to provide comfort, care, and community."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: 'Safe Living Spaces', desc: 'Warm, senior-friendly rooms designed to feel like home.' },
              { icon: Stethoscope, title: 'On-Site Clinic', desc: 'Medical care, nursing, and checkups available 24/7.' },
              { icon: Heart, title: 'Physiotherapy Center', desc: 'Dedicated spaces for rehabilitation and mobility exercises.' },
              { icon: Users, title: 'Recreation Areas', desc: 'Gardens, yoga spaces, and activity halls for socializing.' },
            ].map((f, i) => (
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
      <section className="section-pad bg-cream-alt">
        <div className="container-x">
          <SectionTitle label="Our Impact" title="The Numbers Behind Our Care" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} direction="up" delay={i * 0.1} className="rounded-3xl bg-white p-8 text-center shadow-soft">
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