// ----- Data setup -----

const REALMS = [
  "English",
  "Maths",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "Computer Science",
  "RE / Philosophy"
];

const QUEST_TEMPLATES = {
  English: [
    { title: "Annotate a fiction extract", xp: 20, desc: "Identify language and structure." },
    { title: "Write a creative description", xp: 25, desc: "Use imagery and senses." },
    { title: "Analyse a character’s development", xp: 30, desc: "Track change across a text." },
    { title: "Compare two poems", xp: 40, desc: "Focus on themes and methods." },
    { title: "Plan a Macbeth essay", xp: 20, desc: "Create a detailed essay plan." },
    { title: "Write a Macbeth essay", xp: 50, desc: "Full exam-style response." },
    { title: "Analyse a fiction extract", xp: 25, desc: "Annotate key effects." },
    { title: "Language Paper 1 mock", xp: 100, desc: "Sit a full timed paper." },
    { title: "Language Paper 2 mock", xp: 100, desc: "Sit a full timed paper." },
    { title: "Revise persuasive techniques", xp: 15, desc: "List devices with examples." },
    { title: "Write a persuasive letter", xp: 30, desc: "Argue a viewpoint clearly." },
    { title: "Analyse a non-fiction article", xp: 25, desc: "Identify tone and purpose." },
    { title: "Practice summary writing", xp: 20, desc: "Compare two viewpoints briefly." },
    { title: "Memorise Macbeth quotes", xp: 20, desc: "Learn 10 key quotes." },
    { title: "Q5 creative writing", xp: 40, desc: "Write a full creative piece." },
    { title: "Q4 evaluation practice", xp: 30, desc: "Evaluate writer’s methods." },
    { title: "Analyse an unseen poem", xp: 25, desc: "Focus on imagery and tone." },
    { title: "Compare two characters", xp: 25, desc: "Write a comparison paragraph." },
    { title: "Revise structural techniques", xp: 15, desc: "Note shifts and focus." },
    { title: "Timed analytical paragraph", xp: 20, desc: "10-minute paragraph." }
  ],

  Maths: [
    { title: "Algebra worksheet", xp: 25, desc: "Solve equations and simplify." },
    { title: "Simultaneous equations", xp: 30, desc: "Solve 6 problems." },
    { title: "Revise key formulae", xp: 20, desc: "Area, volume, trig." },
    { title: "Past paper questions", xp: 50, desc: "15 mixed questions." },
    { title: "Pythagoras practice", xp: 20, desc: "8 right-angled problems." },
    { title: "Trigonometry practice", xp: 25, desc: "8 SOHCAHTOA questions." },
    { title: "Graphs and gradients", xp: 20, desc: "Straight-line graphs." },
    { title: "Inequalities practice", xp: 20, desc: "Solve and graph." },
    { title: "Factorisation practice", xp: 25, desc: "10 expressions." },
    { title: "Quadratic equations", xp: 30, desc: "Solve by factorising/formula." },
    { title: "Probability questions", xp: 20, desc: "10 problems." },
    { title: "Ratio and proportion", xp: 20, desc: "10 questions." },
    { title: "Area & perimeter", xp: 15, desc: "Compound shapes." },
    { title: "Volume of 3D shapes", xp: 20, desc: "6 problems." },
    { title: "Transformations", xp: 20, desc: "Rotation, reflection, translation." },
    { title: "Statistics revision", xp: 20, desc: "Charts and averages." },
    { title: "Worded problems", xp: 30, desc: "5 multi-step questions." },
    { title: "Fractions & decimals", xp: 15, desc: "Convert and calculate." },
    { title: "Mini-mock", xp: 60, desc: "30-minute paper." },
    { title: "Memorise identities", xp: 15, desc: "Key algebraic identities." }
  ],

  Physics: [
    { title: "Revise waves", xp: 20, desc: "Properties and examples." },
    { title: "Electricity calculations", xp: 30, desc: "V=IR and power." },
    { title: "Required practicals", xp: 40, desc: "Summarise all methods." },
    { title: "Energy stores", xp: 20, desc: "Transfers and diagrams." },
    { title: "Forces practice", xp: 25, desc: "F=ma problems." },
    { title: "Density calculations", xp: 20, desc: "Mass, volume, density." },
    { title: "Specific heat capacity", xp: 25, desc: "SHC questions." },
    { title: "Magnetism revision", xp: 20, desc: "Fields and uses." },
    { title: "Radioactivity", xp: 25, desc: "Types and half-life." },
    { title: "Circuit diagrams", xp: 20, desc: "Symbols and layouts." },
    { title: "Momentum questions", xp: 25, desc: "Collisions and changes." },
    { title: "Hooke’s Law", xp: 20, desc: "Extension and force." },
    { title: "Waves practical", xp: 25, desc: "Method and variables." },
    { title: "Thermal physics", xp: 20, desc: "Conduction, convection, radiation." },
    { title: "Light & lenses", xp: 20, desc: "Ray diagrams." },
    { title: "Pressure questions", xp: 20, desc: "Liquids and gases." },
    { title: "Atomic structure", xp: 20, desc: "Models and particles." },
    { title: "Motion graphs", xp: 25, desc: "Distance/velocity-time." },
    { title: "Work done", xp: 20, desc: "Force × distance." },
    { title: "Physics mini-mock", xp: 60, desc: "30-minute test." }
  ],

  Chemistry: [
    { title: "Revise bonding types", xp: 20, desc: "Ionic, covalent, metallic." },
    { title: "Moles calculations", xp: 30, desc: "10 questions." },
    { title: "Chemical reactions", xp: 25, desc: "Balance equations." },
    { title: "Acids and alkalis", xp: 20, desc: "pH and neutralisation." },
    { title: "Electrolysis", xp: 25, desc: "Questions and diagrams." },
    { title: "Periodic table", xp: 20, desc: "Groups and trends." },
    { title: "Rates of reaction", xp: 25, desc: "Factors and graphs." },
    { title: "Crude oil", xp: 20, desc: "Fractions and uses." },
    { title: "Titration calculations", xp: 30, desc: "Concentration problems." },
    { title: "Required practicals", xp: 40, desc: "Summarise all." },
    { title: "Reactivity series", xp: 20, desc: "Order and displacement." },
    { title: "Atomic structure", xp: 20, desc: "Protons, neutrons, electrons." },
    { title: "Energy changes", xp: 25, desc: "Endo vs exo." },
    { title: "Bond energy", xp: 30, desc: "Calculate ΔH." },
    { title: "Chemical tests", xp: 20, desc: "Ions and gases." },
    { title: "Nanoparticles", xp: 15, desc: "Uses and risks." },
    { title: "Earth’s atmosphere", xp: 20, desc: "Evolution and gases." },
    { title: "Water purification", xp: 20, desc: "Treatment methods." },
    { title: "Polymers", xp: 20, desc: "Addition and condensation." },
    { title: "Chemistry mini-mock", xp: 60, desc: "30-minute test." }
  ],

  Biology: [
    { title: "Revise cell biology", xp: 20, desc: "Cells and division." },
    { title: "6-mark questions", xp: 30, desc: "Three extended answers." },
    { title: "Required practicals", xp: 35, desc: "Mindmap all." },
    { title: "Enzymes revision", xp: 20, desc: "Lock and key, factors." },
    { title: "Digestive system", xp: 20, desc: "Organs and roles." },
    { title: "Photosynthesis", xp: 25, desc: "Factors and equation." },
    { title: "Respiration", xp: 20, desc: "Aerobic vs anaerobic." },
    { title: "Genetics & inheritance", xp: 25, desc: "Punnett squares." },
    { title: "Evolution", xp: 20, desc: "Natural selection." },
    { title: "Communicable diseases", xp: 20, desc: "Pathogens and defence." },
    { title: "Non-communicable diseases", xp: 20, desc: "Risk factors." },
    { title: "Homeostasis", xp: 25, desc: "Control systems." },
    { title: "Nervous system", xp: 25, desc: "Neurones and reflexes." },
    { title: "Hormones", xp: 20, desc: "Endocrine system." },
    { title: "Ecology", xp: 20, desc: "Ecosystems and cycles." },
    { title: "Biodiversity", xp: 20, desc: "Threats and protection." },
    { title: "Human reproduction", xp: 20, desc: "Cycle and fertility." },
    { title: "Plant reproduction", xp: 15, desc: "Pollination and seeds." },
    { title: "Adaptations", xp: 20, desc: "Explain examples." },
    { title: "Biology mini-mock", xp: 60, desc: "30-minute test." }
  ],

  History: [
    { title: "Revise key dates", xp: 20, desc: "Timeline of events." },
    { title: "Plan a 12-mark answer", xp: 25, desc: "Structured plan." },
    { title: "Source questions", xp: 30, desc: "Four source tasks." },
    { title: "Weimar Germany", xp: 25, desc: "1918–1933 summary." },
    { title: "Nazi Germany", xp: 25, desc: "Control and policies." },
    { title: "Cold War timeline", xp: 20, desc: "Key crises." },
    { title: "Cold War essay", xp: 40, desc: "Full essay." },
    { title: "Medicine Through Time", xp: 25, desc: "Key developments." },
    { title: "Elizabethan England", xp: 20, desc: "Reign overview." },
    { title: "Interpretations practice", xp: 25, desc: "Evaluate two views." },
    { title: "Crime & Punishment", xp: 20, desc: "Changes over time." },
    { title: "Industrial Revolution", xp: 20, desc: "Impacts summary." },
    { title: "Trench warfare", xp: 20, desc: "Life in trenches." },
    { title: "Treaty of Versailles", xp: 20, desc: "Terms and impact." },
    { title: "League of Nations", xp: 20, desc: "Successes/failures." },
    { title: "USA 1920s", xp: 20, desc: "Boom and bust." },
    { title: "Civil Rights Movement", xp: 25, desc: "Key figures/events." },
    { title: "Exam-style essay", xp: 40, desc: "Full response." },
    { title: "Key terms flashcards", xp: 15, desc: "20 cards." },
    { title: "History mini-mock", xp: 60, desc: "30-minute test." }
  ],

  Geography: [
    { title: "Tectonic hazards", xp: 20, desc: "Causes and impacts." },
    { title: "Haiti earthquake", xp: 25, desc: "Case study." },
    { title: "Japan earthquake", xp: 25, desc: "Compare responses." },
    { title: "Weather hazards", xp: 20, desc: "Storms and extremes." },
    { title: "Climate change", xp: 20, desc: "Evidence and causes." },
    { title: "River landscapes", xp: 20, desc: "Processes and landforms." },
    { title: "Coastal landscapes", xp: 20, desc: "Erosion and deposition." },
    { title: "Urban issues", xp: 20, desc: "Growth and challenges." },
    { title: "Rio de Janeiro", xp: 25, desc: "Opportunities/challenges." },
    { title: "London case study", xp: 25, desc: "Urban change." },
    { title: "Ecosystems", xp: 20, desc: "Biomes and cycles." },
    { title: "Tropical rainforests", xp: 20, desc: "Characteristics." },
    { title: "Hot deserts", xp: 20, desc: "Adaptations." },
    { title: "Resource management", xp: 20, desc: "Food, water, energy." },
    { title: "UK physical landscapes", xp: 20, desc: "Key features." },
    { title: "Fieldwork methods", xp: 20, desc: "Sampling and data." },
    { title: "Map skills", xp: 20, desc: "OS maps and grids." },
    { title: "Graph skills", xp: 20, desc: "Construct and read." },
    { title: "Geographical skills test", xp: 30, desc: "Skills worksheet." },
    { title: "Geography mini-mock", xp: 60, desc: "30-minute test." }
  ],

  "Computer Science": [
    { title: "Programming questions", xp: 30, desc: "Solve 5 problems." },
    { title: "Revise algorithms", xp: 25, desc: "Sorting/searching." },
    { title: "Trace algorithms", xp: 25, desc: "Dry-run examples." },
    { title: "Data types & structures", xp: 20, desc: "Review and notes." },
    { title: "Boolean logic", xp: 20, desc: "Truth tables." },
    { title: "CPU architecture", xp: 20, desc: "Fetch-decode-execute." },
    { title: "Memory & storage", xp: 20, desc: "RAM, ROM, SSD, HDD." },
    { title: "Networks basics", xp: 20, desc: "LAN, WAN, topologies." },
    { title: "Network security", xp: 20, desc: "Threats and measures." },
    { title: "Software development", xp: 20, desc: "Life cycle stages." },
    { title: "Binary & hex", xp: 20, desc: "Convert and add." },
    { title: "Compression", xp: 20, desc: "Lossy vs lossless." },
    { title: "Databases basics", xp: 20, desc: "Tables and keys." },
    { title: "SQL practice", xp: 25, desc: "Write simple queries." },
    { title: "Ethical issues", xp: 20, desc: "Impacts of tech." },
    { title: "Revision flashcards", xp: 15, desc: "Key CS terms." },
    { title: "Pseudocode practice", xp: 25, desc: "Write algorithms." },
    { title: "Flowcharts", xp: 20, desc: "Draw logic flows." },
    { title: "Past paper section", xp: 40, desc: "Exam-style questions." },
    { title: "CS mini-mock", xp: 60, desc: "30-minute test." }
  ],

  "RE / Philosophy": [
    { title: "Revise key beliefs", xp: 20, desc: "Two religions/worldviews." },
    { title: "12-mark evaluation", xp: 30, desc: "Write a full answer." },
    { title: "Quote memorisation", xp: 25, desc: "10 key quotes." },
    { title: "Christian beliefs", xp: 20, desc: "Nature of God, Trinity." },
    { title: "Christian practices", xp: 20, desc: "Worship and sacraments." },
    { title: "Islamic beliefs", xp: 20, desc: "Articles and pillars." },
    { title: "Islamic practices", xp: 20, desc: "Prayer, fasting, Hajj." },
    { title: "Philosophy of religion", xp: 20, desc: "Arguments for/against God." },
    { title: "Ethics: war & peace", xp: 20, desc: "Just war and pacifism." },
    { title: "Ethics: crime & punishment", xp: 20, desc: "Aims of punishment." },
    { title: "Ethics: relationships", xp: 20, desc: "Marriage and family." },
    { title: "Ethics: life issues", xp: 20, desc: "Abortion, euthanasia." },
    { title: "Exam-style 4-mark", xp: 15, desc: "Short belief questions." },
    { title: "Exam-style 5-mark", xp: 20, desc: "Explain questions." },
    { title: "Exam-style 12-mark", xp: 30, desc: "Balanced evaluation." },
    { title: "Compare two religions", xp: 25, desc: "On one ethical issue." },
    { title: "Create revision mindmap", xp: 20, desc: "One full topic." },
    { title: "Flashcards for quotes", xp: 15, desc: "Key references." },
    { title: "Practice timed question", xp: 20, desc: "Under exam timing." },
    { title: "RE/Philosophy mini-mock", xp: 60, desc: "30-minute test." }
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