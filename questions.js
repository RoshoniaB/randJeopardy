const max = 100; 
function handleClickQues(event) {
	fetch(`http://www.jservice.io/api/clues?value=100`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let randomindex = Math.floor(Math.random() * Math.floor(max))
			let square1 = res[randomindex].question;
			let questionParagraph = document.createElement('p');
			let answerParagraph = document.createElement('p')
			let answer = res[randomindex].answer
			answerParagraph.innerText = answer
			questionParagraph.innerText = square1
			document.querySelector('.gameboard').appendChild (questionParagraph)
			document.querySelector('.gameboard').appendChild(answerParagraph);
			questionParagraph.classList.add('quest')
			answerParagraph.classList.add('hide','ans')

			let showAnswer = document.querySelector('.show-answer')
			
			showAnswer.addEventListener('click', ()=>{
				answerParagraph.classList.remove('hide')
			})
			
		})
		.catch((error) => {
			console.log(error);
		});
}
handleClickQues()
