const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener('click', function(){
        const linkId = card.getAttribute('id');
        window.location.href = `/curses/${linkId}`
    })
}
