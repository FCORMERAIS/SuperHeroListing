async function GetData(id){
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+id.toString()+'.json')
        return await hero.json()
    }catch{
        return false
    }
}

export async function Page (nb=50,page=1) {
    let data = {}
    let count = 0
    let i = 1
    let res = []
    while (res.length < nb*page) {
        let PromiseList = []
        for(let tempo = 0;tempo < nb-res.length;tempo++) {
            if(GetData(i) !== false) {
                PromiseList.push(GetData(i))
                count++
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
    }
    console.log(res.slice(nb*(page-1),nb*page))
    return res.slice(nb*(page-1),nb*page)
}

export async function DataId (listID) {
    let data = {}
    let PromiseList = []
    array.forEach(element => {
        PromiseList.push(GetData(element))
    });
    data = await Promise.all(PromiseList).then(function(values) {
        return values
    })
    return data
}