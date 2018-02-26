function sortArray(inputArray = [], sortMethod ='') {
    
    let ascendingComparator = function (a, b) {
        return a - b;
    }
    
    let descendingCcomparator = function (a, b) {
        return b - a;
    }
    
    let sortingStrategies = {
        asc: ascendingComparator,
        desc: descendingCcomparator
    }

    return inputArray.sort(sortingStrategies[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
