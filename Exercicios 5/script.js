//1. Faca um loop que mostre 15 vezes uma mensagem ("Ola Reprograma")
 let mensagem =("Olá Reprograma");
for( let i = 0; i < 15 ; i++) {
    console.log(mensagem)
}



/*2. Criem array de string, percorram (for of) exibindo cada texto do array.
3. Criem um array de objetos e percorra (for of) mostrando apenas uma propriedade.
[
{nome: "",
idade:0
},
{nome: "",
idade: 1
}
]
x console.log(x.propriedade);

let mae = {

    nome:"Marisa"
    idade: 27
    altura:59

};

let mae = {
    nome:"Rafael"
    idade:
    altura:40
}

for(let x of mae){
    console.log(x.altura)
}*/
  




//4. Um loop que leia (prompt) o nome de 5 pessoas.

//Resolução1 
for(let cont =1; cont <=5; cont++) {
    prompt("digite seu nome")
}
//Resoluão2 salvar o nomes no Array

let listaDeNomes =[];
for(let cont = 1; cont<5; cont++){
    let nome = prompt("digite um nome");
    listaDeNomes.push(nome);

}
console.log(listaDeNomes)


//5. Faça um programa que receba 10 números, 
//calcule e imprima a soma dos números pares e a soma dos números ímpares.

// - for para ler 10 prompt 
let numero = 0, somaImpares = 0, somaPares = 0,  contPar = 0, contImpar = 0;

for (let num = 1; num <= 10; num++) {
    numero = parseInt(prompt(`Digite o número ${num} :`));

    if (numero % 2 === 0) {
        contPar++;
        somaPares += numero;
    }
    else {
        contImpar++; 
        somaImpares += numero;
    }
}

console.log(somaImpares, 'soma de numero impares');
console.log(somaPares, 'soma de numeros pares');
console.log(contPar, 'total de pares');
console.log(contImpar, 'total de impares');

/*6. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas.
Calcule e imprima:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres.*/
/*- For ate 10 => 3 prompts ( idade, peso, sexo);
- contar qtd mulheres
- qtd homens
- soma antes
- media da idade das homens (soma das idades)
- media dos pesos das mulheres (soma dos pesos)
media = soma / qtd */

/*let pessoa = 0, somaIdades = 0, somaPesos = 0, 

for (let pessoa = 3; pessoa <= 10; pessoa++) ;{
    pessoa = parseInt(prompt("Digite a sua idade ${idade} :"));

}
let idade ="";
let peso ="";
let sexo ="";
let contMulheres = 0;
let Homens = 0;
let mediaIdadeMulheres =0;
let mediaPesoHomens =0;

mulheres ={
    sexo ="feminino",
    peso ="",
    idade ="",

};
    homens ={
        sexo = "masculino",
        peso ="",
        idade ="",
        
    };*/

    //4 – Peça ao usuário para digitar 6 idades. 
//Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

let idade ="";
let contadorMaior = 0;
let contadorMenor = 0;

let somaMaior = 0
let somaMenor = 0

//i começa na posisão 1 e vai ver se a posisão

for(let i = 1; i <= 6; i++) {
idade = parseInt(prompt("digite a idade"))
//console.log(idade)

if(idade >= 18){
   // console.log("maior de idade")
   contadorMaior++
   console.log(contadorMaior)

   somaMaior =somaMaior + idade
   console.log(somaMaior)
   

    
}else{  
    contadorMenor++
    console.log(contadorMenor)
    somaMenor = somaMenor+ idade
    console.log(somaMenor)



}

}

//alert(`maior de idade ${contadorMaior} menor de idade${contadorMenor}`)
alert(`soma Maior ${somaMaior} e soma Menor ${somaMenor}`)


