/* let frutas = ["camandula","fresa","banana","mango","mangostino","physalis","pera"];

document.write(frutas[5]) */

let pc1 = {
    nombre: "CrackMaster2022",
    procesador: "Intel Core i7 de 10th Generacion",
    ram: "16GB",
    almacenamiento: "2TB"    
};

let nombre = pc1["nombre"];
let core = pc1["procesador"];
let ram = pc1["ram"];
let gigas = pc1["almacenamiento"];

frase = `el nombre de mi pc es: ${nombre} <br> 
         el procesador es: ${core} <br>
         la memoria ram es: ${ram} <br>
         el almacenamiento de mi compu es: ${gigas}`;

document.write(frase)