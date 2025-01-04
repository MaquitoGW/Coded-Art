function criarEstrelas() {
    const container = document.getElementById('stars-container');
    const tamanhosEstrelas = ['n1', 'n2', 'n3'];
    const distanciaMinima = 550;

    const estrelas = [];

    function verificarDistancia(x, y) {
        for (let i = 0; i < estrelas.length; i++) {
            const estrela = estrelas[i];
            const dx = estrela.x - x;
            const dy = estrela.y - y;
            const distancia = Math.sqrt(dx * dx + dy * dy);
            if (distancia < distanciaMinima) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < 50; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');
        const tamanhoAleatorio = tamanhosEstrelas[Math.floor(Math.random() * tamanhosEstrelas.length)];
        estrela.classList.add(tamanhoAleatorio);

        let topAleatorio, leftAleatorio;
        let tentativas = 0;
        do {
            topAleatorio = Math.floor(Math.random() * 50);
            leftAleatorio = Math.floor(Math.random() * 100);
            tentativas++;
        } while (!verificarDistancia(leftAleatorio, topAleatorio) && tentativas < 100);

        estrela.style.top = `${topAleatorio}%`;
        estrela.style.left = `${leftAleatorio}%`;

        estrelas.push({ x: leftAleatorio, y: topAleatorio });

        container.appendChild(estrela);
    }
}

criarEstrelas();

// Play music

document.querySelector('body').addEventListener('click', () => {
    document.getElementById('play').play();
});