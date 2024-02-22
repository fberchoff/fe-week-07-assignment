/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Frank Berchoff
   Subject:  JavaScript Week #7 Assignment
*/

/*---------------------------------- Question #1a -------------------------------------*/
console.log(`-------------------------- 
Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.`)

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);


/*---------------------------------- Question #1b -------------------------------------*/
console.log(`b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);
console.log(`
Adding the age, 30, to the array and redoing the calculation:`);

console.log(ages);

ages.push(30);
console.log(ages[ages.length - 1] - ages[0]);


/*---------------------------------- Question #1c -------------------------------------*/
console.log(`c. Use a loop to iterate through the array and calculate the average age.`);

let sum = 0;

for (let age of ages) {
   sum += age;
}

console.log(sum / ages.length);


/*---------------------------------- Question #2a -------------------------------------*/
console.log(`
-------------------------- 
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

a. Use a loop to iterate through the array and calculate the average number of letters per name.`)

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;

for (let n of names) {
   totalLetters += n.length;
}

console.log(totalLetters / names.length);


/*---------------------------------- Question #2b -------------------------------------*/
console.log(`b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);

console.log(`
This following answer is consistent with the answer to the same question in the quiz where a space appears in front of the first name:`);

let concatenated = '';

for (let n of names) {
   concatenated = concatenated + " " + n;
}

console.log(concatenated);

console.log(`
Following is how I originally did it with no space before the first name and no space after the last name -but my answer was wrong:`);

concatenated = '';

for (let n of names) {
   concatenated = concatenated + n + " ";
}

concatenated = concatenated.trimEnd();

console.log(concatenated);


/*---------------------------------- Question #3 -------------------------------------*/
console.log(`
-------------------------- 
Question 3: How do you access the last element of any array?`)

console.log(`Answer: Identify the index of the element you want with the length value of the array - 1.`);


/*---------------------------------- Question #4 -------------------------------------*/
console.log(`
-------------------------- 
Question 4: How do you access the first element of any array?`)

console.log(`Answer: The first element of an array is the element with an index of 0.`);


/*---------------------------------- Question #5 -------------------------------------*/
console.log(`
-------------------------- 
Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
            and add the length of each name to the nameLengths array.`)

console.log(`Let's first log out the names array again as a reminder:`)
console.log(names);

let nameLengths = [];

for (n of names) {
   nameLengths.push(n.length);
}

console.log(`Here are the lengths:`);
console.log(nameLengths);


/*---------------------------------- Question #6 -------------------------------------*/
console.log(`
-------------------------- 
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);

let totalLengths = 0;

for (let nameLength of nameLengths) {
   totalLengths += nameLength;
}

console.log(`Total of all the lengths in the nameLengths array: ${totalLengths}`);


/*---------------------------------- Question #7 -------------------------------------*/
console.log(`
-------------------------- 
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number 
            of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);

concatenated = '';

function concatenateWordXTimes (word, n) {
   for (let i=0; i < n; i++) {
      concatenated = concatenated + word;
   }
   return concatenated;
}

console.log(`Testing function with the word, "horse", and the number 5: ${concatenateWordXTimes("horse", 5)}`);


/*---------------------------------- Question #8 -------------------------------------*/
console.log(`
-------------------------- 
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should 
            be the first and the last name separated by a space.`);

function createFullName(firstName, lastName) {
   return firstName + " " + lastName;
}

console.log(`Testing function with the first name, "Jack", and the last name, "Smith": ${createFullName("Jack", "Smith")}`);


/*---------------------------------- Question #9 -------------------------------------*/
console.log(`
-------------------------- 
Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);

const isSumGreaterThanHundred = (numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) > 100;

let numbers = [51, 50];

console.log(`Testing function with this array of numbers: ${numbers}`);
console.log(`Result: ${isSumGreaterThanHundred(numbers)}`);

numbers = [10, 20, 30, 40];
console.log(`Testing function with this array of numbers: ${numbers}`);
console.log(`Result: ${isSumGreaterThanHundred(numbers)}`);

numbers = [10, 20, 30, 40, 1];
console.log(`Testing function with this array of numbers: ${numbers}`);
console.log(`Result: ${isSumGreaterThanHundred(numbers)}`);


/*---------------------------------- Question #10 -------------------------------------*/
console.log(`
-------------------------- 
Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`);

const getAverage = (numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length;

numbers = [10, 20, 30, 40];
console.log(`Testing function with this array of numbers: ${numbers}`);
console.log(`Result: ${getAverage(numbers)}`);

numbers = [10, 20, 30, 40, 11, 55];
console.log(`Testing function with this array of numbers: ${numbers}`);
console.log(`Result: ${getAverage(numbers)}`);


/*---------------------------------- Question #11 -------------------------------------*/
console.log(`
-------------------------- 
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average 
            of the elements in the second array.`);

const isAverageOfFirstArrayGreater 
                           = (array1, array2) => (array1.reduce((accumulator1, currentValue1) => accumulator1 + currentValue1, 0) / array1.length)
                                             > (array2.reduce((accumulator2, currentValue2) => accumulator2 + currentValue2, 0) / array2.length);

let array1 = [5, 5, 5, 5, 5];
let array2 = [4, 4, 4, 4, 4];

console.log(`Testing function with this array1 of numbers: ${array1}`);
console.log(`Testing function with this array2 of numbers: ${array2}`);
console.log(`Result: ${isAverageOfFirstArrayGreater(array1, array2)}`);

array1 = [5, 5, 5, 5, 0];
array2 = [4, 4, 4, 4, 4];

console.log(`Testing function with this array1 of numbers: ${array1}`);
console.log(`Testing function with this array2 of numbers: ${array2}`);
console.log(`Result: ${isAverageOfFirstArrayGreater(array1, array2)}`);


/*---------------------------------- Question #12 -------------------------------------*/
console.log(`
-------------------------- 
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
             and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);

const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && (moneyInPocket > 10.50);

console.log(`Testing function when it is hot outside and money in pocket is $9.00.`);
console.log(`Result: ${willBuyDrink(true, 9)}`);

console.log(`Testing function when it is hot outside and money in pocket is $10.51.`);
console.log(`Result: ${willBuyDrink(true, 10.51)}`);

console.log(`Testing function when it is not hot outside and money in pocket is $10.51.`);
console.log(`Result: ${willBuyDrink(false, 10.51)}`);


/*---------------------------------- Question #13 -------------------------------------*/
console.log(`
-------------------------- 
Question 13: I am writing a fucntion that takes one parameter.  It is the name of any team that is scheduled to
             play the New York Jets. It returns true if the Jets will win the game and returns false if the Jets will not win.`);

const jetsWillWin = (opponent) => false;

console.log(`Testing function when the opponent is the Bills.`);
console.log(`Result: ${jetsWillWin('Bills')}`);

console.log(`Testing function when the opponent is the Bears.`);
console.log(`Result: ${jetsWillWin('Bears')}`);

console.log(`Testing function when the opponent is the Panthers.`);
console.log(`Result: ${jetsWillWin('Panthers')}`);

console.log(`Testing function when the opponent is the Chargers.`);
console.log(`Result: ${jetsWillWin('Chargers')}`);


console.log(`-----------Finished------------`);
