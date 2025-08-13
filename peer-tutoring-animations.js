// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* ------------------------
   1. Navbar Slide-In
--------------------------- */
gsap.from(".navbar", {
  y: -60,
  opacity: 0,
  duration: 1.2,
  ease: "power1.out"
});

/* ------------------------
   2. Hero Fade-in Sequence
--------------------------- */
gsap.from(".hero h1", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power1.out",
  delay: 0.6
});
gsap.from(".hero .tagline", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power1.out",
  delay: 0.9
});
gsap.from(".hero .description", {
  opacity: 0,
  y: 25,
  duration: 1,
  ease: "power1.out",
  delay: 1.2
});
gsap.from(".cta-buttons .btn", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power1.out",
  delay: 1.4,
  stagger: 0.2
});

/* ------------------------
   3. Button Hover Pulse
--------------------------- */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.07, duration: 0.25, ease: "power1.inOut" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.25, ease: "power1.inOut" });
  });
});

/* ------------------------
   4. Scroll-Triggered Fade Flow
--------------------------- */

// Features flow animation
gsap.from("#features h2", {
  scrollTrigger: {
    trigger: "#features",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power1.out"
});

gsap.from("#features .feature-list li", {
  scrollTrigger: {
    trigger: "#features",
    start: "top 85%"
  },
  opacity: 0,
  x: -20,
  duration: 0.9,
  ease: "power1.out",
  stagger: 0.2   // items fade in one after the other
});

// Testimonials flow animation
gsap.from("#testimonials h2", {
  scrollTrigger: {
    trigger: "#testimonials",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power1.out"
});

gsap.from("#testimonials blockquote", {
  scrollTrigger: {
    trigger: "#testimonials",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power1.out",
  stagger: 0.4 // each quote comes slightly later
});
