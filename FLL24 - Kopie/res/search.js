//Suchfenster nach Name
let results = document.getElementsByClassName("tags")

for (let i = 0; i < results.length; i++) {

    //Tags zum jeweiligen Verein an Stelle i
    let CorrespondingTags = results[i].getElementsByClassName("tag")
    //save the innerhtml of each of the correspondingtags to a list
    let TagList = []
    for (let j = 0; j < CorrespondingTags.length; j++) {
        TagList.push(CorrespondingTags[j].innerHTML)
    }
    console.log(TagList)

    //Suchfeld abgleichen
    //tags mit Suchfeld abgleichen
    for (let j = 0; j < TagList.length; j++) {
        //get text entered into text input field with id "searchwindow"
        let prompt = document.getElementById("btn").tags
        console.log(prompt)
    }
}


