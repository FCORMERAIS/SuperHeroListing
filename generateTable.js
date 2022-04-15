import * as filter from "./filter.js";
import { search } from './search.js';

let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()
export function GenerateTable()  {
    let listToPrint = data
    const tbody = document.createElement("tbody")
    for (let i = 0; i < listToPrint.length; i++) {
        const tr = document.createElement("tr")
        
            const tdImages = document.createElement("td")
            const img = document.createElement("img")
            img.src = listToPrint[i].images.sm
            tdImages.appendChild(img)
            tr.appendChild(tdImages)

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
            for ( let apparence in apparenceToShow ) {
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