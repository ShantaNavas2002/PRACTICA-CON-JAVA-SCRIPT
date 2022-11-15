
 // ejercicio 1
 function convertirGradosCentigradosAGradosFahrenheint(gradoscel)
 {      var result = document.getElementById("resultado")
        var f=0
f =gradoscel*9/5
f = f+32

if (f>=98.6 && f<212){result.innerHTML = "<p1>Temperatura del cuerpo humano:" + f + "</p>"}
    else
 if (f>=212){result.innerHTML = "<p1>Punto de ebullicion del agua:" + f + "</p>"}
    else
if (f>=77 && f<98.6){result.innerHTML = "<p1>Temperatura ambiente:" + f + "</p>"}
    else
if (f>=32 && f<77){result.innerHTML = "<p1>Punto de congelación del agua:" + f + "</p>"}
    else
if (f>= -459.58 && f<32){result.innerHTML = "<p1>Cero absoluto:" + f + "</p>"}
}
// ejercicio 2
function calcularporcentajes(n)
{      
    var result = document.getElementById("porcentaje")
var numF= 0 
if (n<500) {numF=n+n/2 
result.innerHTML = "<p1> El numero ingresado es " + n + " el incremento es " + numF + "</p1>"} else
if (n>=500){numF= n-n*7/100
 result.innerHTML = "<p1> El numero ingresado es " + n + " la disminución es " + numF + "</p1>"}
}
 
// ejercicio 3
function generarTablaHTML()
{
var f, c;
var filas = document.getElementById("filas").value;
var colum = document.getElementById("colum").value;
var res = filas * colum;

document.write("<table border>");

for (f = 0; f < filas; f++){
    document.write("<tr>");
        for (c = 0; c < colum; c++){
            document.write("<td>");
            document.write(tabla);
            tabla --;
            document.write("</td>");
        }
        document.write("</tr>");
}
document.write("</table>");
}