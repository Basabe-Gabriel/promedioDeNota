let nota, promedio, suma, contador: number;

contador = 0;
suma = 0;

while (contador <= 10) {
  nota = prompt("ingrese la nota");

  suma = suma + nota;
  contador = contador + 1;
}
promedio = suma / 10;

console.log("el promedio es" + promedio);
