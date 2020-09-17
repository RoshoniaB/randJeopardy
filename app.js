
const square = document.querySelector('.square');
const score = document.querySelector('.score');
let startScore = 0;
    
square.addEventListener('click', handleIWon);
    
function handleIWon(event) {
    const increment = parseInt(event.target.dataset.increment);
    if (event.target.classList.contains('btn')) {
			console.log(event.target);
			startScore += increment;
			score.innerText = startScore;
			if (startScore <= 1000) {
				document.body.classList.add('game-over');
			}
		}
}