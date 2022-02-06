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

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");

});


// setting the focus is having your curser already in the selection answer box. each time the awnser box is called the cursor will be there for the answer
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    }  else if (gameType === "division") {
        displayDivisionQuestion(num1 * num2, num2);
    }  else {
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
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
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

// need to keep the operand 1 as the larger number to keep from neg number ( could use if statement but ternary operator is shorter )

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand2 > operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}
// always want awnser to be a whole number - integer (cant be 10/3 = 3.333) = multiply 2 operands together to form one side of the equation
// TERNARY OPERATOR = question checking goes before ? is operand 1 bigger than op 2? if so return operand 1 if not (else) : return operand 2
function displayDivisionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand2 > operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = "/";

}


// //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxNOTESxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/**
3 things nneded to add to make run game function  
1 -(add gameType check runGame()) needs to have new game type added 
2 - (create the display question function)create display question function
3- (modify the calculate correct answer function) updare calculate correct answer function
division, the first number needs to be higher than the second one
always want awnser to be a whole number - integer (cant be 10/3 = 3.333) = multiply 2 operands together to form one side of the equation

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
3) function calculateCorrect (){
    else if (operand1 === "x"){
        return[operand1 * operand2, "multiply"]
    }
}

git add .
gitpod /workspace/love-maths (main) $ git commit -m 'add multiplication game code'
 */

// you dont need to delete the awnser before starting a new game.
// set value of empty string so each time our run game function is called it will set the value of answer box to empty string and empty it
// // setting the focus is having your curser already in the selection answer box. each time the awnser box is called the cursor will be there for the answer
// function runGame(gameType){
//     document.getElementById("answer-box").value = "";
    // document.getElementById("answer-box").focus();
// }

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
// want answer to be submitted when press answer.
// listening for key down . the call funtion this time we are going to send in an event object, the check the KEY PROPERTY  of the event object
// to see if the enter key was pressed. slightly different than before. listening for key down event. 
// that event then generates an object which we then pass through even handeler code. this case the the KEY PROPERTY
// when pressed ENTER then run this function ==== KEY BOARD CONTROLLED
// document.getElementById("awnser-box").addEventListener("keydown", fuction(event){
//      if (event.key === "Enter") {
//    checkAnswer();}
// })

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
     // setting the focus is having your curser already in the selection answer box. each time the awnser box is called the cursor will be there for the answer
// function runGame(gameType){
//     document.getElementById("answer-box").value = "";
    // document.getElementById("answer-box").focus();
// }
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

//dont want answers to be a negative number  ==== change in display question function
// the game generate 2 random numbers and the second one can sometimes be larger than the first this would result in a neg number
// other than that everything is exactly the same as the multiplication game!
//

//// need to keep the operand 1 as the larger number to keep from neg number ( could use if statement but ternary operator is shorter )

// function displaySubtractQuestion() {

// }

// function displayMultiplyQuestion() {
   
// }

// function displayDivideQuestion() {
    
// }