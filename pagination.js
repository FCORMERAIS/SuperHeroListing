export async function pagin (nb=50,last=0){
    let res = []
    let heroID = last+1
    let count = 0
    while(count<nb){
        try {
            var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+heroID.toString()+'.json')
            var hero = await hero.json()
            res.push(hero)
            count++
            heroID++
        }catch{
            heroID++
        }
    }
    return res
}

async function GetData(id){
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+id.toString()+'.json')
        return await hero.json()
    }catch{
        return {"name":"error"}
    }
}

export async function firstPage (nb=50) {
    let data = {}
    let PromiseList = []
    for (let i=0; i<nb; i++) {
        PromiseList.push(
            GetData(i+1)
        )
    }
    data = await Promise.all(PromiseList).then(function(values) {
        return values
    })
    return data
}

export async function lastPage(nb=50){
    let res = []
    let heroID = 731
    let count = 0
    while(count<nb){
        try {
            var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+heroID.toString()+'.json')
            var hero = await hero.json()
            res.push(hero)
            count++
            heroID--
        }catch{
            heroID--
        }
    }
    return res.reverse()
}

export async function NextPage(nb=50,lastCurrentPage){
    let res = []
    let heroID = lastCurrentPage+1
    let count = 0
    while(count<nb){
        try {
            var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+heroID.toString()+'.json')
            var hero = await hero.json()
            res.push(hero)
            count++
            heroID++
        }catch{
            heroID++
        }
    }
    return res
}

export async function PreviousPage(nb=50,lastCurrentPage){
    let res = []
    let heroID = lastCurrentPage1
    let count = 0
    while(count<nb){
        try {
            var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+heroID.toString()+'.json')
            var hero = await hero.json()
            res.push(hero)
            count++
            heroID--
        }catch{
            heroID--
        }
    }
    return res.reverse()
}