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

Array.prototype.AlignementSort = function() {
    this.sort(function(a, b) {
        if (a.biography.alignment === '-' || a.biography.alignment < b.biography.alignment) return 1;
        if (b.biography.alignment === '-' || a.biography.alignment > b.biography.alignment) return -1;
        return 0;
    })
}

Array.prototype.PublisherSort = function() {
    this.sort(function(a, b) {
        if (b.appearance.race == null || a.appearance.race < b.appearance.race) return -1;
        if (a.appearance.race == null || a.appearance.race > b.appearance.race) return 1;
        return 0;
    })
}

