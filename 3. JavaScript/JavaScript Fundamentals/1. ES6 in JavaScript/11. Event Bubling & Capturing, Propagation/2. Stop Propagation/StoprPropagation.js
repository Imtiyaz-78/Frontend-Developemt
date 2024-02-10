
/*
// 1. Stop Propagation:
      The stopPropagation() method is used to prevent(stop) further 
      propagation of the event in the capturing and bubbling phases. 

      When an event is triggered (clik), it can bubble up or bubble down (capturing) 
      the DOM tree and cause unwanted behavior if not handled properly.s
    
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
    event.stopPropagation() // maine Propagate ko stop kar diye ab div ko propagate nhi karega 
    console.log("Button");
})



