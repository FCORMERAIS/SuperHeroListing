import * as filter from "./filter.js";
import { search } from './search.js';


let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()
// for (let index = 0; index < data.length; index++) {
//     console.log(data[index].biography.publisher)
// }
console.log(search("iron", data))