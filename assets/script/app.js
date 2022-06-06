let $ = document.querySelector.bind(document);
const player = $("#player");
const obstaculo = $("#obstaculo");
const pontos = $("#pontos");
let score = 0;
let verificadorDeUnidade = false;


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
    console.log(posicaoObstaculo)

    const paraObstaculo = () => {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${posicaoObstaculo}px`;
    }

    const paraPlayer = () => {
        player.style.animation = 'none';
        player.src = "assets/imgs/game-over.png";
        player.style.bottom = `${posicaoPlayer}px`;
        player.style.left = '75px'
        player.style.width = "100px"
    }

    const atualizaPlacar = () => {
            score++;
            pontos.textContent = `PONTOS: ${score}`;
            verificadorDeUnidade = true;
    }

    if(posicaoObstaculo <= 180 && posicaoPlayer <= 180 && posicaoObstaculo >= 10) {
        paraObstaculo();
        paraPlayer();
    } else if (posicaoObstaculo <= 20 && posicaoObstaculo >= 0 && verificadorDeUnidade == false) {         
        atualizaPlacar();
    } else if (posicaoPlayer <= 0 && verificadorDeUnidade == true) {
        verificadorDeUnidade = false;
    }



}, 10)

document.addEventListener('keydown', jump);