/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */

function evenNumber(num) {
  let result;

  if (num % 2 === 0) {
    result = "par";
  } else {
    result = "impar";
  }
  console.log(`el número ${num} es ${result}`);
}

// evenNumber(95);
// evenNumber(8);
// evenNumber(3);

// console.log("=========================================");

/* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
y si ninguno lo es, indicar por consola que son iguales. */

function wichIsGreater(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log("Ambos números son iguales");
  }
}

// wichIsGreater(9, 14);
// wichIsGreater(78, 51);
// wichIsGreater(123, 123);

// console.log("=========================================");

/* 3- Crear una función que reciba un número por parámetro 
e indique en consola si ese número es múltiplo de 5. */

function multiploDe5(num) {
  if (num % 5 === 0) {
    console.log("El número " + num + " es múltiplo de 5");
  } else {
    console.log("El número " + num + " no es múltiplo de 5");
  }
}

// multiploDe5(55);
// multiploDe5(34);
// multiploDe5(1247);
// multiploDe5(565);

// console.log("=========================================");

/* 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números
desde el 0 hasta llegar a ese número. */

function printNumberUpToN(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

// printNumberUpToN(3);
// printNumberUpToN(12);
// printNumberUpToN(7);

// console.log("=========================================");

/* 5 - Crear una función que reciba una palabra y un número por parámetro 
e imprima por consola  esa palabra la cantidad correspondiente al número indicado. */

function imprimirPalabra(palabra, num) {
  for (let i = 0; i < num; i++) {
    console.log(palabra);
  }
}

// imprimirPalabra("Solid Snake", 5);
// imprimirPalabra("Naked Snake", 3);
// imprimirPalabra("Big Boss", 7);

// console.log("=========================================");

/* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese
array. */

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const miTop5Nintendero = [
  "Zelda: Ocarina of Time",
  "Zelda: Twilight Princess",
  "Super Mario Bross",
  "Mario 3D Land",
  "Metroid Prime",
];

// imprimirArray(miTop5Nintendero);

// console.log("=========================================");

/* 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de 
ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice
de un array es "0". */

function todosMenos5(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[4]) {
      continue;
    }
    console.log(array[i]);
  }
}

const hastaDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// todosMenos5(hastaDiez);

// console.log("=========================================");

/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada 
número del array multiplicado por el número pasado por parámetro.*/

function multiplicarArray(array, num) {
  let resultado;

  for (let i = 0; i < array.length; i++) {
    console.log(`El número a itinerar es ${array[i]}`);
    console.log(`${array[i]} se multiplicara por ${num}`);
    resultado = array[i] * num;
    console.log(`El resultado de la operacion es: ${resultado}`);
    console.log("==========");
  }
}

const de5a15 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// multiplicarArray(de5a15, 10);

// definir la funcion
// imprimir por consola cada nunmero del array
// multiplicar cada numero del array por el parametro dado
