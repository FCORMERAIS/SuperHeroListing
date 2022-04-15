import * as filter from "./filter.js";
import { search } from './search.js';


let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()
console.log(search("iron", data))
search("iron",data).forEach(element => {
    let elem = document.createElement('div')
    elem.textContent = [element]
    document.body.appendChild(elem)
});