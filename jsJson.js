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
