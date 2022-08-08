const form = document.querySelector('.quiz-form')
const popup = document.querySelector('.popup-wrapper')
const p = document.querySelector('#answer')

const correctAnswers = ['B','A','A','B']
let score = 0

const handleQuizAnswer = event => {
  event.preventDefault()
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  const checkAnswers = (answer,index) => {
    const isAnswerCorrect = answer === correctAnswers[index]
    if(isAnswerCorrect){
      score += 25
    }
  }
  userAnswers.forEach(checkAnswers)
  
  popup.style.display = 'block'
  
  p.textContent = `Você acertou ${score}%`  
  
  score = 0
}

const closePopup = event => {
  const classNameClickedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper']
  const isAnElementClicked = classNames.some(className =>
    className === classNameClickedElement)
  
  if(isAnElementClicked){
    popup.style.display ='none'
  }

}

popup.addEventListener('click', closePopup)
form.addEventListener('submit', handleQuizAnswer)
