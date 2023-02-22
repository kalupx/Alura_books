const botoes = document.querySelectorAll(".btn");
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros(categoria){
    const btnValue = document.getElementById(this.id);
    categoria = btnValue.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    //let livrosFiltrados = btnValue == 'disponivel' ?  console.log('erro_2') :  console.log('erro_3');
    exibirLivros(livrosFiltrados);
}