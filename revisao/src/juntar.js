let a = [1, 2, 3];
let b = [4, 5, 6];
//let c = [];
let c = [...a, ...b]; //espalhamento

for (let numero of a){
    c.push(numero);
}
for (let numero of b){
    c.push(numero);
}

console.log(c);