"use strict";
class Car {
    constructor() {
        this.mileage = 0;
        this.price = 100;
        this.color = 'white';
    }
    drive() {
        return 'drive!';
    }
    break() {
        return 'break!';
    }
}
class Ford {
    constructor() {
        this.mileage = 1;
        this.price = 2;
        this.color = 'white';
        this.seats = 2;
        this.tire = 3;
    }
    drive() {
        return 'drive!';
    }
    break() {
        return 'break!';
    }
}
const myFordCar = new Ford();
myFordCar.color;
