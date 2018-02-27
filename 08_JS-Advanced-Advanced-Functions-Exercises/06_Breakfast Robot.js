function solution() {
    let microelements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
    }

    return function (instruction) {
        let commandTokens = instruction.split(' ');
        let command = commandTokens[0];
        if (command == 'restock') {
            let microelement = commandTokens[1];
            let quantity = Number(commandTokens[2]);
            microelements[microelement] += quantity;
            return 'Success';
        } else if (command == 'prepare') {
            let recipe = commandTokens[1];
            let quantity = Number(commandTokens[2]);
            return cook(recipe, quantity);
        } else if (command == 'report') {
            return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
        }
    }

    function cook(product, qty) {
        let neededCarbs;
        let neededFats;
        let neededFlavours;
        let neededProteins;

        switch (product) {
            case 'apple':
                neededCarbs = qty * 1;
                neededFlavours = qty * 2;
                if (neededCarbs > microelements.carbohydrate) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (neededFlavours > microelements.flavour){
                    return `Error: not enough flavour in stock`;
                } else {
                    microelements.carbohydrate -= neededCarbs;
                    microelements.flavour -= neededFlavours;
                    return 'Success';
                }
                break;
            case 'coke':
                neededFlavours = qty * 20;
                neededCarbs = qty * 10;
                if (neededCarbs > microelements.carbohydrate) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (neededFlavours > microelements.flavour){
                    return `Error: not enough flavour in stock`;
                } else {
                    microelements.carbohydrate -= neededCarbs;
                    microelements.flavour -= neededFlavours;
                    return 'Success';
                }
                break;
            case 'burger':
                neededCarbs = qty * 5;
                neededFats = qty * 7;
                neededFlavours = qty * 3;
                if (neededCarbs > microelements.carbohydrate) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (neededFats > microelements.fat) {
                    return `Error: not enough fat in stock`
                }
                else if (neededFlavours > microelements.flavour){
                    return `Error: not enough flavour in stock`;
                } else {
                    microelements.carbohydrate -= neededCarbs;
                    microelements.fat -= neededFats;
                    microelements.flavour -= neededFlavours;
                    return 'Success';
                }
                break;
            case 'omelet':
                neededProteins = qty * 5;
                neededFats = qty * 1;
                neededFlavours = qty * 1;
                if (neededProteins > microelements.protein) {
                    return `Error: not enough protein in stock`;
                } else if (neededFats > microelements.fat) {
                    return `Error: not enough fat in stock`
                }
                else if (neededFlavours > microelements.flavour){
                    return `Error: not enough flavour in stock`;
                } else {
                    microelements.protein -= neededProteins;
                    microelements.fat -= neededFats;
                    microelements.flavour -= neededFlavours;
                    return 'Success';
                }
                break;
            case 'cheverme':
                neededProteins = qty * 10;
                neededCarbs = qty * 10;
                neededFats = qty * 10;
                neededFlavours = qty * 10;
                if (neededProteins > microelements.protein) {
                    return `Error: not enough protein in stock`;
                } else if (neededCarbs > microelements.carbohydrate) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (neededFats > microelements.fat) {
                    return `Error: not enough fat in stock`
                }
                else if (neededFlavours > microelements.flavour){
                    return `Error: not enough flavour in stock`;
                } else {
                    microelements.protein -= neededProteins;
                    microelements.carbohydrate -= neededCarbs;
                    microelements.fat -= neededFats;
                    microelements.flavour -= neededFlavours;
                    return 'Success';
                }
                break;
            default:
                break;
        }
        
    }
}

// let manager = solution();
// manager("restock flavour 50"); // Success
// manager("prepare coke 4");     // Error: not enough carbohydrate in stock

// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

