import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ t }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <Quote size={34} className="text-golden" />
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-forest">
          Google Review
        </span>
      </div>
      {t.rating > 0 && (
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-golden text-golden" />
          ))}
        </div>
      )}
      <p className="flex-1 text-base leading-relaxed text-charcoal">"{t.text}"</p>
      <div className="mt-7 flex items-center gap-3.5 border-t border-cream-alt pt-6">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest text-lg font-bold text-white">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="font-bold">{t.name}</p>
          <p className="text-sm text-charcoal-muted">{t.timeAgo}</p>
        </div>
      </div>
    </div>
  );
}