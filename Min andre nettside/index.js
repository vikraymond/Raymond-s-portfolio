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

const displayVinn = document.querySelector("#Vinn");
const displayTap = document.querySelector("#Tap");
const displayUavgjort = document.querySelector("#Uavgjort");

let Vinn = 0;
let Tap = 0;
let Uavgjort = 0;

function maskinValg() {
    let computerNumber = choices [Math.floor (Math.random () * 3)];
    displayDittValg.innerHTML = dittValg;
    displayMaskinValg.innerHTML = computerNumber;
    if (dittValg === computerNumber) {
        displayResults.innerHTML = "Det er uavgjort!";
        Uavgjort += 1;
        displayUavgjort.innerHTML = "Antall uavgjort = "+Uavgjort;
    } else if (computerNumber === "Stein" && dittValg === "Papir") {
        displayResults.innerHTML = "Du vinner!";
        Vinn += 1;   
        displayVinn.innerHTML = "Antall gevinst = "+Vinn;
    } else if (computerNumber === "Papir" && dittValg === "Saks") {
        displayResults.innerHTML = "Du vinner!";
        Vinn += 1;
        displayVinn.innerHTML = "Antall gevinst = "+Vinn;
    } else if (computerNumber === "Saks" && dittValg === "Stein") {
        displayResults.innerHTML = "Du vinner!";
        Vinn += 1;
        displayVinn.innerHTML = "Antall gevinst = "+Vinn;
    } else {
        displayResults.innerHTML = "Du taper!"
        Tap += 1;
        displayTap.innerHTML = "Antall tap = "+Tap;
    }
}

async function fetchCatFact() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        const catfact = document.querySelector("#catFact");
        catFact.textContent=data.fact;
    } catch (error) {
        console.error("Error:", error);
    }
} 

const factButton = document.querySelector("#factButton");
factButton.addEventListener("click", fetchCatFact);