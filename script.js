const cards = document.querySelectorAll('.game-card');

//flip card function
function flipCard() {
	this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard))

