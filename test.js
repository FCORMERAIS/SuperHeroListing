import * as filter from "./filter.js";

let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()
data.RaceSort()
console.log(data)