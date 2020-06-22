const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active');
        const linkId = card.getAttribute('id');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${linkId}`;
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
})


document.querySelector('.maxsize-buttom').addEventListener('click', function(){
    document.querySelector('.modal').classList.add('maxsize');
})

document.querySelector('.miminize').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('maxsize');
})
