let vereine = []
class verein{
    constructor(id, tags, description, email, location){
        this.id = id
        this.tags = tags
        this.description = description
        this.email = email
        this.location = location
        vereine.push(this)
    }
}

const Fischerclub = new verein(id="Freddys Fischerclub",
    tags=["teamwork", "fischen"],
    description="Freddys club in dem man mit freunden fischt, mindestalter 18",
    email="<EMAIL>",
    location="Freiburg")
const Schachverein = new verein(
    id="Sallys supertoller Schachverein",
    tags=["schach", "spiel"],
    description="text",
    email="<EMAIL>",
    location="Bielefeld")
const TechnikumsAG = new verein(
    id="Technikums AG",
    tags=["technik", "teamwork"],
    description="was man halt so mit technik macht",
    email="<EMAIL>",
    location="Brastelburg b. Lauchheim"
)

