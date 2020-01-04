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

var backgrounds = Array(
    "acres.png",
    "aqueduct.png",
    "aspect.png",
    "call.png",
    "delta.png",
    "depths.png",
    "plains.png",
    "roost.png"
);

var chosenSurvivor = survivors[Math.floor(Math.random() * survivors.length)]
var chosenBG = "assets/bg/" + backgrounds[Math.floor(Math.random() * backgrounds.length)]

document.getElementById("survivor").innerHTML = chosenSurvivor.name;

var body = document.getElementsByTagName('body')[0];
body.style.background = "url(" + chosenBG + ")" + "no-repeat center center fixed";
body.style.backgroundSize = "cover";