export default function PageHero({ badge, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest to-forest-dark pt-32 pb-16 lg:pt-40 lg:pb-24 text-white">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-golden/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
      <div className="container-x relative">
        {badge && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.15em] text-golden">
            {badge}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}