import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you interact with our website, we may collect information you voluntarily provide, such as your name, email address, phone number, and message content when you contact us, volunteer, or make a donation. We do not collect sensitive personal information unless you provide it to us directly.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information you provide to respond to your inquiries, process volunteer applications, keep you informed about our programs, and improve our services. We do not sell, rent, or trade your personal information to third parties.',
  },
  {
    title: 'Donation & Payment Data',
    body: 'This website does not process online payments. Donation details you submit are shared with us on WhatsApp so we can personally confirm the amount and share our official bank details. We never ask for or store your full payment credentials.',
  },
  {
    title: 'Data Security',
    body: 'We are committed to protecting your information and take reasonable measures to safeguard any data you share with us against unauthorized access, alteration, or disclosure.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to request access to, correction of, or deletion of your personal information. To exercise any of these rights, please contact us using the details provided on our Contact page.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
  },
];

export default function Privacy() {
  useDocumentTitle(getPageTitle('Privacy Policy'));

  return (
    <>
      <PageHero
        badge="Privacy"
        title="Privacy Policy"
        subtitle="We are committed to protecting your privacy and being transparent about how we handle your information."
        crumb="Home / Privacy Policy"
      />
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <AnimatedSection key={s.title} direction="up" delay={i * 0.05}>
                <h2 className="text-2xl font-extrabold mb-3">{s.title}</h2>
                <p className="leading-relaxed text-charcoal-muted">{s.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}