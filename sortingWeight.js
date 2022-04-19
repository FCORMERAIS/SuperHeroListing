function sortingWeight (ID) {
    // Spliting the first value :
    let weight = data[ID].appearance.weight[1];
    const weightSplit = weight.split(" ");
    let weightNumbers = weightSplit[0];

    // Decomposing the list into a string :
    weightNumbers.toString();

    // Sorting values in ascending order :
    weightNumbers.sort();
}