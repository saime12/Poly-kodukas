const button = document.querySelector('#button')
const number = document.querySelector('#text')
let clicked = 0;
let double = false
const btn2 = document.querySelector('button.buy')

cockies = number.textContent

btn2.addEventListener('click', function() {

	if(number.textContent === 1) {
		double = true


	}
})

console.log(cockies)

button.addEventListener('click', function() {
	if(double === true) {
		clicked = clicked + 2
	}
	else {
		clicked = clicked + 1
		number.textContent = clicked
	}
})


