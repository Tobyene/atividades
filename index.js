"use strict";
//Questão 1 :  O comando for é usado para repetir um bloco de código envolvido por chaves.
//Questão 2 : utilizando (let i = nº de repetições). exemplo: For (let (i = 10))..
//Questão 3: O loop termina quando a condição de controle se torna falsa ou quando um comando de saída (como break) é encontrado. Exemplo: For (let i = 10; i<10; i++){
// if (i == 5) {
// break;
// };
//};
//Questão 4: O valor da variável de controle é atualizado explicitamente usando a expressão de atualização fornecida na estrutura do for (por exemplo, `i++` )
//Questão 5
for (let index = 0; index < 10; index++) {
    console.log("Pior do que tá não fica");
}
;
//Questão 6
for (let index = 0; index < 10; index++) {
    console.log(index);
}
;
//questão 7
for (let index = 0; index < 10; index++) {
    if (index == 5) {
        break;
    }
    console.log(index);
}
;
//questão 8
for (let index = 0; index < 10; index++) {
    if (index == 5) {
        continue;
    }
    console.log(index);
}
;
//questão 9
let nomes = ['João', 'Paulo', 'Augusto', 'Fernando', 'Matheus'];
for (let n of nomes) {
    console.log(n);
}
;
//Questão 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
;
//Questão 11
for (let i = 10; i >= 10; i--) {
    console.log(i);
}
;
//Questão 12
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("A soma dos números de 1 a 100 é:", soma);
//Questão 13
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
;
//Questão 14
let produto = 0;
for (let i = 1; i <= 5; i++) {
    produto *= i;
}
console.log("o produto listados de 1 a 5 são:", produto);
//Questão 15
const numero = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
;
//Questão 16
function obterNota(mensagem) {
    let nota;
    do {
        nota = parseFloat(prompt(mensagem));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}
;
let notas = [];
for (let i = 1; i <= 5; i++) {
    notas.push(obterNota(`Digite a nota ${i} (0 a 10):`));
}
;
let somatorio = notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / notas.length;
alert(`A média das 5 notas é: ${media.toFixed(2)}`);
//Questão 17
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
;
//Questão 18
let maior = -Infinity;
let menor = Infinity;
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    if (!isNaN(numero)) {
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
    else {
        alert("Entrada inválida. Digite um número.");
        i--;
    }
}
;
alert(`O maior valor digitado é: ${maior}`);
alert(`O menor valor digitado é: ${menor}`);
//Questão 19
for (let i = 1; i <= 100; i++) {
    produto *= i;
}
console.log("os numeros ímpares listados de 1 a 100 são:");
//Questão 20
function getNota(index) {
    const nota = parseFloat(prompt(`Digite a nota do aluno ${index + 1}:`) || "0");
    return isNaN(nota) ? 0 : nota;
}
;
let numAprovados = 0;
for (let i = 0; i < 5; i++) {
    const nota = getNota(i);
    if (nota >= 7) {
        numAprovados++;
    }
}
;
alert(`Quantidade de alunos aprovados: ${numAprovados}`);
//Questão 21
//Questão 22
const number = 20;
for (let index = 0; index < number; index++) {
    if (numero % index === 0) {
        console.log(index);
    }
}
//Questão 23
function calcularMediaAlturas() {
    let somaAlturas = 0;
    const numeroPessoas = 5;
    for (let i = 0; i < numeroPessoas; i++) {
        const altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} (em metros):`) || "0");
        somaAlturas += altura;
    }
    const mediaAltura = somaAlturas / numeroPessoas;
    console.log(`A média das alturas é: ${mediaAltura.toFixed(2)} metros`);
}
calcularMediaAlturas();
//Questão 24
function fizzBuzz() {
    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (numero % 3 === 0) {
            console.log("Fizz");
        }
        else if (numero % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(numero);
        }
    }
}
fizzBuzz();
//Questão 25
function somaDigitosPares() {
    const numero = parseInt(prompt("Digite um número inteiro:") || "0", 10);
    let somaDigitosPares = 0;
    for (const digito of numero.toString()) {
        const valorDigito = parseInt(digito, 10);
        if (valorDigito % 2 === 0) {
            somaDigitosPares += valorDigito;
        }
    }
    console.log(`A soma dos dígitos pares é: ${somaDigitosPares}`);
}
somaDigitosPares();
//Questão 26
function inverterNumero() {
    const numero = prompt("Digite um número inteiro:") || "";
    const numeroInvertido = numero.split("").reverse().join("");
    console.log(`O número invertido é: ${numeroInvertido}`);
}
inverterNumero();
