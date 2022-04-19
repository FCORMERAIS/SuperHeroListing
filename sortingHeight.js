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
    // Array.prototype.reverse.this.sort(a, b);
} 