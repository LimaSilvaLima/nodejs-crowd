const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const numeroFloat = parseFloat(numero);
    if (isNaN(numeroFloat)) {
        console.log('Por favor, insira um número válido.');
        return null;
    }
    return numeroFloat;
}

const validarOperador = (operador) => {
    const operadoresValidos = ['+', '-', '*', '/'];
    if (operadoresValidos.includes(operador)) {
        return operador;
    } else {
        console.log('Operador inválido. Por favor, escolha um operador válido (+, -, *, /).');
    }
}
    
rl.question('Digite um número: ', (numero1) => {
   const numeroValidado1  = validarNumeroInformado(numero1);
   if(numeroValidado1 !== null) {
       rl.question('Digite outro número: ', (numero2) => {
           const numeroValidado2 = validarNumeroInformado(numero2);
            if(numeroValidado2 !== null) {
                rl.question('Escolha uma operação (+, -, *, /): ', (operacao) => {
                    const operadorValidado = validarOperador(operacao);
                    if (!operadorValidado) {
                        rl.close();
                        return;
                    }
                    let resultado;  
                    switch (operadorValidado) {
                        case '+':
                            resultado = numeroValidado1 + numeroValidado2;
                            break;
                        case '-':
                            resultado = numeroValidado1 - numeroValidado2;
                            break;
                        case '*':
                            resultado = numeroValidado1 * numeroValidado2;
                            break;
                        case '/':
                            resultado = numeroValidado1 / numeroValidado2;
                            break;
                        default:
                            console.log('Operação inválida.');
                    }
                    console.log(`Resultado: ${resultado}`);
                    rl.close();
                });
            } else {
                rl.close();
            }
       });
    } else {
        rl.close();
    }
});


   
