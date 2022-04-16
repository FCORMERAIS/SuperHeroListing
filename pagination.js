export async function pagin (last=0,nb){
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