async function GetData(id){
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+id.toString()+'.json')
        return await hero.json()
    }catch{
        return {"id": id,"name": "error","slug": "error","powerstats": {"intelligence": 0,"strength": 0,"speed": 0,"durability": 0,"power": 0,"combat": 0},"appearance": {"gender": "error","race": "error","height": "error","weight": "error","eyeColor": "error","hairColor": "error"},"biography": {"fullName": "error","alterEgos": "error","aliases": "error","placeOfBirth": "error","firstAppearance": "error","publisher": "error","alignment": "error"},"work": {"occupation": "error","base": "error"},"connections": {"groupAffiliation": "error","relatives": "error"},"images": {"xs": "error","sm": "error","md": "error","lg": "error"}}
    }
}

export async function firstPage (nb=50) {
    let data = {}
    let PromiseList = []
    for (let i=1; i<=nb; i++) {
        PromiseList.push(GetData(i))
    }
    data = await Promise.all(PromiseList).then(function(values) {
        return values
    })
    return data
}