"use strict";
export async function search(user_search) {
    let res = []
    let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
    data = await data.json()
    for (let index = 0; index < data.length; index++) {
        let tempo = [data[index].name, data[index].biography.fullName]
        data[index].biography.aliases.forEach(element => {
            tempo.push(element)
        });
        if (verify(user_search, tempo)) {
            res.push(data[index])
        }
    }
    return res
}

function verify(user_search, tempo) {
    for (let i = 0; i < tempo.length; i++) {
        if (tempo[i].toUpperCase().includes(user_search.toUpperCase())) {
            return true
        }
    }
    return false
}