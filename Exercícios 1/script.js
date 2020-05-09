//1. leia um numero e verifique se ele é par ou impar utilizando MOD (% 2 === 0)
/*Primeira coisa que deve fazer é quebrar o exercicios como se fosse algoritmo parte a parte
para ficar mais facil de resolver o raciocino lógico.

-leia um numero: prompt
- armazeno o numero num variavel
- fazer condição para verificar se é par (if)
- fazer condição para verificar se é impar (else)*/

let numero = prompt('digite um numero qualquer');
/*console.log('numera',numero)*/

if(numero % 2 !== 0){
    alert('par');
}
else{
    alert('impar');
}

/*2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
    
    - ler primeira nota (salvando)
- ler segunda nota (salvando)
- calcular a média: (soma todos os valores/2)
- condicao 1 : média >= 7 'Aprovado'
- condicao 2 : média <7 'Reprovado'
- condicao 3 : média =10 'Aprovado com Distincao'*/

/*let nota1 = parseFloat(prompt('digite sua primeira nota!'));
let nota2 = parseFloat(prompt('digite sua segunda nota!'));

let media = ((nota1 + nota2)/2)

console.log(media)
console.log(nota1)
console.log(nota2)

if(media ===10){

  alert("Aprovado");
{else if(media >= 7)}
  alert("Reprovado");
  {else if(media < 7)}
  alert("Aprovada com Distinção");
{else if(media ===10 ) }

}*/


/*3. Faça um script que leia três números inteiros e mostre o maior deles.
- ler 3 valores
- condicao qual é o maior deles*/

/*let numero1 = parseInt(prompt('digite o primeiro numero:'));
let numero2 = parseInt(prompt('digite o segundo numero:'));
let numero3 = parseInt(prompt('digite o terceiro numero:'));

let total = ""; 
if (numero1 === numero2 && numero2 === numero3) {
    console.log(' os numeros sao iguais');

}else if (numero1 > numero2 && numero1 > numero3) {
        total = `numero 1 é maior ${numero1}`;
        console.log(total);        
         
} else if(numero2 > numero1 && numero2 > numero3) {
         console.log('numero 2 é maior ' + numero2);
         
} else{
    console.log('numero 3 é maior' , numero3);
}*/
 /*  colocar mais uma condicao para exibir mensagem
 se todos os numeros forem iguais */

 /*4.Fazer duas variáveis trocarem de valores entre si - Variável Auxiliar
x=10
y=20

let x = parseInt(prompt('valor 1'))
let y = parseInt(prompt('valor 2'))
let z = 0;
console.log(`valores iniciais ${x}, ${y}, ${z}`)

z = x; //salvando valor inicial do x    - z = 10
x = y; //igualei x e y    - x=30 y=30
y = z; //pegar o valor inicial do x que foi salvo no z y=10 e x=30
z = 0;

console.log(`valores finais ${x}, ${y}, ${z}`)*/

//Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.
