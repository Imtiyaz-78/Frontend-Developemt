

// document.getElementById('travel').onclick = function () {
//     alert("Travel photo cliked")
// }


// one more best approseL:
// document.getElementById('travel').addEventListener('click', function (event) {
//    alert("Travel clicked by best approach")
//    console.log(event);
// }, true)


// 1. bubling : bubling jata hai bottom se top par
// false(default) <-- called event bubLing (In market mostly are use dafault(false) for project)
// true <---- event capturing

// jab inside se outside jata hai toh wo bubling kahlati hai like <ul><li> <img/></li></ul>
// jab image par clikc karte hai toh inside se outside jati hai pahle img then li then ul
// par click hota hai 


document.getElementById('images').addEventListener('click', function (event) {
    console.log("Clicked inside the UL");
}, false)

document.getElementById('travel').addEventListener('click', function (event) {
    console.log("travel image Clicked ");
    event.stopPropagation(); // aese karne se bubble ho kar niche se uper nahi jayega (best way)
}, false)

// OR 
/*
// 2. capturing:  capturing jata hai top to bottom 
document.getElementById('images').addEventListener('click', function (event) {
    console.log("Clicked inside the UL");
}, true)

document.getElementById('travel').addEventListener('click', function (event) {
    console.log("travel image Clicked ");
}, true)
*/


// 

document.getElementById('google').addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("google clicked");

}, false)

