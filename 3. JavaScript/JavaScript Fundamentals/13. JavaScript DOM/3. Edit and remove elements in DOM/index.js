


function addLanguage(language) {
    const li = document.createElement('li')
    li.innerHTML = `${language}`
    // const result = document.querySelector('.Language')
    // result.appendChild(li)

    // or on one line 
    document.querySelector('.Language').appendChild(li)
    li.style.color = "white";
    li.style.backgroundColor = "magenta"
    li.style.fontSize = "29px"
}

addLanguage("HTML")
addLanguage("CSS")
addLanguage("React JS")



// optimize way (best way):
function addOptiLanguage(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    const result = document.querySelector('.Language').appendChild(li)

}

addOptiLanguage("java")
addOptiLanguage("Material UI")
addOptiLanguage("BootStrap")



// How to edit
const secondList = document.querySelector("li:nth-child(2)")
// secondList.innerHTML = "Edited Value" // optimize way below 
const newLi = document.createElement('li')
newLi.textContent = 'This is a edited value'
secondList.replaceWith(newLi)



// Edit: replace 1st li with chiken
const selctFirstList = document.querySelector("li:nth-child(1)")
const createFirstList = document.createElement('li')
createFirstList.textContent = 'Chicken Wow'
selctFirstList.replaceWith(createFirstList)



// or 
const otherWay = document.querySelector("li:nth-child(5)")
otherWay.outerHTML = '<li>other for inject the content</li>'


// How to remove HTML Element by using DOM:
const lastLang = document.querySelector("li:last-child")
lastLang.remove()



