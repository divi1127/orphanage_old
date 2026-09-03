import { Quote } from 'lucide-react';

export default function TestimonialCard({ t }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft">
      <Quote size={34} className="text-golden mb-5" />
      <p className="flex-1 text-base leading-relaxed text-charcoal">"{t.quote}"</p>
      <div className="mt-7 flex items-center gap-3.5 border-t border-cream-alt pt-6">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-bold">{t.name}</p>
          <p className="text-sm text-charcoal-muted">{t.role}</p>
        </div>
      </div>
    </div>
  );
}