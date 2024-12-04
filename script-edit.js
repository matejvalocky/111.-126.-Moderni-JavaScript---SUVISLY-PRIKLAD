let nameID = location.hash.substring(1)

let names = getSavedNames()

let searchedName = names.find(function(oneObject){
    return oneObject.id === nameID
})

if (searchedName === undefined){
    location.assign("/index.html")
}


document.querySelector("#editedName").value = searchedName.firstName // zobrazí hodnotu editovaného obsahu v políčku s id editedName

let changingForm = document.querySelector("#changing-form")

changingForm.addEventListener("submit", function(event){
    event.preventDefault()

    

    searchedName.firstName = event.target.elements.changingName.value

    saveNames(names)

})