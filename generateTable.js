import * as filter from "./filter.js";
import * as DataFilter from './getDataForFilter.js';
import * as Filter from './mothodeFilter.js';
import * as search from './search.js';
import { ShowPopup } from './Popup.js';
import * as pagination from './pagination.js';
let page = 1

document.getElementById('nbtDisplay').addEventListener('change', async function() {
    var liste, nb
    liste = document.getElementById("nbtDisplay")
    nb = liste.options[liste.selectedIndex].text
    if (nb == "all results") {
        GenerateTable(await pagination.Page(563))
    }else {
        console.log(731/nb)
        GenerateTable(await pagination.Page(nb))
    }
})

document.getElementById("firstPage").addEventListener('click', function(){
    page = 1 
})

document.getElementById("searchfunction").addEventListener('change', async function(){
    var input = document.getElementById("searchfunction").value
    GenerateTable(await search.search(input))
})

document.getElementById("previousPage").addEventListener('click', function(){
    console.log("previousPage")    
})

document.getElementById("nextPage").addEventListener('click', function(){
    console.log("nextpage")
})

document.getElementById("lastPage").addEventListener('click', function() {
    console.log("lastpage")
})


export async function GenerateTable(data) {
    let tbody = document.getElementById("tbody")
    tbody.replaceChildren()
    let listColor = ["#FF0DE1", "#CA0DFF", "#6B0DFF", "#0D16FF", "#0D7CFF", "#0DC0FF", "#0DFFD9", "#0DFF85", "#0DFF29", "#50FF0D", "#A7FF0D", "#F3FF0D", "#FFA60D", "#FF4B0D", "#FF110D", "#FF0D5E", "#FF0DA7"]
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")

        if (data[i].images.sm == "error") {
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
            const tdImages = document.createElement("td")
            const img = document.createElement("img")
            img.src = data[i].images.xs
            tdImages.appendChild(img)
            tr.appendChild(tdImages)

            const tdname = document.createElement("td")
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
            for (let apparence = 0; apparence < 4; apparence++) {
                const tdApparence = document.createElement("td")
                tdApparence.innerHTML = data[i].appearance[apparenceToShow[apparence]]
                tr.appendChild(tdApparence)
            }

            const tdAlignment = document.createElement("td")
            tdAlignment.innerHTML = data[i].biography.alignment
            tr.appendChild(tdAlignment)

            tbody.appendChild(tr)
        }
    }
    let table = document.getElementById("table")
    table.appendChild(tbody)
}
GenerateTable(await pagination.Page(20))
    /* recuperer les données de tout la liste a afficher 
    cree autent de ligne que d'elem dans la list 
    affiche les elem dans la ligne
=======

    - Icon (`.images.xs`, should be displayed as images and not as a string)
    - Name (`.name`)
    - Full Name (`.biography.fullName`)
    - Powerstats (each entry of `.powerstats`)
    - Race (`.appearance.race`)
    - Gender (`.appearance.gender`)
    - Height (`.appearance.height`)
    - Weight (`.appearance.weight`)
    - Place Of Birth (`.biography.placeOfBirth`)
    - Alignement (`.biography.alignment`)

    */