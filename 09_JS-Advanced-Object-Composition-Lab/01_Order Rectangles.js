function solve(inputArrayOfRectangles) {
    let arrayOfRectangles = [];
    for (let [width, height] of inputArrayOfRectangles) {
        let rect = {
            width: width,
            height: height,
            area: function () { return this.width * this.height }, // it this were to be a lambda function we would have to use rect, becuase this in the the lamba's current context points to the global object
            compareTo: function (other) {
                let firstCriteria = other.area() - this.area(); // // we can use this, becuase this in the current context points to the rect object
                return firstCriteria || (other.width - this.width);
            }
        }
        arrayOfRectangles.push(rect);
    }
    return arrayOfRectangles.sort((a, b) => a.compareTo(b));
}

//console.log(solve([[10,5],[5,12]]));
console.log(solve([[10,5], [3,20], [5,12]]));
