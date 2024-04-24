// calculadora de área

// Área do Quadrado

function calcquadrado() {
    let lado = parseFloat(prompt("Digite o valor de um dos lados do quadrado."));
    let calculo1 = lado * lado;

    document.getElementById("resultpag").innerHTML = "A área do Quadrado é: " + calculo1;
}

// Área do Cubo
function calccubo() {
    let lado = parseFloat(prompt("Digite o valor de um dos lados do cubo: "));
    let calculo2 = 6 * (lado * lado);
  
    document.getElementById("resultpag2").innerHTML = "A area do Cubo é: " + calculo2;
}

// Área do retangulo
function calcretangulo() {
    let base = parseFloat(prompt("Digite o valor da base: "));
    let altura = parseFloat(prompt("Digite o valor da altura: "));
    let calculo2 = base * altura;
  
    document.getElementById("resultpag3").innerHTML = "A area do Retangulo é: " + calculo2;
}