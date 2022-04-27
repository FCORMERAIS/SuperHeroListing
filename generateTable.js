import * as filter from "./filter.js";
import * as DataFilter from './getDataForFilter.js';
import * as Filter from './methodeFilter.js';
import * as search from './search.js';
import { ShowPopup } from './Popup.js';
import * as pagination from './pagination.js';

export let page = 1
export let nb = 20
export let listId = []

document.getElementById('nbtDisplay').addEventListener('change', async function() { // Change the number of display
    var liste
    liste = document.getElementById("nbtDisplay")
    nb = liste.options[liste.selectedIndex].text
    if (nb == "all results") {
        GenerateTable(await pagination.Page(listId, 563))
    } else {
        GenerateTable(await pagination.Page(listId, nb))
    }
})

document.getElementById("searchfunction").addEventListener('keydown', async function() { // search function
    var input = document.getElementById("searchfunction").value
    GenerateTable(await search.search(input))
})

document.getElementById("firstPage").addEventListener('click', async function() { // return to the first page
    page = 1
    GenerateTable(await pagination.Page(listId, nb))
})

document.getElementById("previousPage").addEventListener('click', async function() { // return tou the previous page
    if (page > 1) { page -= 1 }
    GenerateTable(await pagination.Page(listId, nb, page))
})

document.getElementById("nextPage").addEventListener('click', async function() { // go to the next page
    if (page < Math.floor(563 / nb)) { page += 1 }
    GenerateTable(await pagination.Page(listId, nb, page))
})

document.getElementById("lastPage").addEventListener('click', async function() { // go to the last page
    page = Math.floor(563 / nb) + 1
    GenerateTable(await pagination.Page(listId, nb, page))
})

document.getElementById("nextPage").addEventListener('click', async function() { // go to the next page
    if (page < Math.floor(563 / nb)) { page += 1 } // on définie
    GenerateTable(await pagination.Page(nb, page))
})

document.getElementById("lastPage").addEventListener('click', async function() { // go to the last page
    page = Math.floor(563 / nb) + 1 // on définie page sur la derniere page 
    GenerateTable(await pagination.Page(nb, page)) // renvoie la derniere page 
})

export async function GenerateTable(data) {
    let tbody = document.getElementById("tbody")
    tbody.replaceChildren()
    let listColor = ["#FF0DE1", "#CA0DFF", "#6B0DFF", "#0D16FF", "#0D7CFF", "#0DC0FF", "#0DFFD9", "#0DFF85", "#0DFF29", "#50FF0D", "#A7FF0D", "#F3FF0D", "#FFA60D", "#FF4B0D", "#FF110D", "#FF0D5E", "#FF0DA7"]
    for (let i = 0; i < data.length; i++) { // on répète la la boucle autant de fois qu'il n'y a de héros 
        const tr = document.createElement("tr") // on créer une nouvelle ligne a notre table

        if (data[i] == false) {
            tr.innerHTML = "ERROR : NOT FOUND"
            tr.style.textAlign = "center";
        } else {
            tr.onclick = function() { ShowPopup(data[i].id) }
            tr.onmouseover = function() { this.style.backgroundColor = listColor[Math.floor(Math.random() * listColor.length)] }
            if (i % 2 == 0) {
                tr.onmouseout = function() { this.style.backgroundColor = '#ffffff' }
            } else {
                tr.onmouseout = function() { this.style.backgroundColor = '#e0e0e0' }
            }
            const tdImages = document.createElement("td") // on créer une nouvelle colonne a notre ligne 
            const img = document.createElement("img")
            img.src = data[i].images.xs
            tdImages.appendChild(img)
            tr.appendChild(tdImages) // on ajoute a la ligne notre colonne 

            const tdname = document.createElement("td") // on répète la même opération 
            tdname.innerHTML = data[i].name
            tr.appendChild(tdname)

            const tdFullName = document.createElement("td")
            tdFullName.innerHTML = data[i].biography.fullName
            tr.appendChild(tdFullName)

            for (let powerstats in data[i].powerstats) {
                const tdpowerstats = document.createElement("td")
                tdpowerstats.innerHTML = data[i].powerstats[powerstats]
                tr.appendChild(tdpowerstats)
            }

            const tdpOfBirth = document.createElement("td")
            tdpOfBirth.innerHTML = data[i].biography.placeOfBirth
            tr.appendChild(tdpOfBirth)

            const apparenceToShow = ["race", "gender", "height", "weight"]
            for (let apparence = 0; apparence < 4; apparence++) { // etant donnée que race gender height et weight sont stocker dans le meme endroit (appearance) on fait une boucle se qui facilite notre code 
                const tdApparence = document.createElement("td")
                tdApparence.innerHTML = data[i].appearance[apparenceToShow[apparence]]
                tr.appendChild(tdApparence) // on l'ajoute a notre ligne 
            }

            const tdAlignment = document.createElement("td")
            tdAlignment.innerHTML = data[i].biography.alignment
            tr.appendChild(tdAlignment)

            tbody.appendChild(tr) // on ajoute notre ligne a la table (tbody)
        }
    }
    let table = document.getElementById("table")
    table.appendChild(tbody)
}
GenerateTable(await pagination.Page(listId, 20))


// on affiche la page correspondante au filtre demandé par l'utilisateur 

document.getElementById("Name").onclick = async function() {
    listId = []
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Fname").onclick = async function() {
    listId = await filter.filterByBiography("fullName")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Int").onclick = async function() {
    listId = await filter.filterByPowerstat("Int")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Str").onclick = async function() {
    listId = await filter.filterByPowerstat("Str")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Spe").onclick = async function() {
    listId = await filter.filterByPowerstat("Spe")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Dur").onclick = async function() {
    listId = await filter.filterByPowerstat("Dur")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Pow").onclick = async function() {
    listId = await filter.filterByPowerstat("Pow")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Com").onclick = async function() {
    listId = await filter.filterByPowerstat("Com")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Race").onclick = async function() {
    listId = await filter.filterByAppearance("race")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Gen").onclick = async function() {
    listId = await filter.filterByAppearance("gender")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Hei").onclick = async function() {
    listId = await filter.filterByAppearance("height")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Wei").onclick = async function() {
    listId = await filter.filterByAppearance("weight")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Pofb").onclick = async function() {
    listId = await filter.filterByAppearance("publisher")
    await GenerateTable(await pagination.Page(listId, nb, page))
}
document.getElementById("Ali").onclick = async function() {
    listId = await filter.filterByAppearance("alignment")
    await GenerateTable(await pagination.Page(listId, nb, page))
}