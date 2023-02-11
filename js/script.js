'use strict';
const billInput = document.querySelector('.bill__input')
const tip5 = document.querySelector('.select-tip__num1')
const tip10 = document.querySelector('.select-tip__num2')
const tip15 = document.querySelector('.select-tip__num3')
const tip25 = document.querySelector('.select-tip__num4')
const tip50 = document.querySelector('.select-tip__num5')
const tipCustom = document.querySelector('.select-tip__num6')
const tipCustomForm = document.querySelector('.select-tip__form')
const numOfPeople = document.querySelector('.people__num')
const tipNum = document.querySelector('.tip__num')
const totalNum = document.querySelector('.total__num')
const calc = document.querySelector('.total-btn')
const reset = document.querySelector('.btn')

let bill = 0
let tip = 0
let numPeople = 0
let tipPerPerson = 0
// let tipAmount = 0


const start = function() {
    // reset.style.backgroundColor = 'hsl(185, 41%, 84%)';
    totalNum.textContent = 0;
    tipNum.textContent = 0;
    billInput.placeholder = 0;
    numOfPeople.placeholder = 0;
    billInput.value = "";
    numOfPeople.value = "";
    tipCustom.value = "";
    // calc.style.backgroundColor = 'hsl(172, 67%, 45%)';
    // reset.style.backgroundColor = 'hsl(172, 67%, 45%)';
}
start();

const cal = function(percent){
    tip = +billInput.value * percent
    tipPerPerson = tip / +numOfPeople.value
    tipNum.textContent = `$${tipPerPerson}`
    const billAmpunt = billInput.value / numOfPeople.value
    const total = billAmpunt + tipPerPerson
    totalNum.textContent = `$${total}`

}

tip5.addEventListener('click', () => {
    cal(0.05)
})

tip10.addEventListener('click', () =>{
    cal(0.1)
})

tip15.addEventListener('click', () =>{
    cal(0.15)
})

tip25.addEventListener('click', () =>{
    cal(0.25)
})

tip50.addEventListener('click', () =>{
    cal(0.5)
})
tipCustomForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    cal(+tipCustom.value / 100)

})



reset.addEventListener('click', start);
