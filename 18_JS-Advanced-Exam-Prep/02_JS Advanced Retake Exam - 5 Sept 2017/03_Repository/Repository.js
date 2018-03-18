class Repository {
    constructor(props) {
        this.props = props;
        this.id = 0;
        this.data = new Map();
    }
    // Getter count – returns the number of stored entities
    get count() {
        return this.data.size;
    }
    set props(value) {
        return this._props = value;
    }
    get props() {
        return this._props;
    }
    // Function add(entity) – adds an entity to the data; if successful, returns the resulting ID
    add(entity) {
        // If validation is successful, add the entity to the repository with a new ID.
        // Store entities in a Map where the key is the ID and the value is the entity.
        this.validateEntity(entity);
        this.data.set(this.id, entity);
        return this.id++;
    }
    get(id) {
        if (this.data.get(id) === undefined) {
            throw new TypeError(`Entity with id: ${id} does not exist!`)
        }
        return this.data.get(id);
    }
    update(id, newEntity) { // To update an entity, we receive its id and the new entity object. 
        // If the id does not exist in the data throw an Error with message "Entity with id: {id} does not exist!". 
        // Validate the new entity with the same validations and replace the old one with the new one.
        let keys = [...this.data.keys()];
        if (!keys.includes(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        this.validateEntity(newEntity);
        // The ID should change only when we add a new entity. This is why we are not increasing it now
        this.data.set(id, newEntity);
    }
    del(id) { // To delete an entity, we receive only its id. 
        // If the id does not exist in the data throw an Error with message "Entity with id: {id} does not exist!". 
        // After that remove the entity from the map. 
        let keys = [...this.data.keys()];
        if (!keys.includes(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        this.data.delete(id);
    }

    // validateEntity(entity) {
    //     for (const key in entity) {
    //         if (entity.hasOwnProperty(key)) {
    //             const value = entity[key];
    //             for (const prop in this.props) {
    //                 if (this.props.hasOwnProperty(prop)) {
    //                     const type = this.props[prop];
    //                     if (key !== prop) {
    //                         // If any property is missing, you should throw an Error with message: "Property {propName} is missing from the entity!"
    //                         throw new Error(`Property ${key} is missing from the entity!`);
    //                     } else {
    //                         if (typeof value !== type) {
    //                             throw new Error(`Property ${key} is of incorrect type!`)
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    validateEntity(value) {
        for (const key in value) {
            if (this.props.hasOwnProperty(key)) {
                if (typeof (value[key]) !== this.props[key]) {
                    throw new TypeError(`Property ${key} is of incorrect type!`)
                }
            } else {
                throw new TypeError(`Property ${key} is missing from the entity!`)
            }
        }
    }
}
// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
console.log(repository.add(entity)); // Returns 0
console.log(repository.add(entity)); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
// COMMENTED LINE BELOW
//repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id
