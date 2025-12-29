console.log("Início do programa\n\n");
const listaArgumentos = process.argv.slice(2);

console.log('..........Execitando um FOR..........\n');

for (let controlador = 0 ; controlador < listaArgumentos.length ; controlador++){
    console.log('Argumento ' + controlador + ': ' + listaArgumentos[controlador]);
}

    console.log('\n..........Executando um WHILE..........\n'); 
    let controladorWhile = 0;
    while (controladorWhile < listaArgumentos.length){
        console.log('Argumento ' + controladorWhile + ': ' + listaArgumentos[controladorWhile]);
        controladorWhile++; 
    }

    console.log('\n..........Executando um DO WHILE..........\n');
    let controladorDoWhile = 0;
    do {
        console.log('Argumento ' + controladorDoWhile + ': ' + listaArgumentos[controladorDoWhile]);
        controladorDoWhile++; 
    } while (controladorDoWhile < listaArgumentos.length);

    console.log('\n..........Executando um FOR OF..........\n');
    for (let argumento of listaArgumentos){
        console.log('Argumento: ' + argumento);
    }


    
    console.log('\n..........Executando um FOR IN..........\n');
    for (let indice in listaArgumentos){
        console.log('Argumento ' + indice + ': ' + listaArgumentos[indice]);
    }





  
        




/*
console.log("Argumentos fornecidos:");
for (let i = 0 ; i < listaArgumentos.length ; i++){
    console.log('Argumento ' + i + ': ' + listaArgumentos[i]);

} */
