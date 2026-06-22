let player = {
    name: "Акира",
    hair: "hair1.png",
    eyes: "eyes1.png",
    skin: "skin1.png"
};

function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');

    if (id === "creator") update();
}

function update() {

    player.name = document.getElementById("name").value || "Акира";
    player.hair = document.getElementById("hair").value;
    player.eyes = document.getElementById("eyes").value;
    player.skin = document.getElementById("skin").value;

    document.getElementById("preview").innerHTML = `
        <div>👤 ${player.name}</div>
        <div>💇 ${player.hair}</div>
        <div>👁 ${player.eyes}</div>
        <div>🎨 ${player.skin}</div>
    `;
}

function create() {
    localStorage.setItem("dreamwalker_save", JSON.stringify(player));
    alert("Персонаж создан!");
    show("menu");
}
