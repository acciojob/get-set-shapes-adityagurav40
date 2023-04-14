//complete this code
class Rectangle {
	 constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

class Square extends Rectangle {
	var rectangle = new Rectangle(5, 10);
console.log(rectangle.getWidth());   // Output: 5
console.log(rectangle.getHeight());  // Output: 10
console.log(rectangle.getArea());    // Output: 50

var square = new Square(8);
console.log(square.getWidth());      // Output: 8
console.log(square.getHeight());     // Output: 8
console.log(square.getArea());       // Output: 64
console.log(square.getPerimeter());  // O
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
