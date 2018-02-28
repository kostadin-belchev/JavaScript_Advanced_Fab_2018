function createRect(width, height) {
    let rect = {
      width: width,
      height: height,
      area: () => rect.width * rect.height,
      compareTo: function(other) {
        let result = other.area() - rect.area();
        return result || (other.width - rect.width);
      }
    };
    return rect;
} 
  
let myRect = createRect(4, 7);
let otherRect = createRect(20, 13);
let resultOfComparison = myRect.compareTo(otherRect);
console.log(resultOfComparison);