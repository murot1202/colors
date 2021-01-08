let colorPanel = document.querySelector('.colors')
let knopkalar = document.querySelectorAll('.child')
let panel = document.querySelector('.panel')
let change = document.querySelector('.change')
let el = document.querySelector('.element')
let colors = ['red', '#02B5FF', '#FFEA02', '#02FF13', '#8B8B8B']
let click = 0



for (let i = 0; i < knopkalar.length; i++) {
    knopkalar[i].style.background = colors[i]

    knopkalar[i].addEventListener('click', function() {
        el.style.background = colors[i];
    })
}

panel.addEventListener('click', function(){
    console.log(colorPanel.style.left);
    click++
    if (click % 2 == 1) {
        colorPanel.style.transform = 'translateX(0)'
    } else {
        colorPanel.style.transform = 'translateX(-100%)'
        colorPanel.style.transition = '0.5s'
    }
})

function randomColor(){
    color = Math.floor(Math.random() * 5)
    return color
}

change.addEventListener('click', function () {
    el.style.background = colors[randomColor()]
    el.style.color = colors[randomColor()]
})