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
const optsionsDiv = document.querySelector('#bulkOptsions')
let minerPrice = 200
const price2 = document.querySelector('.price2')
let minerPrice1 = 0
let minerPrice10 = 0
let minerPrice100 = 0

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
	miningTotal = minerCount * 10
	cookies = cookies + miningTotal
	number.textContent = cookies
	perSec.textContent = miningTotal
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

const newButton1 = document.createElement("button")
const newButton2 = document.createElement("button")
const newButton3 = document.createElement("button")
newButton1.className = "bulkButton"
newButton1.innerText = "1x"
newButton2.className = "bulkButton"
newButton2.innerText = "10x"
newButton3.className = "bulkButton"
newButton3.innerText = "100x"
optsionsDiv.appendChild(newButton1)
optsionsDiv.appendChild(newButton2)
optsionsDiv.appendChild(newButton3)
let activeButton;
let active1 = false
let active10 = false
let active100 = false
let total1;
let total10;
let total100;

newButton1.addEventListener('click', function() {
	active1 = true
	active10 = false
	active100 = false
	activeButton = active1

})

newButton2.addEventListener('click', function() {
	active10 = true
	active1 = false
	active100 = false
	activeButton = active10
	price2.textContent = minerPrice
})

newButton3.addEventListener('click', function() {
	active100 = true
	active10 = false
	active1 = false
	activeButton = active100
	price2.textContent = minerPrice
})

minerBuy.addEventListener('click', function() {
	if(activeButton === active1) {
		total1  = minerPrice * 1
		if(number.textContent >= total1) {
			miner = true
			cookies = cookies - total1
			minerCount = minerCount + 1
			upgrades.textContent = "Miners:" + " " + minerCount
			return number.textContent = cookies
		}
		else if(number.textContent < total1) {
			alert("You dont have enough cookies!")
		}
	}
	if(activeButton === active10) {
		total10  = 10 * minerPrice
		if(number.textContent >= total10) {
			miner = true
			cookies = cookies - total10
			minerCount = minerCount + 10
			upgrades.textContent = "Miners:" + " " + minerCount
			return number.textContent = cookies
		}
		else if(number.textContent < total10) {
			alert("You dont have enough cookies!")
		}
	}
	if(activeButton === active100) {
		total100 =  minerPrice
		if(number.textContent >= total100) {
			miner = true
			cookies = cookies - total100
			minerCount = minerCount + 100
			upgrades.textContent = "Miners:" + " " + minerCount
			return number.textContent = cookies
		}
		else if(number.textContent < total100) {
			alert("You dont have enough cookies!")
		}
	}
})

const priceMultiplier = function() {
	minerPrice1 = 1 * (minerPrice * 2) 
	minerPrice10 = 10 * (minerPrice * 2)
	minerPrice100 = 100 * (minerPrice * 2)
}