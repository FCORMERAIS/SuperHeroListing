export async function ShowPopup(id) {
    document.getElementById("popup").classList.remove("notshow")
    let popup = document.getElementById("popupContenant")

    let persoData = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/" + id.toString() + ".json")
    persoData = await persoData.json()

    //popup.replaceChildren()

    let img = document.getElementById("PopupImg")
    img.src = persoData.images.md

    let name = document.createElement("h1")
    name.innerHTML = persoData.name
    popup.appendChild(name)


    /*let biography = document.createElement("div")

    let appearance = document.createElement("div")

    let powerstats = document.createElement("div")

    let other = document.createElement("div")*/

}

function OpenPopupTab(id) {
    const listCat = [
        [document.getElementById("BiographyCat")],
        [document.getElementById("AppearanceCat")],
        [document.getElementById("PowerstatsCat")],
        [document.getElementById("OtherCat")]
    ]
    for (let i = 0; i < 4; i++) {
        if (id == i) {
            listCat[i][0].style.backgroundColor = "#FF1313"
        } else {
            listCat[i][0].style.backgroundColor = "#CD0000"
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