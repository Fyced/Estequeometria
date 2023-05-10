var elementos = ["H","Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu"];
var elementosFormula = [];
var formulaReactivo = ["Na2CrO3","H2","Cu2"];
var formulaProducto = [];

function dibujarReactivos(numero){
var n = numero;

var alto = 50;
var largo = 70;

}

function guardarElementos(){
  for(let e = 0; e<=formulaReactivo.length; e++){
for(let i = 0; i<=elementos.length;i++){
  if(formulaReactivo[e].includes(elementos[i])==true){
    elementosFormula.push(elementos[i]);
  }
}
}
}
