function carGenerator(wantedCar) {

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let engineTypeProduced;
    if (wantedCar.power <= 90) {
        engineTypeProduced = smallEngine;
    } else if (wantedCar.power > 90 && wantedCar.power <= 120) {
        engineTypeProduced = normalEngine;
    } else if (wantedCar.power > 120 && wantedCar.power <= 200) {
        engineTypeProduced = monsterEngine;
    }

    let carriageProduced = { 
        type: wantedCar.carriage,
        color: wantedCar.color 
    };

    let wheelsArray = [];
    //let producedWheelSize;
    //let wantedCarWheelsSize = Math.floor(wantedCar.wheelsize);
    let wantedCarWheelsSize = wantedCar.wheelsize;
    if (wantedCarWheelsSize % 2 == 0) {
        //producedWheelSize = wantedCarWheelsSize - 1;
        wantedCarWheelsSize--;
    } //else {
        //producedWheelSize = wantedCarWheelsSize;
    //}

    for (let i = 0; i < 4; i++) {
        //wheelsArray.push(producedWheelSize);
        wheelsArray.push(wantedCarWheelsSize);
    }

    let producedCar = {
        model: wantedCar.model,
        engine: engineTypeProduced,
        carriage: carriageProduced,
        wheels: wheelsArray
    }
    return producedCar;
}

console.log(carGenerator({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));