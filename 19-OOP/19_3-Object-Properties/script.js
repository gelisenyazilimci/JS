"use strict";

// object properties

function Rectangle (name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.Area = function()  {return this.width * this.height;};
}

const rectangle = new Rectangle("Rectangle 1", 10, 5);
const rectangle2 = new Rectangle("Rectangle 2", 20, 15);

rectangle.color = "Blue";
rectangle2.color = "Red";


rectangle.cevre = function () {return 2*(this.height + this.width);};

console.log(rectangle.Area())
console.log(rectangle2.Area())

console.log(rectangle.cevre());