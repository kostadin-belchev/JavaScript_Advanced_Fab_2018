function solution() {
    let collection = [];

    function sortingFunction(a, b) {
        return a - b;
    }

    function add(element) {
        collection.push(element);
        this.size++;
        return collection.sort(sortingFunction);
    }

    function remove(index) {
        
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
            this.size--;
            return collection.sort(sortingFunction);
        }
        
    }

    function get(index) {
        if (index >= 0 && index < collection.length) {
            return collection[index];
        }
    }

    return {
        add,
        remove,
        get,
        size: collection.length // does not matter what this is, as long as it's value is initially 0
    }
}

let sortedList = solution();
sortedList.add(4);
sortedList.add(3);
sortedList.add(7);
sortedList.add(-1);
sortedList.remove(0);
console.log(sortedList.get(0));
console.log(sortedList.get(1));
console.log(sortedList.get(2));
console.log(sortedList.get(3));
console.log(sortedList.size);
