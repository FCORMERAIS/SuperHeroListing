export async function ShowPopup(id) {

    document.getElementById("popup").style.display = "flex"
    document.getElementById("BiographyCat").style.backgroundColor = "#392D4C"
    document.getElementById("AppearanceCat").style.backgroundColor = "transparent"
    document.getElementById("PowerstatsCat").style.backgroundColor = "transparent"
    document.getElementById("OtherCat").style.backgroundColor = "transparent"

    let persoData = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/" + id.toString() + ".json")
    persoData = await persoData.json()

    document.getElementById("PopupImg").src = persoData.images.md
    document.getElementById("PopupName").innerHTML = persoData.name

    let Bio = document.getElementById("Biography")
    Bio.style.display = "block"
    Bio.innerHTML = ""
    for (let data in persoData.biography) {
        Bio.innerHTML += data + " : " + persoData.biography[data] + "<br>"
    }

    let App = document.getElementById("Appearance")
    App.style.display = "none"
    App.innerHTML = ""
    for (let data in persoData.appearance) {
        App.innerHTML += data + " : " + persoData.appearance[data] + "<br>"
    }

    let PSt = document.getElementById("Powerstats")
    PSt.style.display = "none"
    PSt.innerHTML = ""
    for (let data in persoData.powerstats) {
        PSt.innerHTML += data + " : " + persoData.powerstats[data] + "<br>"
    }


    let Oth = document.getElementById("Other")
    Oth.style.display = "none"
    Oth.innerHTML = ""
    for (let data in persoData.connections) {
        Oth.innerHTML += data + " : " + persoData.connections[data] + "<br>"
    }


}

function OpenPopupTab(id) {
    const listCat = [
        [document.getElementById("BiographyCat"), document.getElementById("Biography")],
        [document.getElementById("AppearanceCat"), document.getElementById("Appearance")],
        [document.getElementById("PowerstatsCat"), document.getElementById("Powerstats")],
        [document.getElementById("OtherCat"), document.getElementById("Other")]
    ]
    for (let i = 0; i < 4; i++) {
        if (id == i) {
            listCat[i][0].style.backgroundColor = "#392D4C"
            listCat[i][1].style.display = "block"
        } else {
            listCat[i][0].style.backgroundColor = "transparent"
            listCat[i][1].style.display = "none"
        }
    }
}

function GeneratePopupCatAction() {
    document.getElementById("BiographyCat").onclick = function() { OpenPopupTab(0) }
    document.getElementById("AppearanceCat").onclick = function() { OpenPopupTab(1) }
    document.getElementById("PowerstatsCat").onclick = function() { OpenPopupTab(2) }
    document.getElementById("OtherCat").onclick = function() { OpenPopupTab(3) }
}
GeneratePopupCatAction()
let popup = document.getElementById("popup")
popup.style.display = "none"