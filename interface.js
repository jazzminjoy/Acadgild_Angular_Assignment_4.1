'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create class Car which implements Drivable {}
var Car = function () {
    // Even if not used, it is good coding practice to include a constructor
    // in a class definition. So, I have done so.
    function Car() {
        _classCallCheck(this, Car);

        console.log('Inside the class Car constructor');
    }

    _createClass(Car, [{
        key: 'start',
        value: function start(started) {
            console.log('The car started: ' + started);
        }
    }, {
        key: 'drive',
        value: function drive(speed) {
            console.log('Tested at driving speed of ' + speed + ' miles per hour');
        }
    }, {
        key: 'getPosition',
        value: function getPosition(location) {
            console.log('The car is located at ' + location);
        }
    }]);

    return Car;
}();

// Interface Flyable
/*
Acadgild Angular (Front End Development) course, Session 4, Assignment 4.1
Student: Michele Cannito

2. Create Interfaces and Class for implement them.
   Interface: A simple interface that defines the interface for something
   that can drive.
   Class: An implementation of a car.
   interface Drivable {}, with start(), drive() and getPosition()
   class Car implements Drivable {}

3. One more exercise for Interface and class as mentioned above:
   interface Flyable { ... }
   class Helicopter implements Flyable { ... }  
   class FlyingCar implements Drivable, Flyable { ... }
*/

// Create interface Drivable


// Class Helicopter
var Helicopter = function () {
    function Helicopter() {
        _classCallCheck(this, Helicopter);

        console.log('Inside the Helicopter constructor');
    }

    _createClass(Helicopter, [{
        key: 'fly',
        value: function fly(speed) {
            console.log('Flying at ' + speed + ' mph.');
        }
    }]);

    return Helicopter;
}();

// Class Flying Car. I don't think using 2 interfaces is common. No sample code found.


var FlyingCar = function () {
    function FlyingCar() {
        _classCallCheck(this, FlyingCar);

        console.log('Inside the class FlyingCar constructor');
    }

    _createClass(FlyingCar, [{
        key: 'fly',
        value: function fly(speed) {
            console.log('Tested at flying speed of ' + speed + ' mph.');
        }
    }, {
        key: 'start',
        value: function start(started) {
            console.log('The flying car started: ' + started);
        }
    }, {
        key: 'drive',
        value: function drive(speed) {
            console.log('Tested at driving speed of ' + speed + ' miles per hour');
        }
    }, {
        key: 'getPosition',
        value: function getPosition(location) {
            console.log('The flying car is located at ' + location);
        }
    }]);

    return FlyingCar;
}();

// Extra credit:


function driveFast(car) {
    car.drive(100);
}

var raceCar = new Car();
driveFast(raceCar);