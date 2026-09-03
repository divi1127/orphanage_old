import Button from './Button';
import AnimatedSection from './AnimatedSection';

export default function CTASection({ title, text, primary, secondary }) {
  return (
    <section className="section-pad">
      <div className="container-x">
        <AnimatedSection
          direction="up"
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest to-forest-dark px-6 py-16 sm:px-12 sm:py-20 text-center text-white"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-golden/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="relative">
            {title && (
              <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-balance">
                {title}
              </h2>
            )}
            {text && (
              <p className="mx-auto mt-5 max-w-xl text-base lg:text-lg text-white/85 leading-relaxed">
                {text}
              </p>
            )}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {primary && (
                <Button variant="white" size="lg" {...primary.props}>
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button variant="outlineLight" size="lg" {...secondary.props}>
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}