#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// 2) User input for guessing number
console.log("***************************************");
console.log("*Welcome to CLI Number Guessing Game*");
console.log("***************************************\n");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-6: ",
    },
]);
// 3) Compare user input with computer generated number and show result
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed the right number.");
}
else {
    console.log("You Guessed the wrong number.");
}
