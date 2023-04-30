// VARIABLES
const menu = document.getElementById('menu'),
      bars = document.getElementById('bars'),
      nav = document.getElementById('nav'),
      link= document.querySelectorAll('link'),
      toTop = document.getElementById('to-top')


// MENU TOGGLE

bars.addEventListener('click', () => {
    menu.classList.toggle('activve')
})

document.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'bars') {
        menu.classList.remove('activve')
    }
})

// SCROLL TOGGLE
window.addEventListener('scroll', () =>{ 
    nav.classList.toggle('drop', window.scrollY > 0)
});

window.addEventListener('scroll', () =>{
    if (window.pageYOffset > 100) {
        toTop.classList.add('active')
    } 
    else{
        toTop.classList.remove('active')
    }
})