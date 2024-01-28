let vereine = []
class verein{
    constructor(id, tags, description, email, loc){
        this.id = id
        this.tags = tags
        this.description = description
        this.email = email
        this.loc = location
        vereine.push(this)
    }
}
//weil json nicht geht
const Fischerclub = new verein(id="Freddys Fischerclub",
    tags=["teamwork", "fischen"],
    description="Freddys club in dem man mit freunden fischt, mindestalter 18",
    email="<EMAIL>",
    loc="Freiburg")
const Schachverein = new verein(
    id="Sallys supertoller Schachverein",
    tags=["schach", "spiel"],
    description="text",
    email="<EMAIL>",
    loc="Bielefeld")
const TechnikumsAG = new verein(
    id="Technikums AG",
    tags=["technik", "teamwork"],
    description="was man halt so mit technik macht",
    email="<EMAIL>",
    loc="Brastelburg b. Lauchheim"
)

//create one div for every verein here

