function commandProcessor(array = []) {
    
    let commandsFunction = (function(){
        let str = '';
        return {
        append: (newStr) => { str += newStr; },
        removeStart: (n) => { str = str.slice(n)},
        removeEnd: (n) => {str = str.slice(0, str.length - n)},
        print: () => {console.log(str);}}
    })();

    for (const inputLine of array) {
        let [command, parameter] = inputLine.split(' ');
        commandsFunction[command](parameter);
    }
}

commandProcessor(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print'])
