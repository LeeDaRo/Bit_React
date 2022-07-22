/**
 * ES6 이후에 나온 클래스 (class)
 */
class Rectagle {

  // 생성자
  constructor(height, width) {

    this.height = height;
    this.width = width;
  }

  //Getter
  get area() {
    return this.calcArea();
  }

  //Method
  calcArea() {
    return this.height * this.width;
  }

}

const p = new Rectagle(3, 7);
const square = new Rectagle(10, 10);
console.log(square.area);