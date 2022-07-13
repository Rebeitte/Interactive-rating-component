const button = document.querySelector('.send');
let section = document.querySelector('.send_card');
let ranks= document.querySelectorAll('.items')

for( let i = 0; i < ranks.length; i++) {
    ranks[i].addEventListener('click', function selecting() {
        ranks[i].classList.toggle('number_selected')
        ranks[i].style.color = 'white';

        console.log()
    })
}

button.addEventListener('click', function send() {
    section.classList.add('index');  
})

