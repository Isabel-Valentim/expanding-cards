//variavel com todos os elementos de classe panel
//armazena em uma lista
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}