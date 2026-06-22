let player = {
    name: "Ева",
    logic: 5,
    empathy: 5,
    bravery: 5,
    calmness: 5
};

function show(id) {

    document.querySelectorAll(".screen").forEach(s => {
        s.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

/* ====== КРЕАТОР ====== */

function update() {

    player.name = document.getElementById("name").value || "Ева";
    player.logic = document.getElementById("logic").value;
    player.empathy = document.getElementById("empathy").value;
    player.bravery = document.getElementById("bravery").value;
    player.calmness = document.getElementById("calmness").value;

    document.getElementById("preview").innerHTML = `
        <b>${player.name}</b><br>
        Логика: ${player.logic}/10<br>
        Эмпатия: ${player.empathy}/10<br>
        Смелость: ${player.bravery}/10<br>
        Спокойствие: ${player.calmness}/10
    `;
}

function create() {

    localStorage.setItem("dreamwalker_save", JSON.stringify(player));

    document.getElementById("saveSlot").innerText =
        `${player.name} | Логика ${player.logic} | Смелость ${player.bravery}`;

    alert("Характер создан!");

    show("menu");
}

/* ====== СЕЙВЫ ====== */

function loadSave() {

    const save = localStorage.getItem("dreamwalker_save");

    if (!save) {
        alert("Сохранений нет");
        return;
    }

    player = JSON.parse(save);

    alert("Сейв загружен: " + player.name);

    show("creator");
    update();
}

/* ====== ИГРА ====== */

const prologue = [
    { speaker: "", text: "Холодный ветер гулял между небоскрёбами." },
    { speaker: "Ева", text: "Где я?" },
    { speaker: "", text: "Я не помню, как оказалась здесь..." }
];

let currentScene = 0;

function startGame() {

    currentScene = 0;

    show("game");

    loadScene();
}

function loadScene() {

    document.getElementById("speaker").innerText =
        prologue[currentScene].speaker;

    document.getElementById("dialogText").innerText =
        prologue[currentScene].text;
}

function nextScene() {

    currentScene++;

    if (currentScene >= prologue.length) {
        show("menu");
        return;
    }

    loadScene();
}
