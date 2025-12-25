const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const minhaPrimeiraConstanteString = "Primeira constante";
console.log(minhaPrimeiraConstanteString);

let leituraCampo;

rl.question('Digite algo: ', (input) => {
  leituraCampo = input;
  console.log(`Você digitou: ${leituraCampo}`);
  rl.close();
});
