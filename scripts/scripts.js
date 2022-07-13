//Selecting the DOM elements
const button = document.querySelector('.send');
let section = document.querySelector('.send_card');
let ranks= document.querySelectorAll('.items');
let close = document.querySelector('.close');

//Iterate trought elements to give styles
for( let i = 0; i < ranks.length; i++) {
    ranks[i].addEventListener('click', function selecting() {
        ranks[i].classList.toggle('number_selected')
        ranks[i].style.color = 'white';
    })
}

// Send buttom 
button.addEventListener('click', function send () {
    section.classList.add('index');  
})

close.addEventListener ("click", function close() {
    section.classList.remove("index");
})