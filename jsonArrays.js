// JSON Arrays

// Arrays as JSON Objects

// Example
// ["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]

// Arrays in JSON are almost the same as arrays in JavaScript.

// In JSON, array values must be of type string, number, object, array, boolean or null.

// In JavaScript, array values can be all of the above, plus any other valid JavaScript expression,
// including functions, dates, and undefined.

// Arrays in JSON objects

// Arrays can be values of an Object property:

// Example
// {
//     "name": "Ram",
//     "age": 24;
//     "cars": ["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]
// }

// Accessing Array Values
// You access the array values by using the index number:
// Example
// var myObj, x;
// myObj = {
//         "name": "Ram",
//         "age": 24,
//         "cars": ["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]
//     };
//     x= myObj.cars[0];
//     document.getElementById("demo").innerHTML = x;

// Looping Through an Array
// You can access array values by using a for-in loop: 
// Example
// var myObj, i, x= "";
// myObj = {
//         "name": "Ram",
//         "age": 24,
//         "cars": ["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]
// };
//     for (i in myObj.cars){
//         x += myObj.cars[i] + "<br>";    
//     }
// document.getElementById("demo").innerHTML = x;

// Or you can use a for loop:
// Example
// var myObj, i, x="";
// myObj = {
//         "name": "Ram",
//         "age": 24,
//         "cars": ["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]
//     };
//         for (i=0; i < myObj.cars.length; i++){
//             x += myObj.cars[i] + "<br>";    
//         }

// document.getElementById("demo").innerHTML = x;

// Nested Arrays in JSON Objects
// Values in an array can also be another array, or even another JSON object:
// Example
// myObj = {
//         "name": "Ram",
//         "age": 24,
//         "cars": [
//             {"name":"Buggati", "models": ["v1", "v2", "v3"]},
//             {"name":"Ferrari", "models": ["x", "y", "z"]},
//             {"name":"Ford", "models": ["Mustang", "Focus", "Fiesta"]},
//     ]
// };

// To access arrays inside arrays, use a for-in loop for each array:

// Example
// var myObj, i, j, x="";
// myObj = {
//         "name": "Ram",
//         "age": 24,
//         "cars": [
//             {"name":"Buggati", "models": ["v1", "v2", "v3"]},
//             {"name":"Ferrari", "models": ["x", "y", "z"]},
//             {"name":"Ford", "models": ["Mustang", "Focus", "Fiesta"]},
//     ]
// };
// for(i in myObj.cars){
//     x += "<h2>" + myObj.cars[i].name + "</h2>";
//     for (j in myObj.cars[i].models){
//         x+= myObj.cars[i].models[j] + "<br>";
//     }
// }
// document.getElementById("demo").innerHTML = x;

// Modify Array Values
// Use the index number to modify an arary:
// Example
// var myObj, i, j, x="";
// myObj = {
//         "name": "Ram",
//         "age": 24,
//         "cars":["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]
// };
// myObj.cars[1] ="Mercedes";

// for (i in myObj.cars){
//     x += myObj.cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = x;

// Delete Arrays Items
// Use delete keywords to delete items from an arrays:
// Example
var myObj, i, x="";
myObj = {
        "name": "Ram",
        "age": 24,
        "cars":["Ford", "BMW", "Lamborgini", "Ferrari", "Buggati"]
}
delete myObj.cars[1];
for (i in myObj.cars){
    x += myObj.cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = x;





