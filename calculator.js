// Assign command line arguments to a variable
var inputString = process.argv;

// Parses the command line argument to:
// 1) Obtain "operand" (add, subtract, multiply, divide, remainder, exponent, and the algebraic standard form of a line) 
// 2) Obtain input numbers
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

var outputNum;

// Based on the operand run the appropriate math on the two numbers
if (operand === "add") {
  outputNum = parseFloat(num1) + parseFloat(num2);
}

else if (operand === "subtract") {
  outputNum = parseFloat(num1) - parseFloat(num2);
}

else if (operand === "multiply") {
  outputNum = parseFloat(num1) * parseFloat(num2);
}

else if (operand === "divide") {
  outputNum = parseFloat(num1) / parseFloat(num2);
}

else if (operand === "remainder") {
  outputNum = parseFloat(num1) % parseFloat(num2);
}

else if (operand === "exp") {
  outputNum = Math.pow(num1, num2);
}

else if (operand === "algebra") {
  outputNum = parseAlgebra(num1);
}

else {
  outputNum = "Not a recognized command";
}


// Prints the outputNumber
console.log(outputNum);

// =======================================================

// BONUS - Algebraic Standard Equation for A Line
// Take in a string expression of the form "ax+b=c"
// Return the parsed result

function parseAlgebra(equation) {
  // Obtain the index of x inside the equation
  var xIndex = equation.indexOf("x");

  // Obtain the index of the sign inside the equation
  var signIndex = xIndex + 1;

  // Obtain the index of the equals sign inside the equation
  var equalIndex = equation.indexOf("=");

  // Obtain the numeric value for the first number that appears inside the equation (a).
  // Substring() takes two arguments - start and end - which defines a segement of an array - in order to return the desired value in between start and end.   
  var firstNum = parseInt(equation.substring(0, xIndex));

  // Obtaining the sign's value inside the equation
  var sign = equation[signIndex];

  // By locating the segment of the equation between the operator and the equals sign, obtain the numeric value of the second number (b) inside the equation.
  var secondNum = parseInt(equation.substring(signIndex + 1, equalIndex));

    // By locating the segment of the equation between the operator and the equals sign, obtain the numeric value of the thrid number (c) inside the equation.
  var thirdNum = parseInt(equation.substring(equalIndex + 1, equation.length));

  
  var result;

  // Perform the appropriate operation based on the sign
  if (sign === "+") {
    result = (thirdNum - secondNum) / firstNum;
  }
  else if (sign === "-") {
    result = (thirdNum + secondNum) / firstNum;
  }
  else if (sign === "*") {
    result = (thirdNum / secondNum) / firstNum;
  }
  else if (sign === "/") {
    result = (thirdNum * secondNum) / firstNum;
  }
  return result;
}
