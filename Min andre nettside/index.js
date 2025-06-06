const steinButton = document.querySelector("#Stein");
const saksButton = document.querySelector("#Saks");
const papirButton = document.querySelector("#Papir");

const displayDittValg = document.querySelector("#dittValg");
const displayMaskinValg = document.querySelector("#maskinValg");
const displayResults = document.querySelector("#results");

let dittValg;
const choices = ["Stein", "Saks", "Papir"];

function selectStein() {
    dittValg = "Stein";
    maskinValg();
}

steinButton.addEventListener("click", selectStein);

function selectSaks() {
    dittValg = "Saks";
    maskinValg();
}

saksButton.addEventListener("click", selectSaks);

function selectPapir() {
    dittValg = "Papir";
    maskinValg();
}

papirButton.addEventListener("click", selectPapir);

function maskinValg() {
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