const prompt = require('prompt-sync')();

const boletim = [];
const português = 3

for (let i= 0; i<3; i++){
    boletim[i] = [];
        const nota = parseFloat(prompt('Digite sua nota de Português: '));
        boletim [i] = Number (nota);
    }
    const media = Math.round((boletim[0] + boletim[1] + boletim [2]) / 3);
        console.log(`Sua média total em Português >> ${media} <<`);

