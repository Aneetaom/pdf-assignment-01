//Q-01

//   var studentNames = [""];
// studentNames.push("");
//  console.log("")

//Q-02

//  var studentNames = ["", "", ""];
//   console.log(studentNames[""]); 

//Q-03

//   var studentNames = ["Ali", "Sara", "John"]
//   console.log(studentNames);

//Q-04

// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers);

//Q-05

// var booleans = [true, false, true]
// console.log(booleans);

//Q-06

// var mixedArray = ["Ali", 25, true]
// console.log(mixedArray);

//Q-07

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write(`<h3>Qualifications:</h3>
// <ol>
//    <li>SSC</li>
//    <li>HSC</li>
//    <li>BCS</li>
//    <li>BS</li>
//    <li>BCOM</li>
//    <li>MS</li>
//    <li>M. Phil.</li>
//    <li>PhD</li>
// </ol>`)

//  Q-08

// var studentNames = ["Aneeta", "Kaveeta", "Suneeta"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
// var percentage = (studentScores[i] / totalMarks) * 100;
// console.log("The score of " + studentNames[i] + " is " + studentScores[i] + " and the percentage is " + percentage + "%");
// }

//Q-09


// var colours = ["pink", "yellow", "red", "green", "white", "black" , "blue"];
// document.write("Original array: " + colours.join(", ") + "<br><br>");

// var userColourAtStart = prompt("Enter a colour to add at the beginning:");
// if (userColourAtStart) {
//     colours.unshift(userColourAtStart);
//     document.write("Updated array after adding colour at the start: " + colours.join(", ") + "<br><br>");
// }
// var userColourAtEnd = prompt("Enter a colour to add at the end:");
// if (userColourAtEnd) {
//     colours.push(userColourAtEnd);
//     document.write("Updated array after adding colour at the end: " + colours.join(", ") + "<br><br>");
// }

// colours.unshift("orange", "blue");
// document.write("Updated array after adding two more colours at the start: " + colours.join(", ") + "<br><br>");

// colours.shift();
// document.write("Updated array after removing the first colour: " + colours.join(", ") + "<br><br>");

// colours.pop();
// document.write("Updated array after removing the last colour: " + colours.join(", ") + "<br><br>");

// var userIndexToAdd = prompt("At which index do you want to add a colour?");
// var userColourToAdd = prompt("Enter the colour to add at index " + userIndexToAdd + ":");
// if (userIndexToAdd && userColourToAdd) {
//     colours.splice(userIndexToAdd, 0, userColourToAdd);
//     document.write("Updated array after adding colour at index " + userIndexToAdd + ": " + colours.join(", ") + "<br><br>");
// }
// var userIndexToDelete = prompt("At which index do you want to delete colours?");
// var userNumberOfColours = prompt("How many colours do you want to delete?");
// if (userIndexToDelete && userNumberOfColours) {
//     colours.splice(userIndexToDelete, userNumberOfColours);
//     document.write("Updated array after deleting " + userNumberOfColours + " colours from index " + userIndexToDelete + ": " + colours.join(", ") + "<br><br>");
// }

//Q-10

//var studentScores = [320, 230, 480, 120];
//document.write("Scores of Students: " + studentScores.join(", ") + "<br>");

//studentScores.sort(function(a, b) {
 // return a - b;
//});

//document.write("Ordered Scores of Students: " + studentScores.join(", "));


//Q-11


//  var cities = ["Karachi", "Peshawar", "Islamabad"," Skardu", "Lahore"];

//  var citiesslected = ["Quetta", "Islamabad"];

//  console.log(cities);
//  console.log(citiesslected);

//Q-12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write(singleString);

//Q-13

// var arr = ["This,", "is,", "my,", "cat,"];
//  var singleString = arr.join(" " );
//  document.write(singleString + "<br>"); 

//  var arr = ["This", "is", "my", "cat"];
//  var singleString = arr.join(" ");
//  document.write(singleString);

//Q-14


//  var devices = [
//    "Keyboard",
//    "Mouse",
//   "Printer",
//    "Monitor", ];

//  console.log(`
//     DEVICES 
//     Keyboard
//     Mouse
//     Printer
//     Monitor`);


// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

//  document.write("Devices: " + devices.join(", ") + "<br><br>");

//  for (var i = 0; i < devices.length; i++) {
//     document.write("Out: " + "<br>" +  devices[i] + "<br>");
//  }

//Q-15


// var devices = ["Monitor", "Printer", "Mouse", "Keyboard"];

// document.write("Devices: " + devices.join(", ") + "<br><br>");


// for (var i = 0; i < devices.length; i++) {
//     document.write("Out: " + "<br>" + devices[i] + "<br>");
// }


//Q-16

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < phones.length; i++) {
    document.write("<option value='" + phones[i] + "'>" + phones[i] + "</option>");
}
document.write("</select>");





