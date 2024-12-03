// Načítanie dát z localStorage do premennej names, ak je localStorage prázdné, tak do names sa uloží prázdne pole

const names = getSavedNames()



// Odoslanie formulára a uloženie do localStorage pomocou premennej names
let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value // hodnota políčka
    })

    event.target.elements.firstName.value = ""

    saveNames(names)

})


// Vypisovanie späť do stránky

let buttonToList = document.querySelector(".to-list")

buttonToList.addEventListener("click", function(event){
    let namesFromStorage = localStorage.getItem("names")
    let namesFromStorageJSON = JSON.parse(namesFromStorage)

    namesFromStorageJSON.forEach(function(myName){
       const oneNameHTML = generateHTMLstructure(myName)
       document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})