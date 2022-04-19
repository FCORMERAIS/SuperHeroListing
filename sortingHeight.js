"use strict";
function sortingHeight (ID) {
    // Spliting the first value :
    let height = data[ID].appearance.height[1];
    const heightSplit = height.split(" ");
    let heightNumbers = heightSplit[0];

    // Decomposing the list into a string :
    heightNumbers.toString();

    // Sorting values in ascending order :
    this.sort(function(a, b) {
        if (a.heightNumbers < b.heightNumbers) return -1;
        if (a.heightNumbers > b.heightNumbers) return 1;
        return 0;
    })
    // Si descending pressé : 
    // Array.prototype.reverse.this.sort(a, b);
}