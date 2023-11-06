/*Ejercicios nivel intermedio
1-Escribe una función que determine si un número es primo o no.*/

function esPrimo(numero) {
    if (numero <= 1) {
      return false; // Los números menores o iguales a 1 no son primos
    }
  
    for (let i = 2; i * i <= numero; i++) {
      if (numero % i === 0) {
        return false; // Si es divisible por algún número entre 2 y (numero), no es primo
      }
    }
  
    return true; // Si no se encontraron divisores, el número es primo
  }
  
  // Ejemplo 
  let numero = 17;
  if (esPrimo(numero)) {
    console.log(numero + " es primo.");
  } else {
    console.log(numero + " no es primo.");
  }
  
 /* 3-Suma de números en un rango: Escribe una función que calcule la suma de todos
los números en un rango dado (por ejemplo, de a a b).*/
  
 function sumaEnRango(a, b) {    
    let suma = 0;
    for (let i = a; i <= b; i++) {
      suma += i;
    }
    return suma;
  }
  
  // Ejemplo 
  let a = 1;
  let b = 10;
  let resultado = sumaEnRango(a, b);
  console.log(`La suma de los números en el rango de ${a} a ${b} es: ${resultado}`);
  
  /*4-Contar vocales: Crea una función que cuente el número de vocales en una cadena
de texto.*/

function contarVocales(cadena) {
 
    let conteoVocales = 0;
    
    for (let i = 0; i < cadena.length; i++) {
      let caracter = cadena[i];
      
      // Verifica si el caracter actual es una vocal
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        conteoVocales++;
      }
    }
    
    return conteoVocales;
  }
  
  // Ejemplo 
  let texto = "Hola mundo!";
  let vocales = contarVocales(texto);
  console.log(`El número de vocales en la cadena es: ${vocales}`);
  
 /* 6-Crea una función que invierta una cadena de texto sin usar reverse()*/

 function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
  }
  
  // Ejemplo 
  let cadena = "Hola mundo!";
  let textoInvertido = invertirCadena(cadena);
  console.log(textoInvertido);
  
