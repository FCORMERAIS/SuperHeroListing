let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

console.log(data)