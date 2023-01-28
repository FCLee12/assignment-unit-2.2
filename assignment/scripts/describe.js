// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and assign it a string value, 'Dane'.
// We check if the variable 'name' has the same value type and value as 'Mary'.
// If 'name' has the same value type and value as 'Mary', we console log 'Hi, Mary!'.
// If 'name' does not have the same value type and value as 'Mary', we console log 'How do you do?'.
// The output in the console would be 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret'.
// We create a variable called 'code' and assign it a number value of 123.
// We check if 'code' has the same value type and value as the number 123.
// If it does, we assign the string value 'super' to the variable 'secret' and we assign the product of the value of variable 'code' multiplied by 2 to the variable 'code'.
// We check if the value of variable 'code' is greater than 250.
// If it is, we assign the string value 'duper' to variable 'secret'.
// Lastly, we console log the variable 'secret' which would output 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create variable 'isStudent' and assign it boolean value 'true'.
// We create variable 'age' and assign it number value 34.
// We create variable 'zip' and assign it number value 55407.
// We check if the value and value type of variable 'isStudent' is equal to boolean value 'true' and if the value of variable 'zip' is greater than 80000. 
// If both conditions are correct, we will console log 'You're a student on the West Coast!'.
// If neither are correct, we check if the value and value type of variable 'isStudent' is equal to boolean value 'false' or the value of variable 'age' is less than 30.
// If either condition is correct, we will console log 'What are your hobbies?'.
// If neither are correct, we check if the value and value type of variable 'isStudent' is equal to boolean value 'true'.
// If correct, we will console log 'Welcome to Prime!'.
// If incorrect, we will console log 'How about the weather?'.
// The output in the console will be 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


/*
// FIX
// colorOne should be equal to string value 'blue'
// Should be: let colorOne = 'blue';
let colorOne = 'red';
// FIX
// colorTwo should be equal to string value 'red'
// Should be: let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX
  // You need to adjust the value of variable colorTwo to 'purple' as well.
  // Should be:
  // colorOne = 'purple';
  // colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX
// const denotes a constant, not a variable, so this should be:
// let time = 4;
const time = 4;

// FIX
// || means or, meaning if either condition is correct then proceed with the code in the {}.
// && means and, meaning both conditions must be true to proceed with the code in the {}.
// Therefore it should be:
// if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

