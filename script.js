let serviceElements = document.getElementsByClassName('service')

let constr = serviceElements.item(0)
let mining = serviceElements.item(1)
let asphalt = serviceElements.item(2)

let services = Array.from(serviceElements)

services.forEach(
    el => {
        el.addEventListener('click', (event) => {
            event.preventDefault()
            constr.classList.remove('selected')
            mining.classList.remove('selected')
            asphalt.classList.remove('selected')
            constrCard.classList.remove('selected-card')
            miningCard.classList.remove('selected-card')
            asphaltCard.classList.remove('selected-card')
            changeService(event)
        })
    }
)

let cardElements = document.getElementsByClassName('service-card')

const constrCard = cardElements.item(0)
const miningCard = cardElements.item(1)
const asphaltCard = cardElements.item(2)

let cards = Array.from(cardElements)

function changeService(event) {
    if (event.target.classList.contains('construction')) {
        constr.classList.add('selected')
        constrCard.classList.add('selected-card')
    }
    if (event.target.classList.contains('mining')) {
        mining.classList.add('selected')
        miningCard.classList.add('selected-card')
    }
    if (event.target.classList.contains('asphalt')) {
        asphalt.classList.add('selected')
        asphaltCard.classList.add('selected-card')
    }
}