function myFunc() {
    let myObj = {
        extend: function (template) {
            for (const key in template) {
                if (template.hasOwnProperty(key)) {
                    // The hasOwnProperty() method returns a boolean indicating whether the 
                    // object has the specified property as own (not inherited) property.
                    const element = template[key];
                   if (typeof element === 'function') {
                       myObj.__proto__[key] = element;
                   } else {
                       myObj[key] = element;
                   }
                }
            }
        }
    };
    return myObj;
}

let template = {
    extensionMethod: function () {console.log('Ivan');
    },
    extensionProperty: 'someTestString'
}

let myObject = myFunc()
myObject.extend(template);
console.log(myObject);
console.log(myObject.__proto__);