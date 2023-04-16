// Estrutura Condicional
/* 1-Declare um valor numérico;
Vamos analisar se esse número é ou não maior que 10:
a) Se for, vamos escrever na tela a seguinte frase: "Esse número é maior que 10";
b) Se não for, vamos escrever na tela a seguinte frase: "Esse número é menor que 10".*/
let num1 = 12;
if (num1 > 10) {
    console.log ("Esse número é maior que 10\n");
} else {
    console.log("Este número é  menor que 10 \n");
}

/*2-  Crie um programa que receba 2 números, calcule a soma deles e em seguida verifique se essa soma é maior que 100. 
a) Caso seja maior que 100, retorne "Esse número é maior que 100"; 
b) Caso seja igual a 100, retorne "Bingo! Deu 100!";
c) Caso seja menor que 100, retorne "Esse número é menor que 100".*/
let n1 = 11;
    n2 = 89;
    soma= n1 + n2
if(soma > 100) {
    console.log("Esse número é maior que 100");
}else if (soma === 100){
    console.log ("Bingo! Deu 100!");
} else{
    console.log("Este número é menor que 100 ");
}
