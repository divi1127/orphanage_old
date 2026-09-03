import { Check, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function DonationCard({ amount, frequency, onContinue }) {
  return (
    <div className="sticky top-28 rounded-3xl bg-white p-7 shadow-card">
      <h3 className="text-lg font-bold">Your Contribution</h3>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-forest">₹{amount.toLocaleString()}</span>
        <span className="pb-1 text-sm text-charcoal-muted">
          / {frequency === 'monthly' ? 'month' : 'one-time'}
        </span>
      </div>
      <p className="mt-4 text-sm text-charcoal-muted leading-relaxed">
        Every contribution helps provide care, food, medical support, and a loving home for the
        senior citizens of {siteConfig.name}.
      </p>

      <div className="mt-6 space-y-3 border-t border-cream-alt pt-5 text-sm text-charcoal-muted">
        <div className="flex items-center gap-2.5">
          <Check size={16} className="text-forest" />
          <span>100% goes toward our care programs</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Check size={16} className="text-forest" />
          <span>Transparent and accountable</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Check size={16} className="text-forest" />
          <span>Secure and simple to give</span>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mt-6 w-full rounded-full bg-terracotta py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-terracotta-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
      >
        Proceed to Payment
      </button>

      <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-cream p-4 text-xs text-charcoal-muted">
        <ShieldCheck size={16} className="mt-0.5 text-forest flex-shrink-0" />
        <p>
          This is a demonstration interface. No real payment is processed. Payment
          details will be integrated with verified official information soon.
        </p>
      </div>
    </div>
  );
}