let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()
    let listToPrint = [data[0],data[1],data[3]]
    for (let i = 0; i < listToPrint.length; i++) {
        const tr = document.createElement("tr")
        for (let keys in listToPrint[i]) {
            const td = document.createElement("td")
            td.innerHTML = listToPrint[i][keys]
            tr.appendChild(td)
        }
        document.body.appendChild(tr)
    }
    /* recuperer les données de tout la liste a afficher 
        cree autent de ligne que d'elem dans la list 
        affiche les elem dans la ligne*/ 
}