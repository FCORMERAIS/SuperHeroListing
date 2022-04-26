"use strict";
Array.prototype.sortingHeight = function() {
    this.sort(function(a, b) {

        // Spliting the first value and decomposing the list into a string :
        a = parseInt(data.appearance.height[1].split(" ")[0]);
        b = parseInt(data.appearance.height[1].split(" ")[0]);

        // Sorting values in ascending order :
        return a - b
    })

    // Si descending pressé : 
    // Array.prototype.reverse(this.sort(a, b));
}

"use strict";
Array.prototype.sortingWeight = function() {
    this.sort(function(a, b) {

        // Spliting the first value and decomposing the list into a string :
        a = parseInt(data.appearance.weight[1].split(" ")[0]);
        b = parseInt(data.appearance.weight[1].split(" ")[0]);

        // Sorting values in ascending order :
        return a - b
    })

    // Si descending pressé : 
    // Array.prototype.reverse(this.sort(a, b));
}

"use strict";
Array.prototype.PowerSortByInt = function() {
    this.sort((a, b) => a[1].intelligence - b[1].intelligence)
}

"use strict";
Array.prototype.PowerSortByStr = function() {
    this.sort((a, b) => a[1].strength - b[1].strength)
}

"use strict";
Array.prototype.PowerSortBySpe = function() {
    this.sort((a, b) => a[1].speed - b[1].speed)
}

"use strict";
Array.prototype.PowerSortByDur = function() {
    this.sort((a, b) => a[1].durability > b[1].durability)
}

"use strict";
Array.prototype.PowerSortByPow = function() {
    this.sort((a, b) => a[1].power > b[1].power)
}

"use strict";
Array.prototype.PowerSortByCom = function() {
    this.sort((a, b) => a[1].combat > b[1].combat)
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

"use strict";
Array.prototype.FullNameSort = function() {
    this.sort(function(a, b) {
        if (b[1].fullName == "" && a[1].fullName !== null) return -1;
        if (a[1].fullName == "" && b[1].fullName !== null) return 1;
        if (b[1].fullName == null || a[1].fullName < b[1].fullName) return -1;
        if (a[1].fullName == null || a[1].fullName > b[1].fullName) return 1;
        return 0;
    })
}