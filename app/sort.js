let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPreco.addEventListener('click', ordenaPreco);

function ordenaPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
}