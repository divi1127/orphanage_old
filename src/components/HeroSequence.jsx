import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSequence() {
  const containerRef = useRef(null);
  const centerContentRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Animate image in on load (fade in)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    );
    
    // Animate center content in on load
    gsap.fromTo(
      centerContentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power2.out' }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000', // Increased scroll distance for extra step
        pin: true,
        scrub: true,
      },
    });

    // Sequence 1: Darken the image overlay slightly & fade out center content
    tl.to(overlayRef.current, {
      opacity: 0.7, // slightly darker for better text contrast
      duration: 1,
    }, 0);
    
    // Use fromTo in the timeline so it reverses to exactly opacity 1, y: 0 
    // even if the on-load animation hasn't finished when the timeline is created.
    tl.fromTo(centerContentRef.current, 
      { opacity: 1, y: 0 },
      { opacity: 0, y: -50, duration: 1 }, 
      0
    );

    // Sequence 2: Left Content animates in
    tl.to(leftContentRef.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: 'power2.out',
    });

    // Pause for a moment
    tl.to({}, { duration: 1 });

    // Sequence 3: Left Content animates out
    tl.to(leftContentRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power2.in',
    });

    // Sequence 4: Right Content animates in
    tl.to(rightContentRef.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: 'power2.out',
    });

    // Pause for a moment
    tl.to({}, { duration: 1 });

    // Sequence 5: Right Content animates out
    tl.to(rightContentRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power2.in',
    });

  }, { scope: containerRef });

  const textShadowStyle = { textShadow: '2px 4px 10px rgba(0,0,0,0.7)' };
  const subTextShadowStyle = { textShadow: '1px 2px 6px rgba(0,0,0,0.8)' };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <img
          ref={imageRef}
          src="https://i.pinimg.com/1200x/b8/33/69/b833698e0a4c5918645f63df37c85ce8.jpg"
          alt="Happy elderly people at Rudra Anandha illam Senior Citizens Home"
          className="w-full h-full object-cover object-center opacity-0"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-[#2c1e16] opacity-50"></div>
      </div>

      {/* Center Content (Initial) */}
      <div
        ref={centerContentRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-4xl px-4 opacity-0"
      >
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-[#fff8f0] drop-shadow-2xl" style={textShadowStyle}>
          Rudra Anandha illam Senior Citizens Home
        </h1>
        <p className="text-xl md:text-3xl leading-relaxed text-[#f4ebe1] drop-shadow-xl font-medium" style={subTextShadowStyle}>
          Dignity, Comfort, and Compassionate Care for the Golden Years
        </p>
      </div>

      {/* Left Content */}
      <div
        ref={leftContentRef}
        className="absolute top-1/2 left-4 md:left-[8%] -translate-y-1/2 z-10 text-white max-w-xl opacity-0 -translate-x-12 drop-shadow-2xl"
      >
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-lg" style={textShadowStyle}>
          Compassionate Care
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-md font-medium mb-8" style={subTextShadowStyle}>
          We provide a loving and supportive environment where seniors can thrive, socialize, and enjoy their golden years with dignity and respect.
        </p>
        <Button to="/services" variant="primary" size="lg" className="shadow-xl">
          Explore Services
        </Button>
      </div>

      {/* Right Content */}
      <div
        ref={rightContentRef}
        className="absolute top-1/2 right-4 md:right-[8%] -translate-y-1/2 z-10 text-white max-w-xl opacity-0 translate-x-12 drop-shadow-2xl flex flex-col items-end text-right"
      >
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-lg" style={textShadowStyle}>
          Modern Amenities
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-md font-medium mb-8" style={subTextShadowStyle}>
          Experience state-of-the-art facilities designed for comfort, safety, and engagement, ensuring a high quality of life for all our residents.
        </p>
        <Button to="/contact" variant="primary" size="lg" className="shadow-xl">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
