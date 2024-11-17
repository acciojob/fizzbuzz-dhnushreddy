//your JS code here. If required.
// FizzBuzz Program
let output = ""; // To store the result

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    output += "FizzBuzz\n"; // Multiple of both 3 and 5
  } else if (i % 3 === 0) {
    output += "Fizz\n"; // Multiple of 3
  } else if (i % 5 === 0) {
    output += "Buzz\n"; // Multiple of 5
  } else {
    output += i + "\n"; // Neither multiple of 3 nor 5
  }
}

alert(output); // Display the result using alert
