export default class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new TypeError('Cannot instantiate an abstract class')
        }
        this.name = name;
    }
}