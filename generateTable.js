import * as filter from "./filter.js";
import * as search from './search.js';
import * as pagination from './pagination.js';


document.getElementById('nbtDisplay').addEventListener('change', async function() {
    var liste, nb
    liste = document.getElementById("nbtDisplay")
    nb = liste.options[liste.selectedIndex].text
    if (nb == "all results") {
        GenerateTable(await pagination.Page(563))
    }else {
        GenerateTable(await pagination.Page(nb))
    }
})

export async function GenerateTable(data)  {
    let tbody = document.getElementById("tbody")
    tbody.replaceChildren()
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")
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

        const apparenceToShow = ["race", "gender", "height", "weight"]
        for ( let apparence = 0 ; apparence < 4 ; apparence++ ) {
            const tdApparence = document.createElement("td")
            tdApparence.innerHTML = data[i].appearance[apparenceToShow[apparence]]
            tr.appendChild(tdApparence)
        }

        const tdpOfBirth = document.createElement("td")
        tdpOfBirth.innerHTML = data[i].biography.placeOfBirth
        tr.appendChild(tdpOfBirth)

        const tdAlignment = document.createElement("td")
        tdAlignment.innerHTML = data[i].biography.alignment
        tr.appendChild(tdAlignment)
        tbody.appendChild(tr)
    }
}   
GenerateTable(await pagination.Page(20))

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