let player = {
    name: "Акира",
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

    player.name = document.getElementById("name").value || "Акира";
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
