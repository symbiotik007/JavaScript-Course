

// for (let i = 0; i < 9; i++) {
//     if(i == 2){
//         continue;
//     }
// document.write(i + "<br>");
// }

// IN // MUESTRA POSICIÓN

// OF // MUESTRA valor de los elementos

//LABEL// forRancio: // Las labels funcionan para terminar todos los bucles y/o acciones que estan dentro de un for


// let animales = ["gato", "perro", "tiranosaurioi rex"];
// animales.tamano = "grande";

// for (animal in animales){
//     document.write(animal + "<br>");
// }

// document.write("<br>");

// for (animal of animales){
//     document.write(animal + "<br>");
// }

// document.write(animales.tamano)


//break: Significa detener la ejecución de un bucle y salirse de él. 
//continue: Sirve para detener la iteración actual y volver al principio del bucle para realizar otra iteración, si corresponde.


// time > 3:06:49

// array1 = ["maria","josefa","carola","luciee"];
// array2 = ["pepito","plutarco",array1,"josefina"]

// forRancio:
// for (let array in array2) {
//     if (array == 2){
//         for (let array of array1){            
//             continue forRancio;
//             document.write(array + "<br>")                             
//         }
//     } else {
//         document.write(array2[array] + "<br>")
//     }

// }

// function saludar(){respuesta = prompt("Que tal Óscar como va tu día");
// if (respuesta == "bien") {
//     alert("Me alegro pirobo")
// } else {
//     alert("Y a mi que me importa jajaj")
//     }
// }

// saludar()


// SALUDO AMABLE //

// function saludar(){
//     return "todo okay bro";
//     alert("Hola");    
// }

// let saludo = saludar();

// document.write(saludo)


// function suma(num1,num2){
//     let result = num1 + num2
//     document.write(result);
//     document.write("<br>");

// }

// suma(4,56)
// suma(4,548)
// suma(4,345)
// suma(4,38)
// suma(4,11)

//-------------------------------------

// function saludar(senor){
//     var frase = `Hey ${senor}! ¿Cómo te está yendo?`;
//     document.write(frase);
//     document.write("<br>")
// }

// saludar("ozkitar")

// document.write(frase)


//---------------------------------------------

// const saludar = function (senor){    
//         let frase = `Hey ${senor}! ¿Cómo te está yendo?`;
//         document.write(frase)
// }

// saludar("karlos")



// FUNCIONES FLECHA

const saludar = nombre => document.write("Hola men " + nombre);

saludar("ozkar")

