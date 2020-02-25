const inquirer = require("inquirer");
const number = Math.floor(Math.random() * 100 + 1);
const question = [{type: "input", name: "numberGame", message: "Guess the number!"}]
let attempts = 5;

function guessTheNumber() {
    inquirer
        .prompt(question)
        .then(answer => {
            if (answer.numberGame == number) {
                console.log("You win!");
                return;
            }
            else if (answer.numberGame < number) {
                --attempts;
                console.log(`Higher! ${attempts} attempts remaining...`);
            }
            else if (answer.numberGame > number) {
                --attempts;
                console.log(`Lower! ${attempts} attempts remaining...`);
            }
            if (attempts === 0) {
                console.log("You lose!");
                return;
            }
            if (attempts) {
                guessTheNumber();
            }
        })
}

guessTheNumber();