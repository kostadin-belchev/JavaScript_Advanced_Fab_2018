let test = (function() {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(template) {
            for (const key in template) {
                if (template.hasOwnProperty(key)) {
                    // The hasOwnProperty() method returns a boolean indicating whether the 
                    // object has the specified property as own (not inherited) property.
                    const element = template[key];
                    if (typeof element === 'function') {
                        Extensible.prototype[key] = element;
                        
                    } else {
                        this[key] = element;
                    }
                }
            }
        }
    }
})();

let template = {
    extensionMethod: function () {console.log('Ivan');
    },
    extensionProperty: 'someTestString'
}
// NOT ABLE TO TEST
let obj1 = new test();
let obj2 = new test();
let obj3 = new test();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
