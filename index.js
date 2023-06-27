let count = 5/7
console.log(count)

let myAge = 55
console.log(myAge)

let info = ["Raymond, 55, Troldhaugvegen 56"]
console.log(info)

function myLogger () {
    console.log(42)
}
myLogger ()

let username = "Raymond"
console.log(username)

let points = 4
let bonusPoints = 10
let totalPoints = points + bonusPoints
console.log(totalPoints)

let name = "Raymond"
let greeting = "Hey there"
function greetRaymond () {
    console.log(greeting+", "+name+"!")
}
greetRaymond ()

let firstName = "Raymond"
let lastName = "Vik"
let fullName = firstName + " "+ lastName
console.log(fullName)

const calculator = (operator, number1, number2) => {
      if (operator === "+") {
      return number1 + number2;
      } else if (operator === "-") {
        return number1 - number2;
      } else if (operator === "*") {
        return number1 * number2;
      } else if (operator === "/") {
        return number1 / number2;
      }
}

console.log(calculator("-", 10, 7));
console.log(calculator("+", 10, 5));
console.log(calculator("*", 10, 5));
console.log(calculator("/", 10, 5));

let img = document.querySelector("#profilbilde");

let profilbilde = document.getElementById("profilbilde");
profilbilde.addEventListener("click", function () {
img.classList.toggle("profilbilde_stor");
})

let img2 = document.querySelector("#skills_img");

let skills_img = document.getElementById("skills_img");
skills_img.addEventListener("click", function () {
console.log("clicked pic 2");
img2.classList.toggle("skills_img_stor");
})

let img3 = document.querySelector("#skills_img2");

let skills_img2 = document.getElementById("skills_img2");
skills_img2.addEventListener("click", function () {
console.log("clicked pic 2");
img3.classList.toggle("skills_img_stor2");
})


 








