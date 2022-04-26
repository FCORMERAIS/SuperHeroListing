async function GetData(id){// fonction servant à récupérer les données d'un personnage en fonction de son ID sans prendre ceux qui n'existe
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+id.toString()+'.json')
        return await hero.json()
    }catch{
        return false
    }
}

export async function Page (nb=50,page=1) {
    console.log(nb,page)
    let data = {}
    let i = 1
    let res = []
    let count = 0
    while (res.length < nb*page) {
        let PromiseList = []
        for(let tempo = 0;tempo < (nb*page)-res.length;tempo++) {
            if(GetData(i) !== false) {
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
    return res.slice(nb*(page-1),nb*page)
}

export async function DataId (listID) { 
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