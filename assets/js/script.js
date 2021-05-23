function navOpen(){
    let nav = document.querySelector('#nav');
    nav.setAttribute('id', 'navbar-open');


}
function navClose(){
    let nav = document.querySelector('#navbar-open');
    nav.removeAttribute('id', 'nav');
}