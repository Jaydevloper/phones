const Wrraperlist = document.querySelector('.site-wrraper-list')
const Wrraperlistbtn = document.querySelector('.js-btn')

Wrraperlistbtn.addEventListener ('click' , ()=> {
     Wrraperlist.classList.toggle('site-wrraper-list--open')
})
const sitesection = document.querySelector('.site-section')
const sitesectionbtn = document.querySelector('.js-btn')

sitesectionbtn.addEventListener ('click' , ()=> {
     sitesection.classList.toggle('site-section--open')
})