const container = document.querySelector('.container')
const startBtn = document.querySelector('#start')
const continueBtn = document.querySelector('#continue')
const cards = document.querySelectorAll('.card')
const screens = document.querySelectorAll('.screen')
const h1start = document.querySelector('#h1start')

const colorSet = ['#191970', '#2E8B57', '#FF4500', '#FFFFE0', '#800080', '#8B4513', '#000000', '#808080']
let colors = ['#191970', '#2E8B57', '#FF4500', '#FFFFE0', '#800080', '#8B4513', '#000000', '#808080']
let counter = 0
let result = ''
let arr1 = new Array()
let arr2 = new Array()

function setCardColors() {
    cards.forEach(card => {
        const color = getRandomColor()
        card.style.background = color
        card.setAttribute('colorIndex', colorSet.indexOf(color))
    })
}

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    setCardColors()
    screens[0].classList.add('up')
    if (startBtn.innerHTML == 'Пройти тест повторно') {
        location.reload()
    }
})

container.addEventListener('click', event => {
    if (event.target.classList.contains('card')) {
        indexColor = parseInt(event.target.getAttribute('colorIndex'))
        result += indexColor
        event.target.hidden = 'true'
        checkCards()
    }
})

function checkCards() {
    counter++
    if (counter === 7) {
        counter = 0
        colors = colorSet.slice(0)
        if (result.length > 13) {
            separateString(result)
            screens[0].classList.remove('up')
            h1start.innerHTML = 'Результат'
            document.querySelector('p').innerHTML = 'все у тебя заебись, выше нос: ' + arr1 + arr2
            startBtn.innerHTML = 'Пройти тест повторно'
            return
        }
        cards.forEach((card) => {
            card.hidden = false
        })
        h1start.innerHTML = 'И еще разок'
        startBtn.innerHTML = 'продолжить'
        screens[0].classList.remove('up')   
    }
}

function getRandomColor(card) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    colors = colors.filter(item => item !== color)
    return color
}

function separateString(strResult) {
    num = 28
    for (var i = 0; i < strResult.length; i++) {
        if (i < 7) {
            num -= parseInt(strResult[i])
            arr1.push(parseInt(strResult[i]))
        } else if (i == 7) {
            arr1.push(num)
            num = 28 - strResult[i]
            arr2.push(parseInt(strResult[i]))

        } else {
            num -= parseInt(strResult[i])
            arr2.push(parseInt(strResult[i]))
        }
    }
    arr2.push(num)
}