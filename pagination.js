async function GetData(id) { // fonction servant à récupérer les données d'un personnage en fonction de son ID sans prendre ceux qui n'existe
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/' + id.toString() + '.json')
        return await hero.json()
    } catch {
        return false
    }
}

export async function Page(listId = [], nb = 20, page = 1) {
    let data = {}
    let i = 1
    let res = []
    let count = 0
    if (listId.length == 0) {
        while (res.length < nb * page) {
            let PromiseList = []
            for (let tempo = 0; tempo < (nb * page) - res.length; tempo++) {
                if (GetData(i) !== false) {
                    PromiseList.push(GetData(i))
                }
                i++
            }
            data = await Promise.all(PromiseList).then(function(values) {
                return values
            })
            for (let index = 0; index < data.length; index++) {
                if (data[index] != false) {
                    res.push(data[index])
                }
            }
            if (count > 10) {
                break
            }
            count++
        }
        return res.slice(nb * (page - 1), nb * page)
    } else {
        return await DataId(listId, nb, page)
    }
}

async function DataId(listId, nb, page) {
    let data = {}
    let PromiseList = []
    for (let i = (nb * (page - 1)); i < (nb * page); i++) {
        PromiseList.push(GetData(listId[i]))
    }
    data = await Promise.all(PromiseList).then(function(values) { // cette commande sert a recupérer tout les personnages en ne faisant qu'un aller retour vers l'API
        return values
    })
    console.log(data)
    return data
}