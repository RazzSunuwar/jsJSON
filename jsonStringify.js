// JSON.stringify()

// A common use of JSON is to exchange data to/from a web server.
// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().

// Stringify a JavaScript Object
// Imagine we have this object in JavaScript:

// var obj = {name: "John", age: 30, city: "New Work"};

// Use the JavaScript function JSON.stringify() to convert it into a string.

// var myJSON = JSON.stringify(obj);

// The result will be a string following the JSON notation.

// myJSON is now a string, and ready to be sent to a server:

// Example
// var obj = { name: "John", age: 30, city: "Ktm" };
// var myJSON = JSON.stringify(obj);
// document.getElementById("demo").innerHTML = myJSON;

// Stringify a JavaScript Array

// It is also possible to stringify JavaScript arrays:

// Imagine we have this array in JavaScripts:
// var arr = [ "John", "Peter", "Sally", "Jane" ];

// Use the JavaScript function JSON.stringify() to convert it into a string.
// var myJSON = JSON.stringify(arr);

// The result will be a string following the JSON notation.

// myJSON is now a string, and ready to be sent to a server:
// var arr = [ "John", "Peter", "Sally", "Jane" ];
// var myJSON = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = myJSON;

// Exceptions
// Stringify Dates
// In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates
// into strings.

// Example
// var obj = { name: "John", today: new Date(), city: "Ktm" };
// var myJSON = JSON.stringify(obj);
// document.getElementById("demo").innerHTML = myJSON;

// you can convert the string back into a date object at the receiver.

// Stringify Functions
// In JSON, functions are not allowed as object values.
// The JSON.stringify() function will remove any functions from a JavaScript object, both the key
// and the value:

// Example
// var obj = { name: "John", age: function () {return 30;}, city: "Ktm"};
// var myJSON = JSON.stringify(obj);
// document.getElementById("demo").innerHTML = myJSON;
