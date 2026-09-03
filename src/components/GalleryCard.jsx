import { ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GalleryCard({ item, index = 0, onOpen }) {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={() => onOpen(item)}
      className={`group relative block w-full overflow-hidden rounded-3xl ${
        item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
      } link-focus`}
      aria-label={`View image: ${item.caption}`}
    >
      <img
        src={item.src}
        alt={item.caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest-dark/0 opacity-0 transition-all duration-300 group-hover:bg-forest-dark/50 group-hover:opacity-100">
        <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-forest">
          <ZoomIn size={22} />
        </span>
        <p className="px-4 text-center text-sm font-semibold text-white">
          {item.caption}
        </p>
      </div>
    </motion.button>
  );
}