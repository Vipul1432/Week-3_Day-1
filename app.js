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
  
  function Sum(num1, num2) {
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
  

/*
    Exercise - 5
*/

// count occurrences of elements in the array
  function countOccurrences(arr) {
    const occurrenceCount = {};
  
    for (const element of arr) {
      if (occurrenceCount[element]) {
        occurrenceCount[element]++;
      } else {
        occurrenceCount[element] = 1;
      }
    }
  
    return occurrenceCount;
  }

  const inputArray = [1, 2, 3, 2, 1, 4, 5, 4, 2, 5];
  const resultObject = countOccurrences(inputArray);
  console.log(resultObject); 
  

  // reverse string
  function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  console.log(reversedString);
  

  /*
    Exercise - 6
  */

    // get the unique numbers in an array
    function getUniqueNumbers(...args) {
        const uniqueNumbers = [];
      
        for (const number of args) {
          if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
          }
        }
      
        return uniqueNumbers;
      }
      
      const uniqueArray = getUniqueNumbers(1, 2, 3, 2, 4, 3, 5, 6, 6);
      console.log(uniqueArray);


      // get the intersection of two arrays
      function getIntersection(arr1, arr2) {
        const intersection = [];
      
        for (const number of arr1) {
          if (arr2.includes(number)) {
            intersection.push(number);
          }
        }
      
        return intersection;
      }
      
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [3, 4, 5, 6, 7];
      const intersectionArray = getIntersection(array1, array2);
      console.log(intersectionArray);