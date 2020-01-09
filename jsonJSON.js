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

// Creating a Dynamic JAONP Result
// The examples above are still very static.
// Making the example dynamic by sending JSON to the php file, and let the php file, and
// let the php file return a JSON object based on the informations it gets.