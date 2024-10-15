

// var empty = ["", ["", ""] ,""];
// console.log();

//Q-01

//  var multidimentionalArray = ["0", "1", "2", "3", "4"];


//       console.log( multidimentionalArray); 

//  var multidimensionalArray = [
//     ["0", "1", "2" ,"3"],
//      ["1", "0", "1", "2"],
//       ["2", "1", "0", "1"]
//    ];
  
//    console.log(multidimensionalArray);
  
// document.write(`0  1  2  3  <br>
//     1  0  1  2  <br>
//     2  1  0  1`);

    //Q-03

  

//      let output = "";
//  for (var i = 1; i <= 10; i++) {
//    output += i + "<br>";
//  }
//  document.write(output);

//Q-04



// var userinput = prompt("Enter a number to show multiplication table?");

//  if (!isNaN(userinput)) {
//    var length = (prompt("What length (e.g, 1-20)?"));
  
//   if (!isNaN(length)) {
//      for (var i = 1; i <= length; i++) {
//        document.write(userinput + " X " + i + " = " + (userinput * i) + "</br>");
//      }
//    }
//  }

//Q-05


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (var i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + i + " is " + fruits[i]);
// }

//Q-06

// counting

//  for (var i = 1; i <= 10; i++) {
//    document.write(i + ", ");
//  }

//Reverse counting

// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
//     }

//Even numbers

//  for (var i = 0; i <= 20; i += 2) {
//      document.write(i + ", ");
//      }


//Odd numbers

// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
//      }
   
//Series (2k, 4k, etc.)

// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
//      }

//Q-07



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt(" What do you want to order ");
// userInput = userInput.toLowerCase();
// var itemIndex = A.indexOf(userInput);

// if (itemIndex !== -1) {
//   alert(userInput + " is available at index " + itemIndex + " in our bakery");
// } else {
//   alert("We are sorry, " + userInput + " is not available in our bakery");
// }



//Q-08

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//    if (A[i] > largest) {
//      largest = A[i]; 
//    }}
// document.write("The largest number is: " + largest);

//Q-09

// var A = [24, 53, 78, 91, 12];
//  var smallest = A[0];
//  for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//       smallest = A[i]; 
//     }}
//  document.write("The smallest number is: " + smallest);

//Q-10

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ",    ");
    }
  }
  