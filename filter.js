import { GenerateTable } from "./js.js";

let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()


var precedf = ""

document.getElementById("Name").onclick = function NameAZ() {
    data.AlphaSort()
    if ( precedf == "name" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "name"
    }
    GenerateTable(data)
};

document.getElementById("Fname").onclick = function FullName() {
    data.FullNameSort()
    if ( precedf == "fullname" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "fullname"
    }   
    GenerateTable(data)
};

document.getElementById("Intell").onclick = function Int() {
    data.PowerSortByInt()
    if ( precedf == "intelligence" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "intelligence"
    }
    GenerateTable(data)
};

document.getElementById("Str").onclick = function Strength() {
    data.PowerSortByStr()
    if ( precedf == "strength" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "strength"
    }
    GenerateTable(data)
};

document.getElementById("Spe").onclick = function Speed() {
    data.PowerSortBySpe()
    if ( precedf == "speed" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "speed"
    }
    GenerateTable(data)
};

document.getElementById("Dur").onclick = function Dur() {
    data.PowerSortByDur()
    if ( precedf == "durability" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "durability"
    }
    GenerateTable(data)
};

document.getElementById("Pow").onclick = function Pow() {
    data.PowerSortByPow()
    if ( precedf == "power" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "power"
    }
    GenerateTable(data)
};

document.getElementById("Com").onclick = function Com() {
    data.PowerSortByCom()
    if ( precedf == "combat" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "combat"
    }
    GenerateTable(data)
};

document.getElementById("Race").onclick = function Race() {
    data.RaceSort()
    if ( precedf == "race" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "race"
    }
    GenerateTable(data)
};

document.getElementById("Gen").onclick = function Gen() {
    data.GenderSort()
    if ( precedf == "gender" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "gender"
    }
    GenerateTable(data)
};

// document.getElementById("Hei").onclick = function Hei() {
//     data.HeightSort()
//     if ( precedf == "height" ) {
//         data.reverse()
//         precedf = ""
//     } else {
//         precedf = "height"
//     }
//     GenerateTable(data)
// };

// document.getElementById("Wei").onclick = function Wei() {
//     data.WeightSort()
//     if ( precedf == "weight" ) {
//         data.reverse()
//         precedf = ""
//     } else {
//         precedf = "weight"
//     }
//     GenerateTable(data)
// };

// document.getElementById("Pofb").onclick = function Pofb() {
//     data.PofbSort()
//     if ( precedf == "placeOfBirth" ) {
//         data.reverse()
//         precedf = ""
//     } else {
//         precedf = "placeOfBirth"
//     }
//     GenerateTable(data)
// };

document.getElementById("Ali").onclick = function Ali() {
    data.AlignmentSort()
    if ( precedf == "alignment" ) {
        data.reverse()
        precedf = ""
    } else {
        precedf = "alignment"
    }
    GenerateTable(data)
};

Array.prototype.AlphaSort = function() {
    this.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
}

Array.prototype.FullNameSort = function() {
    this.sort(function(a, b) {
        if (b.biography.fullName === "" && a.biography.fullName !== "") return -1
        if (a.biography.fullName === "" && b.biography.fullName !== "") return 1
        if (b.biography.fullName === "" || a.biography.fullName < b.biography.fullName) return -1;
        if (a.biography.fullName === "" || a.biography.fullName > b.biography.fullName) return 1;
        return 0;
    })
}

Array.prototype.RaceSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.race === null || a.appearance.race < b.appearance.race) return -1;
        if (a.appearance.race === null || a.appearance.race > b.appearance.race) return 1;
        return 0;
    })
}
Array.prototype.PowerSortByInt = function() {
    this.sort(function(a, b) {
        if (a.powerstats.intelligence < b.powerstats.intelligence) return -1;
        if (a.powerstats.intelligence > b.powerstats.intelligence) return 1;
        return 0;
    })
}
Array.prototype.PowerSortByStr = function() {
    this.sort(function(a, b) {
        if (a.powerstats.strength < b.powerstats.strength) return -1;
        if (a.powerstats.strength > b.powerstats.strength) return 1;
        return 0;
    })
}
Array.prototype.PowerSortBySpe = function() {
    this.sort(function(a, b) {
        if (a.powerstats.speed < b.powerstats.speed) return -1;
        if (a.powerstats.speed > b.powerstats.speed) return 1;
        return 0;
    })
}
Array.prototype.PowerSortByDur = function() {
    this.sort(function(a, b) {
        if (a.powerstats.durability < b.powerstats.durability) return -1;
        if (a.powerstats.durability > b.powerstats.durability) return 1;
        return 0;
    })
}
Array.prototype.PowerSortByPow = function() {
    this.sort(function(a, b) {
        if (a.powerstats.power < b.powerstats.power) return -1;
        if (a.powerstats.power > b.powerstats.power) return 1;
        return 0;
    })
}
Array.prototype.PowerSortByCom = function() {
    this.sort(function(a, b) {
        if (a.powerstats.combat < b.powerstats.combat) return -1;
        if (a.powerstats.combat > b.powerstats.combat) return 1;
        return 0;
    })
}
Array.prototype.GenderSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.gender === "-" || a.appearance.gender < b.appearance.gender) return -1;
        if (a.appearance.gender === "-" || a.appearance.gender > b.appearance.gender) return 1;
        return 0;
    })
}
Array.prototype.EyeColorSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.eyeColor === "-" || a.appearance.eyeColor < b.appearance.eyeColor) return -1;
        if (a.appearance.eyeColor === "-" || a.appearance.eyeColor > b.appearance.eyeColor) return 1;
        return 0;
    })
}
Array.prototype.HairColorSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.hairColor === "-" || a.appearance.hairColor < b.appearance.hairColor) return -1;
        if (a.appearance.hairColor === "-" || a.appearance.hairColor > b.appearance.hairColor) return 1;
        return 0;
    })
}
Array.prototype.AlignmentSort = function() {
    this.sort(function(a, b) {
        if (a.biography.alignment === '-' || a.biography.alignment < b.biography.alignment) return 1;
        if (b.biography.alignment === '-' || a.biography.alignment > b.biography.alignment) return -1;
        return 0;
    })
}