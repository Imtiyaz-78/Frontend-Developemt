
// Event Bubling & Event Capturing in JavaScript
// Stop Propagation, Immediadate Propagation & Prevent Default


//Event Bubling: Event bubbling is the process by which an event propagates from a specific
// element up to the parent elements of that element.


/*
// 1. Event Bubbling 
// Example 1 - Clicking on paragraph will trigger click events for both p and div tags.
const div = document.querySelector("div")
const button = document.querySelector('button')
const paragraph = document.querySelector('p')

div.addEventListener("click", function () {
    console.log("div");
}, false)

paragraph.addEventListener('click', () => {
    console.log("Paragraph");
}, false)


button.addEventListener('click', () => {
    console.log("Button");
}, false)
*/


// 1. Event Capturing 
const divC = document.querySelector("div")
const buttonC = document.querySelector('button')
const paragraphC = document.querySelector('p')

divC.addEventListener("click", function () {
    console.log("div");
}, true)

paragraphC.addEventListener('click', () => {
    console.log("Paragraph");
}, true)


buttonC.addEventListener('click', () => {
    console.log("Button");
}, true)

