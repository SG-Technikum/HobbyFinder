
let vereine = []
class verein{
    constructor(id, tags, description, email, loc){
        this.id = id
        this.tags = tags
        this.description = description
        this.email = email
        this.loca = loc
        vereine.push(this)
    }
}
//weil json nicht geht
const Fischerclub = new verein(id="Freddys Fischerclub",
    tags=["teamwork", "fischen"],
    description="Freddys club in dem man mit freunden fischt, mindestalter 18",
    email="beispiel.beispiel@beispiel.com",
    loca="Freiburg")
const Schachverein = new verein(
    id="Sallys supertoller Schachverein",
    tags=["schach", "spiel"],
    description="text",
    email="beispiel.beispiel@beispiel.com",
    loca="Bielefeld")
const TechnikumsAG = new verein(
    id="Technikums AG",
    tags=["technik", "teamwork"],
    description="was man halt so mit technik macht",
    email="beispiel.beispiel@beispiel.com",
    loca="Brastelburg b. Lauchheim"
)

//create one div for every verein here

for (let i = 0; i < vereine.length; i++){

    //inhalt einer box für jeden verein erstellen
    let vereinDiv = document.createElement("div")
    let vereinHeader = document.createElement("span")
    vereinHeader.className = "header"
    vereinHeader.className = "blacktext"

    let vereinTitle = document.createElement("h2")
    vereinTitle.className = "blacktext"

    vereinTitle.innerHTML = vereine[i].id
    vereinDiv.id = vereine[i].tags
    vereinDiv.className = "verein"


    let vereinTags = document.createElement("span")
    vereinTags.className = "tags"
    vereinTags.className = "blacktext"
    vereinTags.innerHTML += vereine[i].tags

    vereinHeader.appendChild(vereinTitle)
    vereinHeader.appendChild(vereinTags)

    let vereinDescription = document.createElement("p")
    vereinDescription.innerHTML += "Kurzbeschreibung: "
    vereinDescription.innerHTML += vereine[i].description
    vereinDescription.innerHTML += "<br>"
    vereinDescription.className = "description"
    vereinDescription.className = "blacktext"

    let vereinContact = document.createElement("p")
    vereinContact.innerHTML += "Kontakt via Email: "
    vereinContact.innerHTML += vereine[i].email
    vereinContact.innerHTML += "<br>"
    vereinContact.className = "contact"
    vereinContact.className = "blacktext"

    let vereineLocation = document.createElement("h6")
    vereineLocation.innerHTML += "Standort: "
    vereineLocation.innerHTML += vereine[i].loca
    vereineLocation.innerHTML += "<br>"
    vereineLocation.className = "location"
    vereineLocation.className = "blacktext"

    vereinDiv.appendChild(vereinHeader)
    vereinDiv.appendChild(vereinTags)
    vereinDiv.appendChild(vereinDescription)
    vereinDiv.appendChild(vereinContact)
    vereinDiv.appendChild(vereineLocation)

    console.log(vereinDiv)
    document.getElementById("results").appendChild(vereinDiv)
}