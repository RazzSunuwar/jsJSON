// The JSON Syntax is a subset of the JavaScript syntax.

// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// JSON Data - A Name and a Value
// JSON data is written as name/value pairs.

// A name/value pair consists of a field name (in double quotes), followed by a colon,
// followed by a value:

// Example
// "name":"John"

// JSON names require double quotes. JavaScript names don't.


// JSON - Evaluates to JavaScript Objects.
// The JSON format is almost identical to JavaScript Objects.
// In JSON, keys must be strings, written with the double quotes:

// JSON
// {"name": "Ram"}
// In JavaScript, keys can be strings, numbers, or identifier names:

// JavaScript
// {name: "John"}

// JSON Values
// In JSON, values must be one of the following data types:

// a string
// a number
// an object (JSON object)
// an array
// a boolean
// null

// In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:
// a function
// a date
// undefined
// In JSON, string values must be written with double quotes:

// JSON
// {"name": "John"}
// In JavaScript, you can write string values with double or single quotes:

// JavaScript
// {name: 'John'}

// JSON Uses JavaScript Syntax
// Because JSON Syntax is derived from JavaScript object notation, very little extra software is needed
// to work with JSON within JavaScript.

// with JavaScript you can create object and assign data to it, like this:

// Example
// var person = {name:"Ram", age: 10, city:"Kathmandu"};

// You can access a JavaScript object like this:
// myObj = {name:"Ram", age: 10, city:"Kathmandu"};
// x =myObj.name;
// document.getElementById("demo").innerHTML = x;   //returns Ram

// it can be access like this:

// Example

// myObj = {name:"Ram", age: 10, city:"Kathmandu"};
// x =myObj["name"];
// document.getElementById("demo").innerHTML = x;   //returns Ram

// Data can be modified like this:

// Example
// myObj = {name:"Ram", age: 10, city:"Kathmandu"};
// x =myObj.name= "Sam";
// document.getElementById("demo").innerHTML = x;   //returns Sam

// It can also be modified like this:

// Example
// myObj = {name:"Ram", age: 10, city:"Kathmandu"};
// x =myObj["name"]= "Sam";
// document.getElementById("demo").innerHTML = x;   //returns Sam

// JavaScript Arrays as JSON
// The same way JavaScript objects can be used as JSON, JavaScript arrays can also be used as JSON.

// JSON Files
// The file type for JSON files is ".json"
// The MIME type for JSON text is "application/json"

