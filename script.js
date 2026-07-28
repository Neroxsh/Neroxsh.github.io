(() => {
  "use strict";

  const translations = {
    en: {
      "brand.name": "Shihao Xing",
      "nav.honors": "Honors",
      "nav.experience": "Internship",
      "nav.research": "Research & Systems",
      "nav.builds": "Public Builds",
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
      "experience.summary": "Contributed to Tiangong Optimizer, which represents the path from an industrial-vision baseline to a reviewed candidate as a traceable study. The Planner combines prior trials, external research, and advice from data, hyperparameter, and architecture experts. Allowlisted changes run in isolated worktrees, while ClearML connects training, testing, and model records. An Evaluator enforces metrics and hard constraints, an isolated Analyst reviews each result, and a human decides whether a candidate becomes the official best model.",
      "experience.before": "BEFORE",
      "experience.fourWeeks": "25 days",
      "experience.after": "AFTER AUTOMATION",
      "experience.fourDays": "4-5 days",
      "experience.result": "The system has been applied to fire and smoke detection, risky-behavior detection, and human and head-attribute recognition. It reduced an optimization cycle of roughly 25 days to 4-5 days, while retaining the code branch, ClearML tasks, model ID, metrics, and review decision for every trial.",
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
      "detail.architecture": "Architecture",
      "detail.method": "Method",
      "detail.result": "Result",
      "paper.sqlequ.lead": "SQLEq-O1 trains a compact, locally deployable reasoner for SQL equivalence. Instead of treating agreement on a finite database or surface-level structural similarity as semantic evidence, it learns the decision boundary from formal labels, distilled verification traces, and verifiable rewards.",
      "paper.sqlequ.problem": "Execution testing can only show that two queries agree on observed database instances; it cannot prove semantic equivalence. SMT-based tools such as VeriEQL can suffer state-space explosion on nested, aggregated, and compositionally complex SQL. Prompted LLMs are costly and unstable, while small models readily learn keyword overlap and structural resemblance as shortcuts.",
      "paper.sqlequ.method": "The data pipeline follows two complementary tracks. Human-written LeetCode solutions preserve realistic compositional complexity, while multiple Text-to-SQL models generate intra-instance SynSQL candidates to expand hard-negative coverage. VeriEQL formally labels every pair; a teacher then produces verification traces, and only traces consistent with the formal label are retained. Balanced sampling yields the 60K-pair CoRE-SQL corpus. Training uses a 30% SFT warm-up followed by 70% GRPO, with sparse rewards for the final label and output format.",
      "paper.sqlequ.result": "On Qwen2.5-Coder-1.5B, GRPO raises LeetCode-Hard GM from 73.60 under full SFT to 89.38. The same model reaches 76.77 GM on the source-disjoint Calcite+Spider-DAIL benchmark, for an average GM of 83.08 across the two test sets. Ablations attribute the gain to formally verified hard pairs, explicit reasoning traces, and reinforcement-stage boundary calibration.",
      "paper.manuscript": "Manuscript under review",
      "paper.uniql.lead": "UniQL studies how the same natural-language intent is realized across heterogeneous database systems, rather than comparing unrelated samples from different databases. Every question is paired with executable SQL in 16 dialects under aligned schemas and database contents.",
      "paper.uniql.problem": "Text-to-SQL benchmarks remain centered on SQLite, although production systems differ in type systems, built-in functions, identifier rules, and execution semantics. When dialects are evaluated on different questions and data, model failures cannot be separated into semantic difficulty and dialect-specific weakness.",
      "paper.uniql.method": "The 1,534 BIRD Dev questions serve as shared semantic anchors. Their databases are migrated to 15 target systems with type, namespace, and identifier adaptation. SQLGlot handles deterministic translation first; failures then enter LLM translation and up to three rounds of execution-feedback repair. Recurring failures are summarized into reusable dialect rules, and long-tail cases are independently reviewed by two annotators until consensus. Both construction and evaluation use conservative EX that preserves explicit ordering and duplicate multiplicity.",
      "paper.uniql.result": "The resulting benchmark contains 24,544 human-verified executable queries across 16 dialects. The best average EX is only 54.63%, and the strongest model solves the same question correctly in all 16 dialects only 20.14% of the time. Large gaps among SQLite, Oracle, Teradata, and other systems show that single-dialect performance is not a reliable proxy for cross-database generalization.",
      "paper.farsql.lead": "FAR-SQL separates SQL equivalence decisions into a formally determinate region and a model-completed region. Historical runtime profiles first estimate the verification yield of each query structure; a task-adapted local model is invoked only when VeriEQL cannot return a determinate result.",
      "paper.farsql.problem": "VeriEQL's equivalent and inequivalent outputs have an explicit formal basis, but complex aggregation, nesting, and dialect functions often produce timeouts, unsupported constructs, or conversion errors. A uniform longer budget wastes solver time on low-yield cases, while switching directly to a model erases the trust boundary between proof-backed and model-generated decisions.",
      "paper.farsql.method": "Offline, historical VeriEQL logs define a profile over SQL structure, time budget, and probability of a determinate result; source-disjoint formal labels are also used to fine-tune 1.5B and 1.7B local models. Online, marginal yield determines the verification budget and every determinate output is preserved. Timeout, unsupported, runtime-error, and conversion-error states are normalized into state-specific prompts, and only this unresolved region is completed with Self-Consistency@3.",
      "paper.farsql.result": "On 412 out-of-domain Calcite+Spider-DAIL pairs, FAR-SQL with Qwen2.5-SFT reaches 83.98 GM, 7.78 points above model-only SFT. It has no undetermined cases and averages 13.97 seconds per pair. VeriEQL@60s reaches 38.19 GM at 35 seconds, so yield-aware routing improves coverage, class balance, and verification cost together.",
      "system.sql.title": "Unified SQL Evaluation & Execution Framework",
      "system.sql.summary": "A reproducible entry point for NL2SQL, SQL correction, and SQL equivalence experiments. It consolidates sample adaptation, database execution, result comparison, and metric aggregation that would otherwise be rebuilt inside each task.",
      "system.sql.focus1": "Unified multi-task abstraction",
      "system.sql.focus2": "Automatic three-DB switching",
      "system.sql.focus3": "Cross-run EX comparison",
      "system.sql.architecture": "The task layer defines how a sample is constructed, where predicted SQL is read, and how the target result is obtained. A shared execution layer owns database connections, query execution, result comparison, and metric aggregation. Models, datasets, and task definitions enter through adapters, leaving the core pipeline unchanged.",
      "system.sql.method": "Execution accuracy is the primary metric. Standardized MySQL, PostgreSQL, and SQLite environments run in Docker and switch automatically by task. Results, nulls, ordering, exceptions, and timeouts share one representation and reporting convention, making runs directly comparable.",
      "system.sql.result": "A single pipeline now covers comparisons across models, tasks, and datasets while removing repeated execution scripts and ad hoc reporting code. Adding a new task is concentrated in its adapter, reducing experiment setup from days to hours.",
      "system.credit.summary": "An enterprise-loan credit-review workbench that begins with document inventory and proceeds through financial calculations, business and repayment analysis, risk aggregation, evidence citation, and report self-audit. It supports review; it does not make the final approval decision.",
      "system.credit.focus1": "Five material formats",
      "system.credit.focus2": "Multi-agent risk analysis",
      "system.credit.focus3": "Evidence trace and self-audit",
      "system.credit.architecture": "Each Case forms a data boundary. Document inventory, parsing, and evidence indexing create shared context for company-profile, business, finance, cash-flow, guarantee, and external-risk agents; Risk Summary and Credit Opinion then consolidate the review. Reporting reuses FinSight's outline-to-section-to-report structure with an enterprise-credit outline.",
      "system.credit.method": "PDF, DOCX, XLSX, TXT, and images enter one classification and checklist pipeline. Financial ratios are rule-calculated, while risk items retain their source file and material basis. Report Audit checks disclaimers, unsupported risks, and language that oversteps into automatic approval, and reviewers can edit the report before export.",
      "system.credit.result": "The workflow covers multiple cases, material inventory, multi-agent analysis, and Markdown, HTML, Word, and PDF export. A public-company example also exercises missing-document detection. Every output remains an aid to review; credit terms and approval stay with a human.",
      "skills.title": "Professional Skills",
      "skills.programming": "Programming & Data",
      "skills.agent": "Agents & LLM Applications",
      "skills.training": "Training & Inference",
      "skills.engineering": "Research Engineering",
      "skills.aiCoding": "AI-Assisted Development",
      "builds.title": "More Public Builds",
      "builds.relayDetail": "Extend Codex sessions on your computer to a mobile browser: browse local sessions by project, continue a conversation, and receive execution progress live, without installing a phone app or signing in to ChatGPT again.",
      "builds.relayFeature1": "Send messages and adjust the model, reasoning effort, and permissions remotely",
      "builds.relayFeature2": "The desktop agent listens only on 127.0.0.1; the relay forwards end-to-end encrypted ciphertext",
      "builds.relayFeature3": "A 16-character code and desktop approval pair each device, which can later be revoked",
      "builds.relayLive": "Open mobile client",
      "builds.relayDemo": "Product demo video",
      "builds.todo": "My Tasks · Hello Kitty Todo",
      "builds.todoDetail": "A cross-platform task widget for the corner of the desktop, with minute-level deadlines, continuously advancing DDL progress, priority and favorites, four sorting modes, and quick hide or restore from the system tray.",
      "builds.words": "Moyu Words",
      "builds.wordsDetail": "A transparent, always-on-top, resizable vocabulary window. Mouse gestures move through words and archive mastered items; seven built-in word books, custom imports, daily plans, unit check-ins, and CSV export complete the study flow.",
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

  const savedLanguage = localStorage.getItem("portfolio-language");
  const languageVersion = localStorage.getItem("portfolio-language-version");
  const state = {
    language: languageVersion === "3" && savedLanguage === "en" ? "en" : "zh",
    theme: localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
    activeFlow: "default"
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = Boolean(window.gsap && window.ScrollTrigger);

  const renderIcons = () => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  };

  const updateThemeIcon = () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    const icon = state.theme === "dark" ? "sun" : "moon";
    button.innerHTML = `<i data-theme-icon data-lucide="${icon}" aria-hidden="true"></i>`;
    const label = state.language === "en"
      ? (state.theme === "dark" ? "Switch to light theme" : "Switch to dark theme")
      : (state.theme === "dark" ? "切换亮色主题" : "切换暗色主题");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    renderIcons();
  };

  const setTheme = (theme) => {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0b1020" : "#0f4db8");
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
    localStorage.setItem("portfolio-language-version", "3");
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
    const english = language === "en";
    document.querySelector(".brand")?.setAttribute("aria-label", english ? "Back to top" : "返回首页");
    document.querySelector(".site-nav")?.setAttribute("aria-label", english ? "Primary navigation" : "主导航");
    document.querySelector(".language-switch")?.setAttribute("aria-label", english ? "Language" : "语言切换");
    document.querySelector("[data-architecture-open]")?.setAttribute("aria-label", english ? "View complete architecture" : "查看完整架构");
    const close = document.querySelector("[data-architecture-close]");
    close?.setAttribute("aria-label", english ? "Close architecture" : "关闭架构图");
    close?.setAttribute("title", english ? "Close" : "关闭");
    updateThemeIcon();
  };

  document.querySelectorAll(".paper-panel").forEach((panel) => {
    panel.addEventListener("pointermove", (event) => {
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      panel.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    });
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

  document.querySelectorAll("[data-liquid-glass]").forEach((control) => {
    control.addEventListener("pointermove", (event) => {
      const rect = control.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      control.style.setProperty("--glass-x", `${(x / rect.width) * 100}%`);
      control.style.setProperty("--glass-y", `${(y / rect.height) * 100}%`);
      control.style.setProperty("--glass-tilt-x", `${(0.5 - y / rect.height) * 4}deg`);
      control.style.setProperty("--glass-tilt-y", `${(x / rect.width - 0.5) * 5}deg`);
      control.style.setProperty("--glass-shift", `${(x / rect.width - 0.5) * 115}%`);
    });
    control.addEventListener("pointerleave", () => {
      control.style.setProperty("--glass-x", "50%");
      control.style.setProperty("--glass-y", "28%");
      control.style.setProperty("--glass-tilt-x", "0deg");
      control.style.setProperty("--glass-tilt-y", "0deg");
      control.style.setProperty("--glass-shift", "0%");
    });
    if (!control.classList.contains("liquid-action")) return;
    control.addEventListener("pointerdown", () => {
      if (hasGsap && !reducedMotion) window.gsap.to(control, { scaleX: 1.035, scaleY: 0.93, duration: 0.14, ease: "power2.out" });
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
      control.addEventListener(eventName, () => {
        if (hasGsap && !reducedMotion) window.gsap.to(control, { scaleX: 1, scaleY: 1, duration: 0.55, ease: "elastic.out(1, 0.42)" });
      });
    });
  });

  document.querySelectorAll(".interest-item").forEach((item) => {
    const canTilt = hasGsap && !reducedMotion;
    const rotateXTo = canTilt ? window.gsap.quickTo(item, "rotationX", { duration: 0.25, ease: "power2.out" }) : null;
    const rotateYTo = canTilt ? window.gsap.quickTo(item, "rotationY", { duration: 0.25, ease: "power2.out" }) : null;
    const zTo = canTilt ? window.gsap.quickTo(item, "z", { duration: 0.25, ease: "power2.out" }) : null;
    item.addEventListener("pointermove", (event) => {
      if (!canTilt || window.innerWidth < 700) return;
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      rotateYTo((x / rect.width - 0.5) * 8);
      rotateXTo(-(y / rect.height - 0.5) * 8);
      zTo(8);
    });
    item.addEventListener("pointerleave", () => {
      if (!canTilt) return;
      rotateXTo(0);
      rotateYTo(0);
      zTo(0);
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
  updateProgress();

  if (!hasGsap || reducedMotion) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const media = gsap.matchMedia();

  gsap.defaults({ ease: "power3.out" });
  gsap.set(".hero", { "--hero-plane": 0 });

  const heroTimeline = gsap.timeline();
  heroTimeline
    .from(".site-header > *", { y: -16, autoAlpha: 0, duration: 0.42, stagger: 0.07 })
    .to(".hero", { "--hero-plane": 1, duration: 0.86, ease: "power4.inOut" }, 0.08)
    .from(".hero-kicker", { x: -20, autoAlpha: 0, duration: 0.38 }, 0.26)
    .from(".hero-name-line", { yPercent: 96, clipPath: "inset(0 0 100% 0)", duration: 0.68 }, 0.34)
    .from(".hero h1 small", { y: 12, autoAlpha: 0, duration: 0.34 }, 0.66)
    .from(".hero-links a", { y: 12, autoAlpha: 0, duration: 0.34, stagger: 0.06 }, 0.76)
    .from(".hero-honors", { clipPath: "inset(0 100% 0 0)", duration: 0.66, ease: "power3.inOut" }, 0.92)
    .from(".hero-honor-list li", { y: 10, autoAlpha: 0, duration: 0.3, stagger: 0.03 }, 1.16)
    .from(".hero-education", { clipPath: "inset(0 0 0 100%)", autoAlpha: 0, duration: 0.72, ease: "power3.inOut" }, 0.32)
    .from(".education-heading > *", { y: 16, autoAlpha: 0, duration: 0.36, stagger: 0.08 }, 0.72)
    .from(".degree-item", { y: 18, autoAlpha: 0, duration: 0.42, stagger: 0.1 }, 0.9);

  const revealHeading = (selector) => {
    gsap.from(`${selector} > *`, {
      y: 28,
      clipPath: "inset(0 0 100% 0)",
      autoAlpha: 0,
      duration: 0.66,
      stagger: 0.08,
      clearProps: "transform,clipPath,opacity,visibility",
      scrollTrigger: { trigger: selector, start: "top 84%", once: true }
    });
  };

  revealHeading(".experience-head");
  revealHeading(".work-heading");
  revealHeading(".builds-heading");
  revealHeading(".skills-heading");
  revealHeading(".interests-heading");

  gsap.from(".optimizer-copy > *", {
    x: () => window.innerWidth > 900 ? -30 : 0,
    y: () => window.innerWidth > 900 ? 0 : 22,
    autoAlpha: 0,
    duration: 0.52,
    stagger: 0.065,
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: ".optimizer-project", start: "top 78%", once: true }
  });

  gsap.from(".optimizer-visual", {
    y: 46,
    clipPath: "inset(0 0 16% 0 round 7px)",
    autoAlpha: 0,
    duration: 0.9,
    ease: "power3.inOut",
    clearProps: "transform,clipPath,opacity,visibility",
    scrollTrigger: { trigger: ".optimizer-project", start: "top 78%", once: true }
  });

  gsap.from(".map-node, .map-experts button", {
    y: 12,
    scale: 0.84,
    autoAlpha: 0,
    duration: 0.36,
    stagger: { each: 0.04, from: "center" },
    ease: "back.out(1.35)",
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: ".map-canvas", start: "top 84%", once: true }
  });

  const architectureLoop = gsap.timeline({ paused: true });
  architectureLoop
    .to(".system-links path", {
      strokeDashoffset: -76,
      duration: 2.8,
      stagger: 0.06,
      repeat: -1,
      ease: "none"
    }, 0)
    .to(".map-node--planner", {
      y: -2,
      scale: 1.02,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, 0);

  ScrollTrigger.create({
    trigger: ".optimizer-visual",
    start: "top bottom",
    end: "bottom top",
    onToggle: ({ isActive }) => isActive ? architectureLoop.play() : architectureLoop.pause()
  });

  document.querySelectorAll(".subsection-heading").forEach((heading) => {
    gsap.from(heading.children, {
      y: 20,
      autoAlpha: 0,
      duration: 0.52,
      stagger: 0.08,
      clearProps: "transform,opacity,visibility",
      scrollTrigger: { trigger: heading, start: "top 86%", once: true }
    });
  });

  document.querySelectorAll(".paper-panel").forEach((paper) => {
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: paper, start: "top 84%", once: true }
    });
    timeline
      .fromTo(paper, { "--paper-line": 0.12, "--paper-scan": "-420%" }, { "--paper-line": 1, "--paper-scan": "420%", duration: 0.82, ease: "power2.inOut" }, 0)
      .from(paper, {
        y: 42,
        autoAlpha: 0,
        duration: 0.62,
        clearProps: "transform,opacity,visibility"
      })
      .from(paper.querySelector(".paper-meta"), { x: -18, autoAlpha: 0, duration: 0.34, clearProps: "transform,opacity,visibility" }, "-=0.34")
      .from([paper.querySelector("h4"), paper.querySelector(".paper-lead")], { y: 18, autoAlpha: 0, duration: 0.38, stagger: 0.07, clearProps: "transform,opacity,visibility" }, "-=0.26")
      .from(paper.querySelectorAll(".paper-metrics span"), { y: 14, autoAlpha: 0, duration: 0.34, stagger: 0.06, clearProps: "transform,opacity,visibility" }, "-=0.28")
      .from(paper.querySelector(".paper-framework"), { y: 14, autoAlpha: 0, duration: 0.38, clearProps: "transform,opacity,visibility" }, "-=0.22")
      .from(paper.querySelectorAll(".paper-detail > div"), { y: 16, autoAlpha: 0, duration: 0.4, stagger: 0.07, clearProps: "transform,opacity,visibility" }, "-=0.2");
  });

  gsap.from(".system-project", {
    clipPath: (index) => index ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    autoAlpha: 0,
    duration: 0.78,
    stagger: 0.12,
    ease: "power3.inOut",
    clearProps: "clipPath,opacity,visibility",
    scrollTrigger: { trigger: ".system-projects", start: "top 83%", once: true }
  });

  gsap.from(".small-project", {
    y: 42,
    autoAlpha: 0,
    duration: 0.66,
    stagger: 0.12,
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: ".small-projects", start: "top 86%", once: true }
  });

  gsap.from(".small-project-image img", {
    scale: 1.12,
    duration: 1,
    stagger: 0.12,
    clearProps: "transform",
    scrollTrigger: { trigger: ".small-projects", start: "top 86%", once: true }
  });

  gsap.from(".skill-ledger article", {
    clipPath: "inset(0 100% 0 0)",
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.07,
    clearProps: "clipPath,opacity,visibility",
    scrollTrigger: { trigger: ".skill-ledger", start: "top 87%", once: true }
  });

  gsap.from(".interest-item", {
    y: 24,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.065,
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: ".interest-strip", start: "top 89%", once: true }
  });

  media.add("(min-width: 901px)", () => {
    gsap.to(".hero-signature", {
      y: -18,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.1 }
    });
    gsap.to(".hero-education", {
      y: 22,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.1 }
    });
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
