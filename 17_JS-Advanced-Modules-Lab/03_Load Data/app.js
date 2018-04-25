//Require the data
let dataArray = require('./data')

function sort(property) {
    // sort and return data
    return dataArray.sort((a,b) => {
        return a[property].localeCompare(b[property]);
    });
}

function filter(property, value) {
    // filter and return data
    return dataArray.filter(e => e[property] === value);
}

result.sort = sort;
result.filter = filter;

//console.log(sort('shipTo'));
//console.log(filter('status', 'shipped'));
