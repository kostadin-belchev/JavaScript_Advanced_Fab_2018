function solve(name, age, weight, height) {
    let bmi = Math.round(weight*10000/(height*height));

    let currStatus = calculateStatus(bmi);

    function calculateStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    };

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: currStatus
    };

    if (person.status == 'obese') {
        person['recommendation'] = 'admission required';
    }
    return person;
}

console.log(solve("Peter", 29, 75, 182));

console.log(solve("Honey Boo Boo", 9, 57, 137));
