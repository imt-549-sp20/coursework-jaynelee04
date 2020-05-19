// Select the name input element
var nameInput = document.getElementById("name-input");
// Select the name output element
var nameOutput = document.querySelector ("#name-output");
// If the user changes the value of the input
nameInput.addEventListener("input", function (){
    nameOutput.textContent = nameInput.value;
    // Update the output with that value
    console.log("user typed:", nameInput.value);
});
// Select the Button element
var animateButton = document.getElementById ("animate");
//Select the dropdown input 
var animateInput = document.getElementById("animation-select");
//Select the div to animate
var animateOutput = document.querySelector (".animated");
//On click 
animateButton.addEventListener ("click", function (){
    //Add the dropdown input value to the animate element
    animateOutput.classList.add(animateInput.value);
//Remove the dropdown input value from the animate element
animateOutput.addEventListener("animationend", function () {
   animateOutput.classList.remove(animateInput.value);
});
//animateOutput.classList.add(animateInput.value);

});
