
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        if (e.target.id === 'grey') {
            body.style.backgroundColor = "grey" // or e.taget.id

        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = "white"; // or e.taget.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue"; // or e.taget.id
        } if (e.target.id === 'purple') {
            body.style.backgroundColor = "purple"; // or e.taget.id
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"; // or e.taget.id
        }
    });
});

