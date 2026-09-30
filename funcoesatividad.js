//1- Crie uma função que receba um número e retorne o dobro.
function dobro(valor){
    return valor * 2;
}
console.log(dobro(8))

//2- Crie uma função que receba um número e retorne o triplo.
function triplo(valor){
    return valor * 3;
}
console.log(triplo(9))

//3- Crie uma função que receba dois números e retorne a soma.
function soma(a, b){
    return a + b;
}
console.log(soma(3,5));

//4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicacao(a, b){
    return a * b;
}
console.log(multiplicacao(3,5));
//5- Crie uma função que receba um salário e calcule aumento de 10%. 
function aumentoSalario(salario){
    return salario + (salario * 0.10);
}
console.log(aumentoSalario(9000));

//6 - Crie uma função que imprima números de 1 até 10.
function ate10() {
    Array.from({length:10}, (_,i) => console.log(i+1));
}
ate10();
//7- Crie uma função que some todos os números até 10.
function somarAte10() {
    const numeros = Array.from({length:10}, (_,i) => i+1);
    const total = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
    console.log(total);
}
somarAte10();