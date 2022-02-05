// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
//code that the event listener exicutes is called and event HANDELER

document.addEventListener("DOMContentLoaded", function() {
    // always best to wait for DOM to finish loading before you start running your code
    // return all of the buttons on the page
    let buttons = document.getElementsByTagName("button");

     //old method of iterating through an array
//     // for (let i = 0; i < buttons.length; i++) 
     // same as above just more modern and therefore we dont need to use index notation to speak to elements in array

    for (let button of buttons) {
        button.addEventListener("click", function() {
            // this helps to see what the value is of the data type and if it is submit, it will get the message
            // 'this' refers to the button just clicked
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                // using template literal and $ becuase it will say what button was clicked
                alert(`You clicked ${gameType}`);
            }
        });
    }
});
   // incluse JS Docstring to include the questions *forward slash, star, star = used to describe functions written just above function
   // then anytime you use this function the DocString will say what the function if for in a pop up
/** 
 * the main game 'loop', called when the script is first loaded
 * and afer the user's answer has been processed
*/
function runGame() {
    // tested math in console of Inspect! we want whole number (floor round off) between 1-25. floor would include 0. +1 makes sure never include 0
    // Creates two random numbers betwen 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}