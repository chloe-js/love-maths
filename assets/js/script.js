// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}



// //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxNOTESxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/**
3 things nneded to add to make run game function  
1 - needs to have new game type added 
2 - create display question function
3- updare calculate correct answer function

multiplication game = data-typpe = multiply 
then go to 
1)function runGame(gameType) else if (gameType ==="multiply"){
        displayMultiplyQuestion(num1, num2);
    }
2) function displayMultiply (operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}
function calculateCorrect (){
    else if (operand1 === "x"){
        return[operand1 * operand2, "multiply"]
    }
}
 */


// // Wait for the DOM to finish loading before running the game
// // Get the button elements and add event listeners to them
// //code that the event listener exicutes is called and event HANDELER
// //try to avoid storeing variables globaly, pass values between functions, but dont pollute globale namespace. 
// //AVOID WRITING GLOBAL VARIABLES incase other scripts are loaded onto page

// document.addEventListener("DOMContentLoaded", function() {
//     // always best to wait for DOM to finish loading before you start running your code
//     // return all of the buttons on the page
//     let buttons = document.getElementsByTagName("button");

//      //old method of iterating through an array
// //     // for (let i = 0; i < buttons.length; i++) 
//      // same as above just more modern and therefore we dont need to use index notation to speak to elements in array

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             // this helps to see what the value is of the data type and if it is submit, it will get the message
//             // 'this' refers to the button just clicked
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//                 // alert("You clicked Submit!"); // removed because we no longer need to test
//                 // this function takes no paraments and can leave it as ()
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 runGame(gameType);
//                 // using template literal and $ becuase it will say what button was clicked
//                 //alert(`You clicked ${gameType}`); we changed this because now we want the game to run, we dont need ot test
//             }
//         });
//     }

//     runGame("addition");
//     // we want the addition game to start as soon as page is loaded. add it to the event listener = default game
//     //inside the event listener but outside of the 4 loop = run game = addition 
// });
//    // incluse JS Docstring to include the questions *forward slash, star, star = used to describe functions written just above function
//    // then anytime you use this function the DocString will say what the function if for in a pop up
// /** 
//  * the main game 'loop', called when the script is first loaded
//  * and afer the user's answer has been processed
// */
// function runGame(gameType) {
//     //runGame() did not have any parameters to the function in order for it to acsept = gameType
//     // tested math in console of Inspect! we want whole number (floor round off) between 1-25. floor would include 0. +1 makes sure never include 0
//     // Creates two random numbers betwen 1 and 25
//     let num1 = Math.floor(Math.random() * 25) + 1;
//     let num2 = Math.floor(Math.random() * 25) + 1;
//     //check which gameType is running with an if statement and call the appropriate function to display the question
//     if (gameType === "addition") {
//         displayAdditionQuestion(num1, num2);
//     } else { // always include the else incase game type is unknown we want it to alert
//         alert(`Unknown game type: ${gameType}`);
//         throw `Unknown game type: ${gameType}. Aborting!`;      
//     } // JS 'throw' key word will stop and print 'message' to the console for debugging
// }
// // what do we need for function = users guess and compare with correct answer calculated
// // calculate correct funtion will return an array
// // //check in consol = let userAnser = 23; let calculated answer = [21, 'addition'];
// // //(short cut to return if value is true or false) let isCorrect = userAnswer === calculatedAnswer[0]; then can use ''isCorrect'' to see if T/F
// // // return true = corrcet guess 

// /**
//  * checks the answer against the first element in
//  * the returned calculateCorrectAnswer array
//  */
// function checkAnswer() {

//     //read value from the dom (not fixed, input from user) // because it is an INPUT ELEMENT we need to put VALUE
//     let userAnswer = parseInt(document.getElementById("answer-box").value);
//     let calculatedAnswer = calculateCorrectAnswer ();
//     //same as tested in dev tools
//     let isCorrect = userAnswer === calculatedAnswer[0];

//     if (isCorrect) {
//         alert("Hey! You got it right! :D");
//     } else {
//         alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
//     }
//     runGame(calculateCorrectAnswer[1]);
// }
//     // last thing still to do is run a game of the same type

// // we are reading values from dom and storing them in variables // this is the revers of opperand 1 2 and opperator 
// // the first part is getting vales back from the dom PARSEiNT Fuction makes sure we treat the value as an integer
// /**
//  * Gets the operands (the numbers) and the operator (plus, minus etc)
//  * directly from the dom, and returns the correct answer.
//  */
// function calculateCorrectAnswer() {
// //PARSEiNT Fuction makes sure we treat the value as an integer (whole number) 
// // by default when JS get data from the dom it returns a STRING! 
//     let operand1 = parseInt(document.getElementById('operand1').innerText);
//     let operand2 = parseInt(document.getElementById('operand2').innerText);
//     let operator = document.getElementById("operator").innerText;
// // now we need to determin the game answer by the game type. we get this from the OPERATOR

//     if (operator === "+"){
//         return [operand1 + operand2, "addition"];
//     } else {
//         alert(`Unimplemented operator ${operator}`);
//         throw `Unimplemented operator ${operator}. Aborting!`;
//     } 

// }

//

    //innerText & textContent are interchangeable
    // could have also done oldscore +1 but we wanted to use compund addition of ++oldScore instead
    // if you put ++ after variable = js get id of school, set inner text of the oldScool variabhle and then add 1 to old score = nevver see score being UPDATED because written back to the DOM before having one added to it
    // if it ois ++ BEFORE = JS get the id of school then set the innertest to one + oldScore = SEE score being UPDATED
    // to get incorrect andswer from dom
/**
 * gets the curent score from the DOM and increments it by 1
 */
// // function incrementScore() { 
//     let oldScore = parseInt(document.getElementByID("scroe").innerText);
//     document.getElementById("score").innerText = ++oldScore;

// }

// function incrementWrongAnswer() {

// }

// //operand is number
// function displayAdditionQuestion(operand1, operand2) {

//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "+";

// }

// function displaySubtractQuestion() {

// }

// function displayMultiplyQuestion() {
   
// }

// function displayDivideQuestion() {
    
// }