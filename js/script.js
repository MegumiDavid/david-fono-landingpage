// Navbar
const btnHamburger = document.querySelector('#btnHamburger')
const menu = document.querySelector('.nav__menu')

btnHamburger.addEventListener('click', (e) => {
    e.preventDefault()
    btnHamburger.classList.toggle('open-btn')
    menu.classList.toggle('open-menu')
})

// onScroll animations
const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        entry.target.classList.remove('appear')
        observer.unobserve(entry.target)
        console.log(entry.target)
    })},
    {
        root: null,
        threshold: .05,
    }
)

const header = document.querySelector('.header')
const aboutus = document.querySelector('.aboutus')
const benefits = document.querySelector('.benefits')
const services = document.querySelector('.services')

observer.observe(header)
observer.observe(aboutus)
observer.observe(benefits)
observer.observe(services)
