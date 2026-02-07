const button = document.querySelector('#button')
const number = document.querySelector('#text')
const buyBtn = document.querySelector('button.buy')
let double = false
let cookies = 0
const minerBuy = document.querySelector('#buyMiner')
const perSec = document.querySelector('#per-sec')
let miner = false
const upgrades = document.querySelector('#upgrades')
let minerCount = 0

const save = function() {
	localStorage.setItem('miner', JSON.stringify(miner))
	localStorage.setItem('double', JSON.stringify(double))
	localStorage.setItem('cookies', JSON.stringify(cookies))
	localStorage.setItem('minerCount', JSON.stringify(minerCount))	
}

const load = function() {
	miner = JSON.parse(localStorage.getItem('miner'))
	double = JSON.parse(localStorage.getItem('double'))
	cookies = JSON.parse(localStorage.getItem('cookies'))
	minerCount = JSON.parse(localStorage.getItem('minerCount'))
}

load()

minerBuy.addEventListener('click', function() {
	if(number.textContent >= 200) {
		miner = true
		cookies = cookies - 200
		minerCount = minerCount + 1
		upgrades.textContent = "Miners:" + " " + minerCount
		return number.textContent = cookies
	}
})

checkMiner()
upgrades.textContent = "Miners:" + " " + minerCount

buyBtn.addEventListener('click', function() {
	if(double === true) {
		alert('YOU ALREADY HAVE 2X CLICKER!')
	}
	else if(number.textContent >= 100) {
		double = true
		cookies = cookies - 100
		return number.textContent = cookies
	}
})

function mining() {
	cookies = cookies + (1 * minerCount)
	number.textContent = cookies
	perSec.textContent = minerCount
	save()
}

function checkMiner() {
	if(miner === true) {
		setInterval(mining, 1000)
	}
}

button.addEventListener('click', function() {
	if(double === true) {
		cookies = cookies + 2
		return number.textContent = cookies
	}
	else {
		cookies = cookies + 1
		number.textContent = cookies
	}
	save()
})