import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Logo({ light = false, compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-light to-forest-dark shadow-soft group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            fill="#fff"
          />
          <path
            d="M14 10v6h1.5v-4h1v4h1.5v-6h-4zM8.5 10v6H10v-4h1v4h1.5v-6h-4z"
            fill="#D8B36A"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span
            className={`text-lg font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-forest'
            }`}
          >
            {siteConfig.name}
          </span>
          <span
            className={`text-[11px] font-medium tracking-wide ${
              light ? 'text-white/70' : 'text-charcoal-muted'
            }`}
          >
            Senior Living Community
          </span>
        </span>
      )}
    </Link>
  );
}