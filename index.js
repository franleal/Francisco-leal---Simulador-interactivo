let nota;
let sumaNota = 0;
let promedio;
let n = 5;
let mayor = 0;
let menor = 999999;
let mayorNota = 0;
let notaMenor = 0;

function promedionotas(sumaNota,n){
    promedioFuncion = sumaNota / n;
    return promedioFuncion;
}


   
function notamenor(nota, menor){
    if (nota < menor){
        menor = nota;
    }
    return menor;
}
    
    


function notamayor(nota, mayor){
    if (nota > mayor){
        mayor = nota;
    }
    return mayor;
}



for(let i = 0;i < n;i++) {
    nota = parseInt(prompt("ingrese su nota"));

    while(nota < 1 || nota > 10) {
        alert("su nota no es correcta, ingrese una nota de 1 a 10");
        nota=parseInt(prompt("ingrese su nota nuevamente"));
    }

    sumaNota = sumaNota + nota;
   
    menor = notamenor(menor,nota);
    mayor = notamayor(mayor, nota);

}

promedio = promedionotas(sumaNota,n);

alert("tu promedio es : " + promedio);
alert("su nota mayor en el semestre fue un: " + mayor);
alert("su nota menor en el semestre fue un: " + menor)

