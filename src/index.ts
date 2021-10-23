let nota: number = 0;
let promedio: number = 0;
let suma: number = 0;
let contador: number = 1;

while (contador <= 10) {
  //nota = Number (prompt("ingrese la nota"));

  suma = suma + nota;

  contador = contador + 1;
}
promedio = suma / 10;

console.log("el promedio es: " + promedio);
console.log("la suma es: " + suma);
