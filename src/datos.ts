// //Primer programa clase 1 Carla
// let h: number = 5;
// let l: number = 10;
// let minombre: string = "";
// let area: number = h * l;
// const gato: boolean = true;
// minombre = "Ivan";
// console.log("El area es: " + area);
// console.log("Mi nombre es: " + minombre);
// console.log("gato: " gato)
// alert("El area es: " + area);
// let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
// let dato = <HTMLInputElement>document.getElementById("dato");
// btnEnviar.addEventListener("click", () => {
//   //acá va nuestro codigo.
//   console.log("dato " + dato.Value);
//   console.log("rotulo " + rotulo.nodeValue);
// });
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato = <HTMLInputElement>document.getElementById("dato");
let nombre: string;

btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código
  console.log("dato:", dato.value);
});
//prueba de cambio
