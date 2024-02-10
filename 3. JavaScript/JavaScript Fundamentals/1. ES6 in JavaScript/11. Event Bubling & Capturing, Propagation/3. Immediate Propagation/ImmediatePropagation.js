

/*
// 1. StopImmediatePropagation ():
      If we want to trigger or clcik two event listeners at a time on the same element  
      and both of event calls and I want to stops execution of other event handlers
      then we have to use this method stopImmediatePropagation(), it void; 
*/

const div = document.querySelector("div")
const button = document.querySelector('button')
const paragraph = document.querySelector('p')

div.addEventListener("click", function () {
    console.log("div");
})

paragraph.addEventListener('click', () => {
    console.log("Paragraph");
})


button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log("Button2 cliked");
})

button.addEventListener('click', (event) => {
    event.stopImmediatePropagation(); // stops execution of other event handlers
    console.log("Button1 cliked");
})




