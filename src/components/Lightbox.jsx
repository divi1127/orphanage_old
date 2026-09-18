import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Lightbox({ items, index, setIndex, onClose }) {
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setIndex((index + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        setIndex((index - 1 + items.length) % items.length);
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, items.length, setIndex, onClose]);

  if (index === null) return null;

  const current = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-dark/95 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        onClick={close}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors link-focus"
      >
        <X size={24} />
      </button>
      <button
        onClick={() => setIndex((index - 1 + items.length) % items.length)}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors link-focus"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => setIndex((index + 1) % items.length)}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors link-focus"
      >
        <ChevronRight size={28} />
      </button>

      <AnimatePresence mode="wait">
        <motion.figure
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="flex max-h-[85vh] max-w-[90vw] flex-col items-center"
        >
          <img
            src={current.src}
            alt={current.caption}
            className="max-h-[78vh] w-auto rounded-2xl object-contain"
          />
          <figcaption className="mt-4 flex items-center gap-3 text-white">
            <ZoomIn size={18} className="text-golden" />
            <span className="text-lg">{current.caption}</span>
            <span className="text-white/60">({index + 1}/{items.length})</span>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
}