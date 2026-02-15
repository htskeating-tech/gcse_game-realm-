const REALMS = {
    english: "The Kingdom of Quills",
    maths: "The Dominion of Numbers",
    business: "The Mercantile Empire",
    chemistry: "The Alchemist’s Citadel",
    biology: "The Living Wilds",
    physics: "The Realm of Forces",
    history: "The Chronicle Archives",
    computing: "The Digital Frontier"
};

const QUEST_TYPES = {
    small: 10,
    medium: 25,
    large: 50,
    boss: 100
};

const XP_LEVELS = [
    [1, 0],
    [2, 100],
    [3, 250],
    [4, 500],
    [5, 800],
    [6, 1200],
    [7, 1700],
    [8, 2300],
    [9, 3000],
    [10, 3800]
];

function loadProgress() {
    let saved = localStorage.getItem("progress");
    if (saved) return JSON.parse(saved);

    let fresh = {};
    for (let r in REALMS) fresh[r] = { xp: 0 };
    return fresh;
}

function saveProgress() {
    localStorage.setItem("progress", JSON.stringify(progress));
}

function getLevel(xp) {
    let level = 1;
    for (let [lvl, threshold] of XP_LEVELS) {
        if (xp >= threshold) level = lvl;
    }
    return level;
}

let progress = loadProgress();

function updateStatus() {
    let html = "<h2>Realm Status</h2>";

    for (let r in progress) {
        let xp = progress[r].xp;
        let level = getLevel(xp);

        let nextLevelXP = XP_LEVELS[level] ? XP_LEVELS[level][1] : XP_LEVELS[XP_LEVELS.length - 1][1];
        let prevLevelXP = XP_LEVELS[level - 1][1];

        let percent = ((xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;
        if (percent > 100) percent = 100;

        html += `
            <p><strong>${REALMS[r]}</strong> (${r}): Level ${level}, ${xp} XP</p>
            <div class="xp-bar-container">
                <div class="xp-bar" style="width:${percent}%"></div>
            </div>
        `;
    }

    document.getElementById("status").innerHTML = html;
}

function populateRealmSelect() {
    let select = document.getElementById("realmSelect");
    for (let r in REALMS) {
        let opt = document.createElement("option");
        opt.value = r;
        opt.textContent = REALMS[r];
        select.appendChild(opt);
    }
}

function logQuest() {
    let realm = document.getElementById("realmSelect").value;
    let quest = document.getElementById("questSelect").value;

    progress[realm].xp += QUEST_TYPES[quest];
    saveProgress();
    updateStatus();
}

function resetProgress() {
    if (!confirm("Type OK to reset")) return;

    for (let r in progress) progress[r].xp = 0;
    saveProgress();
    updateStatus();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

function loadDarkMode() {
    let enabled = localStorage.getItem("darkMode") === "true";
    if (enabled) document.body.classList.add("dark");
}

populateRealmSelect();
updateStatus();
loadDarkMode();