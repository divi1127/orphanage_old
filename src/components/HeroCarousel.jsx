import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Heart, HandHeart, Sparkles, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const slides = [
  {
    id: 'care',
    layout: 'center',
    badge: 'Warmth for Everyone',
    titleString: 'Caring for our seniors, honoring every life',
    title: (
      <>
        Caring for Our{' '}
        <span className="text-terracotta">Seniors,</span> Honoring Every Life.
      </>
    ),
    subtitle:
      'A gentle, loving home for senior citizens and children who need it most — where dignity, comfort and hope live under one roof.',
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1600&h=1000&fit=crop',
  },
  {
    id: 'image',
    layout: 'right',
    badge: 'A Home That Feels Like Family',
    titleString: 'Golden years filled with care',
    title: (
      <>
        Golden Years,{' '}
        <span className="text-golden">Filled With Care</span>
      </>
    ),
    subtitle:
      'Our caregivers provide companionship, healthcare and daily comfort so every senior can live their later years with joy and dignity.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=1000&fit=crop',
  },
  {
    id: 'community',
    layout: 'left',
    badge: 'Together, We Create Hope',
    titleString: 'Every life deserves love and dignity',
    title: (
      <>
        Every Life Deserves{' '}
        <span className="text-golden">Love &amp; Dignity</span>
      </>
    ),
    subtitle:
      'From nutritious meals to emotional support, we nurture both our elders and our youngest residents with the same warmth and respect.',
    image:
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1600&h=1000&fit=crop',
  },
];

export default function HeroCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  // Whether the hero is visible on screen
  const isInView = useInView(sectionRef, { amount: 0.4 });
  // Track if user has left and returned, to reset to the first slide
  const wasVisible = useRef(true);

  const count = slides.length;

  // Reset to first slide whenever the hero scrolls back into view
  useEffect(() => {
    if (isInView && !wasVisible.current) {
      setIndex(0);
    }
    wasVisible.current = isInView;
  }, [isInView]);

  // Auto-advance while hero is visible
  useEffect(() => {
    if (reduceMotion) return;
    if (!isInView) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(t);
  }, [isInView, count, reduceMotion]);

  const go = (dir) => setIndex((i) => (i + dir + count) % count);
  const slide = slides[index];

  // Directional variants depend on slide layout
  const contentAnim = (delay) => ({
    hidden: { opacity: 0, x: slide.layout === 'right' ? 60 : -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-forest-dark"
      aria-label="Welcome showcase"
      aria-roledescription="carousel"
    >
      {/* Background image with directional movement per slide */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.id}
          src={slide.image}
          alt={slide.titleString}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.12, x: slide.layout === 'right' ? 80 : -80 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Dark warm overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/55 to-forest-dark/30" />

      {/* Decorative blobs */}
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-golden/15 blur-3xl" />
      <div className="absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-terracotta/15 blur-3xl" />

      {/* Prev / Next controls */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25 transition-colors link-focus"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25 transition-colors link-focus"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-golden' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Content — max-width container, full height === few tricky alignment */}
      <div className="relative z-10 container-x flex min-h-[100svh] items-center py-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className={
              slide.layout === 'center'
                ? 'mx-auto max-w-3xl text-center'
                : 'max-w-2xl'
            }
          >
            <motion.span
              variants={contentAnim(0.05)}
              className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-golden backdrop-blur ${
                slide.layout === 'center' ? 'mx-auto' : ''
              }`}
            >
              <Sparkles size={16} aria-hidden="true" />
              {slide.badge}
            </motion.span>

            <motion.h1
              variants={contentAnim(0.15)}
              className="mt-6 text-[40px] leading-[1.05] font-extrabold text-white text-balance sm:text-6xl lg:text-[64px] xl:text-[76px]"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              variants={contentAnim(0.3)}
              className={`mt-6 text-lg leading-relaxed text-white/85 ${
                slide.layout === 'center' ? 'mx-auto max-w-xl' : 'max-w-lg'
              }`}
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              variants={contentAnim(0.45)}
              className={`mt-9 flex flex-col sm:flex-row gap-4 ${
                slide.layout === 'center' ? 'items-center justify-center' : 'items-center'
              }`}
            >
              <Button to="/donation" variant="terracotta" size="lg" icon={Heart}>
                Donate Now
              </Button>
              <Button to="/volunteer" variant="outlineLight" size="lg" icon={HandHeart}>
                Become a Volunteer
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-white/70 hidden sm:flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}