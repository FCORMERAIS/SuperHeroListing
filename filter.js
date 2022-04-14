Array.prototype.AlphaSort = function() {
    this.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
}

Array.prototype.RaceSort = function() {
    this.sort(function(a, b) {
        if (a.appearance.race < b.appearance.race) return -1;
        if (a.appearance.race > b.appearance.race) return 1;
        return 0;
    })
}