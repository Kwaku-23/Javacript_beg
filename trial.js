function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

let message ="Hello";
alert(message);
// const myInt = 5;
// const myFloat = 6.667;
// console.log(typeof myInt);
// console.log(typeof myFloat);

// const lotsOfDecimal = 1.7665849587;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// console.log(twoDecimalPlaces)

// let Name="Asante";
// let num=45;
// console.log(Name+num);
// let num1 = 4;
// num1++;
// console.log(num1);