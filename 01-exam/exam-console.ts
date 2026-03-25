import { Exam, Answer, Weight } from './exam.js';

// pesos das questões
const weight = new Weight([2, 2, 2, 2]);

// gabarito oficial
const gabarito = new Answer('Gabarito', ['A', 'B', 'C', 'D']);

// criando prova
const prova = new Exam(weight, gabarito);

// alunos
const a1 = new Answer('João', ['A', 'B', 'C', 'D']); // 10
const a2 = new Answer('Maria', ['A', 'B', 'D', 'D']); // 8
const a3 = new Answer('Pedro', ['A', 'C', 'C', 'A']); // 6

// adicionando
prova.add(a1);
prova.add(a2);
prova.add(a3);

// testes
console.log('Média:', prova.avg());
console.log('Menor nota:', prova.min());
console.log('Maior nota:', prova.max());
console.log('Notas < 6:', prova.lt(6));
console.log('Notas > 6:', prova.gt(6));
