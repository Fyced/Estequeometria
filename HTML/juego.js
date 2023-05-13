//Probar añadiendo a cada elemento %d y que en elementosFormulaReactivo se guarde tmb el que sera numeroElementosReactivoFormula || Ej. input NaO2 --> Na, O2

var alto = 50;
var largo = 70;

var elementos = ["Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra","Sc","Ti","V",
                "Cr","Mn","Fe","Co","Ni","Cu","Zn","Pd","Ag","Cd","Pt","Au","Hg","Al","Ga",
                "In","Tl","C","Si","Ge","Sn","Pb","As","Sb","Bi","O","Se","Te","Po",
                "F","Cl","Br","I","At","H","N","P","B","S"];

	//Variables Reactivos
var elementosFormulaReactivo = [];
var formulaReactivo = [];
	//Variable que te dice las veces que se repiten los elementos del reactivo en diferentes formulas
var numeroElementosReactivo = [];
  //Variable que te dice las veces que se repiten los elementos del reactivo en la misma formulas
var numeroElementosReactivoFormula = [];


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
    formulaReactivo[i] = prompt("Pon la formula n." + i);
  }

  guardarElementosReactivo();
}

function guardarElementosReactivo(){
  var numeros = [0,1,2,3,4,5,6,7,8,9];

	   //Guardar los elementos que se usan en las formulas quimicas
  for(let e = 0; e < formulaReactivo.length; e++){
    for(let i = 0; i < elementos.length; i++){
      if(formulaReactivo[e].includes(elementos[i])==true){
        elementosFormulaReactivo.push(elementos[i]);
      }
    }
  }

	   //Bucle para aumentar numeroElementos dependiendo de los elementos que hayan en la formula
  for(let i = 0; i<elementosFormulaReactivo.length; i++){
  numeroElementosReactivo.push(1);
  }

    //Bucle para ver cuantas veces se repiten los elementos dentro de la misma formula
  for(let e = 0; e<formulaReactivo.length; e++){
  for(let i = 0; i<numeros.length; i++){
  if(formulaReactivo[e].includes(numeros[i])==true){
  numeroElementosReactivoFormula.push(numeros[i]);
} else {
  numeroElementosReactivoFormula.push(1);
}
  }
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

console.log("Veces que se repiten los elementos en la formula")
for(let i = 0; i<numeroElementosReactivoFormula.length;i++){
  console.log(numeroElementosReactivoFormula[i]);
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

Se ponen 1 de mas al ver las veces que se repiten los elementos en la formula
*/

