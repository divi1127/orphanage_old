import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-forest/20 border-t-forest" />
        <p className="text-sm font-medium text-charcoal-muted">Loading...</p>
      </div>
    </div>
  );
}

// Page transition wrapper
export function PageTransition({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return children;
}