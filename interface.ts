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
interface Drivable {
    // Create start(), drive() and getPosition() methods and define input type
    start(started: boolean): void; // Did the thing start? true=yes, false=no
    drive(speed: number): void; // The speed the thing was tested at
    getPosition(location: string): void; // Description of location
}

// Create class Car which implements Drivable {}
class Car implements Drivable {
    // Even if not used, it is good coding practice to include a constructor
    // in a class definition. So, I have done so.
     constructor() {
        console.log('Inside the class Car constructor');
    }

     start(started: boolean): void {
        console.log(`The car started: ${ started }`);
    }

     drive(speed: number): void {
        console.log(`Tested at driving speed of ${ speed } miles per hour`);
    }

     getPosition(location: string): void {
        console.log(`The car is located at ${ location }`);
    }
}

// Interface Flyable
interface Flyable {
    horsePower: number;
    fly(speed: number): void;
}

// Class Helicopter
class Helicopter implements Flyable {  
    horsePower: number;

    constructor() {
        console.log('Inside the Helicopter constructor');
    }

    fly(speed: number): void {
        console.log(`Flying at ${ speed } mph.`);
    }
}

// Class Flying Car. I don't think using 2 interfaces is common. No sample code found.
class FlyingCar implements Flyable, Drivable {
    horsePower: number;

    constructor() {
        console.log('Inside the class FlyingCar constructor');
    }

    fly(speed: number): void {
        console.log(`Tested at flying speed of ${ speed } mph.`);
    }

     start(started: boolean): void {
        console.log(`The flying car started: ${ started }`);
    }

     drive(speed: number): void {
        console.log(`Tested at driving speed of ${ speed } miles per hour`);
    }

     getPosition(location: string): void {
        console.log(`The flying car is located at ${ location }`);
    }
}

// Extra credit:
function driveFast(car: Car): void {  
    car.drive(100);
}

let raceCar = new Car();  
driveFast(raceCar); 