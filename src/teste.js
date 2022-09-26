const prompt = require('prompt-sync')();

// matematica
const notam1 = parseFloat(prompt('Nota em matemática do primeiro Trimestre: '))
const notam2 = parseFloat(prompt('Nota em matemática do Segundo Trimestre: '));
const notam3 = parseFloat(prompt('Nota em matemática do terceiro Trimestre: '));
    const media = (notam1 + notam2 + notam3) / 3;
console.log(media);
 
// português
const notap1 = parseFloat(prompt('Nota em Português do primeiro Trimestre: '));
const notap2 = parseFloat(prompt('Nota em Português do Segundo Trimestre: '));
const notap3 = parseFloat(prompt('Nota em Português do terceiro Trimestre: '));

// história
const notah1 = parseFloat(prompt('Nota em história primeiro Trimestre: '));
const notah2 = parseFloat(prompt('Nota em história Segundo Trimestre: '));
const notah3 = parseFloat(prompt('Nota em história terceiro Trimestre: '));

// inglês 
const notai1 = parseFloat(prompt('Nota em inglês primeiro Trimestre: '));
const notai2 = parseFloat(prompt('Nota em inglês Segundo Trimestre: '));
const notai3 = parseFloat(prompt('Nota em inglês terceiro Trimestre: '));

// geografia
const notag1 = parseFloat(prompt('Nota em geografia primeiro Trimestre: '));
const notag2 = parseFloat(prompt('Nota em geografia Segundo Trimestre: '));
const notag3 = parseFloat(prompt('Nota em geografia terceiro Trimestre: '));