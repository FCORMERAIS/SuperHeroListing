"use strict";
Array.prototype.sortingHeight = function(isReverse) {
    this.sort(function(a, b) {

        // Spliting the first value and decomposing the list into a string :
        a = parseInt(data.appearance.height[1].split(" ")[0]);
        b = parseInt(data.appearance.height[1].split(" ")[0]);

        // Sorting values in ascending order :
        if (isReverse) return b - a
        return a - b
    })

    // Si descending pressé : 
    // Array.prototype.reverse(this.sort(a, b));
}

"use strict";
Array.prototype.sortingWeight = function(isReverse) {
    this.sort(function(a, b) {

        // Spliting the first value and decomposing the list into a string :
        a = parseInt(data.appearance.weight[1].split(" ")[0]);
        b = parseInt(data.appearance.weight[1].split(" ")[0]);

        // Sorting values in ascending order :
        if (isReverse) return b - a
        return a - b
    })

    // Si descending pressé : 
    // Array.prototype.reverse(this.sort(a, b));
}

"use strict";
Array.prototype.PowerSortByInt = function(isReverse) {
    this.sort((a, b) => {
        if (isReverse) return b[1].intelligence - a[1].intelligence
        return a[1].intelligence - b[1].intelligence
    })
}

"use strict";
Array.prototype.PowerSortByStr = function(isReverse) {
    this.sort((a, b) => {
        if (isReverse) return b[1].strength - a[1].strength
        return a[1].strength - b[1].strength
    })
}

"use strict";
Array.prototype.PowerSortBySpe = function(isReverse) {
    this.sort((a, b) => {
        if (isReverse) return b[1].speed - a[1].speed
        return a[1].speed - b[1].speed
    })
}

"use strict";
Array.prototype.PowerSortByDur = function(isReverse) {
    this.sort((a, b) => {
        if (isReverse) return b[1].durability - a[1].durability
        return a[1].durability > b[1].durability
    })
}

"use strict";
Array.prototype.PowerSortByPow = function(isReverse) {
    this.sort((a, b) => {
        if (isReverse) return b[1].power - a[1].power
        return a[1].power - b[1].power
    })
}

"use strict";
Array.prototype.PowerSortByCom = function(isReverse) {
    this.sort((a, b) => {
        if (isReverse) return b[1].combat - a[1].combat
        return a[1].combat - b[1].combat
    })
}

"use strict";
Array.prototype.GenderSort = function(isReverse) {
    this.sort(function(a, b) {
        if (isReverse) {
            if ((b[1].gender === "-") || (b[1].gender < a[1].gender)) return -1;
            if ((a[1].gender === "-") || (b[1].gender > a[1].gender)) return 1;
        } else {
            if ((b[1].gender === "-") || (a[1].gender < b[1].gender)) return -1;
            if ((a[1].gender === "-") || (a[1].gender > b[1].gender)) return 1;
        }
        return 0;
    })
}

"use strict";
Array.prototype.RaceSort = function(isReverse) {
    this.sort(function(a, b) {
        if (isReverse) {
            if ((b[1].race === null) || (b[1].race < a[1].race)) return -1;
            if ((a[1].race === null) || (b[1].race > a[1].race)) return 1;
        } else {
            if ((b[1].race === null) || (a[1].race < b[1].race)) return -1;
            if ((a[1].race === null) || (a[1].race > b[1].race)) return 1;
        }
        return 0;
    })
}

"use strict";
Array.prototype.EyeColorSort = function(isReverse) {
    this.sort(function(a, b) {
        if (isReverse) {
            if (b[1].eyeColor === "-" || b[1].eyeColor < a[1].eyeColor) return -1;
            if (a[1].eyeColor === "-" || b[1].eyeColor > a[1].eyeColor) return 1;
        } else {
            if (b[1].eyeColor === "-" || a[1].eyeColor < b[1].eyeColor) return -1;
            if (a[1].eyeColor === "-" || a[1].eyeColor > b[1].eyeColor) return 1;
        }
        return 0;
    })
}

"use strict";
Array.prototype.HairColorSort = function(isReverse) {
    this.sort(function(a, b) {
        if (isReverse) {
            if ((b[1].hairColor === "-") || (b[1].hairColor < a[1].hairColor)) return -1;
            if ((a[1].hairColor === "-") || (b[1].hairColor > a[1].hairColor)) return 1;
        } else {
            if ((b[1].hairColor === "-") || (a[1].hairColor < b[1].hairColor)) return -1;
            if ((a[1].hairColor === "-") || (a[1].hairColor > b[1].hairColor)) return 1;
        }
        return 0;
    })
}

"use strict";
Array.prototype.PublisherSort = function(isReverse) {
    this.sort(function(a, b) {
        if (b[1].publisher == "" && a[1].publisher !== null) return -1;
        if (a[1].publisher == "" && b[1].publisher !== null) return 1;
        if (isReverse) {
            if (b[1].publisher == null || b[1].publisher < a[1].publisher) return -1;
            if (a[1].publisher == null || b[1].publisher > a[1].publisher) return 1;
        } else {
            if (b[1].publisher == null || a[1].publisher < b[1].publisher) return -1;
            if (a[1].publisher == null || a[1].publisher > b[1].publisher) return 1;
        }
        return 0;
    })
}

"use strict";
Array.prototype.AlignementSort = function(isReverse) {
    this.sort(function(a, b) {
        if (isReverse) {
            if ((a[1].alignment === '-') || (b[1].alignment < a[1].alignment === '-')) return 1;
            if ((b[1].alignment === '-') || (b[1].alignment === '-' > a[1].alignment === '-')) return -1;
        } else {
            if ((a[1].alignment === '-') || (a[1].alignment < b[1].alignment === '-')) return 1;
            if ((b[1].alignment === '-') || (a[1].alignment === '-' > b[1].alignment === '-')) return -1;
        }
        return 0;
    })
}

"use strict";
Array.prototype.FullNameSort = function(isReverse) {
    this.sort(function(a, b) {
        if (b[1].fullName == "" && a[1].fullName !== null) return -1;
        if (a[1].fullName == "" && b[1].fullName !== null) return 1;
        if (isReverse) {
            if (b[1].fullName == null || b[1].fullName < a[1].fullName) return -1;
            if (a[1].fullName == null || b[1].fullName > a[1].fullName) return 1;
        } else {
            if (b[1].fullName == null || a[1].fullName < b[1].fullName) return -1;
            if (a[1].fullName == null || a[1].fullName > b[1].fullName) return 1;
        }

        return 0;
    })
}