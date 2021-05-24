function navOpen(){
    var nav = document.querySelector('.menu')
    var openButton = document.querySelector('#navOpen-button')
    var closeButton = document.querySelector('#navClose-button')
    var fixHeader = document.querySelector('#header')
        fixHeader.classList.add('header-fix')
        openButton.classList.add('icon-menu-open-hidden')
        openButton.classList.remove('icon-menu-open')
        closeButton.classList.add('icon-menu-close')
        nav.setAttribute('id', 'navbar-open')
}
function navClose(){
    var nav = document.querySelector('.menu')
    var openButton = document.querySelector('#navOpen-button')
    var closeButton = document.querySelector('#navClose-button')
        var fixHeader = document.querySelector('#header')
        fixHeader.classList.remove('header-fix')
        openButton.classList.add('icon-menu-open')
        closeButton.classList.add('icon-menu-close-hidden')
        closeButton.classList.remove('icon-menu-close')
        nav.removeAttribute('id', 'navbar-open')
}