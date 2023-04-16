/*1- Crie uma constante chamada meuNome e atribua a ela o seu nome.
Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de nascimento.
Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
Crie uma variável chamada profissão e atribua a ela a sua profissão.
Utilize o console.log para imprimir as constantes e variáveis que você criou.
Altere o valor da variável profissão para desenvolvedora e tente exibir no console novamente, observe o que acontece.*/
const meuNome = "Dianne",
    cidadeNatal= "Recife",
    anoDeNascimento = "30 de junho de 2001";
let profissão = "Desenvolvedora";
console.log(`Me chamo ${meuNome} nasci ${cidadeNatal} em ${anoDeNascimento} e atualmente estudo para ser ${profissão} `)
    profissão = "Programadora";
console.log(`Me chamo ${meuNome} nasci ${cidadeNatal} em ${anoDeNascimento} e atualmente estudo para ser ${profissão} \n`)

/* 2- Abaixo iremos ver algumas declarações de constantes e variáveis, observe se as declarações estão de acordo com a sintaxe do Javascript. Caso não esteja, corrija, deixando-a válida.*/ 
let algumNome = 'Marina';
var numero = 32; 
const idade = 40;
let profissao = 'desenvolvedor';

/* 3- Vamos fazer algumas operações simples. Queremos imprimir a área e perímetro de um retângulo, sabemos que a base do retângulo é 5 e a altura é 8.*/
const base = 5,
    altura = 8;
let area = base * altura,
    perimetro = 2*(base  + altura);
console.log(`A área do retângulo com base ${base} e altura ${altura} é ${area} \n`)
console.log(`O perímetro de uma retângulo com base ${base} e altura ${altura} é ${perimetro} \n`)

/*5- Observe as variáveis criadas abaixo. Você tem o ano de nascimento da Shuri. Usando seus conhecimentos, com base no ano de nascimento, calcule a idade dela e exiba da seguinte forma no console*/
const nomeShuri = "Shuri";
const anoDeNascimentoShuri = 1988;
const profissaoShuri = "Super Heroína";
const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";
let anoAtual = 2023;
let idadeShuri = anoAtual - anoDeNascimentoShuri ;
console.log (`${nomeShuri} e tem atualmente ${idadeShuri} anos\n`)

/*6- Crie uma variável chamada diaDaSemana que receba a string "quarta-feira". Utilizando if/else, implemente condicionais para que:
a. Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", o console.log imprima a seguinte mensagem:
Oba, mais um dia de aprendizado em JavaScript :D
b. Se for algum dia de fim de semana:
“FINALMENTE, descanso merecido”.*/
let diaDaSemana = "quarta-feira";
if(diaDaSemana === "segunda-feira" || diaDaSemana === "terça-feira" || diaDaSemana === "quarta-feira" || diaDaSemana === "quinta-feira" || diaDaSemana === "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado em JavaScript :D \n");
} else {
    console.log("Finalmente, descanso merecido\n");
}

/*7- Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida. Quando o pedido vier certo, seu programa deve imprima a mensagem: "Muito grata pelo almoço!" caso não seja o pedido, imprima: "Acho que houve um engano com meu pedido".*/
let prato ="feijoada",
    bebida = "refrigerante";
if (prato === "feijoada" &&  bebida === "refrigerante"){
    console.log ("Muito grata pelo almoço!\n");
} else {
    console.log ("Acho que houve um engano com meu pedido. \n");
}




