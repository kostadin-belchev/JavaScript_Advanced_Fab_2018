function solve(commands) {
    let text = '';

    let processor = (function () {
        return function (commandString) {
            let commandTokens = commandString.split(' ');

            switch (commandTokens[0]) {
                case 'append':
                    text += commandTokens[1];
                    break;
                case 'print':
                    console.log(text);
                    break;
                case 'removeStart':
                    text = text.slice(commandTokens[1])
                    break;
                case 'removeEnd':
                text = text.slice(0, text.length - commandTokens[1])
                    break;
                default:
                    break;
            }
        }
    })();

    for (const command of commands) {
        processor(command);
    }
}

solve(
['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print']
)