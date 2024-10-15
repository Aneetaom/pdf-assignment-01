// Q-01:
// var input = prompt("Enter a character: (Number , UpperCase Letter or LowerCase Letter");

// if (!isNaN(input)) {
//    alert(input + " is a number.");
//  } else if (input === input.toLowerCase() && input.match(/[a-z]/)) {
//    alert(input + " is a lowercase letter.");
//  } else if (input === input.toUpperCase() && input.match(/[A-Z]/)) {
//    alert(input + " is an uppercase letter.");
// } else {
//    alert(input + " is not valid.");
//  }

// Q-02:
// var input1 = +prompt("Enter an integer?")
// var input2 = +prompt("Enter another integer?")

// if (input1 > input2){
//       alert(input1 + " is a greater.");
// }
// else if (input1 < input2){
//     alert(input2 + " is a greater.");
// }
// else if (input2 === input1){
//     alert("Both are Equal!");
// }

// Q-03:
// var num = +prompt("Enter a number: ") ;

// if (num > 0) {
//   alert(num + " is a positive number.");
// } else if (num < 0) {
//   alert(num + " is a negative number.");
// } else {
//   alert(num + " is zero.");
// }

// Q-04:
// var input = prompt("Enter an alphabet: ");

//if (input === "a" , input === 'A' , input ===  "e" ,  input === 'E' , input ===  "i" , input ===  'I' , input ===  "o" , input ===  'O' , input ===  "u" , input ===  'U') {
 //  alert("True!");
 //}else{
   // alert("False!");
 //}

// Q-05:
 //var pass = prompt('Enter the Password?');

   //if (pass === 'ABCD123') {
    // alert( 'Correct! The password you entered matches the original password.' );
  // } else if (pass === '' , pass === null) {
   //  alert( 'Please enter your Password!' );
  // } else {
  //   alert( 'Wrong password!' );
  // }

// Q-06:
// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// alert(greeting);

// Q-07:
 var time = prompt("Enter time (24-hour format, e.g., 19:00):");

 var [hours, minutes] = time.split(":");

 if (isNaN(hours) , isNaN(minutes)) {
   alert("Invalid input. Please enter numbers.");
 } else if (hours < 0 , hours > 23 , minutes < 0 , minutes > 59) {
   alert("Invalid time. Please enter a valid 24-hour time.");
 } else if (hours < 12) {
   alert("hours" , "minutes" , AM) 
 } else {
   alert("hours" , "minutes" , PM)
 }