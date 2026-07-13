(() => {
  "use strict";

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  }

  const progressBar = document.querySelector(".page-progress span");
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-20% 0px -68%", threshold: [0, 0.15, 0.4] }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  if (!window.gsap || !window.ScrollTrigger) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

    intro
      .from(".hero-accent", { scaleX: 0, duration: 0.65 })
      .from(".hero-kicker", { y: 12, autoAlpha: 0, duration: 0.45 }, "-=0.25")
      .from(".hero h1", { y: 26, autoAlpha: 0, duration: 0.72 }, "-=0.18")
      .from([".hero-role", ".hero-summary", ".hero-links"], {
        y: 18,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.08
      }, "-=0.4")
      .from(".hero-facts", { x: 24, autoAlpha: 0, duration: 0.6 }, "-=0.42")
      .from(".fact-row", { y: 10, autoAlpha: 0, duration: 0.38, stagger: 0.07 }, "-=0.32");

    gsap.utils.toArray(".section-header").forEach((header) => {
      gsap.from(header.children, {
        y: 18,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: header,
          start: "top 96%",
          once: true
        }
      });
    });

    ScrollTrigger.batch(
      ".resume-entry, .honor-item, .skill-row, .project-entry, .learning-repos",
      {
        start: "top 89%",
        once: true,
        onEnter: (batch) => {
          gsap.from(batch, {
            y: 22,
            autoAlpha: 0,
            duration: 0.58,
            stagger: 0.07,
            ease: "power2.out",
            overwrite: true
          });
        }
      }
    );

    return () => intro.kill();
  });

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", refresh, { once: true });
  if (document.fonts?.ready) document.fonts.ready.then(refresh);
})();
