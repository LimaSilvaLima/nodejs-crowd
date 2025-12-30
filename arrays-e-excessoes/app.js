const listaDeprodutosDisponiveis = [
    "pao",
    "leita",
    "laranja",
    "macarao",
    "arroz",
    "feijao",
    "carne",
    "sabonete",
    "detergente",
    "pasta de dente",
    "shampoo"

];

console.log('\n');
const listaDeArgumentos = process.argv.slice(2);
const listaDepodutosSolicitadosDisponíveis = listaDeprodutosDisponiveis.filter((produto) => {
    return listaDeArgumentos.find(argumento => argumento === produto)
});

console.log('\n');
listaDepodutosSolicitadosDisponíveis.forEach((produto) => {
    console.log(`o produto :  ${produto} ,está disponível`);
}); 

const listaDepodutosSolicitadosNaoDisponíveis = listaDeArgumentos.filter((argumento) => {
    return !listaDeprodutosDisponiveis.find(produto => produto === argumento)
});

console.log('\n');
listaDepodutosSolicitadosNaoDisponíveis.forEach((produto) => {
    console.log(`o produto :  ${produto} ,não está disponível`);
}); 

console.log('\n');
const listaDeProdutosOrdenadoa = listaDepodutosSolicitadosDisponíveis.sort();
listaDeProdutosOrdenadoa.forEach((produto) => {
    console.log(`o produto :  ${produto} ,está disponível`);
}); 

console.log('\n');





