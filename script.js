(() => {
  "use strict";

  const translations = {
    en: {
      "brand.name": "Shihao Xing",
      "nav.education": "Education",
      "nav.honors": "Honors",
      "nav.experience": "Internship",
      "nav.research": "Research & Systems",
      "nav.skills": "Skills",
      "nav.interests": "Interests",
      "hero.kicker": "MSc Candidate 2027 · School of Software, Henan University",
      "hero.direction": "LLM Algorithms · Agent Engineering · FinTech AI",
      "hero.summary": "I study reliable SQL reasoning and build multi-agent systems for model optimization and intelligent risk analysis.",
      "hero.action": "Explore my work",
      "hero.intentLabel": "CAREER FOCUS",
      "hero.intent1": "LLM Algorithms",
      "hero.intent2": "Agent Engineering",
      "hero.intent3": "Banking FinTech",
      "education.title": "Education",
      "education.master": "Master's Degree",
      "education.henu": "Henan University",
      "education.school": "School of Software",
      "education.bachelor": "Bachelor's Degree",
      "education.haut": "Henan University of Technology",
      "education.major": "Computer Science and Technology",
      "honors.title": "Honors & Awards",
      "honors.note": "Milestones across competitions, research practice, and continuous learning.",
      "honors.1": "National Second Prize, 16th National College Student FinTech Innovation Competition (1st in Henan)",
      "honors.2": "Silver Award, Henan Provincial 'Internet+' Competition",
      "honors.3": "Bronze Award, Henan Provincial 'Challenge Cup' Competition",
      "honors.4": "First-Class Academic Scholarship × 2",
      "honors.5": "First Prize, AI Innovation and Entrepreneurship Competition",
      "honors.6": "Second Prize, 6th Innovative English Challenge",
      "honors.7": "Second Prize, Henan University Student Innovation Competition",
      "honors.8": "6th Place, Henan University Badminton Cup",
      "honors.9": "Outstanding Volunteer, College Computer Design Competition",
      "honors.national": "NATIONAL",
      "honors.provincial": "PROVINCIAL",
      "honors.academic": "ACADEMIC",
      "honors.competition": "COMPETITION",
      "honors.campus": "CAMPUS",
      "honors.sport": "SPORT",
      "honors.service": "SERVICE",
      "experience.title": "Internship",
      "experience.role": "Algorithm R&D Intern",
      "experience.company": "Alibaba · Intime Star · DeepInsight AI",
      "experience.projectTitle": "Tiangong Optimizer: A Multi-Agent Closed-Loop Model Optimization System",
      "experience.summary": "Contributed to a multi-agent optimization system for industrial vision models. A Planner coordinates data, hyperparameter, and model experts to create optimization trials; an independent Analyst reviews outcomes; ClearML automates baselines, data and code changes, training, testing, failure recovery, and reusable experiment memory.",
      "experience.before": "BEFORE",
      "experience.fourWeeks": "~4 weeks",
      "experience.after": "AFTER AUTOMATION",
      "experience.fourDays": "4–5 days",
      "experience.result": "Turned manual analysis, tuning, and validation into a traceable and reusable experiment loop used in fire and smoke detection, risky-behavior detection, and human attribute recognition.",
      "experience.architecture": "View full architecture",
      "flow.data": "Data Expert",
      "flow.param": "Hyperparameter Expert",
      "flow.model": "Model Expert",
      "flow.plannerSmall": "Generates trial plans",
      "flow.clearmlSmall": "Training & auto-testing",
      "flow.analyst": "Analyst",
      "flow.analystSmall": "Independent review",
      "flow.memory": "Experience feedback & next round",
      "flow.defaultCaption": "Expert-assisted planning flows into ClearML training and testing, followed by independent analysis and experience feedback.",
      "work.title": "Research & Systems",
      "work.note": "Scan the essentials first. Hover, focus, or tap to inspect the problem, method, and result.",
      "work.papers": "Research Papers",
      "work.papersNote": "Formal reasoning · Cross-dialect SQL · Failure-aware verification",
      "work.systems": "Systems",
      "work.systemsNote": "Evaluation infrastructure · FinTech Agent",
      "work.sqlequSummary": "Teaching compact models to reason about SQL equivalence",
      "work.uniqlSummary": "An executable benchmark spanning 16 SQL dialects",
      "work.farsqlSummary": "Failure-aware routing between formal verification and local models",
      "work.sqlbench": "Unified SQL Evaluation Framework",
      "work.sqlbenchSummary": "One execution and evaluation layer across tasks and databases",
      "work.creditSummary": "An evidence-grounded enterprise credit review workbench",
      "detail.challenge": "Problem",
      "detail.method": "Method",
      "detail.result": "Result",
      "detail.view": "View project",
      "skills.title": "Professional Skills",
      "skills.note": "Turning research ideas into systems that run, verify, and improve.",
      "skills.programming": "Programming & Data",
      "skills.programmingDetail": "SQL parsing, data processing, and evaluation pipelines",
      "skills.agent": "Agents & LLM Applications",
      "skills.agentDetail": "Multi-agent collaboration, tool orchestration, and retrieval augmentation",
      "skills.training": "Training & Inference",
      "skills.trainingDetail": "SFT, GRPO, DPO, and inference optimization",
      "skills.engineering": "Research Engineering",
      "skills.engineeringDetail": "Environment setup, remote training, log analysis, and retrospectives",
      "skills.aiCoding": "AI-Assisted Development",
      "skills.aiCodingDetail": "Code comprehension, feature delivery, testing, and complex engineering collaboration",
      "builds.title": "More Public Builds",
      "builds.note": "Small product ideas beyond my core research and algorithm work.",
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
      "dialog.eyebrow": "TIANGONG OPTIMIZER",
      "dialog.title": "Multi-Agent Closed-Loop Model Optimization Architecture",
      "dialog.caption": "Planner orchestration, domain experts, trial execution, ClearML training and evaluation, and experience feedback."
    }
  };

  const workData = {
    zh: {
      papers: {
        sqlequ: {
          type: "研究论文 · SQL EQUIVALENCE",
          venue: "EMNLP 2026 · UNDER REVIEW",
          title: "SQLEq-O1",
          summary: "通过形式化监督与可验证奖励，让轻量代码模型学习 SQL 语义等价推理。",
          challenge: "执行式检查覆盖有限，形式化验证容易超时，而通用大模型推理成本高且决策边界不稳定。",
          method: "构建 LeetCode 人工多解与 SynSQL 合成双轨数据，利用 VeriEQL 生成形式化标签和验证式推理轨迹，再以 SFT Warm-up 与 GRPO 可验证奖励训练 Qwen2.5、Qwen3 小模型。",
          result: "Qwen2.5-Coder-1.5B 在 LeetCode-Hard 上的 GM 从 73.60 提升至 89.38，整体 AVG 提升至 83.08。",
          link: null
        },
        uniql: {
          type: "研究论文 · TEXT-TO-SQL BENCHMARK",
          venue: "EMNLP 2026 · UNDER REVIEW",
          title: "UniQL",
          summary: "在相同自然语言意图、Schema 与数据内容下，系统评估模型的跨方言 SQL 泛化能力。",
          challenge: "现有 Text-to-SQL 基准高度集中于 SQLite，难以反映模型在真实异构数据库中的行为差异。",
          method: "将 BIRD Dev 的 1,534 个问题扩展到 16 种 SQL 方言，完成数据库迁移、类型映射、SQLGlot 与 LLM 翻译、自反思修复、执行一致性校验和人工校验。",
          result: "形成 24,544 条可执行 SQL 标注，覆盖 MySQL、PostgreSQL、Oracle、Hive 等数据库，揭示当前模型跨方言泛化能力不足。",
          link: null
        },
        farsql: {
          type: "研究论文 · FAILURE-AWARE ROUTING",
          venue: "NDBC 2026 · UNDER REVIEW",
          title: "FAR-SQL",
          summary: "以失效感知路由融合形式化验证与本地任务模型，平衡可信度、覆盖率和推理成本。",
          challenge: "VeriEQL 的确定结论可信但覆盖不足，本地模型覆盖较高，却缺少清晰的形式化边界。",
          method: "根据历史验证日志建立收益画像并动态分配预算，保留形式化确定输出，将 Timeout、Unsupported、Runtime Error 等非确定状态路由至本地 SFT 模型。",
          result: "在 Calcite 与 Spider-DAIL 上取得 83.98% GM，优于固定预算 VeriEQL 的 38.19% 与纯 SFT 的 76.20%。",
          link: "https://github.com/Neroxsh/FAR-SQL"
        }
      },
      systems: {
        sqlbench: {
          type: "系统项目 · EVALUATION INFRASTRUCTURE",
          venue: "UNIFIED SQL EVALUATION",
          title: "统一 SQL 评测框架",
          summary: "为 NL2SQL、SQL 纠错和等价验证提供统一、可复用的执行与评测基础设施。",
          challenge: "不同 SQL 任务的输入、执行环境和评测标准彼此割裂，实验流程重复建设，结果难以横向比较。",
          method: "设计模型无关的任务抽象层，将输入构造、预测解析、SQL 执行、结果归一化和指标统计拆成组件，并通过 Docker 提供 MySQL、PostgreSQL、SQLite 标准环境。",
          result: "以执行准确率 EX 统一多模型、多任务和多数据集实验，将新任务的评测搭建周期由天级缩短至小时级。",
          link: null
        },
        credit: {
          type: "系统项目 · BANKING FINTECH",
          venue: "FINTECH AI · MULTI-AGENT",
          title: "CreditRiskRobot",
          summary: "将贷款材料理解、财务分析、多 Agent 风险识别、证据追踪和授信报告生成整合为可审计的智能审查工作台。",
          challenge: "企业授信材料类型复杂、信息分散，风险结论需要回溯证据，同时还要清楚区分已有事实、合理推断与材料缺口。",
          method: "支持 PDF、Word、Excel、文本和图片材料，自动完成分类与完整性检查；多 Agent 围绕经营、财务、还款来源和风险因素协作分析，并保留证据引用与待补材料。",
          result: "形成从 Case 管理、材料盘点、风险分析到报告编辑、自审计及 HTML、Word、PDF 导出的完整辅助审查流程，并明确保留人工授信决策边界。",
          link: "https://github.com/Neroxsh/CreditRiskRobot"
        }
      }
    },
    en: {
      papers: {
        sqlequ: {
          type: "RESEARCH PAPER · SQL EQUIVALENCE",
          venue: "EMNLP 2026 · UNDER REVIEW",
          title: "SQLEq-O1",
          summary: "Formal supervision and verifiable rewards teach compact code models to reason about SQL semantic equivalence.",
          challenge: "Execution checks have limited coverage, formal verification often times out, and general-purpose LLMs are costly with unstable decision boundaries.",
          method: "We combine human-curated LeetCode solutions with synthetic SynSQL data, use VeriEQL for formal labels and verification traces, and train Qwen2.5/Qwen3 models with SFT warm-up and GRPO verifiable rewards.",
          result: "Qwen2.5-Coder-1.5B improves LeetCode-Hard GM from 73.60 to 89.38, reaching an overall AVG of 83.08.",
          link: null
        },
        uniql: {
          type: "RESEARCH PAPER · TEXT-TO-SQL BENCHMARK",
          venue: "EMNLP 2026 · UNDER REVIEW",
          title: "UniQL",
          summary: "A controlled benchmark for SQL dialect generalization under the same intent, schema, and database content.",
          challenge: "Most Text-to-SQL benchmarks center on SQLite and fail to expose model behavior across heterogeneous production databases.",
          method: "We migrate 1,534 BIRD Dev questions to 16 SQL dialects through database migration, type mapping, SQLGlot/LLM translation, reflective repair, execution-consistency checks, and human verification.",
          result: "The benchmark contains 24,544 executable SQL annotations across MySQL, PostgreSQL, Oracle, Hive, and other systems, revealing substantial cross-dialect gaps.",
          link: null
        },
        farsql: {
          type: "RESEARCH PAPER · FAILURE-AWARE ROUTING",
          venue: "NDBC 2026 · UNDER REVIEW",
          title: "FAR-SQL",
          summary: "Failure-aware routing combines formal verification with a local task model to balance trust, coverage, and cost.",
          challenge: "VeriEQL provides trustworthy determinate answers but limited coverage, while local models cover more cases without formal boundaries.",
          method: "A verification-yield profile dynamically allocates formal budgets. Determinate results are retained, while timeout, unsupported, runtime-error, and conversion-error states route to a local SFT model.",
          result: "FAR-SQL reaches 83.98% GM on Calcite and Spider-DAIL, outperforming fixed-budget VeriEQL at 38.19% and pure SFT at 76.20%.",
          link: "https://github.com/Neroxsh/FAR-SQL"
        }
      },
      systems: {
        sqlbench: {
          type: "SYSTEM · EVALUATION INFRASTRUCTURE",
          venue: "UNIFIED SQL EVALUATION",
          title: "Unified SQL Evaluation Framework",
          summary: "A reusable execution and evaluation layer for NL2SQL, SQL correction, and equivalence verification.",
          challenge: "SQL tasks use fragmented inputs, environments, and metrics, duplicating experiment setup and making results difficult to compare.",
          method: "A model-agnostic task layer separates input construction, prediction parsing, SQL execution, result normalization, and metrics. Docker supplies standardized MySQL, PostgreSQL, and SQLite environments.",
          result: "Execution accuracy provides a shared core metric across models, tasks, and datasets, reducing new-task evaluation setup from days to hours.",
          link: null
        },
        credit: {
          type: "SYSTEM · BANKING FINTECH",
          venue: "FINTECH AI · MULTI-AGENT",
          title: "CreditRiskRobot",
          summary: "An auditable credit-review workbench connecting document understanding, financial analysis, multi-agent risk reasoning, evidence tracking, and report generation.",
          challenge: "Enterprise credit files are heterogeneous and fragmented. Risk conclusions must remain traceable while clearly separating evidence, inference, and missing information.",
          method: "The system handles PDF, Word, Excel, text, and images; classifies and checks documents; and coordinates agents around operations, financials, repayment sources, risk factors, evidence, and missing materials.",
          result: "It delivers an end-to-end assisted review flow from case management and document inventory to risk analysis, report editing, self-audit, and HTML/Word/PDF export, while preserving human approval boundaries.",
          link: "https://github.com/Neroxsh/CreditRiskRobot"
        }
      }
    }
  };

  const flowCopy = {
    zh: {
      default: "从专家协同决策到 ClearML 训练评测，再由分析专家复盘并回流经验。",
      data: "数据专家分析类别分布、背景样本与弱类问题，提出数据构成和采样方向。",
      param: "参数专家围绕学习率、Batch Size、Epoch、Warm-up 与损失权重提出建议。",
      model: "模型专家评估容量、Backbone、Neck、Head 与多尺度结构的优化空间。",
      planner: "Planner 综合 Baseline、历史 Trial、专家建议与预算，生成下一轮优化方案。",
      trial: "Trial 可以进入数据优化路径，或在受控分支中执行代码与参数修改。",
      clearml: "ClearML 自动提交训练和测试任务，回收模型、指标、日志与运行状态。",
      analyst: "分析专家独立判断提升是否可信、是否存在类别退化，并给出下一轮建议。",
      memory: "成功与失败经验写入家族经验库，直到达到目标、预算上限或停止条件。"
    },
    en: {
      default: "Expert-assisted planning flows into ClearML training and testing, followed by independent analysis and experience feedback.",
      data: "The Data Expert studies class balance, backgrounds, and weak categories to recommend data composition and sampling strategies.",
      param: "The Hyperparameter Expert advises on learning rate, batch size, epochs, warm-up, and loss weighting.",
      model: "The Model Expert evaluates capacity, backbone, neck, head, and multi-scale architecture opportunities.",
      planner: "The Planner combines baselines, historical trials, expert input, and remaining budget into the next optimization plan.",
      trial: "A trial follows either a data-optimization route or controlled code and parameter changes on an isolated branch.",
      clearml: "ClearML submits training and testing jobs and returns models, metrics, logs, and runtime status.",
      analyst: "The Analyst independently checks whether gains are credible, detects class regressions, and recommends the next step.",
      memory: "Successes and failures feed the family memory until targets, budget limits, or stopping criteria are reached."
    }
  };

  const state = {
    language: localStorage.getItem("portfolio-language") === "en" ? "en" : "zh",
    theme: localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
    activeWork: { papers: "sqlequ", systems: "sqlbench" },
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
    button.setAttribute("aria-label", state.theme === "dark" ? "切换亮色主题" : "切换暗色主题");
    renderIcons();
  };

  const setTheme = (theme) => {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0d1110" : "#eaf0e8");
    updateThemeIcon();
  };

  const populateDetail = (group) => {
    const panel = document.querySelector(`[data-work-detail="${group}"]`);
    const data = workData[state.language][group][state.activeWork[group]];
    if (!panel || !data) return;

    panel.querySelector("[data-detail-type]").textContent = data.type;
    panel.querySelector("[data-detail-venue]").textContent = data.venue;
    panel.querySelector("[data-detail-title]").textContent = data.title;
    panel.querySelector("[data-detail-summary]").textContent = data.summary;
    panel.querySelector("[data-detail-challenge]").textContent = data.challenge;
    panel.querySelector("[data-detail-method]").textContent = data.method;
    panel.querySelector("[data-detail-result]").textContent = data.result;

    const link = panel.querySelector("[data-detail-link]");
    if (data.link) {
      link.href = data.link;
      link.hidden = false;
    } else {
      link.hidden = true;
      link.removeAttribute("href");
    }
  };

  const renderDetail = (group, id, animate = true) => {
    const panel = document.querySelector(`[data-work-detail="${group}"]`);
    const shell = panel?.closest("[data-work-group]");
    if (!panel || !shell || !workData[state.language][group][id]) return;

    state.activeWork[group] = id;
    shell.querySelectorAll(".work-item").forEach((button) => {
      const active = button.dataset.workId === id;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const children = [...panel.children];
    if (animate && hasGsap && !reducedMotion) {
      window.gsap.to(children, {
        y: 7,
        autoAlpha: 0,
        duration: 0.14,
        stagger: 0.018,
        overwrite: true,
        onComplete: () => {
          populateDetail(group);
          window.gsap.fromTo(children, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.32, stagger: 0.035, ease: "power2.out" });
        }
      });
    } else {
      populateDetail(group);
    }
  };

  const applyLanguage = (language) => {
    state.language = language;
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

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
    populateDetail("papers");
    populateDetail("systems");
    document.title = language === "zh" ? "邢仕浩 | 大模型算法与 Agent 应用研发" : "Shihao Xing | LLM Algorithms & Agent Engineering";
  };

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.dataset.zhOriginal = element.textContent;
  });

  document.querySelectorAll("[data-work-group]").forEach((shell) => {
    const group = shell.dataset.workGroup;
    shell.querySelectorAll(".work-item").forEach((button) => {
      const select = () => renderDetail(group, button.dataset.workId, true);
      button.addEventListener("mouseenter", select);
      button.addEventListener("focus", select);
      button.addEventListener("click", select);
    });
  });

  document.querySelectorAll("[data-flow-key]").forEach((node) => {
    const select = () => {
      const key = node.dataset.flowKey;
      state.activeFlow = key;
      document.querySelectorAll("[data-flow-key]").forEach((item) => item.classList.toggle("is-active", item === node));
      const caption = document.querySelector("[data-flow-caption]");
      const text = flowCopy[state.language][key];
      if (!caption || !text) return;
      if (hasGsap && !reducedMotion) {
        window.gsap.to(caption, { autoAlpha: 0, y: 5, duration: 0.12, overwrite: true, onComplete: () => {
          caption.textContent = text;
          window.gsap.to(caption, { autoAlpha: 1, y: 0, duration: 0.24 });
        }});
      } else {
        caption.textContent = text;
      }
    };
    node.addEventListener("mouseenter", select);
    node.addEventListener("focus", select);
    node.addEventListener("click", select);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (language === state.language) return;
      const main = document.querySelector("main");
      if (hasGsap && !reducedMotion) {
        window.gsap.to(main, { autoAlpha: 0.28, y: 4, duration: 0.16, onComplete: () => {
          applyLanguage(language);
          window.gsap.to(main, { autoAlpha: 1, y: 0, duration: 0.28, ease: "power2.out" });
        }});
      } else {
        applyLanguage(language);
      }
    });
  });

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", (event) => {
    const next = state.theme === "light" ? "dark" : "light";
    const wash = document.querySelector(".theme-wash");
    if (!wash || !hasGsap || reducedMotion) {
      setTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    wash.style.left = `${rect.left + rect.width / 2}px`;
    wash.style.top = `${rect.top + rect.height / 2}px`;
    wash.style.background = next === "dark" ? "#0d1110" : "#eaf0e8";

    window.gsap.timeline()
      .set(wash, { scale: 0, autoAlpha: 1 })
      .to(wash, { scale: 65, duration: 0.64, ease: "power3.in" })
      .call(() => setTheme(next), null, "-=0.22")
      .to(wash, { autoAlpha: 0, duration: 0.3, ease: "power2.out" });
  });

  const architectureDialog = document.querySelector("[data-architecture-dialog]");
  document.querySelector("[data-architecture-open]")?.addEventListener("click", () => {
    architectureDialog?.showModal();
    document.body.classList.add("is-modal-open");
  });
  document.querySelector("[data-architecture-close]")?.addEventListener("click", () => architectureDialog?.close());
  architectureDialog?.addEventListener("click", (event) => {
    if (event.target === architectureDialog) architectureDialog.close();
  });
  architectureDialog?.addEventListener("close", () => document.body.classList.remove("is-modal-open"));

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

  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-20% 0px -68%", threshold: [0, 0.18, 0.4] });
  sections.forEach((section) => sectionObserver.observe(section));

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".liquid-glass").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        element.style.setProperty("--glint-x", `${x}%`);
        element.style.setProperty("--glint-y", `${y}%`);
        if (hasGsap && !element.matches(".site-header")) {
          window.gsap.to(element, { x: (x - 50) * 0.035, y: (y - 50) * 0.035, duration: 0.28, ease: "power2.out", overwrite: true });
        }
      });
      element.addEventListener("pointerleave", () => {
        element.style.setProperty("--glint-x", "50%");
        element.style.setProperty("--glint-y", "20%");
        if (hasGsap && !element.matches(".site-header")) window.gsap.to(element, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.45)" });
      });
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  renderIcons();
  setTheme(state.theme);
  applyLanguage(state.language);

  if (!hasGsap || reducedMotion) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();

  media.add("(prefers-reduced-motion: no-preference)", () => {
    const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
    hero
      .from(".hero-kicker", { y: 12, autoAlpha: 0, duration: 0.36 })
      .from(".hero h1", { y: 24, autoAlpha: 0, duration: 0.54 }, "-=0.16")
      .from([".hero-direction", ".hero-summary", ".hero-actions", ".profile-links"], { y: 16, autoAlpha: 0, duration: 0.4, stagger: 0.055 }, "-=0.38")
      .from(".focus-rail", { scaleX: 0, transformOrigin: "left center", duration: 0.34 }, "-=0.4")
      .from(".focus-token", { x: 26, autoAlpha: 0, duration: 0.38, stagger: 0.055 }, "-=0.28");

    gsap.from(".education-item", {
      y: 24,
      autoAlpha: 0,
      duration: 0.58,
      stagger: 0.12,
      scrollTrigger: { trigger: ".education-track", start: "top 83%", once: true }
    });

    ScrollTrigger.batch(".honors-list li", {
      start: "top 88%",
      once: true,
      onEnter: (batch) => gsap.from(batch, { y: 18, autoAlpha: 0, duration: 0.42, stagger: 0.055, ease: "power2.out" })
    });

    gsap.from(".experience-head > *", {
      y: 22,
      autoAlpha: 0,
      duration: 0.55,
      stagger: 0.1,
      scrollTrigger: { trigger: ".experience-head", start: "top 83%", once: true }
    });

    gsap.from(".optimizer-copy > *", {
      x: -22,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.07,
      scrollTrigger: { trigger: ".optimizer-project", start: "top 78%", once: true }
    });

    gsap.from(".flow-node", {
      scale: 0.94,
      autoAlpha: 0,
      duration: 0.38,
      stagger: 0.065,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: ".optimizer-visual", start: "top 78%", once: true }
    });

    const flowPulse = gsap.to(".flow-line span", { y: "500%", duration: 0.92, repeat: -1, stagger: 0.16, ease: "none", paused: true });
    ScrollTrigger.create({
      trigger: ".optimizer-visual",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => flowPulse.play(),
      onEnterBack: () => flowPulse.play(),
      onLeave: () => flowPulse.pause(),
      onLeaveBack: () => flowPulse.pause()
    });

    gsap.utils.toArray(".work-subsection").forEach((section) => {
      gsap.from(section.querySelectorAll(".subsection-title > *, .work-item, .work-detail"), {
        y: 24,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 82%", once: true }
      });
    });

    ScrollTrigger.batch(".skill-cell", {
      start: "top 88%",
      once: true,
      onEnter: (batch) => gsap.from(batch, { y: 26, autoAlpha: 0, duration: 0.52, stagger: 0.08, ease: "power2.out" })
    });

    gsap.from(".small-project", {
      y: 24,
      autoAlpha: 0,
      duration: 0.56,
      stagger: 0.12,
      scrollTrigger: { trigger: ".small-projects", start: "top 84%", once: true }
    });

    gsap.from(".interest-card", {
      y: 28,
      rotation: (index) => [-2, 1.5, -1, 2][index] || 0,
      autoAlpha: 0,
      duration: 0.58,
      stagger: 0.08,
      ease: "back.out(1.2)",
      scrollTrigger: { trigger: ".interest-grid", start: "top 84%", once: true }
    });

    document.querySelectorAll(".interest-card").forEach((card, index) => {
      const rotations = [-1.8, 1.6, -1.2, 1.8];
      card.addEventListener("pointerenter", () => gsap.to(card, { y: -7, rotation: rotations[index], duration: 0.28, ease: "power2.out" }));
      card.addEventListener("pointerleave", () => gsap.to(card, { y: 0, rotation: 0, duration: 0.42, ease: "elastic.out(1, 0.5)" }));
    });

    return () => {
      hero.kill();
      flowPulse.kill();
    };
  });

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", refresh, { once: true });
  if (document.fonts?.ready) document.fonts.ready.then(refresh);
})();
