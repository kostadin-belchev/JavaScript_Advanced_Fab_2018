function subsum(array = [], startIndex, endIndex) {
    if (!Array.isArray(array)) { // •	if the first element is not an array, return NaN
        return NaN;
    }
    // •	if the start index is less than zero, assume it is zero
    if (startIndex < 0) {
        startIndex = 0;
    }
    // •	if the end index is outside the bounds of the array, assume it points to the last index of the array
    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }
    
    array = array.map(e => Number(e)); 

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(array[i]); //// Assume array elements may not be of type Number and cast everything
    }
    
    return sum;
}

console.log(subsum([10, '20', 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));