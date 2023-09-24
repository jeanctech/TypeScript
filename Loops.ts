// Loops en TypeScript

// Loops For

// Version - 0

var mensaje:String = "Hola Mundo";

var i:number = 0;

for(var i:number = 0; i < 5; i++){
    console.log(mensaje)
}

var i:number = 0;

i < 5;

i++;

// Version - 1

var dias:array = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(var i=0; i<7; i++) {
  console.log(dias[i]);
}

// Examples

var numero:string = prompt("Introduce un número y se mostrará su factorial");
var resultado:number = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
console.log(resultado);

// Loops For In

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (i in dias) {
  console.log(dias[1])
}