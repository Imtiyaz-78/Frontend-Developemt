
const clockR = document.querySelector('.clock')

setInterval(function () {
  let date = new Date();
  clockR.innerHTML = date.toLocaleTimeString()
}, 1000)