// Prompt the user for their name
let userName = prompt("What's your name?");

// Display a greeting message using an alert box
alert(`Hello, ${userName}! Welcome to our website.`);



function getNumberInput(message) {
    let userInput;
    let isValidNumber = false;
  
    while (!isValidNumber) {
      userInput = prompt(message);
  
      if (userInput === null || userInput.trim() === "") {
        alert("Invalid input. Please try again.");
        continue;
      }
  
      // Check if the input is a valid number (integer or decimal)
      if (!isNaN(userInput)) {
        isValidNumber = true;
      } else {
        alert("Invalid input. Please enter a valid number.");
      }
    }
  
    return parseFloat(userInput);
  }
  
  const Number1 = getNumberInput("Please Enter The First Number: ");
  const Number2 = getNumberInput("Please Enter The Second Number: ");
  
  function Sum(num1, num2) {
    return num1 + num2;
  }
  
  const Result = Sum(Number1, Number2);
  console.log("The Sum of " + Number1 + " and " + Number2 + " is:", Result.toFixed(2));
  
  
  
