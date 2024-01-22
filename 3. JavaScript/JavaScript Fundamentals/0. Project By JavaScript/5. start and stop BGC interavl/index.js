

// 1st step: Generate the ramdom color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};


// start changing the color 
let interverID
const startChangingColor = function () {
    // interverID = setInterval(changBgColor, 1000) // OR below code for corner case
    if (!interverID) { // interverID == null
        interverID = setInterval(changBgColor, 1000)
    }

    function changBgColor() {
        document.body.style.backgroundColor = randomColor();

    }
};


// stop changing bgcolor
const stopChangingColor = function () {
    clearInterval(interverID)
    interverID = null; // for corner case
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);





// !interverID <-- agar interverID hai nhi means null hai iska matlab