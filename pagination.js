async function GetData(id){// fonction servant à récupérer les données d'un personnage en fonction de son ID sans prendre ceux qui n'existe
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+id.toString()+'.json')
        return await hero.json()
    }catch{
        return false
    }
}

export async function Page (nb=50,page=1) { // fonction servant à récupérer les données des personnages et renvoie la liste avec tout les personnages utile en fonction de la page demandé et du nombre 
    let data = {}
    let i = 1
    let res = []
    let count = 0
    while (res.length < nb*page) { // on répète l'opération jusqu'à ce que la liste des héros soit égale au nombre demandé
        let PromiseList = []
        for(let tempo = 0;tempo < (nb*page)-res.length;tempo++) {
            if(GetData(i) !== false) {
                PromiseList.push(GetData(i))
            }
            i++
        }
        data = await Promise.all(PromiseList).then(function(values) { // cette commande sert a recupérer tout les personnages en ne faisant qu'un aller retour vers l'API
            return values
        })
        for (let index = 0; index < data.length; index++) {
            if (data[index] != false) {
                res.push(data[index])
            }
        }
        if (count > 5) {break}
        count++
    }
    return res.slice(nb*(page-1),nb*page) // on renvoie les héros nécessaires en fonction de la page demandé
}

export async function DataId (listID) {  // fonction recevant e nparametre une liste d'id et renvoie la liste des héros correspondant
    let data = {}
    let PromiseList = []
    listID.forEach(element => {
        PromiseList.push(GetData(element))
    });
    data = await Promise.all(PromiseList).then(function(values) {
        return values
    })
    return data
}