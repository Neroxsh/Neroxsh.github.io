(() => {
  "use strict";

  const translations = {
    en: {
      "brand.name": "Shihao Xing",
      "nav.honors": "Honors",
      "nav.experience": "Internship",
      "nav.research": "Research & Systems",
      "nav.skills": "Skills",
      "nav.interests": "Interests",
      "hero.kicker": "MSc Candidate 2027 · School of Software, Henan University",
      "education.title": "Education",
      "education.master": "Master's Degree",
      "education.henu": "Henan University",
      "education.school": "School of Software",
      "education.bachelor": "Bachelor's Degree",
      "education.haut": "Henan University of Technology",
      "education.major": "Computer Science and Technology",
      "honors.title": "Honors & Awards",
      "honors.1": "National Second Prize, 16th National College Student FinTech Innovation Competition (1st in Henan)",
      "honors.2": "Silver Award, Henan Provincial 'Internet+' Competition",
      "honors.3": "Bronze Award, Henan Provincial 'Challenge Cup' Competition",
      "honors.4": "First-Class Academic Scholarship × 2",
      "honors.5": "First Prize, AI Innovation and Entrepreneurship Competition",
      "honors.6": "Second Prize, 6th Innovative English Challenge",
      "honors.7": "Second Prize, Henan University Student Innovation Competition",
      "honors.8": "6th Place, Henan University Badminton Cup",
      "honors.9": "Outstanding Volunteer, College Computer Design Competition",
      "experience.title": "Internship",
      "experience.role": "Algorithm R&D Intern",
      "experience.company": "Alibaba · Intime Star · DeepInsight AI",
      "experience.projectTitle": "Tiangong Optimizer: Multi-Agent Closed-Loop Model Optimization",
      "experience.summary": "Contributed to an automated multi-agent optimization controller for industrial vision models. The Planner orchestrates external research, three domain experts, controlled code changes, and ClearML training/testing. An isolated Analyst independently reviews each trial, Family Memory accumulates reusable lessons, and Human-in-the-loop retains final model-release authority.",
      "experience.before": "BEFORE",
      "experience.fourWeeks": "~4 weeks",
      "experience.after": "AFTER AUTOMATION",
      "experience.fourDays": "4-5 days",
      "experience.result": "Turned manual analysis, tuning, code experiments, and validation into a traceable optimization loop used for fire and smoke detection, risky-behavior detection, and human attribute recognition.",
      "experience.architecture": "View full architecture",
      "flow.humanSmall": "start · intervene · promote",
      "flow.memorySmall": "cross-model lessons",
      "flow.data": "Data Expert",
      "flow.param": "Hyperparameter Expert",
      "flow.model": "Architecture Expert",
      "flow.plannerSmall": "strategy & trial planning",
      "flow.dispatcherSmall": "parallel reads · serialized writes",
      "flow.codeSmall": "Worktree · Codeup",
      "flow.clearmlSmall": "train · test · model",
      "flow.evaluatorSmall": "metrics & hard constraints",
      "flow.analystSmall": "independent review",
      "flow.candidateSmall": "credible improvement",
      "flow.gateSmall": "human-approved best model",
      "flow.defaultCaption": "A complete loop from human objectives, external research, and expert collaboration to controlled code experiments, ClearML execution, independent review, and human-approved release.",
      "work.title": "Research & Systems",
      "work.papers": "Research Papers",
      "work.systems": "Systems",
      "detail.problem": "Problem",
      "detail.method": "Method",
      "detail.result": "Result",
      "paper.sqlequ.lead": "A lightweight reinforced-reasoning framework for SQL semantic equivalence that unifies formal labels, reasoning distillation, and verifiable rewards.",
      "paper.sqlequ.problem": "Execution testing cannot prove equivalence, SMT verification often times out on complex SQL, and general-purpose LLMs are expensive. Compact models instead tend to learn keyword and structural shortcuts.",
      "paper.sqlequ.method": "A dual-track pipeline combines real LeetCode multi-solutions with hard SynSQL pairs, all formally labeled by VeriEQL. Verification-style CoT forms a balanced 60K-pair CoRE-SQL corpus, followed by 30% SFT warm-up and 70% GRPO with sparse verifiable rewards.",
      "paper.sqlequ.result": "Qwen2.5-Coder-1.5B rises from 34.88 to 89.38 GM on LeetCode-Hard and from 44.58 to 76.77 on OOD Calcite+Spider-DAIL, pairing compact deployment cost with strong hard-case discrimination.",
      "paper.manuscript": "Manuscript under review",
      "paper.uniql.lead": "The first executable benchmark to evaluate 16 SQL dialects under aligned natural-language intents, schemas, and database contents.",
      "paper.uniql.problem": "Text-to-SQL benchmarks remain dominated by SQLite. Success in one dialect does not reveal whether a model transfers reliably to PostgreSQL, Oracle, Hive, Teradata, and other production systems.",
      "paper.uniql.method": "We migrate 1,534 BIRD Dev intents to 16 dialects using database migration, SQLGlot, LLM translation, three rounds of execution-feedback reflection, rule evolution, and dual-annotator consensus, while preserving ordering and duplicate semantics.",
      "paper.uniql.result": "UniQL contains 24,544 human-verified executable SQL annotations. The best model averages only 54.63% EX, and the best All-16 consistency is 20.14%, exposing fragility hidden by SQLite-only evaluation.",
      "paper.farsql.lead": "A formal-first, completion-after-failure hierarchy that separates the trusted determinate region from model-assisted completion under bounded budgets.",
      "paper.farsql.problem": "VeriEQL returns trustworthy determinate results, but complex aggregation, nesting, and dialect functions trigger timeout, unsupported, or conversion failures. Replacing it with a model discards the formal trust boundary.",
      "paper.farsql.method": "Verification-yield profiles learned from historical VeriEQL logs allocate dynamic budgets by SQL structure. Determinate outputs are preserved; normalized failure states route to a task-adapted local model with Self-Consistency@3.",
      "paper.farsql.result": "On 412 OOD Calcite+Spider-DAIL pairs, FAR-SQL reaches 83.98 GM with zero undetermined cases and about 14 seconds average latency, versus 38.19 GM and 35 seconds for VeriEQL@60s.",
      "system.sql.title": "Unified SQL Evaluation Framework",
      "system.sql.summary": "A model-agnostic execution and evaluation layer for NL2SQL, SQL correction, and equivalence verification.",
      "system.sql.method": "Input construction, prediction parsing, SQL execution, result normalization, and metrics are separated into reusable components, with standardized MySQL, PostgreSQL, and SQLite environments in Docker.",
      "system.sql.result": "Execution accuracy becomes a common evaluation core across tasks, models, and datasets, reducing new-task setup from days to hours.",
      "system.credit.summary": "An enterprise credit-review workbench connecting document understanding, financial analysis, multi-agent risk reasoning, and evidence-grounded report generation.",
      "system.credit.method": "It handles PDF, Word, Excel, text, and images; agents collaborate around operations, financials, repayment sources, and risk factors while retaining evidence references and missing-material lists.",
      "system.credit.result": "The workflow covers case management, document inventory, risk analysis, report editing, self-audit, and multi-format export while preserving human credit-approval boundaries.",
      "skills.title": "Professional Skills",
      "skills.programming": "Programming & Data",
      "skills.agent": "Agents & LLM Applications",
      "skills.training": "Training & Inference",
      "skills.engineering": "Research Engineering",
      "skills.aiCoding": "AI-Assisted Development",
      "builds.title": "More Public Builds",
      "builds.todo": "My Tasks · Hello Kitty Todo",
      "builds.todoDetail": "A lightweight desktop task manager with deadline progress, smart ordering, and tray mode.",
      "builds.words": "Moyu Words",
      "builds.wordsDetail": "A transparent floating vocabulary app with study plans, word books, and known-word archiving.",
      "interests.title": "Interests",
      "interests.reading": "Reading",
      "interests.badminton": "Badminton",
      "interests.swimming": "Swimming",
      "interests.music": "Music",
      "footer.role": "MSc Candidate, School of Software, Henan University",
      "dialog.title": "Complete Multi-Agent Closed-Loop Optimization Architecture",
      "dialog.caption": "Human-in-the-loop, Planner orchestration, domain experts, controlled trials, ClearML execution, Analyst review, and reusable experience feedback."
    }
  };

  const flowCopy = {
    zh: {
      default: "从人类目标、外部研究和专家协作，到受控代码试验、ClearML 训练测试、独立审查与人工发布的完整闭环。",
      human: "Human-in-the-loop 负责选择模型线和运行模式，可在任务进行中向 Planner 发送即时或排队干预，并最终决定是否发布候选模型。",
      research: "Research Engine 可搜索网页、论文与 GitHub 代码，继续深读来源并进行证据化综合，让 Trial 建立在外部技术证据上。",
      data: "数据专家分析类别分布、场景比例、背景负样本和弱类问题，提出数据组合、采样与派生数据集方案。",
      param: "超参专家围绕学习率、Epoch、Batch Size、Warm-up、Weight Decay 与损失权重提出建议。",
      model: "结构专家评估模型容量、Backbone、Neck、Head、多尺度结构与注意力机制的优化空间。",
      planner: "Planner 综合 Baseline、历史 Trial、研究证据、专家意见、Family Memory 与剩余预算，决定下一步实验。",
      dispatcher: "Tool Dispatcher 将只读工具并行执行，将提交 Trial、阶段推进等状态变更串行化，避免并发冲突。",
      code: "Code Editor 在隔离 Worktree 与 Agent 分支中按白名单修改代码，完成语法检查、提交并推送 Codeup，保证试验可追踪。",
      clearml: "Executor 通过 ClearML 提交训练和自动测试，回收 model_id、日志、指标、Artifact 与真实运行状态。",
      evaluator: "Evaluator 依据主指标与硬约束计算提升，阻止总分上升但关键类别退化的 Trial 被误判为成功。",
      analyst: "Analyst 不读取 Planner 对话历史，独立判断提升是否真实、约束是否满足以及经验是否值得沉淀。",
      memory: "Memory 保存完整 Study 轨迹；只有 Analyst 确认的真实提升才写入 Family Memory，供同类模型下一次复用。",
      candidate: "通过指标、约束与独立审查的结果被记录为 Candidate，但不会自动替换正式模型。",
      gate: "正式 best_model 必须由人类 Promote，自动化系统负责探索与验证，最终发布权始终保留在人手中。"
    },
    en: {
      default: "A complete loop from human objectives, external research, and expert collaboration to controlled code experiments, ClearML execution, independent review, and human-approved release.",
      human: "Human-in-the-loop selects the model line and run mode, can inject immediate or queued guidance during a study, and makes the final candidate-release decision.",
      research: "The Research Engine searches web pages, papers, and GitHub code, reads sources deeply, and synthesizes evidence so trials can be grounded in external technical knowledge.",
      data: "The Data Expert studies class distribution, scene balance, background negatives, and weak categories to propose data composition, sampling, and derived datasets.",
      param: "The Hyperparameter Expert advises on learning rate, epochs, batch size, warm-up, weight decay, and loss weighting.",
      model: "The Architecture Expert evaluates capacity, backbone, neck, head, multi-scale design, and attention mechanisms.",
      planner: "The Planner combines baselines, trial history, research evidence, expert advice, Family Memory, and remaining budget into the next experiment.",
      dispatcher: "The Tool Dispatcher runs read-only work in parallel while serializing state-changing actions such as trial submission and phase advancement.",
      code: "The Code Editor changes allowlisted files inside an isolated worktree and agent branch, validates syntax, commits, and pushes to Codeup for traceable experiments.",
      clearml: "The Executor uses ClearML for training and automatic testing, collecting model IDs, logs, metrics, artifacts, and verified runtime state.",
      evaluator: "The Evaluator applies the primary metric and hard constraints so a higher headline score cannot hide critical class regressions.",
      analyst: "The Analyst is isolated from Planner conversation history and independently judges whether an improvement is real, compliant, and reusable.",
      memory: "Memory records the full study. Only real improvements approved by the Analyst enter Family Memory for reuse across related models.",
      candidate: "Results that pass metrics, constraints, and independent review become candidates, but never replace the production model automatically.",
      gate: "A human must promote the official best model. Automation explores and validates; final release authority stays with the operator."
    }
  };

  const state = {
    language: localStorage.getItem("portfolio-language") === "en" ? "en" : "zh",
    theme: localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
    activeFlow: "default",
    activePaper: "sqlequ"
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = Boolean(window.gsap && window.ScrollTrigger);
  let paperCenterTimer;

  const renderIcons = () => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  };

  const updateThemeIcon = () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    const icon = state.theme === "dark" ? "sun" : "moon";
    button.innerHTML = `<i data-theme-icon data-lucide="${icon}" aria-hidden="true"></i>`;
    button.setAttribute("aria-label", state.theme === "dark" ? "切换亮色主题" : "切换暗色主题");
    renderIcons();
  };

  const setTheme = (theme) => {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0d120f" : "#edf1eb");
    updateThemeIcon();
  };

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.dataset.zhOriginal = element.textContent;
  });

  const updateFlowCaption = (key = state.activeFlow) => {
    const caption = document.querySelector("[data-flow-caption]");
    const copy = flowCopy[state.language][key] || flowCopy[state.language].default;
    if (!caption || !copy) return;

    if (hasGsap && !reducedMotion) {
      window.gsap.to(caption, {
        y: 5,
        autoAlpha: 0,
        duration: 0.12,
        overwrite: true,
        onComplete: () => {
          caption.textContent = copy;
          window.gsap.to(caption, { y: 0, autoAlpha: 1, duration: 0.28, ease: "power2.out" });
        }
      });
    } else {
      caption.textContent = copy;
    }
  };

  const applyLanguage = (language) => {
    state.language = language;
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = language === "en" ? translations.en[key] : element.dataset.zhOriginal;
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    document.querySelector("[data-flow-caption]").textContent = flowCopy[language][state.activeFlow] || flowCopy[language].default;
    document.title = language === "zh" ? "邢仕浩 | 研究与工程" : "Shihao Xing | Research & Engineering";
  };

  const activatePaper = (panel, animate = true) => {
    const panels = [...document.querySelectorAll(".paper-panel")];
    if (!panel || !panels.length) return;
    state.activePaper = panel.dataset.paperId;

    panels.forEach((item) => item.classList.toggle("is-active", item === panel));
    if (window.innerWidth <= 900) {
      if (animate) {
        const stage = panel.closest(".paper-stage");
        window.clearTimeout(paperCenterTimer);
        paperCenterTimer = window.setTimeout(() => {
          const left = panel.offsetLeft - (stage.clientWidth - panel.clientWidth) / 2;
          if (hasGsap && !reducedMotion) {
            stage.style.scrollSnapType = "none";
            const scrollState = { left: stage.scrollLeft };
            window.gsap.to(scrollState, {
              left,
              duration: 0.42,
              ease: "power3.inOut",
              overwrite: true,
              onUpdate: () => { stage.scrollLeft = scrollState.left; },
              onComplete: () => { stage.style.scrollSnapType = ""; }
            });
          } else {
            stage.scrollLeft = left;
          }
        }, 80);
      }
      return;
    }
    if (!hasGsap || reducedMotion || !animate) return;

    panels.forEach((item) => {
      window.gsap.to(item, {
        flexGrow: item === panel ? 1.72 : 0.82,
        duration: 0.55,
        ease: "power3.inOut",
        overwrite: true
      });
    });
    window.gsap.fromTo(panel.querySelectorAll(".paper-detail > div"),
      { x: 14, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.38, stagger: 0.055, delay: 0.12, ease: "power2.out", overwrite: true }
    );
  };

  document.querySelectorAll(".paper-panel").forEach((panel) => {
    const select = () => activatePaper(panel, true);
    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth > 900) select();
    });
    panel.addEventListener("focus", () => {
      if (window.innerWidth > 900) select();
    });
    panel.addEventListener("click", select);
    panel.addEventListener("pointermove", (event) => {
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      panel.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    });
    panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", (event) => event.stopPropagation()));
  });

  document.querySelectorAll("[data-flow-key]").forEach((node) => {
    const select = () => {
      state.activeFlow = node.dataset.flowKey;
      document.querySelectorAll("[data-flow-key]").forEach((item) => item.classList.toggle("is-active", item === node));
      updateFlowCaption();
    };
    node.addEventListener("mouseenter", select);
    node.addEventListener("focus", select);
    node.addEventListener("click", select);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (language === state.language) return;
      const content = document.querySelectorAll("main, .site-footer");
      if (hasGsap && !reducedMotion) {
        window.gsap.to(content, {
          y: 5,
          autoAlpha: 0.35,
          duration: 0.16,
          onComplete: () => {
            applyLanguage(language);
            window.gsap.to(content, { y: 0, autoAlpha: 1, duration: 0.34, ease: "power2.out" });
            window.ScrollTrigger?.refresh();
          }
        });
      } else {
        applyLanguage(language);
      }
    });
  });

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", (event) => {
    const next = state.theme === "dark" ? "light" : "dark";
    if (!hasGsap || reducedMotion) {
      setTheme(next);
      return;
    }

    const wash = document.querySelector(".theme-wash");
    const rect = event.currentTarget.getBoundingClientRect();
    wash.style.left = `${rect.left + rect.width / 2}px`;
    wash.style.top = `${rect.top + rect.height / 2}px`;
    const scale = Math.hypot(window.innerWidth, window.innerHeight) / 22;
    window.gsap.timeline()
      .set(wash, { scale: 0, autoAlpha: 1 })
      .to(wash, { scale, duration: 0.62, ease: "power3.in" })
      .call(() => setTheme(next), null, "-=0.22")
      .to(wash, { autoAlpha: 0, duration: 0.3, ease: "power2.out" });
  });

  document.querySelectorAll(".glass-control, .liquid-action").forEach((control) => {
    control.addEventListener("pointermove", (event) => {
      const rect = control.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      control.style.setProperty("--glass-x", `${(x / rect.width) * 100}%`);
      control.style.setProperty("--glass-y", `${(y / rect.height) * 100}%`);
      if (control.classList.contains("liquid-action")) {
        control.style.setProperty("--lens-x", `${Math.max(3, Math.min(rect.width - 45, x - 21))}px`);
      }
      if (hasGsap && !reducedMotion) {
        window.gsap.to(control, {
          x: (x / rect.width - 0.5) * 5,
          y: (y / rect.height - 0.5) * 5,
          duration: 0.25,
          ease: "power2.out",
          overwrite: true
        });
      }
    });
    control.addEventListener("pointerleave", () => {
      if (hasGsap && !reducedMotion) window.gsap.to(control, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.5)" });
    });
  });

  document.querySelectorAll(".interest-item").forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      if (!hasGsap || reducedMotion || window.innerWidth < 700) return;
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      window.gsap.to(item, {
        rotationY: (x / rect.width - 0.5) * 8,
        rotationX: -(y / rect.height - 0.5) * 8,
        z: 8,
        duration: 0.25,
        ease: "power2.out"
      });
    });
    item.addEventListener("pointerleave", () => {
      if (hasGsap && !reducedMotion) window.gsap.to(item, { rotationX: 0, rotationY: 0, z: 0, duration: 0.45, ease: "power3.out" });
    });
  });

  const architectureDialog = document.querySelector("[data-architecture-dialog]");
  document.querySelector("[data-architecture-open]")?.addEventListener("click", () => {
    architectureDialog?.showModal();
    document.body.classList.add("is-modal-open");
    if (hasGsap && !reducedMotion) {
      window.gsap.fromTo(architectureDialog, { y: 24, scale: 0.98, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.38, ease: "power3.out" });
    }
  });
  document.querySelector("[data-architecture-close]")?.addEventListener("click", () => architectureDialog?.close());
  architectureDialog?.addEventListener("click", (event) => {
    if (event.target === architectureDialog) architectureDialog.close();
  });
  architectureDialog?.addEventListener("close", () => document.body.classList.remove("is-modal-open"));

  const progressBar = document.querySelector(".page-progress span");
  const updateProgress = () => {
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  setTheme(state.theme);
  applyLanguage(state.language);
  renderIcons();
  activatePaper(document.querySelector(`[data-paper-id="${state.activePaper}"]`), false);
  updateProgress();

  if (!hasGsap || reducedMotion) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const media = gsap.matchMedia();

  const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
  hero
    .from(".site-header > *", { y: -18, autoAlpha: 0, duration: 0.45, stagger: 0.08 })
    .from(".hero-kicker", { x: -20, autoAlpha: 0, duration: 0.4 }, "-=0.16")
    .from(".hero-name-line", { clipPath: "inset(0 0 100% 0)", y: 24, duration: 0.66 }, "-=0.16")
    .from(".hero h1 small", { y: 10, autoAlpha: 0, duration: 0.34 }, "-=0.3")
    .from(".hero-links a", { y: 12, autoAlpha: 0, duration: 0.38, stagger: 0.07 }, "-=0.2")
    .from(".hero-education", { x: 54, autoAlpha: 0, duration: 0.7 }, "-=0.62")
    .from(".degree-item", { x: 22, autoAlpha: 0, duration: 0.42, stagger: 0.12 }, "-=0.42")
    .from(".hero-accent", { scaleX: 0, transformOrigin: "right center", duration: 0.45, stagger: 0.08 }, "-=0.48");

  gsap.from(".honors-heading > *", {
    y: 24,
    autoAlpha: 0,
    duration: 0.55,
    stagger: 0.08,
    scrollTrigger: { trigger: ".honors-section", start: "top 78%", once: true }
  });

  gsap.from(".honor-grid li", {
    y: 28,
    autoAlpha: 0,
    duration: 0.64,
    stagger: { each: 0.05, grid: [3, 3], from: "start" },
    ease: "expo.out",
    scrollTrigger: { trigger: ".honor-grid", start: "top 84%", once: true }
  });

  gsap.from(".experience-head > *", {
    x: (index) => index ? 42 : -42,
    autoAlpha: 0,
    duration: 0.65,
    stagger: 0.12,
    scrollTrigger: { trigger: ".experience-head", start: "top 82%", once: true }
  });

  gsap.from(".optimizer-copy > *", {
    x: -34,
    autoAlpha: 0,
    duration: 0.52,
    stagger: 0.065,
    scrollTrigger: { trigger: ".optimizer-project", start: "top 77%", once: true }
  });

  gsap.from(".optimizer-visual", {
    x: 54,
    clipPath: "inset(0 0 0 100%)",
    duration: 0.9,
    ease: "power3.inOut",
    scrollTrigger: { trigger: ".optimizer-project", start: "top 77%", once: true }
  });

  gsap.from(".map-node, .map-experts button", {
    scale: 0.78,
    autoAlpha: 0,
    duration: 0.34,
    stagger: 0.045,
    ease: "back.out(1.7)",
    scrollTrigger: { trigger: ".map-canvas", start: "top 82%", once: true }
  });

  gsap.to(".system-links path", {
    strokeDashoffset: -64,
    duration: 2.5,
    stagger: 0.08,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".map-node--planner", {
    boxShadow: "0 0 0 1px rgba(184,255,54,.28), 0 0 30px rgba(90,224,236,.34)",
    duration: 1.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.from(".work-heading > *", {
    x: -34,
    autoAlpha: 0,
    duration: 0.58,
    stagger: 0.1,
    scrollTrigger: { trigger: ".work-heading", start: "top 82%", once: true }
  });

  media.add("(min-width: 901px)", () => {
    gsap.set(".paper-panel.is-active", { flexGrow: 1.72 });
    gsap.set(".paper-panel:not(.is-active)", { flexGrow: 0.82 });
    gsap.from(".paper-panel", {
      y: 60,
      rotationY: -8,
      transformPerspective: 1000,
      autoAlpha: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".paper-stage", start: "top 80%", once: true }
    });
  });

  media.add("(max-width: 900px)", () => {
    gsap.from(".paper-panel", {
      x: 52,
      autoAlpha: 0,
      duration: 0.58,
      stagger: 0.1,
      scrollTrigger: { trigger: ".paper-stage", start: "top 83%", once: true }
    });
  });

  gsap.from(".system-project", {
    x: (index) => index ? 54 : -54,
    clipPath: (index) => index ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    duration: 0.82,
    stagger: 0.1,
    ease: "power3.inOut",
    scrollTrigger: { trigger: ".system-projects", start: "top 82%", once: true }
  });

  gsap.from(".skill-ledger article", {
    x: (index) => index % 2 ? 28 : -28,
    autoAlpha: 0,
    duration: 0.45,
    stagger: 0.07,
    scrollTrigger: { trigger: ".skill-ledger", start: "top 85%", once: true }
  });

  gsap.from(".small-project", {
    y: 38,
    autoAlpha: 0,
    duration: 0.62,
    stagger: 0.13,
    ease: "power3.out",
    scrollTrigger: { trigger: ".small-projects", start: "top 85%", once: true }
  });

  gsap.from(".interest-item", {
    y: 26,
    scale: 0.93,
    rotation: (index) => index % 2 ? 2 : -2,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.075,
    ease: "back.out(1.5)",
    scrollTrigger: { trigger: ".interest-strip", start: "top 88%", once: true }
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
