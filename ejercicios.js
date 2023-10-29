//ejercicio 1
/*alert("holaaa");

let numeroEntero = prompt("ingrese un numero entero");
console.log(numeroEntero);
let resultado = numeroEntero ** 2;
console.log(resultado);

let valor1 = 20;
let valor = 20;
let resultado1 = valor !== valor1;
document.write(resultado1);
//let dineroRoberto = prompt("roberto" + " " + "ingresa cuanto dinero tienes");
//let dineroPedro = prompt("pedro" + " " + "ingresa cuanto dinero tienes");
let dineroCofla = prompt("cofla" + " " + "ingresa cuanto dinero tienes");
let helado = 600;
let helado1 = 1000;
let helado2 = 1600;
let helado3 = 1700;
let helado4 = 1800;
let helado5 = 2900;
if (dineroCofla >= 600 & dineroCofla < 1000) {
    console.log("comprate el helado de agua");
    let vuelto = dineroCofla - helado;
    console.log("tu vuelto es: " + " " + vuelto);
} else if (dineroCofla >= 1000 & dineroCofla < 1600) {
    console.log("comprate el helado de crema");
    let vuelto = dineroCofla - helado1;
    console.log("tu vuelto es: " + " " + vuelto);
} else if (dineroCofla >= 1600 & dineroCofla < 1700) {
    console.log("comprate el helado de bombon helado");
    let vuelto = dineroCofla - helado2;
    console.log("tu vuelto es: " + " " + vuelto);
} else if (dineroCofla >= 1700 & dineroCofla < 1800) {
    console.log("comprate el helado de bombon heladix");
    let vuelto = dineroCofla - helado3;
    console.log("tu vuelto es: " + " " + vuelto);
} else if (dineroCofla >= 1800 & dineroCofla < 2900) {
    console.log("comprate el helado de bombon helardo");
    let vuelto = dineroCofla - helado4;
    console.log("tu vuelto es: " + " " + vuelto);
} else if (dineroCofla >= 2900) {
    console.log("comprate el pote confitado o pote de 1/4");
    let vuelto = dineroCofla - helado5;
    console.log("tu vuelto es: " + " " + vuelto);
} else if (dineroCofla < 600) {
    console.log("no tienes dinero suficiente");
} else (dineroCofla > 2900)*/
// SE PUEDE COMPLETAR CON LOS DEMAS USUARIOS(3) YO LO HICE CON UNO SOLO
//recorriendo un array dentro de otro array
let array1 = ["rojo", "verde", "naranja"];
let array2 = ["azul", "celeste", array1];
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array]+"<br>");
    }
}