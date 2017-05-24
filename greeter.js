'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Acadgild Angular (Front End Development) course, Session 4, Assignment 4.1
Student: Michele Cannito

1. Create a Class with name ‘Greeter’ in greeter.ts and define Constructor and one
   ‘greet()’ method which will return some greeting message, then create a
   greeter.html, add compiled file into this html like(greeter.js). Output should
   display as greeting message.
*/

// Create class Greeter
var Greeter = function () {
    // Define Constructor
    function Greeter(message) {
        _classCallCheck(this, Greeter);

        this.greeting = message;
    }
    // Define one greet() method that will return a greeting message
    _createClass(Greeter, [{
        key: 'greet',
        value: function greet() {
            return 'Hello, ' + this.greeting + '!';
        }
    }]);

    return Greeter;
}();

// Create instance of Greeter
var greeter = new Greeter('world');

// Output to HTML page where id='output' is located
document.getElementById('output').innerHTML = greeter.greet();