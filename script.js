const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        console.log('works')
        deactivateAll()
        panel.classList.add('active')
        console.log(panel)
    })
})

function deactivateAll(){
    panels.forEach(panel => {
        panel.classList.remove('active')
        
    });       
}
const btnOpen = document.getElementById('open')
const btnClose = document.getElementById('close')

const content = document.getElementsByClassName('content')
const circle= document.querySelector('.circleContainer')
btnOpen.addEventListener('click', ()=>{
    content[0].classList.add('active')
    circle.classList.add('active')

})

btnClose.addEventListener('click', ()=>{
    content[0].classList.remove('active')
    circle.classList.remove('active')

})
