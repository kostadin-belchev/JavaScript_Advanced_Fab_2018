function solve(array = []) {
    console.log(`Sum = ${array.reduce((a, b) => a + b)}`);
    console.log(`Min = ${array.reduce((a, b) => Math.min(a, b))}`);
    console.log(`Max = ${array.reduce((a, b) => Math.max(a, b))}`);
    console.log(`Product = ${array.reduce((a, b) => a * b)}`);
    console.log(`Join = ${array.reduce((a, b) => a.toString() + b.toString())}`);
    //console.log(`Join = ${array.reduce((a, b) => '' + a + b)}`);
    //console.log(`Join = ${array.join('')}`);
}

solve([2,3,10,5])