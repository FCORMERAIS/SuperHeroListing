// let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
// data = await data.json()

"use strict";
Array.prototype.AlphaSort = function() {
    this.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.RaceSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.race === null || a.appearance.race < b.appearance.race) return -1;
        if (a.appearance.race === null || a.appearance.race > b.appearance.race) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByInt = function() {
    this.sort(function(a, b) {
        if (a.powerstats.intelligence < b.powerstats.intelligence) return -1;
        if (a.powerstats.intelligence > b.powerstats.intelligence) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByStr = function() {
    this.sort(function(a, b) {
        if (a.powerstats.strength < b.powerstats.strength) return -1;
        if (a.powerstats.strength > b.powerstats.strength) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortBySpe = function() {
    this.sort(function(a, b) {
        if (a.powerstats.speed < b.powerstats.speed) return -1;
        if (a.powerstats.speed > b.powerstats.speed) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByDur = function() {
    this.sort(function(a, b) {
        if (a.powerstats.durability < b.powerstats.durability) return -1;
        if (a.powerstats.durability > b.powerstats.durability) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByPow = function() {
    this.sort(function(a, b) {
        if (a.powerstats.power < b.powerstats.power) return -1;
        if (a.powerstats.power > b.powerstats.power) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByCom = function() {
    this.sort(function(a, b) {
        if (a.powerstats.combat < b.powerstats.combat) return -1;
        if (a.powerstats.combat > b.powerstats.combat) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.GenderSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.gender === "-" || a.appearance.gender < b.appearance.gender) return -1;
        if (a.appearance.gender === "-" || a.appearance.gender > b.appearance.gender) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.EyeColorSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.eyeColor === "-" || a.appearance.eyeColor < b.appearance.eyeColor) return -1;
        if (a.appearance.eyeColor === "-" || a.appearance.eyeColor > b.appearance.eyeColor) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.HairColorSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.hairColor === "-" || a.appearance.hairColor < b.appearance.hairColor) return -1;
        if (a.appearance.hairColor === "-" || a.appearance.hairColor > b.appearance.hairColor) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.AlignementSort = function() {
    this.sort(function(a, b) {
        if (a.biography.alignment === '-' || a.biography.alignment < b.biography.alignment) return 1;
        if (b.biography.alignment === '-' || a.biography.alignment > b.biography.alignment) return -1;
        return 0;
    })
}

"use strict";
Array.prototype.PublisherSort = function() {
    this.sort(function(a, b) {
        if (b.biography.publisher == "" && a.biography.publisher !== null) return -1;
        if (a.biography.publisher == "" && b.biography.publisher !== null) return 1;
        if (b.biography.publisher == null || a.biography.publisher < b.biography.publisher) return -1;
        if (a.biography.publisher == null || a.biography.publisher > b.biography.publisher) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.sortingHeight = function () { 
    this.sort(function(a, b) {

    // Spliting the first value and decomposing the list into a string :
    a = parseInt(data.appearance.height[1].split(" ") [0]);
    b = parseInt(data.appearance.height[1].split(" ") [0]);

    // Sorting values in ascending order :
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
    })
    
    // Si descending pressé : 
    // Array.prototype.reverse(this.sort(a, b));
} 

"use strict";
Array.prototype.sortingWeight = function () { 
    this.sort(function(a, b) {

    // Spliting the first value and decomposing the list into a string :
    a = parseInt(data.appearance.weight[1].split(" ") [0]);
    b = parseInt(data.appearance.weight[1].split(" ") [0]);

    // Sorting values in ascending order :
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
    })

    // Si descending pressé : 
    // Array.prototype.reverse(this.sort(a, b));
}

// ------------------- //

async function GetData(id){
    try {
        // var hero1 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/'+id.toString()+'.json')
        var hero2 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/powerstats/'+id.toString()+'.json')
        // var hero3 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/appearance/'+id.toString()+'.json')
        //var hero4 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/biography/'+id.toString()+'.json')
        //var hero5 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/connections/'+id.toString()+'.json')
        //var hero6 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/images/'+id.toString()+'.json')
        return await hero2.json()
        //return await hero3.json()
        //return await hero4.json()
        //return await hero5.json()
        //return await hero6.json()
    } catch {
        return {"name":"error"}
    }
}

export async function firstPage (nb=563) {
    let data = {}
    let PromiseList = []
    for (let i=0; i<nb; i++) {
        PromiseList.push(GetData(i+1))
    }
    data = await Promise.all(PromiseList).then(function(values) {
        return values
    })  
    let res = []
    for (let index = 0; index < data.length; index++) {
        res.push([index+1, data[index]])
    }
    return res
}

let miguel = await firstPage()
console.log(miguel[0][1])