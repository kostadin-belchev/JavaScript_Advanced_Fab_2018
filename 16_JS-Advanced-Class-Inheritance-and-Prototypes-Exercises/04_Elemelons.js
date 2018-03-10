class Melon {
    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }
        //initialize weight and melonSort properties
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: Water\nSort: ${this.melonSort}`
    }
}

//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

