// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Evento de clique no botão para alterar a cor do fundo
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = gerarCorAleatoria();
});
