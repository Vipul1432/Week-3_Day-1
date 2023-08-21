/// 
/// Exercises-2 
///


let userName;

while (true) {
    // Prompt the user for their name
  userName = prompt("Enter your name :");
  
  if (userName === null || userName.trim() === "") {
    alert("Invalid input. Please provide a valid name.");
  } else {
    alert(`Hello, ${userName}! Welcome to our website.`);
    break;
  }
}



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
  
  function sum(num1, num2) {
    return num1 + num2;
  }
  
  const Result = Sum(Number1, Number2);
  console.log("The Sum of " + Number1 + " and " + Number2 + " is:", Result.toFixed(2));
  
/// 
/// Exercises-3
///

document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button Clicked!");
  });


  document.getElementById("calculateButton").addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const sum = input1 + input2;
    document.getElementById("result").innerHTML = `Sum of ${input1} and ${input2} is <span class="colored-text">${sum}</span>`;
  });
  
