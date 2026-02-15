// ----- Data setup -----

const REALMS = [
  "English",
  "Maths",
  "Business",
  "Chemistry",
  "Biology",
  "Physics",
  "History",
  ""
];

const QUEST_TEMPLATES = {
  English: [
    { title: "Analyse a fiction extract (Q1–4)", xp: 25, desc: "Annotate a fiction extract focusing on language and structure." },
    { title: "Q2 language analysis paragraph", xp: 20, desc: "Write a detailed Q2 paragraph analysing language methods and effects." },
    { title: "Q3 structure analysis paragraph", xp: 20, desc: "Write a Q3 paragraph focusing on structural choices and their impact." },
    { title: "Q4 evaluation paragraph", xp: 25, desc: "Write a Q4 evaluation paragraph using judicious quotes and methods." },
    { title: "Timed Q5 descriptive piece", xp: 35, desc: "Write a descriptive or narrative response to a Q5 prompt in 45 minutes." },
    { title: "2 timed extracts (Language)", xp: 40, desc: "Complete two timed extract questions from a past Language Paper 1." },
    { title: "Macbeth: ambition & guilt", xp: 20, desc: "Revise ambition and guilt with 3 key quotes." },
    { title: "Macbeth: key scenes", xp: 25, desc: "Revisit Act 1 Scene 7, Act 2 Scene 2, Act 3 Scene 4, Act 5." },
    { title: "Memorise 10 Macbeth quotes", xp: 30, desc: "Learn 8–10 high-value Macbeth quotes." },
    { title: "ACC: themes overview", xp: 20, desc: "Summarise redemption, poverty, and Christmas spirit." },
    { title: "ACC: Scrooge’s transformation", xp: 25, desc: "Track Scrooge’s change with key quotes." },
    { title: "Memorise 10 ACC quotes", xp: 30, desc: "Learn 8–10 key ACC quotes." },
    { title: "Macbeth essay plan", xp: 25, desc: "Plan a full Macbeth essay." },
    { title: "ACC essay plan", xp: 25, desc: "Plan a full A Christmas Carol essay." },
    { title: "Language & Lit flashcards", xp: 20, desc: "Create flashcards for quotes and themes." }
  ],

  Maths: [
    { title: "Fractions, ratios, percentages drill", xp: 25, desc: "Do a mixed set of 15 questions." },
    { title: "Algebra manipulation practice", xp: 25, desc: "Simplify expressions and factorise." },
    { title: "Solving equations set", xp: 25, desc: "Solve linear and quadratic equations." },
    { title: "Standard form practice", xp: 20, desc: "Convert and calculate in standard form." },
    { title: "Geometry non-calc practice", xp: 25, desc: "Angles, constructions, area/perimeter." },
    { title: "HCF/LCM prime factorisation", xp: 20, desc: "Use prime factor trees." },
    { title: "SOHCAHTOA practice", xp: 25, desc: "Solve trig problems." },
    { title: "Trig exact values", xp: 20, desc: "Memorise exact trig values." },
    { title: "Probability: tree diagrams", xp: 25, desc: "Complete 5 tree diagram questions." },
    { title: "Probability: Venn diagrams", xp: 25, desc: "Solve 5 Venn diagram questions." },
    { title: "Statistics: averages & box plots", xp: 25, desc: "Interpret and calculate." },
    { title: "Graphs: linear & quadratic", xp: 25, desc: "Plot or interpret graphs." },
    { title: "Compound interest & growth", xp: 25, desc: "Solve growth/decay problems." },
    { title: "Full non-calculator paper", xp: 60, desc: "Complete a full Paper 1." },
    { title: "Full calculator paper", xp: 60, desc: "Complete a full Paper 2." }
  ],

  Business: [
    { title: "Marketing mix (4Ps) summary", xp: 25, desc: "Create a one-page summary." },
    { title: "Marketing mix case study", xp: 25, desc: "Apply 4Ps to a real business." },
    { title: "Business growth & globalisation", xp: 25, desc: "Summarise key impacts." },
    { title: "Recruitment process", xp: 20, desc: "Revise recruitment stages." },
    { title: "Motivation methods", xp: 20, desc: "Financial and non-financial." },
    { title: "Organisation structures", xp: 20, desc: "Tall vs flat structures." },
    { title: "Break-even calculations", xp: 25, desc: "Calculate break-even." },
    { title: "Cash flow forecasting", xp: 25, desc: "Interpret cash flow." },
    { title: "Revenue/cost/profit", xp: 20, desc: "Practice calculations." },
    { title: "External influences", xp: 20, desc: "Economy, ethics, legislation." },
    { title: "12-mark question practice", xp: 35, desc: "Write a full 12-mark answer." }
  ],

  Chemistry: [
    { title: "Chromatography revision", xp: 25, desc: "Interpret chromatograms." },
    { title: "Gas tests practice", xp: 20, desc: "Learn tests for gases." },
    { title: "Rates of reaction: factors", xp: 25, desc: "Temperature, concentration, catalysts." },
    { title: "Rates of reaction: graphs", xp: 25, desc: "Interpret rate graphs." },
    { title: "Energy changes", xp: 25, desc: "Exo vs endo." },
    { title: "Organic: alkanes & alkenes", xp: 25, desc: "Revise structures and reactions." },
    { title: "Organic: alcohols & acids", xp: 25, desc: "Revise reactions." },
    { title: "Moles calculations", xp: 30, desc: "Mass, moles, concentration." },
    { title: "Earth’s atmosphere", xp: 20, desc: "Evolution and greenhouse gases." },
    { title: "Required practicals (Chem)", xp: 30, desc: "Summarise all practicals." }
  ],

  Biology: [
    { title: "Nervous system revision", xp: 25, desc: "Neurones, synapses, reflex arcs." },
    { title: "Hormones revision", xp: 25, desc: "Endocrine system." },
    { title: "Draw reflex arc diagram", xp: 20, desc: "Label all components." },
    { title: "Draw menstrual cycle diagram", xp: 20, desc: "Label hormones and phases." },
    { title: "Meiosis vs mitosis", xp: 25, desc: "Compare with diagrams." },
    { title: "Punnett squares", xp: 25, desc: "Practise monohybrid crosses." },
    { title: "Genetic key terms", xp: 25, desc: "Genotype, phenotype, etc." },
    { title: "Variation & evolution", xp: 25, desc: "Summarise causes and processes." },
    { title: "Ecology: cycles", xp: 25, desc: "Carbon and water cycles." },
    { title: "Required practicals (Bio)", xp: 30, desc: "Summarise all practicals." }
  ],

  Physics: [
    { title: "Hooke’s law practice", xp: 25, desc: "Force–extension calculations." },
    { title: "Motion graphs", xp: 25, desc: "Interpret distance/velocity-time." },
    { title: "F = ma practice", xp: 25, desc: "Solve force problems." },
    { title: "EM spectrum", xp: 25, desc: "Order, uses, dangers." },
    { title: "Wave equation practice", xp: 25, desc: "v = f × λ questions." },
    { title: "Magnetism & electromagnets", xp: 25, desc: "Fields and motor effect." },
    { title: "Life cycle of stars", xp: 25, desc: "Stages of star evolution." },
    { title: "Red-shift & Big Bang", xp: 20, desc: "Evidence for expansion." },
    { title: "Required practicals (Phys)", xp: 30, desc: "Summarise all practicals." }
  ],

  History: [
    { title: "Making of America timeline", xp: 25, desc: "Expansion westward." },
    { title: "Native American relations", xp: 25, desc: "Key conflicts and impacts." },
    { title: "Civil War & Reconstruction", xp: 25, desc: "Causes and consequences." },
    { title: "Rise of Hitler", xp: 25, desc: "Key steps to power." },
    { title: "Nazi control & propaganda", xp: 25, desc: "Methods of control." },
    { title: "Life in Nazi Germany", xp: 25, desc: "Groups and experiences." },
    { title: "Migration to Britain timeline", xp: 25, desc: "Major waves of migration." },
    { title: "Migration: causes & impacts", xp: 25, desc: "Push/pull factors." },
    { title: "Elizabethan court", xp: 25, desc: "Key figures and structure." },
    { title: "Elizabethan religion", xp: 25, desc: "Religious settlement." },
    { title: "10-mark question practice", xp: 30, desc: "Write a 10-mark answer." },
    { title: "20-mark question practice", xp: 40, desc: "Write a 20-mark essay." }
  ],

  : [
    { title: "Flowcharts & pseudocode", xp: 25, desc: "Write and trace algorithms." },
    { title: "Searching & sorting", xp: 25, desc: "Binary search, merge sort." },
    { title: "Data types & structures", xp: 20, desc: "Arrays, casting, types." },
    { title: "Programming constructs", xp: 25, desc: "Sequence, selection, iteration." },
    { title: "Boolean logic", xp: 25, desc: "Truth tables and logic gates." },
    { title: "CPU architecture", xp: 25, desc: "Registers and FDE cycle." },
    { title: "Memory & storage", xp: 20, desc: "RAM, ROM, SSD, HDD." },
    { title: "Networks & protocols", xp: 25, desc: "Topologies and protocols." },
    { title: "Cybersecurity threats", xp: 25, desc: "Threats and prevention." },
    { title: "Pseudocode practice", xp: 25, desc: "Write pseudocode for problems." },
    { title: "Daily algorithm question", xp: 20, desc: "Solve one algorithm problem." },
    { title: "CPU flashcards", xp: 20, desc: "Create CPU component cards." },
    { title: "Past paper section", xp: 35, desc: "Complete a CS Paper 1 section." }
  ]
};

// ----- State -----

let state = {
  xp: {},
  levels: {},
  activeQuests: [],
  completedQuests: [],
  selectedQuestId: null,
  darkMode: false,
  openRealms: {}
};

REALMS.forEach(r => {
  state.xp[r] = 0;
  state.levels[r] = 1;
  state.openRealms[r] = false;
});

// ----- LocalStorage helpers -----

const STORAGE_KEY = "gcseQuestGameState_full";

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);

    if (parsed.xp) state.xp = { ...state.xp, ...parsed.xp };
    if (parsed.levels) state.levels = { ...state.levels, ...parsed.levels };
    if (Array.isArray(parsed.activeQuests)) state.activeQuests = parsed.activeQuests;
    if (Array.isArray(parsed.completedQuests)) state.completedQuests = parsed.completedQuests;
    if (typeof parsed.darkMode === "boolean") state.darkMode = parsed.darkMode;
    if (parsed.openRealms) state.openRealms = { ...state.openRealms, ...parsed.openRealms };
    if (parsed.selectedQuestId) state.selectedQuestId = parsed.selectedQuestId;

    REALMS.forEach(r => {
      if (typeof state.xp[r] !== "number") state.xp[r] = 0;
      if (typeof state.levels[r] !== "number") state.levels[r] = 1;
      if (typeof state.openRealms[r] !== "boolean") state.openRealms[r] = false;
    });
  } catch (e) {
    console.error("Failed to load state:", e);
  }
}

// ----- XP + Level helpers -----

function addXpToRealm(realm, amount) {
  if (typeof state.xp[realm] !== "number") state.xp[realm] = 0;
  if (typeof state.levels[realm] !== "number") state.levels[realm] = 1;

  state.xp[realm] += amount;

  while (state.xp[realm] >= 100) {
    state.xp[realm] -= 100;
    state.levels[realm] += 1;
  }

  saveState();
  renderXpBars();
}

// ----- DOM refs -----

const darkModeToggle = document.getElementById("darkModeToggle");
const realmsContainer = document.getElementById("realmsContainer");
const collapseAllBtn = document.getElementById("collapseAllBtn");

const realmSelect = document.getElementById("realmSelect");
const xpPresetSelect = document.getElementById("xpPresetSelect");
const addXpBtn = document.getElementById("addXpBtn");
const xpBarsContainer = document.getElementById("xpBarsContainer");

const generatorRealmSelect = document.getElementById("generatorRealmSelect");
const generateQuestBtn = document.getElementById("generateQuestBtn");

const detailTitle = document.getElementById("detailTitle");
const detailRealm = document.getElementById("detailRealm");
const detailXp = document.getElementById("detailXp");
const detailDescription = document.getElementById("detailDescription");
const completeQuestBtn = document.getElementById("completeQuestBtn");
const abandonQuestBtn = document.getElementById("abandonQuestBtn");

const questLogList = document.getElementById("questLogList");
const resetBtn = document.getElementById("resetBtn");

// ----- Rendering -----

function renderDarkMode() {
  if (state.darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function renderRealmSelects() {
  realmSelect.innerHTML = "";
  generatorRealmSelect.innerHTML = "";
  REALMS.forEach(realm => {
    const opt1 = document.createElement("option");
    opt1.value = realm;
    opt1.textContent = realm;
    realmSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = realm;
    opt2.textContent = realm;
    generatorRealmSelect.appendChild(opt2);
  });
}

function renderXpBars() {
  xpBarsContainer.innerHTML = "";
  REALMS.forEach(realm => {
    const row = document.createElement("div");
    row.className = "xp-bar-row";

    const label = document.createElement("div");
    label.className = "xp-bar-label";
    label.textContent = `${realm}: Level ${state.levels[realm]} — ${state.xp[realm]}/100 XP`;

    const bar = document.createElement("div");
    bar.className = "xp-bar";

    const fill = document.createElement("div");
    fill.className = "xp-bar-fill";
    fill.style.width = `${state.xp[realm]}%`;

    bar.appendChild(fill);
    row.appendChild(label);
    row.appendChild(bar);
    xpBarsContainer.appendChild(row);
  });
}

function renderRealmsAndQuests() {
  realmsContainer.innerHTML = "";

  REALMS.forEach(realm => {
    const realmDiv = document.createElement("div");
    realmDiv.className = "realm";

    const header = document.createElement("div");
    header.className = "realm-header";

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";

    const arrow = document.createElement("span");
    arrow.className = "realm-arrow";
    arrow.textContent = state.openRealms[realm] ? "▾" : "▸";

    const title = document.createElement("h3");
    title.textContent = realm;

    left.appendChild(arrow);
    left.appendChild(title);
    header.appendChild(left);

    header.addEventListener("click", () => {
      state.openRealms[realm] = !state.openRealms[realm];
      saveState();
      renderRealmsAndQuests();
    });

    const questsContainer = document.createElement("div");
    questsContainer.className = "realm-quests";
    if (state.openRealms[realm]) {
      questsContainer.classList.add("open");
    }

    const questsForRealm = state.activeQuests.filter(q => q.realm === realm);
    questsForRealm.forEach(q => {
      const item = document.createElement("div");
      item.className = "quest-item";

      const text = document.createElement("div");
      text.className = "quest-text";
      text.textContent = `${q.title} [${q.xp} XP]`;

      const tick = document.createElement("div");
      tick.className = "quest-tick";
      tick.textContent = "✓";

      text.addEventListener("click", () => {
        state.selectedQuestId = q.id;
        saveState();
        renderQuestDetails();
      });

      tick.addEventListener("click", (e) => {
        e.stopPropagation();
        const ok = confirm("Are you sure you want to complete this quest?");
        if (!ok) return;
        completeQuestById(q.id);
      });

      item.appendChild(text);
      item.appendChild(tick);
      questsContainer.appendChild(item);
    });

    realmDiv.appendChild(header);
    realmDiv.appendChild(questsContainer);
    realmsContainer.appendChild(realmDiv);
  });
}

function renderQuestDetails() {
  const q = state.activeQuests.find(q => q.id === state.selectedQuestId);
  if (!q) {
    detailTitle.textContent = "None selected";
    detailRealm.textContent = "-";
    detailXp.textContent = "-";
    detailDescription.textContent = "Select a quest to see details.";
    completeQuestBtn.disabled = true;
    abandonQuestBtn.disabled = true;
    return;
  }

  detailTitle.textContent = q.title;
  detailRealm.textContent = q.realm;
  detailXp.textContent = `${q.xp} XP`;
  detailDescription.textContent = q.desc;

  completeQuestBtn.disabled = false;
  abandonQuestBtn.disabled = false;
}

function renderQuestLog() {
  questLogList.innerHTML = "";
  state.completedQuests
    .slice()
    .sort((a, b) => b.completedAt - a.completedAt)
    .forEach(q => {
      const li = document.createElement("li");
      const date = new Date(q.completedAt).toLocaleString();
      li.textContent = `[${q.realm}] ${q.title} (+${q.xp} XP) — ${date}`;
      questLogList.appendChild(li);
    });
}

// ----- Quest helpers -----

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function addRandomQuest(realm) {
  const templates = QUEST_TEMPLATES[realm];
  if (!templates || templates.length === 0) return;
  const t = templates[Math.floor(Math.random() * templates.length)];
  const quest = {
    id: generateId(),
    realm,
    title: t.title,
    xp: t.xp,
    desc: t.desc
  };
  state.activeQuests.push(quest);
  state.selectedQuestId = quest.id;
  saveState();
  renderRealmsAndQuests();
  renderQuestDetails();
}

function completeQuestById(id) {
  const idx = state.activeQuests.findIndex(q => q.id === id);
  if (idx === -1) return;
  const q = state.activeQuests[idx];

  addXpToRealm(q.realm, q.xp);

  state.completedQuests.push({
    ...q,
    completedAt: Date.now()
  });

  state.activeQuests.splice(idx, 1);

  if (state.selectedQuestId === id) {
    state.selectedQuestId = null;
  }

  saveState();
  renderRealmsAndQuests();
  renderQuestDetails();
  renderQuestLog();
}

function abandonQuestById(id) {
  const idx = state.activeQuests.findIndex(q => q.id === id);
  if (idx === -1) return;
  state.activeQuests.splice(idx, 1);
  if (state.selectedQuestId === id) {
    state.selectedQuestId = null;
  }
  saveState();
  renderRealmsAndQuests();
  renderQuestDetails();
}

// ----- Reset all progress -----

function resetAllProgress() {
  const ok = confirm("Are you sure you want to reset ALL progress? This cannot be undone.");
  if (!ok) return;

  REALMS.forEach(r => {
    state.xp[r] = 0;
    state.levels[r] = 1;
    state.openRealms[r] = false;
  });

  state.activeQuests = [];
  state.completedQuests = [];
  state.selectedQuestId = null;

  saveState();

  renderXpBars();
  renderRealmsAndQuests();
  renderQuestDetails();
  renderQuestLog();
}

// ----- Event wiring -----

darkModeToggle.addEventListener("click", () => {
  state.darkMode = !state.darkMode;
  saveState();
  renderDarkMode();
});

collapseAllBtn.addEventListener("click", () => {
  REALMS.forEach(r => {
    state.openRealms[r] = false;
  });
  saveState();
  renderRealmsAndQuests();
});

addXpBtn.addEventListener("click", () => {
  const realm = realmSelect.value;
  const xp = parseInt(xpPresetSelect.value, 10) || 0;
  addXpToRealm(realm, xp);
});

generateQuestBtn.addEventListener("click", () => {
  const realm = generatorRealmSelect.value;
  addRandomQuest(realm);
});

completeQuestBtn.addEventListener("click", () => {
  if (!state.selectedQuestId) return;
  const ok = confirm("Are you sure you want to complete this quest?");
  if (!ok) return;
  completeQuestById(state.selectedQuestId);
});

abandonQuestBtn.addEventListener("click", () => {
  if (!state.selectedQuestId) return;
  const ok = confirm("Are you sure you want to abandon this quest?");
  if (!ok) return;
  abandonQuestById(state.selectedQuestId);
});

if (resetBtn) {
  resetBtn.addEventListener("click", resetAllProgress);
}

// ----- Init -----

loadState();
renderDarkMode();
renderRealmSelects();
renderXpBars();
renderRealmsAndQuests();
renderQuestDetails();
renderQuestLog();
