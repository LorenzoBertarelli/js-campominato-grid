// CREARE UNA GRGLIA 10X10 CON NUMERI CASUALI DA 1 A 100

const numberOfSqaure = 100;
const numbers = generateRandomNumbersArray(numberOfSqaure);
console.log(numbers);

// Per ogni numero generato genero le caselle della griglia 
const grid =document.querySelector(".grid");
for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const newItem = generateGridItem(currentNumber);
    newItem.addEventListener("click", handleItemClick);
    grid.append(newItem);
}

// Funzione
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Description: Funzione che genera un array con numbersQuantity elementi tra 1 e numbersQuantity senza ripetizioni
 * @param {any} numbersQuantity
 * @returns {any}
*/
function generateRandomNumbersArray(numbersQuantity) {
    const numbersArray = [];

    while(numbersArray.length < numbersQuantity) {
        //Generare un numero
        const rndNumber = getRndInteger(1, numbersQuantity);
        //Se non è presente nell'array pusho il numero
        if (!numbersArray.includes(rndNumber)) {
            numbersArray.push(rndNumber);
        }
    }
    return numbersArray;
}

// DOM related functions
function generateGridItem(text) {
    const newSquare = document.createElement("div")
    newSquare.classList.add("grid-item")
    newSquare.innerHTML = `<span>${text}</span>`;
    return newSquare;
}


function handleItemClick() {
    this.classList.add("cyan");
    console.log(this.textContent);
}
















// const title = document.getElementById(`title`)
// console.log(title);

// const paragraph = document.querySelector(`.red.second`);
// console.log(paragraph.innerHTML);

// const square = document.querySelector(`.square`);
// console.log(square);
// square.classList.remove("green");
// square.classList.add("rounded")
// square.classList.toggle("green")

// square.style.backgroundColor = "blue";
// square.style.color = "white";

// square.innerHTML = "ciao";
// square.append(` mondo`);
// square.prepend(`Ok `)

// document.querySelector("button").addEventListener("click", function() {
//     document.querySelector("h1").style.color = "green";
//     this.style.backgroundColor = "red";
// });

// document.querySelector("button").addEventListener("click", handleclick);
// function handleclick() {
//     document.querySelector("h1").style.color = "green";
//     this.style.backgroundColor = "red";
// }

// document.querySelector("button").addEventListener("click", handleClick);
// const boxes = document.getElementsByClassName("box");
// console.log(boxes);
// for (let i = 0; i < boxes.length; i++) {
//     const currentBox = boxes[i];
//     currentBox.addEventListener("click", handleClick);
// }

// function handleClick() {
//     this.classList.toggle("red");
// }

// const list = document.querySelector("ul")
// for (let i = 0; i < 4; i++) {
//     const myItem = createListItem(`Item # ${i}`);
//     myItem.addEventListener("click", handleClick);
//     list.append(myItem);
// }

// function createListItem(innerText) {
//     const newLi = document.createElement("li");
//     newLi.innerText = innerText;
//     newLi.classList.add("item");
//     return newLi;
// }