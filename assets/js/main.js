const STORAGE_KEY = "fg-portfolio-language";

const contactLinks = {
  emailAddress: "fernandogonzar0@gmail.com",
  github: "https://github.com/FernandoGonza27",
  linkedin: "https://www.linkedin.com/in/fernando-gonz%C3%A1lez-3baa60217",
};

const emailComposeContent = {
  en: {
    subject: "Portfolio contact",
    body: "Hello Fernando,%0A%0AI would like to talk with you about a project.%0A",
  },
  es: {
    subject: "Contacto desde portafolio",
    body: "Hola Fernando,%0A%0AQuiero hablar contigo sobre un proyecto.%0A",
  },
};

const content = {
  en: {
    meta: {
      title: "Fernando Gonzalez | Full Stack Developer Portfolio",
      description:
        "Fernando Gonzalez builds modern web applications, APIs, QA automation workflows, and reliable delivery systems with Laravel, Next.js, TypeScript, Docker, and PostgreSQL.",
    },
    statusMessage: "Language set to English.",
    skipLink: "Skip to content",
    brandRole: "Full Stack · QA Automation",
    nav: {
      about: "About",
      capabilities: "Capabilities",
      cases: "Cases",
      stack: "Stack",
      process: "Process",
      contact: "Contact",
      contactMini: "Let's talk",
    },
    hero: {
      kicker: "Software Engineering · Full Stack Delivery · QA Automation",
      titleLead: "Building reliable",
      titleAccent: "web systems",
      titleTail: "with clarity, automation and room to scale.",
      description:
        "I design and ship modern applications, backend services, testing workflows, and deployment-ready systems with a practical engineering mindset.",
      primaryCta: "Start a conversation",
      secondaryCta: "View GitHub",
      tertiaryCta: "LinkedIn",
      metrics: [
        { value: "18+", label: "public repositories" },
        { value: "QA", label: "automation-driven mindset" },
        { value: "REST + GraphQL", label: "API experience" },
      ],
      panelEyebrow: "Mission profile",
      panelTitle: "Systems planned for maintainability, tested for confidence.",
      panelDescription:
        "Full stack execution with an emphasis on backend reliability, structured delivery, and verification.",
      panelPoints: [
        "Modern Laravel and Next.js workflows",
        "Testing layers from API checks to end-to-end flows",
        "Docker-ready environments and delivery thinking",
      ],
      signalOneLabel: "Focus",
      signalOneValue: "Automation-first delivery",
      signalTwoLabel: "Stack",
      signalTwoValue: "Laravel · Next.js · Docker",
    },
    about: {
      kicker: "Positioning",
      title:
        "A developer profile shaped around clean implementation, backend foundations and quality engineering.",
      description:
        "The portfolio is built to communicate what I do, how I work, and the types of systems I can help deliver.",
      storyLabel: "Professional summary",
      storyTitle: "Practical engineering for real projects",
      storyBody:
        "I work across application code, APIs, data models, environments, and automated tests to keep delivery reliable from development through release. My baseline is modern web development backed by maintainable structure, clear responsibilities, and repeatable quality checks.",
      focusLabel: "Current focus",
      focusTitle: "Where the work is going deeper",
      focusItems: [
        "Improving automated testing strategies for Magento and modern web applications.",
        "Building Laravel-based orchestration flows for QA execution, artifacts and reports.",
        "Strengthening backend architecture, database design and clean project structures.",
        "Supporting scalable platforms with Next.js, APIs, PostgreSQL and media-oriented workflows.",
      ],
    },
    capabilities: {
      kicker: "Capabilities",
      title: "Core strengths across product delivery, backend systems and QA automation.",
      description:
        "The focus is not only on shipping code, but on building workflows and system structures that stay usable as products grow.",
      items: [
        {
          icon: "SYS",
          title: "Full stack systems",
          body: "Frontend and backend delivery for web products that need responsive interfaces, coherent architecture and maintainable implementation.",
        },
        {
          icon: "API",
          title: "Backend and data foundations",
          body: "API-driven services, validation layers, database design, and system boundaries that support real business flows.",
        },
        {
          icon: "QA",
          title: "Quality automation",
          body: "Automation strategies covering smoke checks, regression flows, API validation and delivery confidence for each release cycle.",
        },
      ],
    },
    cases: {
      kicker: "Featured cases",
      title: "Curated examples of the type of engineering problems I like solving.",
      description:
        "These cases are framed around outcomes and implementation patterns, with placeholders where project details are private or not yet documented publicly.",
      labels: {
        challenge: "Challenge",
        approach: "Approach",
        stack: "Stack",
        outcome: "Outcome",
      },
      openLink: "Open reference",
    },
    stack: {
      kicker: "Technologies",
      title: "TECH STACK",
      technologiesLabel: "TECHNOLOGIES",
    },
    process: {
      kicker: "Process",
      title: "An engineering workflow designed for clarity, repeatability and fewer surprises.",
      items: [
        {
          badge: "Map",
          title: "Understand the system before changing it",
          body: "Start by clarifying flows, dependencies, data shape and operational constraints instead of guessing from the surface.",
        },
        {
          badge: "Build",
          title: "Implement with boundaries and structure",
          body: "Prefer explicit responsibilities, maintainable file organization, and practical abstractions that make future changes safer.",
        },
        {
          badge: "Verify",
          title: "Add confidence through layered checks",
          body: "Use QA automation, targeted manual validation and evidence-driven debugging to catch regressions early.",
        },
        {
          badge: "Ship",
          title: "Prepare delivery as part of the work",
          body: "Treat environments, pipelines, reports and release readiness as first-class parts of software delivery.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's build software that is useful, maintainable and ready to ship.",
      description:
        "Available for conversations around web development, API-driven products, QA automation, and delivery systems.",
      emailCta: "Email me",
      linkedinCta: "Open LinkedIn",
      githubCta: "Browse GitHub",
    },
    footer: {
      signature: "Fernando Gonzalez",
    },
  },
  es: {
    meta: {
      title: "Fernando Gonzalez | Portafolio Full Stack",
      description:
        "Fernando Gonzalez construye aplicaciones web, APIs, flujos de automatizacion QA y sistemas listos para entrega con Laravel, Next.js, TypeScript, Docker y PostgreSQL.",
    },
    statusMessage: "Idioma cambiado a espanol.",
    skipLink: "Saltar al contenido",
    brandRole: "Full Stack · Automatizacion QA",
    nav: {
      about: "Perfil",
      capabilities: "Capacidades",
      cases: "Casos",
      stack: "Stack",
      process: "Proceso",
      contact: "Contacto",
      contactMini: "Conversemos",
    },
    hero: {
      kicker: "Ingenieria de Software · Entrega Full Stack · Automatizacion QA",
      titleLead: "Construyendo",
      titleAccent: "sistemas web",
      titleTail: "con claridad, automatizacion y espacio para escalar.",
      description:
        "Diseno y entrego aplicaciones modernas, servicios backend, flujos de testing y sistemas listos para despliegue con una mentalidad practica de ingenieria.",
      primaryCta: "Iniciar conversacion",
      secondaryCta: "Ver GitHub",
      tertiaryCta: "LinkedIn",
      metrics: [
        { value: "18+", label: "repositorios publicos" },
        { value: "QA", label: "mentalidad guiada por automatizacion" },
        { value: "REST + GraphQL", label: "experiencia en APIs" },
      ],
      panelEyebrow: "Perfil de mision",
      panelTitle: "Sistemas pensados para mantenerse, probados para dar confianza.",
      panelDescription:
        "Ejecucion full stack con enfasis en confiabilidad backend, entrega estructurada y verificacion.",
      panelPoints: [
        "Flujos modernos con Laravel y Next.js",
        "Capas de testing desde validaciones API hasta flujos end to end",
        "Entornos preparados con Docker y enfoque real de entrega",
      ],
      signalOneLabel: "Enfoque",
      signalOneValue: "Entrega orientada a automatizacion",
      signalTwoLabel: "Stack",
      signalTwoValue: "Laravel · Next.js · Docker",
    },
    about: {
      kicker: "Posicionamiento",
      title:
        "Un perfil de desarrollo orientado a implementacion limpia, bases backend e ingenieria de calidad.",
      description:
        "El portafolio esta construido para comunicar que hago, como trabajo y que tipo de sistemas puedo ayudar a entregar.",
      storyLabel: "Resumen profesional",
      storyTitle: "Ingenieria practica para proyectos reales",
      storyBody:
        "Trabajo sobre codigo de aplicacion, APIs, modelos de datos, entornos y pruebas automatizadas para mantener la entrega confiable desde desarrollo hasta release. Mi base es el desarrollo web moderno respaldado por estructura mantenible, responsabilidades claras y validaciones repetibles.",
      focusLabel: "Foco actual",
      focusTitle: "Hacia donde se esta profundizando el trabajo",
      focusItems: [
        "Mejorar estrategias de testing automatizado para Magento y aplicaciones web modernas.",
        "Construir flujos de orquestacion QA con Laravel para ejecuciones, artefactos y reportes.",
        "Fortalecer arquitectura backend, diseno de bases de datos y estructuras limpias de proyecto.",
        "Aportar a plataformas escalables con Next.js, APIs, PostgreSQL y flujos orientados a media.",
      ],
    },
    capabilities: {
      kicker: "Capacidades",
      title: "Fortalezas centrales entre entrega de producto, sistemas backend y automatizacion QA.",
      description:
        "El objetivo no es solo entregar codigo, sino construir flujos y estructuras que sigan siendo utiles cuando el producto crece.",
      items: [
        {
          icon: "SYS",
          title: "Sistemas full stack",
          body: "Entrega frontend y backend para productos web que necesitan interfaces responsivas, arquitectura coherente e implementacion mantenible.",
        },
        {
          icon: "API",
          title: "Backend y bases de datos",
          body: "Servicios guiados por APIs, capas de validacion, diseno de bases de datos y limites del sistema que soportan flujos reales de negocio.",
        },
        {
          icon: "QA",
          title: "Automatizacion de calidad",
          body: "Estrategias de automatizacion para smoke checks, regresiones, validaciones API y confianza de entrega en cada ciclo de release.",
        },
      ],
    },
    cases: {
      kicker: "Casos destacados",
      title: "Ejemplos curados del tipo de problemas de ingenieria que me interesa resolver.",
      description:
        "Estos casos se presentan desde patrones de implementacion y resultados, con placeholders donde los detalles son privados o aun no estan documentados publicamente.",
      labels: {
        challenge: "Reto",
        approach: "Enfoque",
        stack: "Stack",
        outcome: "Resultado",
      },
      openLink: "Abrir referencia",
    },
    stack: {
      kicker: "Tecnologías",
      title: "STACK TECNOLÓGICO",
      technologiesLabel: "TECNOLOGÍAS",
    },
    process: {
      kicker: "Proceso",
      title: "Un flujo de ingenieria pensado para claridad, repetibilidad y menos sorpresas.",
      items: [
        {
          badge: "Mapear",
          title: "Entender el sistema antes de cambiarlo",
          body: "Primero aclaro flujos, dependencias, forma de datos y restricciones operativas en lugar de adivinar desde la superficie.",
        },
        {
          badge: "Construir",
          title: "Implementar con limites y estructura",
          body: "Prefiero responsabilidades explicitas, organizacion mantenible de archivos y abstracciones practicas que vuelvan mas seguros los cambios futuros.",
        },
        {
          badge: "Verificar",
          title: "Agregar confianza con validaciones por capas",
          body: "Uso automatizacion QA, validacion manual puntual y debugging con evidencia para detectar regresiones temprano.",
        },
        {
          badge: "Entregar",
          title: "Preparar release como parte del trabajo",
          body: "Trato entornos, pipelines, reportes y release readiness como piezas de primera clase dentro de la entrega de software.",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Construyamos software util, mantenible y listo para salir.",
      description:
        "Disponible para conversar sobre desarrollo web, productos guiados por APIs, automatizacion QA y sistemas de entrega.",
      emailCta: "Escribirme",
      linkedinCta: "Abrir LinkedIn",
      githubCta: "Explorar GitHub",
    },
    footer: {
      signature: "Fernando Gonzalez",
    },
  },
};

const featuredCases = [
  {
    id: "qa-orchestration",
    category: {
      en: "QA orchestration",
      es: "Orquestacion QA",
    },
    title: {
      en: "Automation workflows for repeatable quality checks",
      es: "Flujos de automatizacion para validaciones repetibles de calidad",
    },
    challenge: {
      en: "Coordinate test execution, artifacts, reports and traceability so QA work remains consistent across environments and release cycles.",
      es: "Coordinar ejecucion de pruebas, artefactos, reportes y trazabilidad para que el trabajo QA sea consistente entre entornos y ciclos de release.",
    },
    approach: {
      en: "Model the workflow around Laravel-based orchestration, structured command entry points, evidence capture and pipeline-friendly outputs.",
      es: "Modelar el flujo alrededor de una orquestacion basada en Laravel, puntos de entrada estructurados, captura de evidencia y salidas amigables para pipelines.",
    },
    stack: ["Laravel", "PHP", "Docker", "CI/CD", "Bash"],
    outcome: {
      en: "Placeholder for measurable execution gains, report quality and run visibility once the public case can expose concrete internal metrics.",
      es: "Placeholder para ganancias medibles de ejecucion, calidad de reportes y visibilidad de corridas cuando el caso publico pueda exponer metricas internas concretas.",
    },
    links: [],
  },
  {
    id: "platform-foundation",
    category: {
      en: "Platform foundation",
      es: "Base de plataforma",
    },
    title: {
      en: "Scalable web platform groundwork for content-rich products",
      es: "Base escalable para productos web con alto peso de contenido",
    },
    challenge: {
      en: "Support product growth with a frontend, API and database foundation that can handle evolving data models, media workflows and operational complexity.",
      es: "Soportar crecimiento de producto con una base frontend, API y base de datos capaz de manejar modelos cambiantes, flujos de media y complejidad operativa.",
    },
    approach: {
      en: "Separate responsibilities across Next.js frontend, typed API integration and PostgreSQL-backed modeling, keeping delivery choices aligned with future scale.",
      es: "Separar responsabilidades entre frontend en Next.js, integracion tipada de APIs y modelado respaldado por PostgreSQL, alineando decisiones de entrega con escalabilidad futura.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs", "Vercel"],
    outcome: {
      en: "Placeholder for launch-stage metrics and business outcomes while the public write-up remains capability-focused instead of client-specific.",
      es: "Placeholder para metricas de lanzamiento y resultados de negocio mientras el caso publico se mantenga orientado a capacidad y no a un cliente especifico.",
    },
    links: [
      {
        label: {
          en: "GitHub profile",
          es: "Perfil de GitHub",
        },
        href: contactLinks.github,
      },
    ],
  },
  {
    id: "elite-realtor-platform",
    category: {
      en: "Client delivery",
      es: "Entrega cliente",
    },
    title: {
      en: "Elite Realtor Costa Rica: public catalog, BFF and admin delivery",
      es: "Elite Realtor Costa Rica: catalogo publico, BFF y operacion admin",
    },
    challenge: {
      en: "Deliver the public site and operating surfaces for a bilingual property catalog connected to Devpend Code Solutions services, lead capture and media workflows.",
      es: "Entregar el sitio publico y las superficies operativas de un catalogo inmobiliario bilingue conectado a servicios de Devpend Code Solutions, captura de leads y flujos de media.",
    },
    approach: {
      en: "Built the Next.js 15 frontend, App Router BFF, property browsing flows, admin tools and media handling on top of PostgreSQL, Cloudflare R2 and the standalone API layer.",
      es: "Construí el frontend en Next.js 15, el BFF con App Router, los flujos de catalogo, las herramientas admin y el manejo de media sobre PostgreSQL, Cloudflare R2 y una capa API standalone.",
    },
    stack: ["Next.js 15", "TypeScript", "React", "PostgreSQL", "Cloudflare R2", "next-intl", "BFF/API"],
    outcome: {
      en: "Live production site with bilingual catalog browsing, lead handling, admin property operations and a delivery model that supports ongoing iteration under Devpend Code.",
      es: "Sitio en produccion con catalogo bilingue, gestion de leads, operacion admin de propiedades y un modelo de entrega que soporta iteracion continua bajo Devpend Code.",
    },
    links: [
      {
        label: {
          en: "Live site",
          es: "Sitio en vivo",
        },
        href: "https://eliterealtorcr.com/en",
      },
    ],
  },
];

const stackGroups = [
  {
    id: "engineering",
    eyebrow: {
      en: "CORE ENGINEERING",
      es: "INGENIERÍA BASE",
    },
    title: {
      en: "Core engineering",
      es: "Ingeniería base",
    },
    technologies: [
      { name: "Laravel", mark: "LV" },
      { name: "PHP", mark: "PHP" },
      { name: "Next.js", mark: "NX" },
      { name: "TypeScript", mark: "TS" },
      { name: "JavaScript", mark: "JS" },
      { name: "React", mark: "RE" },
      { name: "Node.js", mark: "ND" },
      { name: "HTML5", mark: "H5" },
      { name: "CSS3", mark: "C3" },
    ],
  },
  {
    id: "data",
    eyebrow: {
      en: "DATA AND INFRASTRUCTURE",
      es: "DATOS E INFRAESTRUCTURA",
    },
    title: {
      en: "Data and infrastructure",
      es: "Datos e infraestructura",
    },
    technologies: [
      { name: "PostgreSQL", mark: "PG" },
      { name: "MySQL", mark: "MY" },
      { name: "MongoDB", mark: "MG" },
      { name: "Supabase", mark: "SB" },
      { name: "Docker", mark: "DK" },
      { name: "Linux", mark: "LX" },
      { name: "Bash", mark: "SH" },
    ],
  },
  {
    id: "quality",
    eyebrow: {
      en: "QUALITY AND DELIVERY",
      es: "CALIDAD Y ENTREGA",
    },
    title: {
      en: "Quality and delivery",
      es: "Calidad y entrega",
    },
    technologies: [
      { name: "Cypress", mark: "CY" },
      { name: "Playwright", mark: "PW" },
      { name: "k6", mark: "K6" },
      { name: "Postman", mark: "PM" },
      { name: "GitHub", mark: "GH" },
      { name: "Cloudflare", mark: "CF" },
      { name: "Vercel", mark: "VC" },
      { name: "AWS", mark: "AWS" },
    ],
  },
];

const stackLogoPalettes = {
  engineering: {
    start: "#8ce2ff",
    end: "#54c8ff",
    glow: "rgba(84, 200, 255, 0.24)",
  },
  data: {
    start: "#94f7d5",
    end: "#5ad5cb",
    glow: "rgba(94, 226, 203, 0.22)",
  },
  quality: {
    start: "#ffd18a",
    end: "#ffad67",
    glow: "rgba(255, 173, 103, 0.22)",
  },
};

const yearElement = document.querySelector("#year");
const heroMetricsElement = document.querySelector("#hero-metrics");
const missionListElement = document.querySelector("#mission-list");
const focusListElement = document.querySelector("#focus-list");
const capabilitiesGridElement = document.querySelector("#capabilities-grid");
const casesGridElement = document.querySelector("#cases-grid");
const stackGridElement = document.querySelector("#stack-grid");
const processGridElement = document.querySelector("#process-grid");
const langStatusElement = document.querySelector("#lang-status");
const languageControls = document.querySelectorAll("[data-lang-control]");
const metaDescriptionElement = document.querySelector('meta[name="description"]');
const navShellElement = document.querySelector(".nav-shell");
const menuToggleElement = document.querySelector(".menu-toggle");
const mobileMenuElement = document.querySelector("#mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav a, .mobile-menu__cta");
const emailLinkElements = document.querySelectorAll("[data-email-link]");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileMenuMediaQuery = window.matchMedia("(max-width: 840px)");

let revealObserver = null;

function getNestedValue(object, path) {
  return path.split(".").reduce((current, key) => current?.[key], object);
}

function buildGmailComposeUrl(language) {
  const safeLanguage = emailComposeContent[language] ? language : "en";
  const composeContent = emailComposeContent[safeLanguage];
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactLinks.emailAddress,
    su: composeContent.subject,
    body: composeContent.body.replace(/%0A/g, "\n"),
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function getLanguageFromQuery() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  return content[queryLanguage] ? queryLanguage : null;
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    return;
  }
}

function updateStaticText(language) {
  const languageContent = content[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(languageContent, element.dataset.i18n);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });
}

function renderHeroMetrics(language) {
  const metrics = content[language].hero.metrics;

  heroMetricsElement.innerHTML = metrics
    .map(
      (metric) => `
        <li class="hero-metric reveal">
          <span class="hero-metric__value">${metric.value}</span>
          <span class="hero-metric__label">${metric.label}</span>
        </li>
      `
    )
    .join("");
}

function renderMissionList(language) {
  const points = content[language].hero.panelPoints;

  missionListElement.innerHTML = points.map((point) => `<li>${point}</li>`).join("");
}

function renderFocusList(language) {
  const items = content[language].about.focusItems;

  focusListElement.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderCapabilities(language) {
  const items = content[language].capabilities.items;

  capabilitiesGridElement.innerHTML = items
    .map(
      (item) => `
        <article class="capability-card reveal">
          <div class="capability-card__icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderCases(language) {
  const labels = content[language].cases.labels;
  const fallbackLinkLabel = content[language].cases.openLink;

  casesGridElement.innerHTML = featuredCases
    .map((item) => {
      const stackMarkup = item.stack.map((entry) => `<span class="tag">${entry}</span>`).join("");
      const linksMarkup = item.links.length
        ? `
          <div class="case-links">
            ${item.links
              .map((link) => {
                const label = link.label?.[language] || fallbackLinkLabel;

                return `
                  <a class="case-link" href="${link.href}" target="_blank" rel="noreferrer">
                    ${label}
                  </a>
                `;
              })
              .join("")}
          </div>
        `
        : "";

      return `
        <article class="case-card reveal">
          <header class="case-header">
            <p class="case-category">${item.category[language]}</p>
            <h3>${item.title[language]}</h3>
          </header>

          <div class="case-blocks">
            <dl class="case-block">
              <dt>${labels.challenge}</dt>
              <dd>${item.challenge[language]}</dd>
            </dl>
            <dl class="case-block">
              <dt>${labels.approach}</dt>
              <dd>${item.approach[language]}</dd>
            </dl>
            <dl class="case-block">
              <dt>${labels.stack}</dt>
              <dd class="tag-row">${stackMarkup}</dd>
            </dl>
            <dl class="case-block">
              <dt>${labels.outcome}</dt>
              <dd>${item.outcome[language]}</dd>
            </dl>
          </div>

          ${linksMarkup}
        </article>
      `;
    })
    .join("");
}

function buildTechLogoDataUri(mark, tone) {
  const palette = stackLogoPalettes[tone] || stackLogoPalettes.engineering;
  const fontSize = mark.length > 2 ? 16 : 18;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="tech-gradient" x1="10%" y1="8%" x2="90%" y2="92%">
          <stop offset="0%" stop-color="${palette.start}" />
          <stop offset="100%" stop-color="${palette.end}" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="#061321" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="15.5" fill="none" stroke="url(#tech-gradient)" stroke-opacity="0.52" />
      <circle cx="50" cy="15" r="2.4" fill="url(#tech-gradient)" fill-opacity="0.92" />
      <text
        x="32"
        y="37"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="${fontSize}"
        font-weight="700"
        letter-spacing="-0.6"
        fill="url(#tech-gradient)"
      >
        ${mark}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getStackCategoryIcon(id) {
  const icons = {
    engineering: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3.25 19 7v10l-7 3.75L5 17V7L12 3.25Z" />
        <path d="M12 3.25v17.5M5 7l7 4 7-4" />
      </svg>
    `,
    data: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <ellipse cx="12" cy="6.5" rx="6.75" ry="3.25" />
        <path d="M5.25 6.5v5.5c0 1.8 3.02 3.25 6.75 3.25s6.75-1.45 6.75-3.25V6.5" />
        <path d="M5.25 12v5.5c0 1.8 3.02 3.25 6.75 3.25s6.75-1.45 6.75-3.25V12" />
      </svg>
    `,
    quality: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3.25 18.5 5.8v5.7c0 4.3-2.6 7.4-6.5 9.25-3.9-1.85-6.5-4.95-6.5-9.25V5.8L12 3.25Z" />
        <path d="m8.85 12.15 2.2 2.2 4.3-4.6" />
      </svg>
    `,
  };

  return icons[id] || icons.engineering;
}

function renderStackGroups(language) {
  const technologiesLabel = content[language].stack.technologiesLabel;

  stackGridElement.innerHTML = stackGroups
    .map(
      (group) => `
        <article class="tech-card tech-card--${group.id} reveal">
          <header class="tech-card__top">
            <div class="tech-card__icon" aria-hidden="true">
              ${getStackCategoryIcon(group.id)}
            </div>
            <div class="tech-card__intro">
              <p class="tech-card__eyebrow">${group.eyebrow[language]}</p>
              <h3>${group.title[language]}</h3>
            </div>
          </header>
          <div class="tech-card__rule" aria-hidden="true"></div>
          <p class="tech-card__label">${technologiesLabel}</p>
          <ul class="tech-logo-grid" aria-label="${group.title[language]} ${technologiesLabel.toLowerCase()}">
            ${group.technologies
              .map(
                (technology) => `
                  <li class="tech-logo-item">
                    <img
                      class="tech-logo"
                      src="${buildTechLogoDataUri(technology.mark, group.id)}"
                      alt="${technology.name}"
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                    <span class="tech-name">${technology.name}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderProcess(language) {
  const items = content[language].process.items;

  processGridElement.innerHTML = items
    .map(
      (item) => `
        <article class="process-card reveal">
          <div class="process-card__badge">${item.badge}</div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function updateMeta(language) {
  const meta = content[language].meta;

  document.title = meta.title;

  if (metaDescriptionElement) {
    metaDescriptionElement.setAttribute("content", meta.description);
  }

  document.documentElement.lang = language;
}

function updateLanguageControls(language) {
  languageControls.forEach((button) => {
    const isSelected = button.dataset.langControl === language;
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateEmailLinks(language) {
  const href = buildGmailComposeUrl(language);

  emailLinkElements.forEach((link) => {
    link.setAttribute("href", href);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer noopener");
  });
}

function isMobileMenuOpen() {
  return menuToggleElement?.getAttribute("aria-expanded") === "true";
}

function closeMobileMenu() {
  if (!menuToggleElement || !mobileMenuElement) {
    return;
  }

  menuToggleElement.setAttribute("aria-expanded", "false");
  mobileMenuElement.hidden = true;
}

function openMobileMenu() {
  if (!menuToggleElement || !mobileMenuElement) {
    return;
  }

  menuToggleElement.setAttribute("aria-expanded", "true");
  mobileMenuElement.hidden = false;
}

function toggleMobileMenu() {
  if (isMobileMenuOpen()) {
    closeMobileMenu();
    return;
  }

  openMobileMenu();
}

function announceLanguage(language) {
  if (!langStatusElement) {
    return;
  }

  langStatusElement.textContent = "";
  window.setTimeout(() => {
    langStatusElement.textContent = content[language].statusMessage;
  }, 20);
}

function buildObserver() {
  if (reducedMotionQuery.matches) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  registerRevealElements();
}

function registerRevealElements() {
  if (reducedMotionQuery.matches) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  if (!revealObserver) {
    return;
  }

  document.querySelectorAll(".reveal").forEach((element) => {
    if (element.dataset.revealBound === "true") {
      return;
    }

    revealObserver.observe(element);
    element.dataset.revealBound = "true";
  });
}

function applyLanguage(language, announce = false) {
  const safeLanguage = content[language] ? language : "en";

  updateStaticText(safeLanguage);
  renderHeroMetrics(safeLanguage);
  renderMissionList(safeLanguage);
  renderFocusList(safeLanguage);
  renderCapabilities(safeLanguage);
  renderCases(safeLanguage);
  renderStackGroups(safeLanguage);
  renderProcess(safeLanguage);
  updateMeta(safeLanguage);
  updateLanguageControls(safeLanguage);
  updateEmailLinks(safeLanguage);
  registerRevealElements();
  storeLanguage(safeLanguage);

  if (announce) {
    announceLanguage(safeLanguage);
  }
}

function setupLanguageToggle() {
  languageControls.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langControl, true);
      closeMobileMenu();
    });
  });
}

function setupEmailLinks() {
  emailLinkElements.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      const href = buildGmailComposeUrl(document.documentElement.lang);
      const newWindow = window.open(href, "_blank", "noopener");

      if (!newWindow) {
        window.location.href = href;
      }
    });
  });
}

function setupMobileMenu() {
  if (!menuToggleElement || !mobileMenuElement || !navShellElement) {
    return;
  }

  menuToggleElement.addEventListener("click", () => {
    toggleMobileMenu();
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!isMobileMenuOpen()) {
      return;
    }

    if (navShellElement.contains(event.target)) {
      return;
    }

    closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  mobileMenuMediaQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMobileMenu();
    }
  });
}

function setupHeroPointer() {
  if (reducedMotionQuery.matches) {
    return;
  }

  const heroVisual = document.querySelector("#hero-visual");

  if (!heroVisual) {
    return;
  }

  heroVisual.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const tiltY = (x - 0.5) * 8;
    const tiltX = (0.5 - y) * 6;

    heroVisual.style.setProperty("--tilt-x", `${tiltX}deg`);
    heroVisual.style.setProperty("--tilt-y", `${tiltY}deg`);
  });

  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--tilt-x", "0deg");
    heroVisual.style.setProperty("--tilt-y", "0deg");
  });
}

function initialize() {
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  buildObserver();
  setupMobileMenu();
  setupLanguageToggle();
  setupEmailLinks();
  setupHeroPointer();

  const preferredLanguage = getLanguageFromQuery() || getStoredLanguage() || "en";
  applyLanguage(preferredLanguage);
}

initialize();
