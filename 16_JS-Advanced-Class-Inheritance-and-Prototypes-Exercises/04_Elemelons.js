function solve() {
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
            return `Element: ${this.constructor.name.slice(0, this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: ${this.constructor.name.slice(0, this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: ${this.constructor.name.slice(0, this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: ${this.constructor.name.slice(0, this.constructor.name.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ['Water', 'Fire', 'Earth', 'Air']
            this.element = this.elements[0];
        }
    
        morph() {
            let currElement = this.elements.shift();
            this.element = this.elements[0];
            this.elements.push(currElement);
        }
    
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
//console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

let test = new Melolemonmelon(12.5, "Kingsize");
test.morph()
test.morph()
test.morph()
test.morph()
console.log(test.toString());

