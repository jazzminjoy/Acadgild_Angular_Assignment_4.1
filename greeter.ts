/*
Acadgild Angular (Front End Development) course, Session 4, Assignment 4.1
Student: Michele Cannito

1. Create a Class with name ‘Greeter’ in greeter.ts and define Constructor and one
   ‘greet()’ method which will return some greeting message, then create a
   greeter.html, add compiled file into this html like(greeter.js). Output should
   display as greeting message.
*/

// Create class Greeter
class Greeter {
    greeting: string;
    // Define Constructor
    constructor(message: string){
        this.greeting =  message;
    }
    // Define one greet() method that will return a greeting message
    greet() {
        return( `Hello, ${ this.greeting }!` );
    }
}
// Create instance of Greeter
let greeter = new Greeter('world');

// Output to HTML page where id='output' is located
document.getElementById('output').innerHTML = greeter.greet();