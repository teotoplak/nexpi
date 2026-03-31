document.documentElement.classList.add("js");

const translations = {
  en: {
    "meta.title": "NEXPI | AI Process Automation for Growing Businesses",
    "meta.description":
      "NEXPI helps growing companies automate repetitive internal workflows with AI and modern automation systems.",
    "meta.ogTitle": "NEXPI | AI Process Automation for Growing Businesses",
    "meta.ogDescription":
      "Reduce manual work, remove bottlenecks, and improve operational efficiency with practical AI automation systems.",
    "brand.homeAria": "NEXPI home",
    "nav.openMenu": "Open navigation",
    "nav.closeMenu": "Close navigation",
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.bookCall": "Book a Call",
    "hero.eyebrow": "AI Process Automation for Businesses",
    "hero.title": "Turn manual operations into automated systems that scale.",
    "hero.text":
      "NEXPI helps growing companies remove repetitive work, eliminate bottlenecks, and improve output with practical AI and workflow automation.",
    "hero.auditCta": "Book an Audit Call",
    "hero.auditHref": "mailto:nexpi.info@gmail.com?subject=Automation%20Audit",
    "hero.howItWorks": "See How It Works",
    "hero.pointsLabel": "Key value points",
    "hero.point1": "Built for teams with 10-300 employees",
    "hero.point2": "Focused on ROI and operational efficiency",
    "hero.point3": "Fast implementation without overengineering",
    "hero.targetsLabel": "Typical automation targets",
    "hero.target1": "Lead handling and follow-ups",
    "hero.target2": "Reporting and internal dashboards",
    "hero.target3": "Data entry and tool synchronization",
    "hero.target4": "Admin workflows across email, Sheets, CRM, and chat",
    "hero.bottlenecksLabel": "Operational bottlenecks we remove",
    "hero.bottleneck1": "Slow reporting",
    "hero.bottleneck2": "Manual handoffs",
    "hero.bottleneck3": "Missed follow-ups",
    "hero.bottleneck4": "Excel-heavy workflows",
    "hero.bottleneck5": "Communication gaps",
    "hero.bottleneck6": "Hiring pressure",
    "ticker.label": "Core differentiators",
    "ticker.item1": "Outcome-focused automation",
    "ticker.item2": "AI + Zapier + Make + CRM + Sheets",
    "ticker.item3": "Fast execution in days, not months",
    "ticker.item4": "Business-first communication",
    "ticker.item5": "Repeatable systems with clear ROI",
    "services.eyebrow": "What We Automate",
    "services.title": "Internal workflows that quietly slow growth.",
    "services.text":
      "We replace repetitive, error-prone work with systems that keep your operations moving without adding headcount just to keep up.",
    "services.card1Title": "Lead and customer workflows",
    "services.card1Text":
      "Route inbound leads, trigger follow-ups, qualify requests, and keep communication moving automatically.",
    "services.card2Title": "Reporting and visibility",
    "services.card2Text":
      "Pull data from scattered tools into structured reporting so teams can make decisions without manual consolidation.",
    "services.card3Title": "Admin and coordination systems",
    "services.card3Text":
      "Automate project updates, approvals, notifications, and internal handoffs across email, Slack, WhatsApp, and task tools.",
    "fit.eyebrow": "Who This Is For",
    "fit.title":
      "Growing companies with too much manual work and too little operational leverage.",
    "fit.bestFitTitle": "Best fit",
    "fit.bestFit1": "Small and mid-sized businesses",
    "fit.bestFit2": "Teams with 10-300 employees",
    "fit.bestFit3": "Operations built around spreadsheets, email, and messaging",
    "fit.bestFit4": "Leaders who know inefficiency is hurting growth",
    "fit.outcomesTitle": "Core outcomes",
    "fit.outcome1": "Less repetitive manual work every week",
    "fit.outcome2": "Fewer costly process mistakes",
    "fit.outcome3": "Faster response times and follow-through",
    "fit.outcome4": "More time spent on high-value work",
    "approach.eyebrow": "How It Works",
    "approach.title": "A practical delivery model built around speed and clarity.",
    "approach.text":
      "We keep the engagement simple: identify friction, design the right automation, implement it fast, then improve it over time if needed.",
    "approach.step1Title": "Discovery and audit",
    "approach.step1Text":
      "We map your current workflow, find bottlenecks, and identify the highest-leverage automation opportunities.",
    "approach.step2Title": "Solution design",
    "approach.step2Text":
      "We define the workflow logic, choose the right tools, and frame the expected ROI before implementation starts.",
    "approach.step3Title": "Implementation",
    "approach.step3Text":
      "We build the automation using AI, Make, Zapier, CRMs, Airtable, Sheets, Slack, WhatsApp, and the tools you already use.",
    "approach.step4Title": "Optimization",
    "approach.step4Text":
      "Once the first system is live, we refine performance and expand automation into adjacent workflows.",
    "why.eyebrow": "Why NEXPI",
    "why.title": "Built for operators who care about outcomes, not buzzwords.",
    "why.promise1Title": "ROI-first decisions",
    "why.promise1Text":
      "We position AI as an enabler. The actual product is better operations.",
    "why.promise2Title": "Fast execution",
    "why.promise2Text":
      "We prioritize practical systems that go live quickly instead of long, expensive projects.",
    "why.promise3Title": "No overengineering",
    "why.promise3Text":
      "We use proven tools and simple architectures that your business can actually operate.",
    "why.promise4Title": "Repeatable systems",
    "why.promise4Text":
      "We standardize around common operational problems so delivery stays fast and reliable.",
    "pricing.eyebrow": "Engagement Models",
    "pricing.title": "Flexible ways to start based on how much support you need.",
    "pricing.card1Title": "Project-based",
    "pricing.card1Subtitle": "Best for one high-impact workflow",
    "pricing.card1Text":
      "A one-time implementation focused on a specific operational problem with a clear scope and defined result.",
    "pricing.popular": "Popular",
    "pricing.card2Title": "Monthly retainer",
    "pricing.card2Subtitle": "Best for ongoing optimization",
    "pricing.card2Text":
      "Continuous automation support, iteration, and expansion as your business grows and new bottlenecks appear.",
    "pricing.card3Title": "Productized solutions",
    "pricing.card3Subtitle": "Best for repeatable use cases",
    "pricing.card3Text":
      "Fixed-scope systems with faster rollout and lower cost when the problem is common and the delivery can be standardized.",
    "contact.eyebrow": "Get Started",
    "contact.title":
      "If manual work is slowing growth, that is the process to fix first.",
    "contact.text":
      "We'll look at your current operations, identify one or two strong automation opportunities, and show you where the ROI is likely to come from.",
    "contact.cta": "Contact NEXPI",
    "contact.ctaHref":
      "mailto:nexpi.info@gmail.com?subject=Automation%20Opportunity",
    "footer.tagline": "AI process automation for growing businesses.",
  },
  hr: {
    "meta.title": "NEXPI | AI automatizacija procesa za rastuće tvrtke",
    "meta.description":
      "NEXPI pomaže rastućim tvrtkama automatizirati repetitivne interne procese uz AI i moderne alate za automatizaciju.",
    "meta.ogTitle": "NEXPI | AI automatizacija procesa za rastuće tvrtke",
    "meta.ogDescription":
      "Smanjite ručni rad, uklonite uska grla i povećajte operativnu učinkovitost uz praktičnu AI automatizaciju.",
    "brand.homeAria": "Početna stranica NEXPI",
    "nav.openMenu": "Otvori navigaciju",
    "nav.closeMenu": "Zatvori navigaciju",
    "nav.services": "Usluge",
    "nav.approach": "Pristup",
    "nav.pricing": "Modeli",
    "nav.contact": "Kontakt",
    "nav.bookCall": "Rezerviraj poziv",
    "hero.eyebrow": "AI automatizacija procesa za tvrtke",
    "hero.title": "Pretvorite ručne operacije u automatizirane sustave koji skaliraju.",
    "hero.text":
      "NEXPI pomaže rastućim tvrtkama ukloniti repetitivan rad, uska grla i operativni kaos kroz praktičnu AI i workflow automatizaciju.",
    "hero.auditCta": "Rezerviraj audit poziv",
    "hero.auditHref": "mailto:nexpi.info@gmail.com?subject=Audit%20automatizacije",
    "hero.howItWorks": "Pogledaj kako radimo",
    "hero.pointsLabel": "Ključne prednosti",
    "hero.point1": "Namijenjeno timovima od 10 do 300 zaposlenih",
    "hero.point2": "Fokus na ROI i operativnu učinkovitost",
    "hero.point3": "Brza implementacija bez overengineeringa",
    "hero.targetsLabel": "Tipični procesi za automatizaciju",
    "hero.target1": "Obrada leadova i follow-up komunikacija",
    "hero.target2": "Izvještavanje i interni dashboardi",
    "hero.target3": "Unos podataka i sinkronizacija alata",
    "hero.target4": "Administrativni tokovi kroz email, Sheets, CRM i chat",
    "hero.bottlenecksLabel": "Operativna uska grla koja uklanjamo",
    "hero.bottleneck1": "Sporo izvještavanje",
    "hero.bottleneck2": "Ručni handoffovi",
    "hero.bottleneck3": "Propušteni follow-upovi",
    "hero.bottleneck4": "Procesi teški na Excelu",
    "hero.bottleneck5": "Komunikacijski šum",
    "hero.bottleneck6": "Pritisak na zapošljavanje",
    "ticker.label": "Ključne razlike",
    "ticker.item1": "Automatizacija fokusirana na rezultate",
    "ticker.item2": "AI + Zapier + Make + CRM + Sheets",
    "ticker.item3": "Brza izvedba u danima, ne mjesecima",
    "ticker.item4": "Jasna komunikacija poslovnim jezikom",
    "ticker.item5": "Ponovljivi sustavi s jasnim ROI-em",
    "services.eyebrow": "Što automatiziramo",
    "services.title": "Interne procese koji tiho usporavaju rast.",
    "services.text":
      "Zamjenjujemo repetitivan i sklon pogreškama ručni rad sustavima koji održavaju operacije učinkovitima bez dodatnog zapošljavanja samo da bi se održao tempo.",
    "services.card1Title": "Lead i korisnički workflowovi",
    "services.card1Text":
      "Usmjerite dolazne leadove, pokrenite follow-up poruke, kvalificirajte upite i održavajte komunikaciju automatski.",
    "services.card2Title": "Izvještavanje i pregled poslovanja",
    "services.card2Text":
      "Povezujemo podatke iz raspršenih alata u strukturirano izvještavanje kako bi timovi odlučivali bez ručne konsolidacije.",
    "services.card3Title": "Administracija i koordinacija",
    "services.card3Text":
      "Automatiziramo projektne obavijesti, odobravanja, notifikacije i interne handoffove kroz email, Slack, WhatsApp i task alate.",
    "fit.eyebrow": "Za koga je ovo",
    "fit.title":
      "Za rastuće tvrtke s previše ručnog rada i premalo operativne poluge.",
    "fit.bestFitTitle": "Najbolji fit",
    "fit.bestFit1": "Male i srednje tvrtke",
    "fit.bestFit2": "Timovi od 10 do 300 zaposlenih",
    "fit.bestFit3": "Operacije koje se vrte oko tablica, emaila i poruka",
    "fit.bestFit4": "Vlasnici i voditelji koji vide da neefikasnost koči rast",
    "fit.outcomesTitle": "Glavni ishodi",
    "fit.outcome1": "Manje repetitivnog ručnog rada svaki tjedan",
    "fit.outcome2": "Manje skupih operativnih grešaka",
    "fit.outcome3": "Brže reakcije i bolji follow-through",
    "fit.outcome4": "Više vremena za poslove veće vrijednosti",
    "approach.eyebrow": "Kako radimo",
    "approach.title": "Praktičan model isporuke temeljen na brzini i jasnoći.",
    "approach.text":
      "Suradnju držimo jednostavnom: pronađemo trenje, dizajniramo odgovarajuću automatizaciju, implementiramo brzo i zatim je po potrebi unapređujemo.",
    "approach.step1Title": "Discovery i audit",
    "approach.step1Text":
      "Mapiramo vaš trenutni workflow, pronalazimo uska grla i identificiramo prilike za automatizaciju s najvećim učinkom.",
    "approach.step2Title": "Dizajn rješenja",
    "approach.step2Text":
      "Definiramo logiku workflowa, biramo prave alate i postavljamo očekivani ROI prije početka implementacije.",
    "approach.step3Title": "Implementacija",
    "approach.step3Text":
      "Gradimo automatizaciju koristeći AI, Make, Zapier, CRM-ove, Airtable, Sheets, Slack, WhatsApp i alate koje već koristite.",
    "approach.step4Title": "Optimizacija",
    "approach.step4Text":
      "Kad je prvi sustav live, poboljšavamo performanse i širimo automatizaciju na povezane procese.",
    "why.eyebrow": "Zašto NEXPI",
    "why.title": "Za operativce koji žele rezultate, a ne buzzworde.",
    "why.promise1Title": "ROI na prvom mjestu",
    "why.promise1Text":
      "AI koristimo kao alat. Pravi proizvod su bolje i učinkovitije operacije.",
    "why.promise2Title": "Brza izvedba",
    "why.promise2Text":
      "Prioritet su praktični sustavi koji brzo idu live, umjesto dugih i skupih projekata.",
    "why.promise3Title": "Bez nepotrebne kompleksnosti",
    "why.promise3Text":
      "Koristimo provjerene alate i jednostavne arhitekture koje vaše poslovanje zaista može koristiti.",
    "why.promise4Title": "Ponovljivi sustavi",
    "why.promise4Text":
      "Standardiziramo česte operativne probleme kako bi isporuka ostala brza i pouzdana.",
    "pricing.eyebrow": "Modeli suradnje",
    "pricing.title": "Fleksibilni načini za početak, ovisno o razini podrške koja vam treba.",
    "pricing.card1Title": "Projektno",
    "pricing.card1Subtitle": "Najbolje za jedan workflow visokog učinka",
    "pricing.card1Text":
      "Jednokratna implementacija usmjerena na konkretan operativni problem s jasnim opsegom i definiranim rezultatom.",
    "pricing.popular": "Popularno",
    "pricing.card2Title": "Mjesečni retainer",
    "pricing.card2Subtitle": "Najbolje za kontinuiranu optimizaciju",
    "pricing.card2Text":
      "Kontinuirana podrška, iteracije i širenje automatizacije kako poslovanje raste i pojavljuju se nova uska grla.",
    "pricing.card3Title": "Produktizirana rješenja",
    "pricing.card3Subtitle": "Najbolje za ponovljive use caseove",
    "pricing.card3Text":
      "Sustavi fiksnog opsega s bržim rolloutom i nižim troškom kada je problem čest i rješenje se može standardizirati.",
    "contact.eyebrow": "Krenimo",
    "contact.title":
      "Ako ručni rad usporava rast, to je prvi proces koji treba riješiti.",
    "contact.text":
      "Pogledat ćemo vaše trenutne operacije, identificirati jednu ili dvije jake prilike za automatizaciju i pokazati gdje će ROI najvjerojatnije nastati.",
    "contact.cta": "Javi se NEXPI-ju",
    "contact.ctaHref":
      "mailto:nexpi.info@gmail.com?subject=Prilika%20za%20automatizaciju",
    "footer.tagline": "AI automatizacija procesa za rastuće tvrtke.",
  },
};

const languageButtons = document.querySelectorAll("[data-lang-toggle]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const pageTitle = document.getElementById("page-title");
const metaDescription = document.getElementById("meta-description");
const metaOgTitle = document.getElementById("meta-og-title");
const metaOgDescription = document.getElementById("meta-og-description");
const revealItems = document.querySelectorAll("[data-reveal]");

let currentLanguage = "en";

function looksCroatian() {
  const browserLanguages = [
    ...(navigator.languages || []),
    navigator.language || "",
    navigator.userLanguage || "",
  ].filter(Boolean);
  const hasCroatianLanguage = browserLanguages.some(
    (language) => /^hr\b/i.test(language) || /-HR\b/i.test(language)
  );
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

  return hasCroatianLanguage || timezone === "Europe/Zagreb";
}

function updateNavToggleLabel(language) {
  if (!navToggle) {
    return;
  }

  const openKey = navToggle.dataset.i18nNavOpen;
  const closeKey = navToggle.dataset.i18nNavClose;
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  const key = expanded ? closeKey : openKey;

  if (key && translations[language]?.[key]) {
    navToggle.setAttribute("aria-label", translations[language][key]);
  }
}

function applyLanguage(language) {
  const dict = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language;

  if (pageTitle) {
    pageTitle.textContent = dict["meta.title"];
  }

  document.title = dict["meta.title"];

  if (metaDescription) {
    metaDescription.setAttribute("content", dict["meta.description"]);
  }

  if (metaOgTitle) {
    metaOgTitle.setAttribute("content", dict["meta.ogTitle"]);
  }

  if (metaOgDescription) {
    metaOgDescription.setAttribute("content", dict["meta.ogDescription"]);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key && dict[key]) {
      element.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-href]").forEach((element) => {
    const key = element.dataset.i18nHref;
    if (key && dict[key]) {
      element.setAttribute("href", dict[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langToggle === language;
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateNavToggleLabel(language);
}

function setLanguage(language, persist = true) {
  applyLanguage(language);

  if (persist) {
    localStorage.setItem("nexpi-language", language);
  }
}

const savedLanguage = localStorage.getItem("nexpi-language");
setLanguage(savedLanguage || (looksCroatian() ? "hr" : "en"), false);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langToggle);
  });
});

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
    updateNavToggleLabel(currentLanguage);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      updateNavToggleLabel(currentLanguage);
    });
  });
}

if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
