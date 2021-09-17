const container = document.querySelector('.container')
const startBtn = document.querySelector('#start')
const cards = document.querySelectorAll('.card')
const screens = document.querySelectorAll('.screen')

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'black', 'violet']

cards.forEach(card => {
    card.style.background = getRandomColor()
    card.addEventListener('click', cardClick())
})

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
 
container.addEventListener('click', event => {
    if (event.target.classList.contains('card')) {
        console.log('card.style.background-color :>> ', event.target.style.background);
        event.target.hide
    }
})

function cardClick() {

}

function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)]
    colors = colors.filter(item => item !== color)

    return color
}