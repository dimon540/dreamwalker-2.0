let player = {
    name: "Акира",
    hair: "Короткие",
    hairColor: "Чёрные",
    eyes: "Голубые",
    skin: "Светлая"
};

function show(id) {

    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
    });

    document.getElementById(id).classList.remove('hidden');

    if(id === "creator") update();
}

function update() {

    player.name = document.getElementById("name").value || "Акира";
    player.hair = document.getElementById("hair").value;
    player.hairColor = document.getElementById("hairColor").value;
    player.eyes = document.getElementById("eyes").value;
    player.skin = document.getElementById("skin").value;

    document.getElementById("preview").innerHTML = `
        <div><b>${player.name}</b></div>
        <div>💇 ${player.hair}</div>
        <div>🎨 ${player.hairColor}</div>
        <div>👁 ${player.eyes}</div>
        <div>🧍 ${player.skin}</div>
    `;
}

function create() {

    localStorage.setItem("dreamwalker_save", JSON.stringify(player));

    document.getElementById("saveSlot").innerText =
        player.name + " (" + player.hairColor + ")";

    alert("Персонаж создан!");
    show("menu");
}
