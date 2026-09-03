import AnimatedSection from './AnimatedSection';

export default function SectionTitle({
  label,
  title,
  description,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClass =
    align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <AnimatedSection
      direction="up"
      className={`flex flex-col gap-4 ${alignClass} max-w-3xl ${className}`}
    >
      {label && (
        <span
          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${
            light ? 'text-golden' : 'text-terracotta'
          }`}
        >
          <span className={`h-px w-8 ${light ? 'bg-golden' : 'bg-terracotta'}`} />
          {label}
          <span className={`h-px w-8 ${light ? 'bg-golden' : 'bg-terracotta'}`} />
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold text-balance ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base lg:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-charcoal-muted'
          }`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}