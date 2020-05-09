//Transforme os ifs abaixo em if ternario (condicao ? exp1: exp2 ).

if(a > 0) {
resultado = "valor maior que 0";
} else {
resultado = "valor = 0";
}

if(sexo === 'feminino') {
alert('seja bem vinda');
} else {
alert('seja bem vindo')
}

/*3. if (isIphone === true) {
  os = "iOS";
} else {
  os = "Android";
}*/

//Resolução 1
let isIphone = true;
let os ="";
 (isIphone === true)?  os ="ios": os = "android";
//console.log(os);
os = (isIphone)? "ios" : "Android";

//console.log(os);

//Resolução2
let isIphone = false;
let os = "";

(isIphone === true) ? os = "iOS" : os = "Android";

console.log(os);

//os = (isIphone) ? "iOS" : "Android";


/*4. if(salario < 5000) {
	cargo = "junior"
} else {
	cargo = "pleno"
}*/

let salario = prompt('digite o salario');
//let cargo = "";
(salario < 5000) ? cargo="junior": cargo="pleno";

//let cargo = (salario < 5000) ? "junior": "pleno";
console.log(cargo)

