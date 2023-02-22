let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();
const elementoParaInsercao = document.getElementById('livros');

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
}


