

const a = document.querySelector('a')

a.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Cliked");
})