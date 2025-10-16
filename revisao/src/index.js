let pessoa = {nome: 'Maria', nascimento: '2025-10-05'};
let {nome} = pessoa;
//let nome = pessoa.nome;
let exibirNome = ({nome}) => {
    console.log(nome);
}
exibirNome(pessoa);
