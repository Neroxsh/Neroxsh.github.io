(() => {
  "use strict";

  const translations = {
    en: {
      "nav.profile": "Profile",
      "nav.experience": "Practice",
      "nav.research": "Papers",
      "nav.systems": "Systems",
      "nav.builds": "Products",
      "nav.skills": "Skills",
      "hero.kicker": "MSc Candidate 2027 · School of Software, Henan University",
      "hero.line1": "SQL Reasoning",
      "hero.line2": "Reliable AI",
      "hero.line3": "FinTech Systems",
      "hero.summary": "I study SQL semantic equivalence, cross-dialect Text-to-SQL, and verifiable reasoning, then carry multi-agent methods into industrial model optimization and financial-technology systems.",
      "hero.next": "NEXT / PROFILE",
      "profile.title": "From computer science to reliable software and intelligent systems.",
      "profile.intro": "Education forms the base of my research and engineering work. Competitions and practical projects record the process of turning ideas into verifiable results.",
      "education.master": "Master's Degree",
      "education.henu": "Henan University",
      "education.school": "School of Software",
      "education.bachelor": "Bachelor's Degree",
      "education.haut": "Henan University of Technology",
      "education.major": "Computer Science and Technology",
      "honors.title": "Honors and milestones",
      "honors.1": "National Second Prize, 16th National College Student FinTech Innovation Competition (1st in Henan)",
      "honors.2": "Silver Award, Henan Provincial Internet+ Competition",
      "honors.3": "Bronze Award, Henan Provincial Challenge Cup Competition",
      "honors.4": "First-Class Academic Scholarship × 2",
      "honors.5": "First Prize, AI Innovation and Entrepreneurship Competition",
      "honors.6": "Second Prize, 6th Innovative English Challenge",
      "honors.7": "Second Prize, Henan University Student Innovation Competition",
      "honors.8": "6th Place, Henan University Badminton Cup",
      "honors.9": "Outstanding Volunteer, College Computer Design Competition",
      "work.introTitle": "A research and engineering workbench that keeps reconfiguring.",
      "work.introText": "As the page moves, the semantic core changes structure across six chapters: from closed-loop model optimization to formal verification, cross-dialect evaluation, and a financial-technology agent system.",
      "experience.company": "Alibaba · Intime Star · DeepInsight AI",
      "experience.projectTitle": "Tiangong Optimizer: Multi-Agent Closed-Loop Model Optimization",
      "experience.summary": "Contributed to Tiangong Optimizer, which represents the path from an industrial-vision baseline to a reviewed candidate as a traceable Study. The Planner combines prior trials, external research, and advice from data, hyperparameter, and architecture experts. ClearML connects training, testing, and model records; an isolated Analyst reviews each result, and a human decides whether a candidate is promoted.",
      "experience.before": "BEFORE",
      "experience.after": "AFTER AUTOMATION",
      "experience.architectureText": "Each Study is an experiment boundary. A human defines the objective and release gate; the Planner reads prior trials, Family Memory, and retrieved evidence; three domain experts propose data, hyperparameter, and architecture changes. A Tool Dispatcher orchestrates execution, the Code Editor changes only allowlisted files in an isolated worktree, and ClearML owns training and testing.",
      "experience.methodText": "The Evaluator applies the primary metric and hard constraints so headline gains cannot hide critical class regressions. The Analyst is isolated from Planner conversation history and independently judges whether the improvement is real. Only results that pass metrics, constraints, and review become candidates; formal release remains a human decision.",
      "experience.result": "The system has been applied to fire and smoke detection, risky-behavior detection, and human and head-attribute recognition. It reduced an optimization cycle of roughly 25 days to 4-5 days, while retaining the code branch, ClearML tasks, model ID, metrics, and review decision for every trial.",
      "unit.days": "days",
      "detail.problem": "Problem",
      "detail.architecture": "Architecture",
      "detail.method": "Method",
      "detail.result": "Result",
      "action.architecture": "Full architecture",
      "action.figure": "View framework",
      "paper.sqlequ.lead": "SQLEq-O1 trains a compact, locally deployable reasoner for SQL equivalence. Instead of treating agreement on a finite database or surface-level structural similarity as semantic evidence, it learns the decision boundary from formal labels, distilled verification traces, and verifiable rewards.",
      "paper.sqlequ.problem": "Execution testing can only show that two queries agree on observed database instances; it cannot prove semantic equivalence. SMT-based tools such as VeriEQL can suffer state-space explosion on nested, aggregated, and compositionally complex SQL. Prompted LLMs are costly and unstable, while small models readily learn keyword overlap as a shortcut.",
      "paper.sqlequ.method": "The data pipeline follows two complementary tracks: human-written LeetCode solutions preserve realistic compositional complexity, while several Text-to-SQL models generate hard SynSQL negatives. VeriEQL formally labels every pair; only distilled verification traces consistent with those labels are retained, yielding the 60K-pair CoRE-SQL corpus. Training uses a 30% SFT warm-up followed by 70% GRPO.",
      "paper.sqlequ.result": "On Qwen2.5-Coder-1.5B, GRPO raises LeetCode-Hard GM from 73.60 under full SFT to 89.38. The same model reaches 76.77 GM on the source-disjoint Calcite+Spider-DAIL benchmark, for an average GM of 83.08 across the two test sets.",
      "paper.uniql.lead": "UniQL studies how the same natural-language intent is realized across heterogeneous database systems, rather than comparing unrelated samples from different databases. Every question is paired with executable SQL in 16 dialects under aligned schemas and database contents.",
      "paper.uniql.problem": "Text-to-SQL benchmarks remain centered on SQLite, although production systems differ in type systems, built-in functions, identifier rules, and execution semantics. When dialects are evaluated on different questions and data, model failures cannot be separated into semantic difficulty and dialect-specific weakness.",
      "paper.uniql.method": "The 1,534 BIRD Dev questions serve as shared semantic anchors. Their databases are migrated to 15 target systems. SQLGlot handles deterministic translation first; failures then enter LLM translation and up to three rounds of execution-feedback repair. Long-tail cases are independently reviewed by two annotators, and conservative EX is used for both construction and evaluation.",
      "paper.uniql.result": "The resulting benchmark contains 24,544 human-verified executable queries across 16 dialects. The best average EX is only 54.63%, and the strongest model solves the same question correctly in all 16 dialects only 20.14% of the time, showing that single-dialect performance is not a reliable proxy for cross-database generalization.",
      "paper.farsql.lead": "FAR-SQL separates SQL equivalence decisions into a formally determinate region and a model-completed region. Historical runtime profiles first estimate the verification yield of each query structure; a task-adapted local model is invoked only when VeriEQL cannot return a determinate result.",
      "paper.farsql.problem": "VeriEQL's determinate outputs have an explicit formal basis, but complex aggregation, nesting, and dialect functions often produce timeouts, unsupported constructs, or conversion errors. A uniform longer budget wastes solver time on low-yield cases, while switching directly to a model erases the trust boundary between proof-backed and model-generated decisions.",
      "paper.farsql.method": "Offline, historical VeriEQL logs define a profile over SQL structure, time budget, and probability of a determinate result; source-disjoint formal labels fine-tune a local model. Online, marginal yield determines the verification budget and every determinate output is preserved. Only the unresolved region is completed with Self-Consistency@3.",
      "paper.farsql.result": "On 412 out-of-domain Calcite+Spider-DAIL pairs, FAR-SQL with Qwen2.5-SFT reaches 83.98 GM, 7.78 points above model-only SFT. It has no undetermined cases and averages 13.97 seconds per pair, improving coverage, class balance, and verification cost together.",
      "system.sql.title": "Unified SQL Evaluation and Execution Framework",
      "system.sql.summary": "A reproducible entry point for NL2SQL, SQL correction, and SQL equivalence experiments. It consolidates sample adaptation, database execution, result comparison, and metric aggregation that would otherwise be rebuilt inside each task.",
      "system.sql.architecture": "The task layer defines how a sample is constructed, where predicted SQL is read, and how the target result is obtained. A shared execution layer owns database connections, query execution, result comparison, and metric aggregation. Models, datasets, and task definitions enter through adapters, leaving the core pipeline unchanged.",
      "system.sql.method": "Execution accuracy is the primary metric. Standardized MySQL, PostgreSQL, and SQLite environments run in Docker and switch automatically by task. Results, nulls, ordering, exceptions, and timeouts share one representation and reporting convention, making runs directly comparable.",
      "system.sql.result": "A single pipeline now covers comparisons across models, tasks, and datasets while removing repeated execution scripts and ad hoc reporting code. Adding a new task is concentrated in its adapter, reducing experiment setup from days to hours.",
      "system.credit.summary": "An enterprise-loan credit-review workbench that begins with document inventory and proceeds through financial calculations, business and repayment analysis, risk aggregation, evidence citation, and report self-audit. It supports review; it does not make the final approval decision.",
      "system.credit.architecture": "Each Case forms a data boundary. Document inventory, parsing, and evidence indexing create shared context for company-profile, business, finance, cash-flow, guarantee, and external-risk agents; Risk Summary and Credit Opinion then consolidate the review.",
      "system.credit.method": "PDF, DOCX, XLSX, TXT, and images enter one classification and checklist pipeline. Financial ratios are rule-calculated, while risk items retain their source file and material basis. Report Audit checks disclaimers, unsupported risks, and language that oversteps into automatic approval.",
      "system.credit.result": "The workflow covers multiple cases, material inventory, multi-agent analysis, and Markdown, HTML, Word, and PDF export. Every output remains an aid to review; credit terms and approval stay with a human.",
      "builds.relayDetail": "Extend Codex sessions on your computer to a mobile browser: browse local sessions by project, continue a conversation, and receive execution progress live, without installing a phone app or signing in to ChatGPT again.",
      "builds.relayLive": "Open mobile client",
      "builds.relayDemo": "Product demo video",
      "builds.relayFeature1": "Browse local sessions, send messages remotely, and adjust the model, reasoning effort, and permissions",
      "builds.relayFeature2": "The desktop agent listens only on 127.0.0.1; the relay forwards end-to-end encrypted ciphertext",
      "builds.relayFeature3": "A 16-character code and desktop approval pair each device, which can later be revoked",
      "builds.todo": "My Tasks · Hello Kitty Todo",
      "builds.todoDetail": "A cross-platform task widget for the corner of the desktop, with minute-level deadlines, continuously advancing DDL progress, priority and favorites, four sorting modes, and quick hide or restore from the system tray.",
      "builds.words": "Moyu Words",
      "builds.wordsDetail": "A transparent, always-on-top, resizable vocabulary window. Mouse gestures move through words and archive mastered items; seven built-in word books, custom imports, daily plans, unit check-ins, and CSV export complete the study flow.",
      "skills.title": "Professional Skills",
      "skills.intro": "From data and training to agent orchestration, experiment infrastructure, and AI-assisted development.",
      "skills.programming": "Programming and Data",
      "skills.agent": "Agents and LLM Applications",
      "skills.training": "Training and Inference",
      "skills.engineering": "Research Engineering",
      "skills.aiCoding": "AI-Assisted Development",
      "interests.title": "Interests",
      "interests.reading": "Reading",
      "interests.badminton": "Badminton",
      "interests.swimming": "Swimming",
      "interests.music": "Music",
      "footer.role": "MSc Candidate, School of Software, Henan University",
      "footer.focus": "SQL Reasoning · Reliable AI · FinTech Systems"
    }
  };

  const colors = {
    tiangong: "#55d9ff",
    sqlequ: "#5ee7ff",
    uniql: "#698cff",
    farsql: "#a496ff",
    sqlsystem: "#61deb0",
    credit: "#f0c75e"
  };

  const state = {
    language: localStorage.getItem("portfolio-language") === "en" ? "en" : "zh",
    theme: localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
    chapter: "tiangong"
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasAnime = Boolean(window.anime?.animate && window.anime?.stagger && window.anime?.svg);
  const anime = window.anime;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.dataset.zh = element.textContent;
  });

  const renderIcons = () => {
    window.lucide?.createIcons({ attrs: { "aria-hidden": "true" } });
  };

  const updateThemeControl = () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    const dark = state.theme === "dark";
    const label = state.language === "en"
      ? (dark ? "Switch to light theme" : "Switch to dark theme")
      : (dark ? "切换亮色主题" : "切换暗色主题");
    button.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    renderIcons();
  };

  const applyTheme = (theme) => {
    state.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0a0c10" : "#242321");
    updateThemeControl();
  };

  const applyLanguage = (language) => {
    state.language = language;
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = language === "en" ? translations.en[key] : element.dataset.zh;
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;
      button.setAttribute("aria-pressed", String(active));
    });

    const english = language === "en";
    document.querySelector(".wordmark")?.setAttribute("aria-label", english ? "Back to top" : "返回首页");
    document.querySelector(".topnav")?.setAttribute("aria-label", english ? "Primary navigation" : "主导航");
    document.querySelector(".language-control")?.setAttribute("aria-label", english ? "Language" : "语言切换");
    document.querySelector("[data-lightbox-close]")?.setAttribute("aria-label", english ? "Close" : "关闭");
    const menuButton = document.querySelector("[data-menu-toggle]");
    if (menuButton) {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      const label = english ? (open ? "Close navigation" : "Open navigation") : (open ? "关闭导航" : "打开导航");
      menuButton.setAttribute("aria-label", label);
      menuButton.setAttribute("title", label);
    }
    updateThemeControl();
  };

  const captureScrollAnchor = () => {
    const headerHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
    const candidates = [...document.querySelectorAll("section[id], .work-chapter[id]")]
      .map((element) => ({ element, rect: element.getBoundingClientRect() }))
      .filter(({ rect }) => rect.bottom > headerHeight && rect.top < window.innerHeight);
    const current = candidates.sort((a, b) => Math.abs(a.rect.top - headerHeight) - Math.abs(b.rect.top - headerHeight))[0];
    return current ? { element: current.element, top: current.rect.top } : null;
  };

  const restoreScrollAnchor = (anchor) => {
    if (!anchor) return;
    requestAnimationFrame(() => {
      const delta = anchor.element.getBoundingClientRect().top - anchor.top;
      if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: "auto" });
    });
  };

  const topnav = document.querySelector(".topnav");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const setMenu = (open) => {
    if (!topnav || !menuButton) return;
    topnav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    const english = state.language === "en";
    const label = english ? (open ? "Close navigation" : "Open navigation") : (open ? "关闭导航" : "打开导航");
    menuButton.setAttribute("aria-label", label);
    menuButton.setAttribute("title", label);
    renderIcons();
    if (open && hasAnime && !reducedMotion) {
      anime.animate(topnav.querySelectorAll("a"), {
        opacity: [0, 1],
        translateY: [-8, 0],
        delay: anime.stagger(35),
        duration: 320,
        ease: "out(4)"
      });
    }
  };

  menuButton?.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  topnav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1180) setMenu(false);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (language === state.language) return;
      const scrollAnchor = captureScrollAnchor();
      if (hasAnime && !reducedMotion) {
        anime.animate("main, .footer", {
          opacity: [1, 0.24],
          translateY: [0, 7],
          duration: 180,
          ease: "in(2)",
          onComplete: () => {
            applyLanguage(language);
            restoreScrollAnchor(scrollAnchor);
            anime.animate("main, .footer", { opacity: [0.24, 1], translateY: [7, 0], duration: 420, ease: "out(4)" });
          }
        });
      } else {
        applyLanguage(language);
        restoreScrollAnchor(scrollAnchor);
      }
    });
  });

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = state.theme === "dark" ? "light" : "dark";
    if (hasAnime && !reducedMotion) {
      anime.animate("body", {
        opacity: [1, 0.7, 1],
        duration: 460,
        ease: "inOut(3)",
        onUpdate: (animation) => {
          if (animation.progress > 0.42 && document.documentElement.dataset.theme !== next) applyTheme(next);
        }
      });
    } else {
      applyTheme(next);
    }
  });

  document.querySelectorAll("[data-switcher]").forEach((switcher) => {
    const tabs = [...switcher.querySelectorAll('[role="tab"]')];
    const panels = [...switcher.querySelectorAll("[data-panel]")];

    const selectTab = (button) => {
      const key = button.dataset.tab;
      const nextPanel = panels.find((panel) => panel.dataset.panel === key);
      const currentPanel = panels.find((panel) => !panel.hidden);
      if (!nextPanel || nextPanel === currentPanel) return;

      tabs.forEach((tab) => tab.setAttribute("aria-selected", String(tab === button)));
      const showNext = () => {
        currentPanel.hidden = true;
        nextPanel.hidden = false;
        if (hasAnime && !reducedMotion) {
          anime.animate(nextPanel, { opacity: [0, 1], translateY: [9, 0], duration: 360, ease: "out(4)" });
        }
      };

      if (hasAnime && !reducedMotion) {
        anime.animate(currentPanel, { opacity: [1, 0], translateY: [0, -6], duration: 140, ease: "in(2)", onComplete: showNext });
      } else {
        showNext();
      }
    };

    tabs.forEach((button, index) => {
      button.addEventListener("click", () => selectTab(button));
      button.addEventListener("keydown", (event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const next = tabs[(index + direction + tabs.length) % tabs.length];
        next.focus();
        selectTab(next);
      });
    });
  });

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxHeading = document.querySelector("[data-lightbox-heading]");
  const lightboxCaption = document.querySelector("[data-lightbox-caption]");

  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.lightboxTitle || "Artifact";
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = title;
      lightboxHeading.textContent = title;
      lightboxCaption.textContent = title;
      lightbox.showModal();
      document.body.classList.add("is-dialog-open");
      if (hasAnime && !reducedMotion) {
        anime.animate(lightbox, { opacity: [0, 1], translateY: [22, 0], scale: [0.98, 1], duration: 420, ease: "out(4)" });
      }
    });
  });

  document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox?.close());
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener("close", () => document.body.classList.remove("is-dialog-open"));

  const workVisual = document.querySelector("[data-work-visual]");
  const sceneIndex = document.querySelector("[data-scene-index]");
  const sceneTitle = document.querySelector("[data-scene-title]");
  const sceneStatus = document.querySelector("[data-scene-status]");
  const visualProgress = document.querySelector("[data-visual-progress]");

  const animateSceneContent = (scene) => {
    if (!hasAnime || reducedMotion || !scene) return;
    const targets = scene.querySelectorAll(".agent-node, .dialect-source, .sql-core, .sql-output, .credit-docs span, .credit-agents span, .credit-core, .credit-report, img");
    if (!targets.length) return;
    anime.animate(targets, {
      opacity: [0, 1],
      scale: [0.72, 1],
      translateY: [18, 0],
      delay: anime.stagger(48, { from: "center" }),
      duration: 520,
      ease: "out(4)"
    });
  };

  const activateChapter = (chapter) => {
    const key = chapter.dataset.chapter;
    if (!key || key === state.chapter && chapter.classList.contains("is-active")) return;
    state.chapter = key;

    document.querySelectorAll("[data-chapter]").forEach((item) => item.classList.toggle("is-active", item === chapter));
    const oldScene = document.querySelector(".scene.is-active");
    const nextScene = document.querySelector(`.scene[data-scene="${key}"]`);
    const color = colors[key] || colors.tiangong;
    workVisual?.style.setProperty("--scene-accent", color);

    if (sceneIndex) sceneIndex.textContent = chapter.dataset.index;
    if (sceneTitle) sceneTitle.textContent = chapter.dataset.title;
    if (sceneStatus) sceneStatus.textContent = chapter.dataset.status;
    if (visualProgress) visualProgress.style.transform = `scaleX(${Number(chapter.dataset.index) / 6})`;

    if (nextScene && nextScene !== oldScene) {
      nextScene.classList.add("is-active");
      nextScene.style.visibility = "visible";
      if (hasAnime && !reducedMotion) {
        anime.animate(nextScene, { opacity: [0, 1], scale: [0.84, 1], rotate: [-4, 0], duration: 620, ease: "out(4)" });
        if (oldScene) {
          anime.animate(oldScene, {
            opacity: [1, 0],
            scale: [1, 0.88],
            rotate: [0, 4],
            duration: 330,
            ease: "in(3)",
            onComplete: () => {
              oldScene.classList.remove("is-active");
              oldScene.style.visibility = "";
              oldScene.style.opacity = "";
              oldScene.style.transform = "";
            }
          });
        }
      } else {
        oldScene?.classList.remove("is-active");
      }
      animateSceneContent(nextScene);
    }

    if (hasAnime && !reducedMotion) {
      anime.animate(chapter.querySelectorAll(".chapter-topline, .chapter-venue, h2, .chapter-lead, .impact-equation, .metric-row, .chapter-switcher, .chapter-actions"), {
        opacity: [0.25, 1],
        translateY: [18, 0],
        delay: anime.stagger(45),
        duration: 480,
        ease: "out(4)"
      });
    }
  };

  const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activateChapter(entry.target);
    });
  }, { rootMargin: "-34% 0px -44% 0px", threshold: 0 });

  document.querySelectorAll(".work-chapter").forEach((chapter) => chapterObserver.observe(chapter));

  const navTargets = [...document.querySelectorAll(".topnav a")].map((link) => ({ link, target: document.querySelector(link.getAttribute("href")) })).filter((item) => item.target);
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navTargets.forEach(({ link, target }) => link.classList.toggle("is-active", target === entry.target));
    });
  }, { rootMargin: "-30% 0px -62% 0px", threshold: 0 });
  navTargets.forEach(({ target }) => navObserver.observe(target));

  const revealTargets = [
    ".profile-heading > *",
    ".degree-block",
    ".honor-reel-head > *",
    ".work-intro > *",
    ".builds-heading > *",
    ".relay-stage",
    ".relay-features li",
    ".small-builds article",
    ".skills-heading > *",
    ".skill-lane",
    ".interests > *"
  ];

  if (hasAnime && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        anime.animate(entry.target, { opacity: [0, 1], translateY: [32, 0], duration: 650, ease: "out(4)" });
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.06 });
    revealTargets.forEach((selector) => document.querySelectorAll(selector).forEach((element) => revealObserver.observe(element)));
  }

  let scrollTicking = false;
  const updateScroll = () => {
    scrollTicking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    const bar = document.querySelector(".page-progress span");
    if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;

    const hero = document.querySelector("[data-hero]");
    const engine = document.querySelector("[data-semantic-engine]");
    if (hero && engine) {
      const rect = hero.getBoundingClientRect();
      const distance = Math.max(1, hero.offsetHeight - window.innerHeight);
      const heroProgress = Math.min(1, Math.max(0, -rect.top / distance));
      const mobile = window.innerWidth <= 900;
      const shift = mobile ? heroProgress * 12 : heroProgress * 6;
      engine.style.transform = `translate3d(${shift}vw, ${heroProgress * -2.5}vh, 0) rotate(${heroProgress * 27}deg) scale(${1 - heroProgress * 0.12})`;
      document.querySelectorAll(".engine-callout").forEach((callout, index) => {
        const direction = index % 2 ? 1 : -1;
        callout.style.transform = `translate3d(${direction * heroProgress * 48}px, ${heroProgress * (index - 1.5) * 16}px, 0)`;
        callout.style.opacity = String(1 - heroProgress * 0.78);
      });
      const meter = document.querySelector(".hero-meter span");
      if (meter) meter.style.transform = `translateX(${heroProgress * 300}px)`;
    }
  };

  const queueScrollUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateScroll);
  };

  window.addEventListener("scroll", queueScrollUpdate, { passive: true });
  window.addEventListener("resize", queueScrollUpdate);

  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  applyTheme(state.theme);
  applyLanguage(state.language);
  renderIcons();
  updateScroll();

  if (hasAnime && !reducedMotion) {
    const { animate, stagger, svg } = anime;

    animate(svg.createDrawable(".wordmark-path"), { draw: ["0 0", "0 1"], duration: 900, ease: "inOut(3)" });
    animate(".wordmark-orbit", { rotate: [0, 360], duration: 9000, loop: true, ease: "linear" });
    animate(".wordmark-node", { scale: [0.72, 1.35], opacity: [0.65, 1], duration: 1100, alternate: true, loop: true, ease: "inOut(3)" });

    animate(".hero-copy > *", {
      opacity: [0, 1],
      translateY: [28, 0],
      delay: stagger(85, { start: 120 }),
      duration: 760,
      ease: "out(4)"
    });
    animate(".semantic-engine", { opacity: [0, 1], scale: [0.82, 1], rotate: [-8, 0], duration: 1200, ease: "out(5)" });
    animate(svg.createDrawable(".engine-signal"), { draw: ["0 0", "0 1"], delay: stagger(180, { start: 450 }), duration: 1500, ease: "inOut(3)" });
    animate(".engine-dial--outer", { rotate: [0, 360], duration: 23000, loop: true, ease: "linear" });
    animate(".engine-dial--ticks", { rotate: [360, 0], duration: 32000, loop: true, ease: "linear" });
    animate(".engine-orbit--a", { rotate: [0, 360], duration: 9500, loop: true, ease: "linear" });
    animate(".engine-orbit--b", { rotate: [360, 0], duration: 13000, loop: true, ease: "linear" });
    animate(".halo", { scale: [0.7, 1.35], opacity: [0.9, 0.08], delay: stagger(220), duration: 1450, loop: true, ease: "out(3)" });
    animate(".engine-center strong", { scale: [0.96, 1.035], opacity: [0.65, 1], duration: 1700, alternate: true, loop: true, ease: "inOut(3)" });
    animate(".live-dot", { scale: [0.8, 1.3], opacity: [0.65, 1], duration: 1100, alternate: true, loop: true, ease: "inOut(3)" });

    animate(".visual-ring--one", { rotate: [0, 360], duration: 26000, loop: true, ease: "linear" });
    animate(".visual-ring--two", { rotate: [360, 0], duration: 18000, loop: true, ease: "linear" });
    animate(".scene-links path, .scene--sql-system > svg path, .scene--credit > svg path", { strokeDashoffset: [0, -90], duration: 2800, loop: true, ease: "linear" });
    animate(".agent-node--planner, .sql-core, .credit-core", { scale: [0.98, 1.025], duration: 1700, alternate: true, loop: true, ease: "inOut(3)" });

    const honorTrack = document.querySelector("[data-honor-track]");
    const startHonorReel = () => {
      if (!honorTrack || window.innerWidth < 680) return;
      const distance = Math.max(0, honorTrack.scrollWidth - window.innerWidth + 40);
      if (!distance) return;
      animate(honorTrack, { translateX: [0, -distance], duration: 36000, alternate: true, loop: true, ease: "inOut(2)" });
    };
    if (document.readyState === "complete") startHonorReel();
    else window.addEventListener("load", startHonorReel, { once: true });

    document.querySelectorAll(".skill-lane").forEach((lane, index) => {
      animate(lane.querySelectorAll("span"), {
        translateX: index % 2 ? [0, 6] : [0, -6],
        duration: 1700 + index * 140,
        alternate: true,
        loop: true,
        delay: stagger(80),
        ease: "inOut(3)"
      });
    });
  }
})();
