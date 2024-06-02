// 1 и 2
const changeCbtn = document.getElementById("changeColor") 
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const body = document.body
const btnParty = document.getElementById("party")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
btn1.addEventListener('click', () => console.log("нажми другую"))
btn2.addEventListener('click', () => console.log("нажми третью"))
btn3.addEventListener('click', () => console.log("нажми первую"))
changeCbtn.addEventListener('click', () => {body.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`})
btnParty.addEventListener('click', () => {
    let intervalId = setInterval(() => {body.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`}, 300);
    setTimeout(() => {
        clearInterval(intervalId)
        body.style.backgroundColor = "gray"
    }, 5000)
})

// 3
const addLi = (elem) =>{
    console.log(elem)
    let txt = `№${elem.childElementCount+1}`
    let li = document.createElement("li");
    li.textContent = txt
    document.getElementById("spisok").appendChild(li)
}
const ulka = document.getElementById("spisok")
const btnAddEl = document.getElementById("addLi")
btnAddEl.addEventListener('click', () => (addLi(ulka)))
ulka.addEventListener('click', () => alert("вы нажали на какой-то элемент списка"))

// 4
const inputPassword = document.getElementById("password")
let keysArray = ["monkey", "обезьяна"]
let typeKey = (el) => {
    setTimeout(() => keysArray.includes(el.target.value) ? alert("ура") : null, 0)
}
inputPassword.addEventListener('keydown', typeKey)
 