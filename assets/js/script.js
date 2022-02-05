// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
//code that the event listener exicutes is called and event HANDELER

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

//     //old method of iterating through an array
//     // for (let i = 0; i < buttons.length; i++) 
//     // same as above just more modern and therefore we dont need to use index notation to speak to elements in array

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

function runGame() {

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