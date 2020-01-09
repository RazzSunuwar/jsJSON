// JSONP
// JSON is a method for a sending JSON data without worrying about cross-domain issues.
// JSONP does not use the XMLHttpRequest object.
// JSONP uses the <script> tag instead.

// JSONP Intro
// JSONP stands for JSON with Padding.

// Requesting a file from another domain can cause problems, due to cross-domain policy.

// Requesting an external script from another domain does not have this problem.

// JSONP uses this advantage, and request files using the script tag instead of the XMLHttpRequest object.

// <script src="demo_jsonp.php">

// The server File

// The file on the server wraps the result inside a function call:
//  Example
// Result Size: 643 x 488
// <?php

// $myJSON = '{"name":"John", "age":30, "city":"New York"}';

// echo "myFunc(".$myJSON.");";

// ?>


// The result returns a call to a function named "myFunc" with the JSON data as a parameter.
// Make sure that the function exists on the client.

// The JavaScript Fumction
// The function named "myFunc" is located on the client, and ready to handle JSON data:
// Example
// function myFunc(myObj) {
//     document.getElementById("demo").innerHTML = myObj.name;
// }  

// Creating a Dynamic Script Tag
// The example above will execute the "myFunc" function when the page is loading, based on where you put the script tag, which is not very satisfying.
// The script tag should only be created when needed:
// Example
// Create and insert the <script> tag when a button is clicked:

// function clickButton() {
//     var s = document.createElement("script");
//     s.src = "demo_jsonp.php";
//     document.body.appendChild(s);
// }
  
// function myFunc(myObj) {
//     document.getElementById("demo").innerHTML = myObj.name;
// }

// Creating a Dynamic JSONP Result
// The examples above are still very static.
// Making the example dynamic by sending JSON to the php file, and let the php file, and
// let the php file return a JSON object based on the informations it gets.

// PHP code
// <?php
// header("Content-Type: application/json; charset=UTF-8");
// $obj = json_decode($_GET["x"], false);

// $conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
// $result = $conn->query("SELECT name FROM ".$obj->$table." LIMIT ".$obj->$limit);
// $outp = array();
// $outp = $result->fetch_all(MYSQLI_ASSOC);

// echo "myFunc(".json_encode($outp).")";
// ?>

// PHP File explained:
// Convert the request into an object, using the PHP function json_decode().
// Access the database, and fill an array with the requested data.
// Add the array to an object.
// Convert the array into JSON using the json_encode() function.
// Wrap "myFunc()" around the return object.

// JavaScript Example
// The "myFun" function will be called from the php file:
// function clickButton() {
//     var obj, s
//     obj = { table: "customers", limit: 10 };
//     s = document.createElement("script");
//     s.src = "jsonp_demo_db.php?x=" + JSON.stringify(obj);
//     document.body.appendChild(s);
//   }
  
//   function myFunc(myObj) {
//     var x, txt = "";
//     for (x in myObj) {
//       txt += myObj[x].name + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }

// Callback Function
// When you have no control over the server file, how do you get the server file to call
// the correct function?
// Sometimes the server file offers a callback function as a parameter:

// Example
// The php file will call the function you pass as a callback parameter:
// function clickButton() {
//     var s = document.createElement("script");
//     s.src = "demo_jsonp2.php?callback=myDisplayFunction";
//     document.body.appendChild(s);
// }
  
// function myDisplayFunction(myObj) {
//     document.getElementById("demo").innerHTML = myObj.name;
// }


