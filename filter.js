Array.prototype.AlphaSort = function() {
    this.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
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