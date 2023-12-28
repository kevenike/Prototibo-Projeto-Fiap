function clickMenu() {
    let linksNavegacao = document.getElementById('linksNavegacao')
    if (linksNavegacao.style.display == 'block') {
        linksNavegacao.classList.remove('menu-open')
        linksNavegacao.style.display = 'none'
    } else {
        linksNavegacao.classList.add('menu-open')
        linksNavegacao.style.display = 'block'
    }
}


function clickFormulario() {
    let fixado = document.getElementById('fixado')
    if (fixado.style.display == 'block') {
        fixado.classList.remove('formularioFixado-open')
        fixado.style.display = 'none'
    } 
}