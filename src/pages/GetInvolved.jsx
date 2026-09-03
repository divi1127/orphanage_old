import { Heart, HandHeart, Users, Package, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const options = [
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Make a one-time or monthly donation to power our care and medical programs. Every contribution, large or small, changes lives.',
    to: '/donation',
    image: 'https://i.pinimg.com/736x/2b/c5/da/2bc5da5274f1186d21a9d961fff355d4.jpg',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    desc: 'Give your time and skills to bring joy and support to our seniors. From companionship to activities, your presence matters.',
    to: '/volunteer',
    image: 'https://i.pinimg.com/736x/49/c6/23/49c6231178e080b6585f602f44afb65d.jpg',
  },
  {
    icon: Users,
    title: 'Sponsor',
    desc: 'Sponsor a senior\'s medical care or meals. Corporate and individual sponsorships create lasting, meaningful impact in our community.',
    to: '/contact',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    icon: Package,
    title: 'Support With Supplies',
    desc: 'Donate medicines, adult diapers, clothing, food, and other essentials that keep our home running and our residents comfortable.',
    to: '/contact',
    image: 'https://i.pinimg.com/1200x/57/64/6a/57646a470b0a9ee0f7572b82d041e53a.jpg',
  },
];

export default function GetInvolved() {
  useDocumentTitle(getPageTitle('Get Involved'));

  return (
    <>
      <PageHero
        badge="Get Involved"
        title="Every Kind of Support Makes a Difference"
        subtitle="However you choose to help — with money, time, skills, or supplies — you become part of something beautiful."
        crumb="Home / Get Involved"
      />

      <section className="section-pad">
        <div className="container-x">
          <SectionTitle
            label="Ways to Help"
            title="Choose How You Want to Make an Impact"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {options.map((o, i) => (
              <AnimatedSection
                key={o.title}
                direction="up"
                delay={i * 0.08}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 bottom-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-forest shadow-soft">
                    <o.icon size={26} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold">{o.title}</h3>
                  <p className="mt-3 text-charcoal-muted leading-relaxed">{o.desc}</p>
                  <div className="mt-6">
                    <Button to={o.to} variant="outline">
                      {o.title === 'Volunteer' ? 'Start Volunteering' : o.title === 'Donate' ? 'Donate Now' : 'Get Started'}
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Family?"
        text="The people of HopeCare are waiting to welcome you. Your help today creates a brighter tomorrow."
        primary={{ label: 'Donate Now', props: { to: '/donation' } }}
        secondary={{ label: 'Become a Volunteer', props: { to: '/volunteer' } }}
      />
    </>
  );
}