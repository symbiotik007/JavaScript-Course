

// for (let i = 0; i < 9; i++) {
//     if(i == 2){
//         continue;
//     }
// document.write(i + "<br>");
// }

// IN // MUESTRA POSICIÓN

// OF // MUESTRA valor de los elementos

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

//LABEL// forRancio: // Las labels funcionan para terminar todos los bucles y/o acciones que estan dentro de un for

// time > 3:06:49

array1 = ["maria","josefa","carola","luciee"];
array2 = ["pepito","plutarco",array1,"josefina"]

forRancio:
for (let array in array2) {
    if (array == 2){
        for (let array of array1){            
            continue forRancio;
            document.write(array + "<br>")                             
        }
    } else {
        document.write(array2[array] + "<br>")
    }

}