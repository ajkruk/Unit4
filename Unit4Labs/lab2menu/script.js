const options = document.querySelector("#options");
const menu = document.querySelector("#menu");
const lettersLink = document.querySelector("#lettersLink");
const numbersLink = document.querySelector("#numbersLink");
const letters = document.getElementById("#letters");
const numbers = document.getElementById("#numbers");

options.addEventListener("click", function() { 
    if(menu.style.display ==='none') {
        menu.style.display = 'flex'

    }else {
        menu.style.display = 'none'
    }
}) 

lettersLink.addEventListener('click', function(e) {
    e.preventDefault();
    letters.style.display = 'block'
    numbers.style.display = 'none'
    menuBox.style.display = 'none'
})

numbersLink.addEventListener('click', function(e) {
    e.preventDefault();
    letters.style.display = 'none'
    numbers.style.display = 'block'
    menuBox.style.display = 'none'
})


// document.querySelector("#options").addEventListener("click", function(){
//     document.querySelector("#menu").style.display = 'flex'
// })