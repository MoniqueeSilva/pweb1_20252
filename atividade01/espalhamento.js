const lista = ['pão', 'queijo', 'presunto', 'café', 'leite'];
const novaLista = [...lista]; //copia a lista principal

novaLista.push('capuccino', 'açúcar'); //adiciona no final

const maisItens = ['banana', ...novaLista, 'maça']; //desmembrando 

console.log('Lista principal:', lista);
console.log('Nova lista:', novaLista);
console.log('Lista:', maisItens);