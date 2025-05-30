const steinButton = document.querySelector ("#stein");
const saksButton = document.querySelector ("#saks");
const papirButton = document.querySelector ("#papir");

const displayDittValg = document.querySelector ("#dittValg");
const displayMaskinValg = document.querySelector ("#maskinValg");
const displayResults = document.querySelector ("#results");

let dittValg;
const choices = ["stein", "saks", "papir"];
function selectStein () {
    dittValg = "stein";
    maskinValg ();
}

steinButton.addEventListener ("click", selectStein);
function selectSaks () {
    dittValg = "saks";
    maskinValg ();
}

saksButton.addEventListener ("click", selectSaks);
function selectPapir () {
    dittValg = "papir";
    maskinValg ();
}

papirButton.addEventListener ("click", selectPapir);

function maskinValg () {
    let computerNumber = choices [Math.floor (Math.random () * 3)];
    displayDittValg.innerHTML = dittValg;
    displayMaskinValg.innerHTML = computerNumber;
    if (dittValg === computerNumber) {
        displayResults.innerHTML = "Det er uavgjort!";
    } else if (computerNumber === "stein" && dittValg === "papir") {
        displayResults.innerHTML = "Du vinner!";
    } else if (computerNumber === "papir" && dittValg === "saks") {
        displayResults.innerHTML = "Du vinner!";
    } else if (computerNumber === "saks" && dittValg === "stein") {
        displayResults.innerHTML = "Du vinner!";
    } else {
        displayResults.innerHTML = "Du taper!"
    }
}