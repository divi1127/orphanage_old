import { useMemo, useState } from 'react';
import GalleryCard from '../components/GalleryCard';
import Lightbox from '../components/Lightbox';
import { galleryItems, galleryCategories } from '../data/gallery';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

export default function Gallery() {
  useDocumentTitle(getPageTitle('Gallery'));
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter((i) => i.category === activeFilter),
    [activeFilter]
  );

  const openLightbox = (item) => {
    const idx = filtered.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  };

  return (
    <>
      <section className="section-pad pt-32 lg:pt-40">
        <div className="container-x">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all link-focus ${
                  activeFilter === c
                    ? 'bg-forest text-white'
                    : 'bg-white text-charcoal-soft hover:bg-forest/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="mt-10 columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((item) => (
              <div key={item.id} className="mb-4 break-inside-avoid">
                <GalleryCard item={item} onOpen={openLightbox} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        setIndex={(v) => setLightboxIndex(typeof v === 'function' ? v(lightboxIndex) : v)}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
}