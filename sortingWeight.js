"use strict";
function sortingWeight (ID) {
    // Spliting the first value :
    let weight = data[ID].appearance.weight[1];
    const weightSplit = weight.split(" ");
    let weightNumbers = weightSplit[0];

    // Decomposing the list into a string :
    weightNumbers.toString();

    // Sorting values in ascending order :
    this.sort(function(a, b) {
        if (a.weightNumbers < b.weightNumbers) return -1;
        if (a.weightNumbers > b.weightNumbers) return 1;
        return 0;
    })    
    // Si descending pressé : 
    // Array.prototype.reverse.this.sort(a, b);
}

