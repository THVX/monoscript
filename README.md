# MonoScript

![MonoScript logo](./img/logo.png "MonoScript logo")

MonoScript is an OOP framework for TypeScript and JavaScript.

MonoScript uses the Box system for manipulating packages. Boxes are MonoScript packages, but what is special about them is that they don't use a package.json file, but instead, uses your TypeScript or JavaScript file !

### A 'Hello World !' program in MonoScript looks like this: 

````ts
import $ from MonoScript;

let MyFirstBox = new $.Box({  // Box creation 
    name: 'MyFirstBox',  // The name of your package
    author: 'your-name',  // The author's name (your name)
    description: 'A description', // The description of your package
    version: 1.0 // The version of your package: needs to be a number (int) 
});

MyFirstBox.println("Hello World !"); // Outputs: Hello World !
````

####  NOTE: $ is an alias for MonoScript.
# Start coding happily !