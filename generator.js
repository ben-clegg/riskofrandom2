var survivors = Array(
    { name: "Acrid"},
    { name: "Artificer"},
    { name: "Commando"},
    { name: "Engineer"},
    { name: "Huntress"},
    { name: "Loader"},
    { name: "Mercenary"},
    { name: "MUL-T"},
    { name: "REX"}
);

var chosenSurvivor = survivors[Math.floor(Math.random() * survivors.length)]

document.getElementById("survivor").innerHTML = chosenSurvivor.name;

