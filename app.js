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

document.getElementById("clickButton").addEventListener("click", function () {
  alert("Button Clicked!");
});


document.getElementById("calculateButton").addEventListener("click", function () {
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

/*
    Exercise - 7
*/

// Adding and Removing courses from the student objec
const student = {
  name: "Vipul Kumar",
  gradeLevel: 12,
  courseNames: [],
  addCourse(courseName) {
    this.courseNames.push(courseName);
  },
  removeCourse(courseName) {
    const index = this.courseNames.indexOf(courseName);
    if (index !== -1) {
      this.courseNames.splice(index, 1);
    }
  },
};

student.addCourse("Math");
student.addCourse("Physics");
console.log(student.courseNames);

student.removeCourse("Physics");
console.log(student.courseNames);


// Function to Filter Students by Course
function filterStudentsByCourse(students, courseName) {
  return students.filter(student => student.courseNames.includes(courseName));
}

const students = [
  {
    name: "Vipul",
    gradeLevel: 11,
    courseNames: ["Math", "Physics"],
  },
  {
    name: "Divyanshu",
    gradeLevel: 10,
    courseNames: ["Science", "History"],
  },
  {
    name: "Rahul",
    gradeLevel: 12,
    courseNames: ["Math", "Chemistry"],
  },
];

const mathStudents = filterStudentsByCourse(students, "Math");
console.log(mathStudents);


/*
    Exercise - 8
*/

// Simulating Asynchronous Operation with Callback
function simulateServerRequest(callback) {
  setTimeout(() => {
    const responseData = {
      status: 200,
      data: "Server response data"
    };
    callback(responseData);
  }, 2000);
}

simulateServerRequest(response => {
  console.log(response.data); 
});


// Simulating Asynchronous Operation with Promises
function simulateServerRequestWithPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      const responseData = {
        status: 200,
        data: "Server response data"
      };
      resolve(responseData);
    }, 2000);
  });
}

simulateServerRequestWithPromise()
  .then(response => {
    console.log(response.data); 
  });



// Simulating Asynchronous Operation with async/await
async function simulateServerRequestWithAsyncAwait() {
  return new Promise(resolve => {
    setTimeout(() => {
      const responseData = {
        status: 200,
        data: "Server response data"
      };
      resolve(responseData);
    }, 2000);
  });
}

(async () => {
  const response = await simulateServerRequestWithAsyncAwait();
  console.log(response.data); 
})();



/*
    Exercise - 9
*/

const createButton = document.getElementById("createButton");
const textInput = document.getElementById("textInput");
const colorSelect = document.getElementById("colorSelect");
const paragraphContainer = document.getElementById("paragraphContainer");

createButton.addEventListener("click", () => {
  const inputValue = textInput.value;
  const selectedColor = colorSelect.value;

  if (inputValue) {
    const paragraph = document.createElement("p");
    paragraph.textContent = inputValue;
    paragraph.style.color = selectedColor;
    paragraphContainer.appendChild(paragraph);
    textInput.value = ""; 
  }
});

