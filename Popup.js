export async function ShowPopup(id) {
    document.getElementById("popup").classList.remove("notshow")
    let popup = document.getElementById("popupContenant")

    let persoData = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/" + id.toString() + ".json")
    persoData = await persoData.json()

    let img = document.getElementById("PopupImg")
    img.src = persoData.images.md

    let name = document.getElementById("PopupName")
    name.innerHTML = persoData.name

    let Bio = document.getElementById("Biography")
    Bio.innerHTML = ""
    for (let data in persoData.biography) {
        Bio.innerHTML += data + " : " + persoData.biography[data] + "<br>"
    }

    let App = document.getElementById("Appearance")
    App.innerHTML = ""
    for (let data in persoData.appearance) {
        App.innerHTML += data + " : " + persoData.appearance[data] + "<br>"
    }

    let PSt = document.getElementById("Powerstats")
    PSt.innerHTML = ""
    for (let data in persoData.powerstats) {
        PSt.innerHTML += data + " : " + persoData.powerstats[data] + "<br>"
    }


    let Oth = document.getElementById("Other")
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
            listCat[i][0].style.backgroundColor = "#FF1313"
            listCat[i][1].style.display = "block"
        } else {
            listCat[i][0].style.backgroundColor = "#CD0000"
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