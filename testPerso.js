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


async function GetDataPowerstats(id){
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/powerstats/'+id.toString()+'.json')
        //var hero4 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/biography/'+id.toString()+'.json')
        //var hero5 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/connections/'+id.toString()+'.json')
        //var hero6 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/images/'+id.toString()+'.json')
        return await hero.json()
        //return await hero4.json()
        //return await hero5.json()
        //return await hero6.json()
    } catch {
        return {"intelligence": 0,"strength":0,"speed": 0,"durability": 0,"power": 0,"combat": 0}
    }
}

export async function firstPagePowerstats (nb=563) {
    let data = {}
    let PromiseList = []
    for (let i=0; i<nb; i++) {
        PromiseList.push(GetDataPowerstats(i+1))
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

"use strict";
Array.prototype.PowerSortByInt = function() {
    this.sort(function(a, b) {
        if (a[1].intelligence > b[1].intelligence) return -1;
        if (a[1].intelligence < b[1].intelligence) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByStr = function() {
    this.sort(function(a, b) {
        if (a[1].strength > b[1].strength) return -1;
        if (a[1].strength < b[1].strength) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortBySpe = function() {
    this.sort(function(a, b) {
        if (a[1].speed > b[1].speed) return -1;
        if (a[1].speed < b[1].speed) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByDur = function() {
    this.sort(function(a, b) {
        if (a[1].durability > b[1].durability) return -1;
        if (a[1].durability < b[1].durability) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByPow = function() {
    this.sort(function(a, b) {
        if (a[1].power > b[1].power) return -1;
        if (a[1].power < b[1].power) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PowerSortByCom = function() {
    this.sort(function(a, b) {
        if (a[1].combat > b[1].combat) return -1;
        if (a[1].combat < b[1].combat) return 1;
        return 0;
    })
}

// Generating Powerstats : 
let generatePowerstats = await firstPagePowerstats()
generatePowerstats.PowerSortByInt(), generatePowerstats.PowerSortByStr(), generatePowerstats.PowerSortByDur(), generatePowerstats.PowerSortBySpe(), generatePowerstats.PowerSortByPow(), generatePowerstats.PowerSortByCom()
console.log(generatePowerstats)


// -------------------- //


async function GetDataAppearance(id){
    try {
        var hero2 = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/appearance/'+id.toString()+'.json')
        return await hero2.json()
    } catch {
        return {"intelligence": 0,"strength":0,"speed": 0,"durability": 0,"power": 0,"combat": 0}
    }
}

export async function firstPageAppearance (nb=563) {
    let data = {}
    let PromiseList = []
    for (let i=0; i<nb; i++) {
        PromiseList.push(GetDataAppearance(i+1))
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

"use strict";
Array.prototype.GenderSort = function() {
    this.sort(function(a, b) {
        if ((b[1].gender === "-") || (a[1].gender < b[1].gender)) return -1;
        if ((a[1].gender === "-") || (a[1].gender > b[1].gender)) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.RaceSort = function() {
    this.sort(function(a, b) {
        if ((b[1].race === null) || (a[1].race < b[1].race)) return -1;
        if ((a[1].race === null) || (a[1].race > b[1].race)) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.EyeColorSort = function() {
    this.sort(function(a, b) {
        if (b[1].eyeColor === "-" || a[1].eyeColor < b[1].eyeColor) return -1;
        if (a[1].eyeColor === "-" || a[1].eyeColor > b[1].eyeColor) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.HairColorSort = function() {
    this.sort(function(a, b) {
        if ((b[1].hairColor === "-") || (a[1].hairColor < b[1].hairColor)) return -1;
        if ((a[1].hairColor === "-") || (a[1].hairColor > b[1].hairColor)) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.PublisherSort = function() {
    this.sort(function(a, b) {
        if (b[1].publisher == "" && a[1].publisher !== null) return -1;
        if (a[1].publisher == "" && b[1].publisher !== null) return 1;
        if (b[1].publisher == null || a[1].publisher < b[1].publisher) return -1;
        if (a[1].publisher == null || a[1].publisher > b[1].publisher) return 1;
        return 0;
    })
}

"use strict";
Array.prototype.AlignementSort = function() {
    this.sort(function(a, b) {
        if ((a[1].alignment === '-') || (a[1].alignment < b[1].alignment === '-')) return 1;
        if ((b[1].alignment === '-') || (a[1].alignment === '-' > b[1].alignment === '-')) return -1;
        return 0;
    })
}