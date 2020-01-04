var survivors = Array(
    { name: "Acrid", image: "acrid.png"},
    { name: "Artificer", image: "artificer.png"},
    { name: "Commando", image: "commando.png"},
    { name: "Engineer", image: "engineer.png"},
    { name: "Huntress", image: "huntress.png"},
    { name: "Loader", image: "loader.png"},
    { name: "Mercenary", image: "mercenary.png"},
    { name: "MUL-T", image: "mult.png"},
    { name: "REX", image: "rex.png"}
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

var survivorImage = "assets/survivors/" + chosenSurvivor.image;
var contentReplacement = "" + chosenSurvivor.name + " <img src=\"" + survivorImage + "\" alt=\"" + chosenSurvivor.name + "\"/>";

document.getElementById("survivor").innerHTML = contentReplacement;

var body = document.getElementsByTagName('body')[0];
body.style.background = "url(" + chosenBG + ")" + "no-repeat center center fixed";
body.style.backgroundSize = "cover";