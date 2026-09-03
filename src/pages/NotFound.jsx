import { ArrowLeft, HeartHandshake } from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle(getPageTitle('Page Not Found'));

  return (
    <section className="section-pad pt-32 pb-20 lg:pt-40">
      <div className="container-x text-center">
        <AnimatedSection direction="up" className="flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-forest/10 text-forest">
            <HeartHandshake size={40} />
          </div>
          <p className="text-2xl font-extrabold text-terracotta tracking-widest">404</p>
          <h1 className="mt-3 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Looks like you've taken a wrong turn.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-charcoal-muted">
            But that's okay — even here, there's a warm welcome waiting. Let's get you
            back to where hope lives.
          </p>
          <div className="mt-9">
            <Button to="/" variant="primary" size="lg" icon={ArrowLeft}>
              Back to Home
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}