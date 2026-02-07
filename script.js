const button = document.querySelector('#button')
const number = document.querySelector('#text')
const buyBtn = document.querySelector('button.buy')
let double = false
let cookies = 0

buyBtn.addEventListener('click', function() {
	if(number.textContent >= 100) {
		double = true
		cookies = cookies - 100
		return number.textContent = cookies
	}
})

button.addEventListener('click', function() {
	if(double === true) {
		cookies = cookies + 2
		return number.textContent = cookies
	}
	else {
		cookies = cookies + 1
		number.textContent = cookies
	}
})