var elementos = ["H","Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Pd","Ag","Cd","Pt","Au","Hg","B","Al","Ga","In"];
var elementosFormula = [];
var formulaReactivo = [];
var formulaProducto = [];

function dibujarReactivos(numero){
  var n = numero;

  var alto = 50;
  var largo = 70;

  //Método para ver si funciona, tiene que mejorarse después
  for(let i = 0; i<n;i++){
    formulaReactivo[i] = prompt("Pon la formula nº" + i);
  }

  guardarElementos();
}

function guardarElementos(){
  for(let e = 0; e < formulaReactivo.length; e++){
    for(let i = 0; i < elementos.length - 1; i++){
      if(formulaReactivo[e].includes(elementos[i])==true){
        elementosFormula.push(elementos[i]);
      }
    }
  }

//Comprobación
/*for(let i = 0; i < elementosFormula.length; i++){
  console.log(elementosFormula[i]);
}*/

calculosEstequiometricos();
}

//Hacer if(elementosFormula[i]=elementosFormula[e]) para que compruebe si se repiten
function calculosEstequiometricos(){
for(let i = 0; i<elementosFormula; i++){
for
}
}

