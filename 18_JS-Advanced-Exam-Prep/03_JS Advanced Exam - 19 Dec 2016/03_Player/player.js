class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this._scores = [];
    }
    get scoreCount() {
        return this._scores.length;
    }
    get highestScore() {
        return this._scores[0];
    }
    get topFiveScore() {
        return this._scores.slice(0,5);;
    }
    addScore(score) {
        // If passed argument is not a valid
        // number OR a string representation of a number, do nothing (ignore it).
        if (!isNaN(score) && score !== null) {
            this._scores.push(Number(score));  // or push(+score)
            this._scores.sort((a,b) => b - a);
        }
        return this;
    }

    toString() {
        let string = `${this.nickName}: [${this._scores}]`;
        return string;
    }
}

let p = new Player('Trotro');

p.addScore('Pesho');
console.log(p.toString());
//'Trotro: []'
console.log(p.highestScore);
// undefined
console.log(p.topFiveScore.length);
// 0
console.log(p.scoreCount);
 // 0


p.addScore('123');
console.log(p.toString());
// Trotro: [123]','You should add only valid numbers!');


// let peter = new Player("Peter");
// console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter);
// console.log('Score count: ' + peter.scoreCount);
// peter.addScore(450);
// peter.addScore(200);
// console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter);
// peter.addScore(2000);
// peter.addScore(300);
// peter.addScore(50);
// peter.addScore(700);
// peter.addScore(700);
// console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter);
// console.log('Score count: ' + peter.scoreCount);
// console.log();
// let maria = new Player("Maria")
//  .addScore(350)
//  .addScore(779)
//  .addScore(180);
// console.log('Highest score: ' + maria.highestScore);
// console.log(`Top 5 score: [${maria.topFiveScore}]`);
// console.log('' + maria);


// Highest score: undefined
// Top 5 score: []
// Peter: []
// Score count: 0
// Highest score: 450
// Top 5 score: [450,200]
// Peter: [450,200]
// Highest score: 2000
// Top 5 score: [2000,700,700,450,300]
// Peter: [2000,700,700,450,300,200,50]
// Score count: 7

// Highest score: 779
// Top 5 score: [779,350,180]
// Maria: [779,350,180]
