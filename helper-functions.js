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