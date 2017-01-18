/* JavaScript lives here */

console.log("App Started");

//Assigns the button in our index to a variable
var clickMeButton = document.getElementById("clickMeButton");

//adds an event listener to trigger when the clickMeButton is clicked. It will call the Click function.
clickMeButton.addEventListener("click", Click);

// create a Click function, which will log to the console when we click. Used as an event handler.
function Click() {
    console.log("Clicked...");
}
