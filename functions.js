// funkcia načítajúca dáta z localStorage, ošetriť, či dáta v localStorage nie sú 


// Získať uložené mená
const getSavedNames = function (){
  const myNames = localStorage.getItem("names")

  if (myNames !== null){
    return JSON.parse(myNames) // preparsuj mi data
  } else {
    return [] // prazdne pole
  }
}


// funkcia pre použitie odoslania formulára, ukladá do localStorage meno z formulára


// uloženie mien
const saveNames = function(oneName){
    localStorage.setItem("names", JSON.stringify(oneName))
}


// generovanie html štruktúry, ktorú umiestnime do stránky po kliknutí na tlačídlo vypíš + použijeme ju tiež pre vypísanie nových informácii z localStorage, keď nejaké meno vymažeme pomocou tlačídla "Vymazať meno"

const generateHTMLstructure = function(oneName){
    const newDiv = document.createElement("div")
    const newSpan = document.createElement("span")
    const button = document.createElement("button")

    // nastavenie mazacieho tlačídla
    button.textContent = "Vymazať meno"
    newDiv.appendChild(button)

    newSpan.textContent = oneName.firstName
    newDiv.appendChild(newSpan)
    return newDiv
}

