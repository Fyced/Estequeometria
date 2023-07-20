var alto = 50;
var largo = 70;

var elementos = ["Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra","Sc","Ti","V",
                "Cr","Mn","Fe","Co","Ni","Cu","Zn","Pd","Ag","Cd","Pt","Au","Hg","Al","Ga",
                "In","Tl","Si","Ge","Sn","Pb","As","Sb","Bi","O","Se","Te","Po","F","Cl",
                "Br","I","At","H","N","P","B","C","S"];

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
    formulaReactivo[i] = prompt("Pon la formula nº" + i);
  }

//crearForm(n);
//crearTable(n);

guardarElementosReactivo();
}

function guardarElementosReactivo(){
  var numeros = ["0","1","2","3","4","5","6","7","8","9",""];
  var copiaFormulaReactivo = [];
  var comprobarSiElementoSeIncluye = [];

  //Se copia la formulaReactivo en otra variable porque tras analizarla se elimina su contenido y lo necesitamos luego
  for(let i = 0; i<formulaReactivo.length; i++){
    copiaFormulaReactivo.push(formulaReactivo[i]);
  }


	   //Guardar los elementos que se usan en las formulas quimicas
  for(let e = 0; e < formulaReactivo.length; e++){
    for(let i = 0; i < elementos.length; i++){
      if(formulaReactivo[e].includes(elementos[i])==true){
        formulaReactivo[e] = formulaReactivo[e].replace(elementos[i],"");
        elementosFormulaReactivo.push(elementos[i]);
      }
    }
  }

  //Se crean todas las combinaciones de elementos que hay y numeros
  for(let e = 0; e<elementosFormulaReactivo.length; e++){
    for(let i = 0; i<numeros.length; i++){
      comprobarSiElementoSeIncluye.push(elementosFormulaReactivo[e] + numeros[i]);
    }
  }

	   //Bucle para aumentar numeroElementos dependiendo de los elementos que hayan en la formula. Se usa luego en otra funcion
     //Ver para que funciona
  /*for(let i = 0; i<elementosFormulaReactivo.length; i++){
  numeroElementosReactivo.push(1);
}*/

    //Bucle para ver cuantas veces se repiten los elementos dentro de la misma formula.
  for(let e = 0; e<copiaFormulaReactivo.length; e++){
  for(let i = 0; i<comprobarSiElementoSeIncluye.length; i++){
  if(copiaFormulaReactivo[e].includes(comprobarSiElementoSeIncluye[i])==true){
  numeroElementosReactivoFormula.push(comprobarSiElementoSeIncluye[i]);
  copiaFormulaReactivo[e] = copiaFormulaReactivo[e].replace(comprobarSiElementoSeIncluye[i],"");
}
  }
}

verSiSeRepitenReactivos();
}

	//Funcion que comprueba si se repiten los elementos
function verSiSeRepitenReactivos(){
for(let i = 0; i<elementosFormulaReactivo.length; i++){
  var n = 1;
for(let e = 0; e<elementosFormulaReactivo.length; e++){
if(i!=e){
if(elementosFormulaReactivo[i]==elementosFormulaReactivo[e]){
elementosFormulaReactivo.splice(e,1);
n++;
numeroElementosReactivo.push(elementosFormulaReactivo[i]+n);
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

verSiSeRepitenProductos();
}

function verSiSeRepitenProductos(){
for(let i = 0; i<elementosFormulaProductos.length; i++){
  var n = 1;
for(let e = 0; e<elementosFormulaProductos.length; e++){
if(i!=e){
if(elementosFormulaProductos[i]==elementosFormulaProductos[e]){
elementosFormulaProductos.splice(e,1);
numeroElementosProductos.push(elementosFormulaProductos);
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
for(let i = 0; i<elementosFormulaReactivo.length; i++){
  console.log(elementosFormulaReactivo[i]);
}

console.log("Ver si se repiten");
for(let i = 0; i<numeroElementosReactivo.length; i++){
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

function crearForm(numero){
  var n = numero;
  for(let i = 0; i<n; i++){
    var form = document.createElement('form');
    form.id = 'form';

    var input = document.createElement('input');
    form.appendChild(input);

    var boton = document.createElement('button');
    boton.type = 'submit';
    boton.textContent = 'Submit';
    form.appendChild(boton);

    document.body.appendChild(form);

    document.forms['form'].onsubmit = formulaReactivo[i];
  }
}

//Funcion para crear el metodo en el que se recoge el input de la formula quimica
/*  ACABAR!!!
function crearTable(numero){
  var n = numero;

  var tabla = document.createElement('table');

  for(let e = 0; e<2; e++){
    var tr = document.createElement('tr');
    var th = [];

    for(let i = 0; i<n; i++){
      console.log('hola');
      th[i] =document.createElement('th');
      th[i].textContent = "Formula " + i;
      tr.appendChild(th[i]);
      tr.appendChild(tabla);
    }
  }
  document.body.appendChild(tabla);

}
*/

/*Errores
Si pones los mismos elementos en reactivos || excepciones LiFe, LiNa || ocurre con LiO, LiB.  CREO QUE YA ESTA SOLUCIONADO. HAY QUE VER EL PROBLEMA CON MAS PROFUNDIDAD
*/
