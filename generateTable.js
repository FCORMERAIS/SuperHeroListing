import * as filter from "./filter.js";
import * as DataFilter from './getDataForFilter.js';
import * as Filter from './methodeFilter.js';
import * as search from './search.js';
import { ShowPopup } from './Popup.js';
import * as pagination from './pagination.js';

let page = 1
let nb = 20 // on initialise nos valeurs de départ 

document.getElementById('nbtDisplay').addEventListener('change', async function() { // Change the number of display
    var liste
    liste = document.getElementById("nbtDisplay")
    nb = liste.options[liste.selectedIndex].text
    if (nb == "all results") {
        GenerateTable(await pagination.Page(563))
    } else {
        GenerateTable(await pagination.Page(nb))
    }
})

document.getElementById("searchfunction").addEventListener('change', async function(){ // search function
    var input = document.getElementById("searchfunction").value
    GenerateTable(await search.search(input))
})

document.getElementById("firstPage").addEventListener('click', async function(){ // return to the first page
    page = 1
    GenerateTable(await pagination.Page(nb))
})

document.getElementById("previousPage").addEventListener('click', async function(){ // return tou the previous page
    if (page>1) {page -=1}
    GenerateTable(await pagination.Page(nb,page))
})

document.getElementById("nextPage").addEventListener('click', async function(){ // go to the next page
    if (page<Math.floor(563/nb)) {page +=1} // on définie
    GenerateTable(await pagination.Page(nb,page))
})

document.getElementById("lastPage").addEventListener('click', async function() { // go to the last page
    page = Math.floor(563/nb)+1 // on définie page sur la derniere page 
    GenerateTable(await pagination.Page(nb,page)) // renvoie la derniere page 
})

document.getElementById("Name").onclick = async function() { await GenerateTable(await pagination.Page(563)) }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Fname").onclick = async function() { await GenerateTable(filter.filterByBiography("fullName")) } // on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Int").onclick = async function() { await filter.filterByPowerstat("Int") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Str").onclick = async function() { await filter.filterByPowerstat("Str") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Spe").onclick = async function() { await filter.filterByPowerstat("Spe") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Dur").onclick = async function() { await filter.filterByPowerstat("Dur") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Pow").onclick = async function() { await filter.filterByPowerstat("Pow") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Com").onclick = async function() { await filter.filterByPowerstat("Com") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Race").onclick = async function() { await filter.filterByAppearance("race") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Gen").onclick = async function() { await filter.filterByAppearance("gender") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Hei").onclick = async function() { await filter.filterByAppearance("height") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Wei").onclick = async function() { await filter.filterByAppearance("weight") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Pofb").onclick = async function() { await filter.filterByAppearance("publisher") }// on affiche la page correspondante au filtre demandé par l'utilisateur 
document.getElementById("Ali").onclick = async function() { await filter.filterByAppearance("alignment") }// on affiche la page correspondante au filtre demandé par l'utilisateur 


export async function GenerateTable(data) {
    let tbody = document.getElementById("tbody")
    tbody.replaceChildren()
    let listColor = ["#FF0DE1", "#CA0DFF", "#6B0DFF", "#0D16FF", "#0D7CFF", "#0DC0FF", "#0DFFD9", "#0DFF85", "#0DFF29", "#50FF0D", "#A7FF0D", "#F3FF0D", "#FFA60D", "#FF4B0D", "#FF110D", "#FF0D5E", "#FF0DA7"]
    for (let i = 0; i < data.length; i++) { // on répète la la boucle autant de fois qu'il n'y a de héros 
        const tr = document.createElement("tr") // on créer une nouvelle ligne a notre table

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
GenerateTable(await pagination.Page()) // on créer notre table de départ c'est notre initialisation 


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