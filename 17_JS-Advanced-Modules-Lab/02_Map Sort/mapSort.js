// takes in a Map and optionally a sort function and returns a new map that is sorted
function mapSort(map, sortFn) {
    // in case sortFn is not supplied the returned map should be sorted by its keys.
    if (sortFn === undefined) {
        return new Map([...map].sort((a,b) => {
            return a[0].toString().localeCompare(b[0].toString());
        }));
    }
    return new Map([...map].sort(sortFn));
}
module.exports = mapSort;

// let map = new Map();
// map.set(3,"Pesho");
// map.set(1,"Gosho");
// map.set(7,"Aleks");
// console.log(mapSort(map));
