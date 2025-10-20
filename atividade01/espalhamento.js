const misto = ['pão', 'queijo', 'presunto'];
const novaLista = [...misto, 'tomate', 'orégano']; // direto no spread
const [primeiro, segundo, terceiro] = novaLista;

console.log('primeira lista:', misto);
console.log('lista com novos elementos:', novaLista);
console.log(`itens desestruturados: ${primeiro}, ${segundo}, ${terceiro}`);
