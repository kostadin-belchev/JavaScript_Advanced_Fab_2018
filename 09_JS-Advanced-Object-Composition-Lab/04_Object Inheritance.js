function solve(arrayOfCommands) {
    let solution = (function () {
        let objects = new Map();
    
        function create(objName, param, parentName) {
            if (param) {
                inherit(objName, parentName);            
            } else {
                objects.set(objName, {});
            }
        }
    
        function inherit(objName, parentName) {
            objects.set(objName, Object.create(objects.get(parentName)));
        }
    
        function set(objName, prop, value) {
            let obj = objects.get(objName);
            obj[prop] = value;
        }
    
        function print(objName) {
            let currObj = objects.get(objName);
            let keysAndValues = [];
            for (const key in currObj) {
                keysAndValues.push(`${key}:${currObj[key]}`);
            }
            console.log(keysAndValues.join(', '));
            
        }
    
        return {
            create,
            set,
            print,
        }
    })();

    for (const commandString of arrayOfCommands) {
        let [cmd, p1, p2, p3] = commandString.split(' ');
        solution[cmd](p1, p2, p3);
    }
}



solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);
