
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
const TechnikumsAG = new verein(
    id="Technikums AG",
    tags=["technik", "teamwork"],
    description="was man halt so mit technik macht",
    email="beispiel.beispiel@beispiel.com",
    loca="Aalen, Rombacher Straße"
)
const AnglerVerein = new verein
    (id="Manu's Anglerverein",
    tags=["teamwork", "Angeln", "Edersee"],
    description="Angeln mit Manuel W.",
    email="info@angelclub.com",
    loca="Edersee, an der Kurve")
const Fluchschulungsvereinstrainingsprofessorausbildungsveranstaltungsorganisationsunternehmensveranstaltung = new verein(
    id="Flugschule",
    tags=["fliegen", "landen"],
    description="Fliegen: APT-L und CPL-A für Anfänger!!!",
    email="Flieger@böing.xyz",
    loca="N 6th St, Renton, WA 98057, USA"
)
const Internetcafe = new verein(id="Igors Internet-Cafe Experimental (ICE)",
    tags=["Internet", "Kaffe", "Computer", "Kaffee Maschine bedienen"],
    description="Igors Internet Café!programmier mit Freunden und trink dabei Kaffee, Mindestalter 14",
    email="Trink.Cafe@gmail.com",
    loca="Zella-Mehlis")
const Judogruppe = new verein(id="Johannes Judogruppe",
    tags=["Kämpfen", "Judo", "Turniere", "Fallen"],
    description="Johannes Judogruppe. Lernen wie man sich verteidigt und andere Leute zu Fall bringen kann, mindestalter 16",
    email="jojo@judo.com",
    loca="Alexanderplatz, Berlin")
const Jodelclub = new verein(id="Judiths Jodelclub",
    tags=["Jodeln", "Mit Freude und Freunden", "Singen", "Laut"],
    description="Judiths Jodelclub, Jodel Laut mit Freude und Freunden, du kannst dafür auch ein Jodeldiplom erhalten!",
    email="jodeldiplom@gmail.com",
    loca="Kempten im Allgäu")
const Jachtenclub = new verein(id="Jonathans junior Jachtenclub",
    tags=["Jachten", "Wasser", "Schiffe", "Geld"],
    description="Jonathans Junior Jachtenclub. Jachten fahren, Geld haben, Mindestlohn = VIEL",
    email="Geldhaben.toll@gmail.com",
    loca="Hamburg")
const Fussball= new verein(id="FC Felipe",
    tags=["Fussball", "Sport", "Teamwork"],
    description="FC Felipe fördert Teamwork mithilfe von Fussball. Besser als der Sportverein von nebenan.",
    email="sportskanone@gmail.com",
    loca="München")
const Tanztrupp = new verein(id="Tims Toller Tanztrupp",
    tags=["Tanzen", "Musik"],
    description="Tims Toller Tanztrupp. Tanzen mit treuen Freunden und Tim",
    email="TanzenMitTim@gmail.com",
    loca="Iggingen")
const Lesegruppe = new verein(id="Lennarts Lesegruppe",
    tags=["Lesen", "Bücher", "Geschichten"],
    description="Lennarts Lesegruppe, Lesen mit Spaß, Alter 7-12",
    email="Lesen.Ja@gmail.com",
    loca="Lauchheim")
const Maler = new verein(id="Moritz' Maler",
    tags=["Malen", "Bilder"],
    description="Moritz' Maler, Malen anderer Leute, Objekte und sogar anderer Bilder",
    email="moritz.maler@gmail.com",
    loca="Oberkochen")
const ProgrammierVerein = new verein(id="Valentins Programmier Verein",
    tags=["Programmieren", "Computer", "Python", "Technik"],
    description="Valentins Programmier Verein fördert den Umgang mit Computern, Mindestalter 8",
    email="Programmier.Geil@web.com",
    loca="Aalen")
const KletterKinder = new verein(id="Miriams Kletter Kinder",
    tags=["Klettern", "Kletterwand", "Bouldern"],
    description="Miriams Kletter Kinder fördert Kinder beim Klettern, Mindestalter 8, Sturzresistenz wünschenswert.",
    email="Kletter.Kinder@gmail.com",
    loca="Kleinkleba bei Dresden")
//create one div for every verein here

for (let i = 0; i < vereine.length; i++){

    //inhalt einer box für jeden verein erstellen
    let vereinDiv = document.createElement("div")
    let vereinHeader = document.createElement("span")
    vereinHeader.className = "header"


    let vereinTitle = document.createElement("h4")


    vereinTitle.innerHTML = vereine[i].id
    vereinDiv.id = vereine[i].tags
    vereinDiv.className = "verein"


    let vereinTags = document.createElement("ul")
    vereinTags.className = "tags"
    //loop through lit of zags and append each one to the span
    for (let j = 0; j < vereine[i].tags.length; j++){
        let vereinTag = document.createElement("li")
        vereinTag.className = "tag"
        vereinTag.innerHTML += vereine[i].tags[j]
        vereinTags.appendChild(vereinTag)
    }

    vereinHeader.appendChild(vereinTitle)
    vereinHeader.appendChild(vereinTags)

    let vereinDescription = document.createElement("p")
    vereinDescription.innerHTML += "Kurzbeschreibung: "
    vereinDescription.innerHTML += vereine[i].description
    vereinDescription.innerHTML += "<br>"
    vereinDescription.className = "description"


    let vereinContact = document.createElement("p")
    vereinContact.innerHTML += "Kontakt via Email: "
    vereinContact.innerHTML += vereine[i].email
    vereinContact.innerHTML += "<br>"
    vereinContact.className = "contact"

    let vereineLocation = document.createElement("h6")
    vereineLocation.innerHTML += "Standort: "
    vereineLocation.innerHTML += vereine[i].loca
    vereineLocation.innerHTML += "<br>"
    vereineLocation.className = "location"

    vereinDiv.appendChild(vereinHeader)
    vereinDiv.appendChild(vereinTags)
    vereinDiv.appendChild(vereinDescription)
    vereinDiv.appendChild(vereinContact)
    vereinDiv.appendChild(vereineLocation)

    console.log(vereinDiv)
    document.getElementById("results").appendChild(vereinDiv)
}