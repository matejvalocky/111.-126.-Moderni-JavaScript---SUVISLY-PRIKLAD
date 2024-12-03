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