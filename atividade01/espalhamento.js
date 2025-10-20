const misto = ['pão', 'queijo', 'presunto'];

function adicionarElemento(lista, ...novoElemento){ //rest (junta)
    return [...lista, ...novoElemento]; //spread (espalha)
}

const novaLista = adicionarElemento (misto, 'tomate', 'orégano');

const [primeiro, segundo, terceiro, quarto, quinto] = novaLista;

console.log('primeira lista: ', misto);
console.log('lista com novos elementos: ', novaLista);
console.log(`itens desestruturados: ${primeiro}, ${segundo}, ${terceiro}, ${quarto}, ${quinto}`);