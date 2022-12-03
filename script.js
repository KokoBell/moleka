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
            changeService(event)
        })
    }
)

function changeService(event) {
    if (event.target.classList.contains('construction')) {
        constr.classList.add('selected')
        console.log(constr)
    }
    if (event.target.classList.contains('mining')) {
        mining.classList.add('selected')
        console.log(mining)
    }
    if (event.target.classList.contains('asphalt')) {
        asphalt.classList.add('selected')
        console.log(asphalt)
    }
}