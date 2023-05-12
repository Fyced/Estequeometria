var alto = 50;
var largo = 70;

var elementos = ["H","Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Pd","Ag","Cd","Pt","Au","Hg","B","Al","Ga","In","Tl","C","Si","Ge","Sn","Pb","N","P","As","Sb","Bi","O","S","Se","Te","Po","F","Cl","Br","I","At"];

	//Variables Reactivos
var elementosFormulaReactivo = [];
var formulaReactivo = [];
	//Variable que te dice las veces que se repiten los elementos del reactivo
var numeroElementosReactivo = [];

	//Variables Productos
var elementosFormulaProductos = [];
var formulaProductos = [];
//Variable que te dice las veces que se repiten los elementos del producto
var numeroElementosProductos = [];

	//FUNCIONES REACTIVOS
function dibujarReactivos(numero){
  var n = numero;

//Método para captar las formulas quimicas, tiene que mejorarse después
  for(let i = 0; i<n;i++){
    formulaReactivo[i] = prompt("Pon la formula nº" + i);
  }

  guardarElementosReactivo();
}

function guardarElementosReactivo(){
	//Guardar los elementos que se usan en las formulas quimicas
  for(let e = 0; e < formulaReactivo.length; e++){
    for(let i = 0; i < elementos.length - 1; i++){
      if(formulaReactivo[e].includes(elementos[i])==true){
        elementosFormulaReactivo.push(elementos[i]);
      }
    }
  }

	//Bucle para aumentar numeroElementos dependiendo de los elementos que hayan en la formula
  for(let i = 0; i<elementosFormulaReactivo.length; i++){
  numeroElementosReactivo.push(1);
  }

calculosEstequiometricosReactivos();
}

	//Funcion que comprueba si se repiten los elementos
function calculosEstequiometricosReactivos(){
for(let i = 0; i<elementosFormulaReactivo.length; i++){
for(let e = 0; e<elementosFormulaReactivo.length; e++){
if(i!=e){
if(elementosFormulaReactivo[i]==elementosFormulaReactivo[e]){
elementosFormulaReactivo.splice(e,1);
numeroElementosReactivo.splice(e,1);
numeroElementosReactivo[i]++;
}
}
}
}
comprobar();
}


	//FUNCIONES PRODUCTOS
function dibujarProductos(numero){
var n = numero;
console.log("prueba");

	//Método para captar las formulas quimicas, tiene que mejorarse después
  for(let i = 0; i<n;i++){
    formulaProductos[i] = prompt("Pon la formula nº" + i);
  }

guardarElementosProductos();
}

function guardarElementosProductos(){
	//Guardar los elementos que se usan en las formulas quimicas
  for(let e = 0; e < formulaProductos.length; e++){
    for(let i = 0; i < elementos.length - 1; i++){
      if(formulaProductos[e].includes(elementos[i])==true){
        elementosFormulaProductos.push(elementos[i]);
      }
    }
  }

	//Bucle para aumentar numeroElementos dependiendo de los elementos que hayan en la formula
  for(let i = 0; i<elementosFormulaProductos.length; i++){
  numeroElementosProductos.push(1);
  }

calculosEstequiometricosProductos();
}

function calculosEstequiometricosProductos(){
for(let i = 0; i<elementosFormulaProductos.length; i++){
for(let e = 0; e<elementosFormulaProductos.length; e++){
if(i!=e){
if(elementosFormulaProductos[i]==elementosFormulaProductos[e]){
elementosFormulaProductos.splice(e,1);
numeroElementosProductos.splice(e,1);
numeroElementosProductos[i]++;
}
}
}
}
comprobarP();
}

	//FUNCIONES PARA COMPROBAR
function comprobar(){
console.log("Formulas quimicas");
for(let i = 0; i<formulaReactivo.length; i++){
  console.log(formulaReactivo[i]);
}
console.log("Elementos");
for(let i = 0; i<elementosFormulaReactivo.length - 1; i++){
  console.log(elementosFormulaReactivo[i]);
}

console.log("Ver si se repiten");
for(let i = 0; i<numeroElementosReactivo.length - 1; i++){
  console.log(numeroElementosReactivo[i]);
}
}

	//Comprobar productos
function comprobarP(){
console.log("Formulas quimicas");
for(let i = 0; i<formulaProductos.length; i++){
  console.log(formulaProductos[i]);
}
console.log("Elementos");
for(let i = 0; i<elementosFormulaProductos.length - 1; i++){
  console.log(elementosFormulaProductos[i]);
}

console.log("Ver si se repiten");
for(let i = 0; i<numeroElementosProductos.length - 1; i++){
  console.log(numeroElementosProductos[i]);
}
}

/*Errores
Si pones los mismos elementos en reactivos || excepciones LiFe, LiNa || ocurre con LiO, LiB

Si pones Na tmb detecta N, hay que verlo
*/
