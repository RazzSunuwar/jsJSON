// JSON Objects
// EXAMPLE
// {"name": "Ram", "phone": "1234567", "address": "ktm", "car": null}

// JSON objects are surrounded by curly braces {}.
// JSON objects are written in key/value pairs.
// Keys must be strings, and values must be a valid JSON data type (string, number, object, array, boolean or null).
// Keys and values are separated by a colon.
// Each key/value pair is separated by a comma.

// Accessing Object Values 
// You can access the object values by using the dot(.) notation:

// Example
// var myObj, x;
// myObj = {"name":"John", "age":30, "car":null};
// x = myObj.name;
// document.getElementById("demo").innerHTML = x;

// You can also access the object values by using bracket ([]) notation:
// Example
// var myObj, x;
// myObj = {"name":"John", "age":30, "car":null};
// x = myObj["name"];
// document.getElementById("demo").innerHTML = x;

// Looping an object
// You can loop through object properties by using the for-in loop:

// Example
// var myObj, x;
// myObj = {"name":"John", "age":30, "car":null};
// for (x in myObj) {
//   document.getElementById("demo").innerHTML += x + "<br>";
// }

// In a for-in loop, use the bracket notation to access the property values:
// Example
// var myObj, x;
// myObj = {"name":"John", "age":30, "car":null};
// for (x in myObj) {
//   document.getElementById("demo").innerHTML += myObj[x] + "<br>";
// }

// Nested JSON Objects
// Values in a JSON object can be another JSON object.

// Example
// myObj = {
//     "name": "Ram",
//     "age": 24,
//      "cars": {
//          "car1": "BMW",
//          "car2": "Lamborgini",
//          "car3": "Ferrari"
//          }
// }

// You can access nested JSON objects by using the dot notation or bracket notation:
// Example
// var myObj = {
//     "name": "Ram",
//     "age": 24,
//         "cars": {
//          "car1": "BMW",
//          "car2": "Lamborgini",
//          "car3": "Ferrari"
//          }
// }
// document.getElementById("demo").innerHTML += myObj.cars.car1;
// "<br>";
// // or:
// document.getElementById("demo").innerHTML += myObj.cars["car2"];    

// Modify Values
// You can use the dot notation to modify any value in a JSON object:

// Example
// var myObj, i, x ="";
// myObj = {
//     "name": "Ram",
//     "age": 24,
//         "cars": {
//          "car1": "BMW",
//          "car2": "Lamborgini",
//          "car3": "Ferrari"
//          }
// }
// myObj.cars.car1 = "Mercedes";   
// for (i in myObj.cars){
//     x += myObj.cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = x;  

// You can also use the bracket notation to modify a value in a JSON object:    
// Example
// var myObj, i, x ="";
// myObj = {
//     "name": "Ram",
//     "age": 24,
//         "cars": {
//          "car1": "BMW",
//          "car2": "Lamborgini",
//          "car3": "Ferrari"
//          }
// }
// myObj.cars["car1"] = "Mercedes";    
// for (i in myObj.cars){
//     x += myObj.cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = x;

// Delete Object Properties
// Use the delete keyword to delete properties from a JSON object:

// Example
var myObj, i, x ="";
myObj = {
    "name": "Ram",
    "age": 24,
        "cars": {
         "car1": "BMW",
         "car2": "Lamborgini",
         "car3": "Ferrari"
         }
}
delete myObj.cars.car1;   
for (i in myObj.cars){
    x += myObj.cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = x;  
 

