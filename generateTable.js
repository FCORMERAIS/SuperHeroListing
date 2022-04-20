import * as filter from "./filter.js";
import * as search from './search.js';
import { ShowPopup } from './Popup.js';
import * as pagination from './pagination.js';

let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

export async function GenerateTable() {
    let listToPrint = await pagination.firstPage()
    console.log(listToPrint)
    const tbody = document.createElement("tbody")
    let listColor = ["#FF0DE1", "#CA0DFF", "#6B0DFF", "#0D16FF", "#0D7CFF", "#0DC0FF", "#0DFFD9", "#0DFF85", "#0DFF29", "#50FF0D", "#A7FF0D", "#F3FF0D", "#FFA60D", "#FF4B0D", "#FF110D", "#FF0D5E", "#FF0DA7"]
    for (let i = 0; i < listToPrint.length; i++) {
        const tr = document.createElement("tr")
        tr.onclick = function() { ShowPopup(listToPrint[i].id) }
        tr.onmouseover = function() { this.style.backgroundColor = listColor[Math.floor(Math.random() * listColor.length)] }
        if (i % 2 == 0) {
            tr.onmouseout = function() { this.style.backgroundColor = '#ffffff' }
        } else {
            tr.onmouseout = function() { this.style.backgroundColor = '#e0e0e0' }
        }

        const tdname = document.createElement("td")
        tdname.innerHTML = listToPrint[i].name
        tr.appendChild(tdname)

        const tdFullName = document.createElement("td")
        tdFullName.innerHTML = listToPrint[i].biography.fullName
        tr.appendChild(tdFullName)

        for (let powerstats in listToPrint[i].powerstats) {
            const tdpowerstats = document.createElement("td")
            tdpowerstats.innerHTML = listToPrint[i].powerstats[powerstats]
            tr.appendChild(tdpowerstats)
        }

        const apparenceToShow = ["race", "gender", "height", "weight"]
        for (let apparence = 0; apparence < 4; apparence++) {
            const tdApparence = document.createElement("td")
            tdApparence.innerHTML = listToPrint[i].appearance[apparenceToShow[apparence]]
            tr.appendChild(tdApparence)
        }

        const tdpOfBirth = document.createElement("td")
        tdpOfBirth.innerHTML = listToPrint[i].biography.placeOfBirth
        tr.appendChild(tdpOfBirth)

        const tdAlignment = document.createElement("td")
        tdAlignment.innerHTML = listToPrint[i].biography.alignment
        tr.appendChild(tdAlignment)

        tbody.appendChild(tr)
    }
    let table = document.getElementById("table")
    table.appendChild(tbody)
}
GenerateTable()
    /* recuperer les données de tout la liste a afficher 
    cree autent de ligne que d'elem dans la list 
    affiche les elem dans la ligne

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