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

function perimetroTriangulo(lado1,lado2,base){
    return (lado1 + lado2 + base);
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
    alert("El perímetro del cuadrado es: " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert("El área del cuadrado es: " + area);
}

//Funcion para calcular el area y perimetro de un triáungulo desde HTML

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const valor1 = parseInt(lado1.value);
    const lado2 = document.getElementById("Lado2");
    const valor2 = parseInt(lado2.value);
    const base = document.getElementById("Base");
    const valor3 = parseInt(base.value);

    const perimetro = perimetroTriangulo(valor1,valor2,valor3);
    alert("El perímetro del triángulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    
    const base = document.getElementById("Base");
    const valor3 = base.value;
    const altura = document.getElementById("Altura");
    const valorBase = altura.value;

    const area = areaTriangulo(valor3, valorBase);
    alert("El área del triángulo es:" +  area);
}

//Funcion para calcular el área y perímetro de un ciruclo

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const valor1 = radio.value;

    const perimetro = perimetroCirculo(valor1);
    alert("El perímetro del círculo es: " + perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const valor1 = radio.value;

    const area = areaCirculo(valor1);
    alert("El área del círculo es: " + area + " cm^2");
}