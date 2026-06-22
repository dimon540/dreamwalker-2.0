let player = {
    name: "Ева",
    logic: 5,
    empathy: 5,
    bravery: 5,
    calmness: 5
};

function show(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
    });

    document.getElementById(id).classList.remove('hidden');

    if (id === "creator") {
        update();
    }
}

function update() {

    player.name = document.getElementById("name").value || "Ева";
    player.logic = document.getElementById("logic").value;
    player.empathy = document.getElementById("empathy").value;
    player.bravery = document.getElementById("bravery").value;
    player.calmness = document.getElementById("calmness").value;

    document.getElementById("preview").innerHTML = `
        <div><b>${player.name}</b></div>
        <div>🧠 Логика: ${player.logic}/10</div>
        <div>❤️ Эмпатия: ${player.empathy}/10</div>
        <div>🔥 Смелость: ${player.bravery}/10</div>
        <div>😶 Спокойствие: ${player.calmness}/10</div>
    `;
}

function create() {

    localStorage.setItem("dreamwalker_save", JSON.stringify(player));

    document.getElementById("saveSlot").innerText =
        `${player.name} | Логика ${player.logic} | Смелость ${player.bravery}`;

    alert("Характер создан!");

    show("menu");
}
const prologue = [

    {
        speaker: "",
        text: "Холодный ветер гулял между небоскрёбами."
    },

    {
        speaker: "Ева",
        text: "Где я?.."
    },

    {
        speaker: "",
        text: "Я не помню, как оказалась здесь."
    }

];

let currentScene = 0;

function startGame() {

    show("game");

    currentScene = 0;

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

    if(currentScene >= prologue.length) {

        alert("Конец демо сцены");

        show("menu");

        return;
    }

    loadScene();
}
