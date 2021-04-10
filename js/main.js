console.log("JavaScrpit for the navbar");

const hambuger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.navlinks li');

hambuger.addEventListener('click',()=>{
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
})