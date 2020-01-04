const SURVIVORS = Array(
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

const BACKGROUNDS = Array(
    "acres.png",
    "aqueduct.png",
    "aspect.png",
    "call.png",
    "delta.png",
    "depths.png",
    "plains.png",
    "roost.png"
);

function generate() {
    var chosenSurvivor = SURVIVORS[Math.floor(Math.random() * SURVIVORS.length)]
    var chosenBG = "assets/bg/" + BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]
    
    var survivorImage = "assets/survivors/" + chosenSurvivor.image;
    var contentReplacement = "" + chosenSurvivor.name + " <img src=\"" + survivorImage + "\" alt=\"" + chosenSurvivor.name + "\"/>";
    
    document.getElementById("survivor").innerHTML = contentReplacement;
    
    var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(" + chosenBG + ")" + "no-repeat center center fixed";
    body.style.backgroundSize = "cover";
}

window.onload = function() {
    generate();
    document.getElementById("survivorPanel").addEventListener("click", function() {
        generate();
    });
}
