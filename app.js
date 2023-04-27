let clickButton = document.querySelector('.clickButton')
let crossImg = document.querySelector('.crossImg')
let popUPDiv = document.querySelector('.popUPDiv')
let backColor = document.querySelector('.backColor')


clickButton.addEventListener('click', ()=>{
    popUPDiv.classList.toggle('hidden')
    backColor.classList.toggle('hidden')

})
crossImg.addEventListener('click', ()=>{
    popUPDiv.classList.toggle('hidden')
    backColor.classList.toggle('hidden')

})