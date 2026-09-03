gsap.registerPlugin(ScrollTrigger);

// Ensure the page is loaded
window.addEventListener('load', () => {
    
    // Create a timeline connected to the scrollbar
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sequence",
            start: "top top",      // pin when the top of the sequence hits the top of the viewport
            end: "+=3000",         // pin for 3000px of scroll distance
            pin: true,             // pin the trigger element
            scrub: 1,              // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true       // useful for debugging, can remove later
        }
    });

    // Sequence 1: Darken the image overlay slightly to make text readable
    tl.to(".hero-overlay", {
        opacity: 1,
        duration: 1
    });

    // Sequence 2: Left Content animates in
    tl.to(".left-content", {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
    });

    // Pause for a moment (just scroll distance)
    tl.to({}, {duration: 1});

    // Sequence 3: Left Content animates out
    tl.to(".left-content", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.in"
    });

    // Sequence 4: Right Content animates in
    tl.to(".right-content", {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
    });

    // Pause for a moment
    tl.to({}, {duration: 1});

    // Sequence 5: Right Content animates out
    tl.to(".right-content", {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.in"
    });
    
    // After the timeline finishes, the pinning is released and the user scrolls to the next section naturally.
    // If the user scrolls back up, ScrollTrigger automatically reverses this timeline precisely.
});
