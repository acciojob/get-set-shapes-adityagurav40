class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
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
const rect = new Rectangle(5, 10);
console.log(rect.width);  // 5
console.log(rect.height);  // 10
console.log(rect.getArea());  // 50

const sq = new Square(7);
console.log(sq.width);  // 7
console.log(sq.height);  // 7
console.log(sq.getArea());  // 49
console.log(sq.getPerimeter());  // 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
