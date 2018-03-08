class SortedList {
    constructor() {
        this.collection = [];
        this.size = this.collection.length;
    }

    add(element) {
        this.collection.push(element);
        this.size++;
        return this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
            return this.collection;
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        }
    }
}

let sortedList = new SortedList();
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