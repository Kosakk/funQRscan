counter = 0;

function addOne() {
	return counter++;
}

function updateCounter() {
	addOne();
	document.querySelector('.number').textContent = counter;
}
