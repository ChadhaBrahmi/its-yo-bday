
const playSongButton = document.getElementById('play-song');
playSongButton.addEventListener('click', () => {
    const music = document.getElementById('birthday-music');
    if (music.paused) {
        music.play();
        playSongButton.textContent = 'Pause Song'; 
    } else {
        music.pause();
        playSongButton.textContent = 'Play Birthday Song';
    }
});


const giftButton = document.getElementById('gift-button');
giftButton.addEventListener('click', () => {
    window.location.href = 'gift.html';
});
