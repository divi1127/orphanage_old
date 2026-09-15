import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Logo({ light = false, compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl shadow-soft group-hover:scale-105 transition-transform flex-shrink-0">
        <img
          src="/logo.jpg"
          alt={`${siteConfig.name} logo`}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span
            className={`text-lg font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-forest'
            }`}
          >
            {siteConfig.shortName}
          </span>
          <span
            className={`text-[11px] font-medium tracking-wide ${
              light ? 'text-white/70' : 'text-charcoal-muted'
            }`}
          >
            Senior Citizens Home
          </span>
        </span>
      )}
    </Link>
  );
}