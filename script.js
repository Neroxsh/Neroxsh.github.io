(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const preferredTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    if (themeButton) {
      themeButton.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}" aria-hidden="true"></i>`;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  setTheme(preferredTheme);
  themeButton?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");

  function setupFallbackReveals() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.dataset.delay || 0;
        entry.target.style.setProperty("--delay", `${delay}ms`);
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  function setupGsapMotion() {
    window.gsap.registerPlugin(window.ScrollTrigger);
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const media = gsap.matchMedia();
    media.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
        reduceMotion: "(prefers-reduced-motion: reduce)"
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions;

        if (reduceMotion) {
          revealItems.forEach((item) => item.classList.add("is-visible"));
          gsap.set(".hero-copy, .portrait-wrap", { autoAlpha: 1, x: 0, y: 0 });
          return;
        }

        revealItems.forEach((item) => item.classList.add("is-visible"));
        gsap.set(".hero-copy, .portrait-wrap", { autoAlpha: 1, x: 0, y: 0 });
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .addLabel("copyIn", 0)
          .from(".hero .eyebrow", { autoAlpha: 0, y: 14, duration: 0.55 }, "copyIn")
          .from(".hero h1", { autoAlpha: 0, y: 52, clipPath: "inset(0 0 100% 0)", duration: 0.9 }, "copyIn+=0.18")
          .from(".hero-role", { autoAlpha: 0, y: 20, duration: 0.55 }, "<0.42")
          .from(".hero-intro", { autoAlpha: 0, y: 22, duration: 0.62 }, "<0.2")
          .from(".hero-actions .button", { autoAlpha: 0, y: 16, stagger: 0.09, duration: 0.48 }, "<0.22")
          .from(".hero-stats > div", { autoAlpha: 0, y: 14, stagger: 0.08, duration: 0.42 }, "<0.18")
          .from(".portrait-wrap", {
            autoAlpha: 0,
            x: isDesktop ? 54 : 0,
            y: isDesktop ? 0 : 26,
            clipPath: isDesktop ? "inset(0 100% 0 0)" : "inset(100% 0 0 0)",
            duration: 0.9
          }, "copyIn+=0.3")
          .from(".hero-next", { autoAlpha: 0, y: 10, duration: 0.4 }, ">");

        const standardReveals = [...revealItems].filter((item) => !item.matches(".hero-copy, .portrait-wrap, .research-item, .project-card"));
        gsap.set(standardReveals, { autoAlpha: 0, y: 34 });
        ScrollTrigger.batch(standardReveals, {
          start: "top 86%",
          once: true,
          interval: 0.08,
          batchMax: () => isDesktop ? 4 : 2,
          onEnter: (batch) => gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.72,
            ease: "power3.out",
            overwrite: "auto",
            clearProps: "transform,opacity,visibility"
          })
        });

        gsap.utils.toArray(".research-item").forEach((item, index) => {
          gsap.fromTo(item,
            { autoAlpha: 0, x: isDesktop ? (index % 2 ? 28 : -28) : 0, y: isDesktop ? 0 : 24 },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.72,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: { trigger: item, start: "top 88%", once: true }
            }
          );
        });

        gsap.utils.toArray(".project-card").forEach((card, index) => {
          const cardMedia = card.querySelector(".project-media");
          const body = card.querySelector(".project-body");
          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: card, start: "top 86%", once: true }
          });
          timeline
            .addLabel("cardIn", 0)
            .fromTo(card, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, clearProps: "opacity,visibility" }, "cardIn")
            .from(cardMedia, {
              clipPath: isDesktop && index % 2 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
              duration: 0.72,
              ease: "power3.inOut"
            }, "cardIn")
            .from(body.children, { autoAlpha: 0, y: 18, stagger: 0.07, duration: 0.42 }, "cardIn+=0.36");

          if (isDesktop) {
            gsap.to(cardMedia, {
              yPercent: 7,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 0.7 }
            });
          }
        });

        gsap.from(".experience-grid > div", {
          autoAlpha: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".experience-grid", start: "top 82%", once: true }
        });

        if (isDesktop) {
          gsap.to(".portrait-wrap", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 }
          });
          gsap.to(".hero-canvas", {
            scale: 1.06,
            autoAlpha: 0.25,
            ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 }
          });
        }
      }
    );

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh, { once: true });
  }

  if (window.gsap && window.ScrollTrigger) {
    setupGsapMotion();
  } else {
    setupFallbackReveals();
  }

  const header = document.querySelector("[data-header]");
  const progress = document.querySelector(".page-progress span");
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  function updateScrollState() {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header?.classList.toggle("is-scrolled", top > 24);
    if (progress) progress.style.transform = `scaleX(${max > 0 ? top / max : 0})`;

    let current = "";
    sections.forEach((section) => {
      if (top >= section.offsetTop - window.innerHeight * 0.35) current = `#${section.id}`;
    });
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === current));
  }

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  const canTilt = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canTilt) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--rx", `${-y * 2.5}deg`);
        card.style.setProperty("--ry", `${x * 2.5}deg`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  const canvas = document.querySelector("[data-network]");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const reducedMotion = prefersReducedMotion;
  const pointer = { x: -9999, y: -9999 };
  let nodes = [];
  let frame = 0;

  function cssColor(name) {
    return getComputedStyle(root).getPropertyValue(name).trim();
  }

  function resizeNetwork() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(22, Math.min(58, Math.round(rect.width / 25)));
    nodes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: index % 9 === 0 ? 3.1 : 1.7,
      accent: index % 9 === 0
    }));
    drawNetwork();
  }

  function drawNetwork() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const ink = cssColor("--ink");
    const blue = cssColor("--blue");
    const lime = cssColor("--lime");
    context.clearRect(0, 0, width, height);

    nodes.forEach((node, index) => {
      if (!reducedMotion) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      const dx = pointer.x - node.x;
      const dy = pointer.y - node.y;
      const pointerDistance = Math.hypot(dx, dy);
      if (pointerDistance < 120 && !reducedMotion) {
        node.x -= dx * 0.002;
        node.y -= dy * 0.002;
      }

      nodes.slice(index + 1).forEach((other) => {
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance > 128) return;
        context.globalAlpha = (1 - distance / 128) * 0.22;
        context.strokeStyle = ink;
        context.lineWidth = 0.7;
        context.beginPath();
        context.moveTo(node.x, node.y);
        context.lineTo(other.x, other.y);
        context.stroke();
      });

      context.globalAlpha = 0.9;
      context.fillStyle = node.accent ? (index % 18 === 0 ? lime : blue) : ink;
      context.beginPath();
      context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
    if (!reducedMotion) frame = requestAnimationFrame(drawNetwork);
  }

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  });
  canvas.addEventListener("pointerleave", () => {
    pointer.x = -9999;
    pointer.y = -9999;
  });
  window.addEventListener("resize", () => {
    cancelAnimationFrame(frame);
    resizeNetwork();
  });

  resizeNetwork();
})();
