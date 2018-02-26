function result() {
    // JavaScript functions have a special property arguments, 
    // which contains all parameters passed to a function, 
    // regardless of whether you’ve specified them in the function declaration, or left the parenthesis empty.
    let funcArguments = result.arguments;
    let summary = {};
    for (let i = 0; i < funcArguments.length; i++) {
        let argument = arguments[i];
        let type = typeof argument;
        console.log(`${type}: ${argument}`);
        
        // We can use an object as an associative array to store the number of each type occurrence. 
        // Each type will be a property and its value will be the number of times it occurs in the arguments. 
        // We can access them just like we would the keys of an array:
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    // SORTING & PRINTING
    // Place each argument description on a new line.
    // At the end print a tally with counts for each type in descending order, each on a new line in format {type} = {count} 
    // If two types have the same count, use order of appearance. 
    
    let sortedTypes = [];
    for (const currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

    // SORTING
    sortedTypes = sortedTypes.sort((a, b) => {
        return b[1] - a[1];
    });

    // PRINTING
    for (const keyValuePair of sortedTypes) {
        console.log(`${keyValuePair[0]} = ${keyValuePair[1]}`);
        
    }
}

result('cat', 42, function () { console.log('Hello world!'); });