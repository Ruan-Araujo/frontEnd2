import {somar} from './somar.js';
import {subtrair} from './subtrair.js';
import {multiplicar} from './multiplicar.js';
import {dividir} from './dividir.js';

let escolhaUserOpe = prompt('Digite a operação [somar, subtrair, multiplicar, dividir]: ');
let valorA = prompt('Digite o primeiro valor: ');
let valorB = prompt('Digite o segundo valor: ');

valorA = parseInt(valorA);
valorB = parseInt(valorB);

switch (escolhaUserOpe) {
    case 'somar':
        alert(somar(valorA, valorB));
        break;
    case 'subtrair':
        alert(subtrair(valorA, valorB));
    case 'multiplicar':
        alert(multiplicar(valorA, valorB));
    case 'dividir':
        alert(dividir(valorA, valorB));
    default:
        break;
}

