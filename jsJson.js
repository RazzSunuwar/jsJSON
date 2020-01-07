// JSON: JavaSCript Object Notification.
// JSON is a syntax for storing and exchanging data.
// JSON is text, written with JavaSctipt object notation.

/*Exchanging Data
When exchanging data between a browser and a server, the data can only be text.
JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.
This way we can work with the data as JavaScript objects, with no complicated parsing and
translations. */

/*Sending Data
If you have data stored in a JavaScript object, you can convert the object into JSON, and
send it to a server:*/ 

// Example
// var myObj = {
//     name: "Ray",
//     address: "KTM",
//     Phone: 1234567890
// };
// var myJSON = JSON.stringify(myObj);
// console.log(myJSON);

// Receiving Data
// if you receive data in JSON format, you can convert it into a JavaScript object:

// Example
// var myJSON = '{"name":"Ray", "Address":"KTM"}';
// var myObj = JSON.parse(myJSON);
// document.getElementById("demo").innerHTML = myObj.name;

// Receiving Data
// If receive data in JSON format, you can convert it into a JavaScipt object:

// Example
// var myJSON = '{"name": "Linus", "Age": "50", "Address": "Finland"}';
// var myObj = JSON.parse(myJSON);
//     document.getElementById("demo").innerHTML = myObj.name;

// Storing Data
// Storing data in local storage

// Storage data:
// myObj = {name:"John", age:20, address:"Ktm"};
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// // Retriving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;

// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is "self-describing" and easy to understand
// JSON is language independent

/*JSON uses JavaScript syntax, but the JSON format is text only. Text can be read and used as a data
format by any programming language.*/

// The JSON format was originally specified by Douglas Crockford.
// Note: Don't forget to check the details in the bookmark of google crome browser.

//Why use JSON?
// Since the JSON format is text only, it can easily be sent to and from a server, and used as a data
// format by any programming language.

// JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript
// objects:
// JSON.parse()
// So if you receive data from a server, in JSON format, you can use it like any other JavaScript object.






