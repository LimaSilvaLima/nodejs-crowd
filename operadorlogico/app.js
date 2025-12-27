const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\nOperadores Lógicos em JavaScript\n");
console.log("\nAlem de suas Verificações, precisamos saber se vc esta na lista de horário.\n");

rl.question('Qual o ano do seu nascimento?     ', ano  => {
    if (ano > 2006) {
        console.log("\nVoce não tem 18 anos ainda.\n");
            return
        } else {
            rl.question('Voce tem habilitação? (Sim/Nao)    ', temHabilitacao => {
                if (temHabilitacao.toLowerCase() !== 'sim') {
                    console.log("\n\nVoce não pode dirigir.\n");
                    return;
                }else {
                    rl.question('\nQual o seu nome?     ' , nome => {
                        switch(nome) {
                            case 'Douglas' :
                                console.log('Bem vindo ao Kart Douglas');
                                break;
                            case 'Rafael' :
                                console.log('Bem vindo ao Kart Rafael');
                                break;
                            default:
                                console.log('Seu nome não foi identificado na lista');
                        }
                        rl.close();
                        });
                }
            });
    }
});