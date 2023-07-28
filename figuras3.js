//Funcion Cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado){
    return lado * lado;
}

areaCuadrado();

//Funcion Triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//funcion Circulo

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//funciones para interactuar con el HTML


//Funcion para calcular el area y perimetro de un cuadrado desde HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert(area);
}

//Funcion para calcular el area y perimetro de un triáungulo desde HTML

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");
}