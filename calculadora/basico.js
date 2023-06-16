function calcularIMC() {
    


var peso = (document.getElementById("peso").value);

var altura = parseFloat(document.getElementById("altura").value);


var IMC = peso / (altura*altura).toFixed(2);
var resultado = "";
 
    if (IMC <=18.5) {
        resultado = "Você está abaixo do peso"; 
    }

    else if (IMC>18.5 && IMC<=24.9) {
        resultado = "Você está no peso ideal";
    }

    else if (IMC>=25.0 && IMC<=29.9) {
        resultado = "Você está acima do peso";
    }
    
    else if (IMC>=30.0 && IMC<=34.9) {
        resultado = "Você está com obesidade grau 1";
    }

    else if (IMC>=35.0 && IMC<=39.9) {
        resultado = "Você está com obesidade grau 2";
    }

    else if (IMC>=40.0) {
        resultado = "Você está com obesidade grau 3";
    }


   
    document.getElementById("resultadoimc").innerHTML = resultado + " (IMC: " + IMC + ")";
 
    console.log(resultado)
}