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

// Simple random quest templates per realm
const QUEST_TEMPLATES = {
  English: [
    { title: "Analyse a fiction extract", xp: 25, desc: "Analyse a medium-length fiction extract and annotate key language features." },
    { title: "Write a Macbeth essay", xp: 50, desc: "Write a full essay on a key theme or character in Macbeth." },
    { title: "Complete Language Paper 1 mock", xp: 100, desc: "Sit a full Language Paper 1 under timed conditions." }
  ],
  Maths: [
    { title: "Complete algebra questions", xp: 25, desc: "Complete 10 algebra questions without a calculator." },
    { title: "Practice past paper questions", xp: 50, desc: "Do 15 mixed-topic questions from a past paper." },
    { title: "Revise key formulae", xp: 20, desc: "Write out and memorise all key formulae for your exam board." }
  ],
  Physics: [
    { title: "Revise waves topic", xp: 20, desc: "Review notes and answer questions on waves and their properties." },
    { title: "Practice electricity calculations", xp: 30, desc: "Complete 10 electricity calculation questions." },
    { title: "Required practical revision", xp: 40, desc: "Revise all Physics required practicals and summarise methods." }
  ],
  Chemistry: [
    { title: "Revise bonding and structure", xp: 25, desc: "Review ionic, covalent, and metallic bonding with examples." },
    { title: "Practice moles calculations", xp: 35, desc: "Complete 10 moles and concentration questions." },
    { title: "Required practicals summary", xp: 40, desc: "Summarise all Chemistry required practicals in your own words." }
  ],
  Biology: [
    { title: "Revise cell biology", xp: 20, desc: "Review cell structure, division, and microscopy." },
    { title: "Practice 6-mark questions", xp: 30, desc: "Answer three 6-mark questions on key topics." },
    { title: "Required practicals mindmap", xp: 35, desc: "Create a mindmap of all Biology required practicals." }
  ],
  History: [
    { title: "Plan a 12-mark answer", xp: 25, desc: "Plan a 12-mark answer on your main exam topic." },
    { title: "Revise key dates", xp: 20, desc: "Create a timeline of key events and dates." },
    { title: "Practice source questions", xp: 30, desc: "Answer 4 source questions from a past paper." }
  ],
  Geography: [
    { title: "Revise physical geography case study", xp: 25, desc: "Review a key physical geography case study and summarise it." },
    { title: "Practice map skills", xp: 20, desc: "Complete map skills questions from your workbook." },
    { title: "Human geography essay", xp: 35, desc: "Write an essay on a human geography topic." }
  ],
  "Computer Science": [
    { title: "Practice programming questions", xp: 30, desc: "Solve 5 programming problems in your chosen language." },
    { title: "Revise algorithms", xp: 25, desc: "Review sorting and searching algorithms and their complexities." },
    { title: "Past paper practice", xp: 40, desc: "Complete a section of a past Computer Science paper." }
  ],
  "RE / Philosophy": [
    { title: "Revise key beliefs", xp: 20, desc: "Summarise key beliefs for two religions or worldviews." },
    { title: "Practice 12-mark evaluation", xp: 30, desc: "Write a 12-mark evaluation answer on a core question." },
    { title: "Quote memorisation", xp: 25, desc: "Memorise and write out 10 key quotes with explanations." }
  ]
};

// ----- State -----

let state = {
  xp: {},                 // { realm: xp (0–99) }
  levels: {},             // { realm: level }
  activeQuests: [],       // [{ id, realm, title, xp, desc }]
  completedQuests: [],    // [{ id, realm, title, xp, desc, completedAt }]
  selectedQuestId: null,
  darkMode: false,
  openRealms: {}          // { realm: true/false }
};

REALMS.forEach(r => {
  state.xp[r] = 0;
  state.levels[r] = 1;
  state.openRealms[r] = false;
});

// ----- LocalStorage helpers -----

const STORAGE_KEY = "gcseQuestGameState_v2";

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

    // Ensure all realms exist
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

// ----- Init -----

loadState();
renderDarkMode();
renderRealmSelects();
renderXpBars();
renderRealmsAndQuests();
renderQuestDetails();
renderQuestLog();