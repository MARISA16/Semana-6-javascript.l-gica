let nomeDomes ="";
let mes = parseInt(prompt("digite o mes"));

switch (mes){
    case 1:
        nomeDomes ="janeiro";
        break
        case 2:
            nomeDomes = "Fevereiro";
            break
            nomeDomes = "Março";
            break
            case 3:
            nomeDomes = "Abril";
           break
           case 4:
          nomeDomes ="Maio";
          break
          case 5:
          nomeDomes ="Junho";
           break
          case 6:
         default:
         nomeDomes = "mês inválido";
}
alert(nomeDomes);

//3. Calcule o valor do salario do dev conforme valores abaixos.
// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario senior = salario base + 50% 

let salario = "";
const base = 2500;
const cargo = prompt("Digite o cargo");

switch(cargo){
        case "junior":
            salario = base*1.20;
            break;
        case "pleno":
            salario = base*1.35;
            break;
        case "senior":
            salario = base*1.50;
            break;
        }
        alert(salario)

        //Sobre Object
        //1. Crie um Objeto pessoa que receba as propriedades: nome, telefone, idade, altura e peso.
        let pessoa = {
               nome: "Rafael",
               telefone: "11 983858334",
               idade:3,
               altura: 1.15,
               peso:19,

            }
            alert(`${pessoa.nome}  ${pessoa.peso}`); 

        
//2. Crie um objeto animal que receba as propriedades: porte(pequeno, médio ou grande), especie, raça.
let animal = {
    porte: "pequeno",
    especie: "cachorro",
    raça: "Zwergspitz",
    
    
}
alert(`${animal.porte}  ${animal.raça}`)


//3. Crie um objeto curso que receba as propriedades: nome, período, professor(a).  */

 let curso = {
            nome: "front-end",
            período: "4 meses",
            professora: "bruna",

        }
        alert(`${curso.nome}  ${curso.professora}`); 

        /*Sobre o Array*/
        /*1. Crie uma lista (string), que contenha o nome de 10 alunas da reprograma.
Em seguida, verifique o tamanho, e qual aluna está na posição 5.

-Crie uma lista: let lista =[];
-Contenha 10 alunas : let lista:[Rafael] ou lista.push('Rafael')*/

let listaDeAlunas = [ "Viviane", "Liana", "Maria", "Debora", "Talita", "Clau", "Sara", "Ariane", "Marisa", "Ilza"];
console.log(listaDeAlunas[5]);


//2. Crie uma lista de matérias que contenha 6 matérias, e mostre qual matéria está na posição 4.

let listaDeMaterias = [];
listaDeMaterias.push("matematica", "UX", "historia da arte");
listaDeMaterias.push("ingles");
listaDeMaterias.push("historia");
listaDeMaterias.push("astrogeografia");

console.log(listaDeMaterias[4]);

//3. Crie uma lista de números fora de ordem e ordene-a utilizando o método .sort();

let numeros = [1, 23, 2];
console.log(numeros.sort());

//4. Crie uma lista vazia e verifique se o length == 0 (se a lista estiver vazia) 
//.push() inserindo algum valor dentro. Se o length for maior > 0 alert() mostrando o tamanho.

let lista = [];
console.log(lista, "valor inicial da lista");

if(lista.length === 0) {
    lista.push("oi");
    console.log(lista, "dentro do primeiro if");
} 
if (lista.length > 0) {
    console.log(lista.length, "dento do segundo if")
}
 else {
     alert(lista.length)
 }



