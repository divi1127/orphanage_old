import { MessageCircleQuestion } from 'lucide-react';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { faqs } from '../data/faqs';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

export default function FAQ() {
  useDocumentTitle(getPageTitle('FAQ'));

  return (
    <>
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about donating, volunteering, and supporting Rudra Anandha illam."
        crumb="Home / FAQ"
      />

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection direction="up">
              <Accordion items={faqs} />
            </AnimatedSection>
          </div>

          <aside>
            <div className="sticky top-28 space-y-6">
              <AnimatedSection direction="left" className="rounded-3xl bg-forest p-8 text-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-golden">
                  <MessageCircleQuestion size={24} />
                </div>
                <h3 className="text-xl font-extrabold">Still Have Questions?</h3>
                <p className="mt-2 text-sm text-white/80">
                  Our team is always happy to help. Reach out and we will get back to you.
                </p>
                <Button to="/contact" variant="white" className="mt-6">
                  Contact Us
                </Button>
              </AnimatedSection>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}