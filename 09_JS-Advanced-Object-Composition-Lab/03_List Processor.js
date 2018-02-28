function solve(arrayOfCommands) {
    let listProcessor = (function () {
        let collection = [];
    
        function add(stringToAdd) {
            collection.push(stringToAdd);
        }
    
        function remove(stringToRemove) {
            collection = collection.filter(e => e != stringToRemove);
        }
    
        function print() {
            console.log(collection.join(','));
        }
    
        return {
            add,
            remove,
            print
        }
    })();

    for (const inputCommand of arrayOfCommands) {
        let [cmd, arg] = inputCommand.split(' ');
        listProcessor[cmd](arg);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);