import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website.',
  },
  {
    title: 'Informational Purpose',
    body: 'This website is provided for general informational purposes about our organization and its programs. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information presented.',
  },
  {
    title: 'Donations & Payments',
    body: 'This is a demonstration website. It does not process real donations or payments. Users are encouraged to contact our organization directly for verified donation and payment details before making any contribution.',
  },
  {
    title: 'Volunteering & Participation',
    body: 'Volunteer applications and event registrations submitted through this demonstration website are not real submissions. Please contact us directly for official participation procedures and requirements.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website, including text, graphics, logos, and images, is the property of the organization unless otherwise credited and is protected by applicable copyright and intellectual property laws.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, the organization shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided.',
  },
  {
    title: 'External Links',
    body: 'Our website may contain links to external websites. We have no control over the content and practices of these external sites and accept no responsibility for them.',
  },
  {
    title: 'Changes to Terms',
    body: 'We reserve the right to update or modify these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.',
  },
];

export default function Terms() {
  useDocumentTitle(getPageTitle('Terms & Conditions'));

  return (
    <>
      <PageHero
        badge="Legal"
        title="Terms & Conditions"
        subtitle="The terms governing your use of the HopeCare Foundation website."
        crumb="Home / Terms & Conditions"
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