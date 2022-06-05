let $ = document.querySelector.bind(document);
const player = $("#player");
const obstaculo = $("#obstaculo");

const jump = () => {    
    player.classList.add('jump')

    setTimeout(() => {
        player.classList.remove('jump')
    }, 600);
}

const loop = setInterval(() => {
    const posicaoObstaculo = obstaculo.offsetLeft;
    const posicaoPlayerString = window.getComputedStyle(player).bottom.replace('px', '');
    const posicaoPlayer = Number(posicaoPlayerString);
    console.log(posicaoPlayer)

    if(posicaoObstaculo <= 180 && posicaoPlayer <= 150 && posicaoObstaculo >= 10) {

        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${posicaoObstaculo}px`;

        player.style.animation = 'none';
        player.src = "assets/imgs/game-over.png";
        player.classList.remove('player');
        player.classList.add('game-over');
        player.style.bottom = `${posicaoPlayer}px`;
        
    }
}, 10)

document.addEventListener('keydown', jump);