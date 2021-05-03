var resultado;
var num1 = 0;
var num2 = 0;

function revealSuma() {
    cuadrosDeTexto = '<label>Primer número: </label>' + '<input type="text" id="n1Suma">';
    cuadrosDeTexto += '<label> Segundo número: </label>' + '<input type="text" id="n2Suma">';
    cuadrosDeTexto += '<button onclick="calcularSumaAPI()"> Calcular suma con API </button>';
    cuadrosDeTexto += '<br>' + '<label id="resultadoSuma">' + '<em> El resultado de la suma aparecerá aquí... </em>' + '</label>';

    document.getElementById("suma").innerHTML = cuadrosDeTexto;
}

function calcularSumaAPI() {
    var myNum1 = $('#n1Suma').val();
    var myNum2 = $('#n2Suma').val();
    var url = "http://localhost:8085/suma?num1=" + myNum1 + "&num2=" + myNum2;
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);
            $('#resultadoSuma').html( '<h2>' + json.myResultado + '</h2>');
        }
    );
}

function revealResta() {
    cuadrosDeTexto = '<label>Primer número: </label>' + '<input type="text" id="n1Resta">';
    cuadrosDeTexto += '<label> Segundo número: </label>' + '<input type="text" id="n2Resta">';
    cuadrosDeTexto += '<button onclick="calcularRestaAPI()"> Calcular resta con API </button>';
    cuadrosDeTexto += '<br>' + '<label id="resultadoResta">' + '<em> El resultado de la resta aparecerá aquí... </em>' + '</label>';

    document.getElementById("resta").innerHTML = cuadrosDeTexto;
}

function calcularRestaAPI() {
    var myNum1 = $('#n1Resta').val();
    var myNum2 = $('#n2Resta').val();
    var url = "http://localhost:8085/resta?num1=" + myNum1 + "&num2=" + myNum2;
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);
            $('#resultadoResta').html( '<h2>' + json.myResultado + '</h2>');
        }
    );
}

function revealMulti() {
    cuadrosDeTexto = '<label>Primer número: </label>' + '<input type="text" id="n1Multi">';
    cuadrosDeTexto += '<label> Segundo número: </label>' + '<input type="text" id="n2Multi">';
    cuadrosDeTexto += '<button onclick="calcularMultiAPI()"> Calcular multiplicación con API </button>';
    cuadrosDeTexto += '<br>' + '<label id="resultadoMulti">' + '<em> El resultado de la multiplicación aparecerá aquí... </em>' + '</label>';

    document.getElementById("multi").innerHTML = cuadrosDeTexto;
}

function calcularMultiAPI() {
    var myNum1 = $('#n1Multi').val();
    var myNum2 = $('#n2Multi').val();
    var url = "http://localhost:8085/multi?num1=" + myNum1 + "&num2=" + myNum2;
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);
            $('#resultadoMulti').html( '<h2>' + json.myResultado + '</h2>');
        }
    );
}

function revealDivi() {
    cuadrosDeTexto = '<label>Primer número: </label>' + '<input type="text" id="n1Divi">';
    cuadrosDeTexto += '<label> Segundo número: </label>' + '<input type="text" id="n2Divi">';
    cuadrosDeTexto += '<button onclick="calcularDiviAPI()"> Calcular división con API </button>';
    cuadrosDeTexto += '<br>' + '<label id="resultadoDivi">' + '<em> El resultado de la división aparecerá aquí... </em>' + '</label>';

    document.getElementById("divi").innerHTML = cuadrosDeTexto;
}

function calcularDiviAPI() {
    var myNum1 = $('#n1Divi').val();
    var myNum2 = $('#n2Divi').val();
    var url = "http://localhost:8085/divi?num1=" + myNum1 + "&num2=" + myNum2;
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);
            $('#resultadoDivi').html( '<h2>' + json.myResultado + '</h2>');
        }
    );
}

function revealRaiz() {
    cuadrosDeTexto = '<label>Número: </label>' + '<input type="text" id="nRaiz">';
    cuadrosDeTexto += '<button onclick="calcularRaizAPI()"> Calcular raíz con API </button>';
    cuadrosDeTexto += '<br>' + '<label id="resultadoRaiz">' + '<em> El resultado de la raíz cuadrada aparecerá aquí... </em>' + '</label>';

    document.getElementById("raiz").innerHTML = cuadrosDeTexto;
}

function calcularRaizAPI() {
    var myNum = $('#nRaiz').val();
    var url = "http://localhost:8085/raiz?num=" + myNum;
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);
            $('#resultadoRaiz').html( '<h2>' + json.myResultado + '</h2>');
        }
    );
}

function revealCuadrado() {
    cuadrosDeTexto = '<label>Número: </label>' + '<input type="text" id="nCuadrado">';
    cuadrosDeTexto += '<button onclick="calcularCuadradoAPI()"> Calcular exponente al cuadrado con API </button>';
    cuadrosDeTexto += '<br>' + '<label id="resultadoCuadrado">' + '<em> El resultado del cuadrado aparecerá aquí... </em>' + '</label>';

    document.getElementById("cuadrado").innerHTML = cuadrosDeTexto;
}

function calcularCuadradoAPI() {
    var myNum = $('#nCuadrado').val();
    var url = "http://localhost:8085/cuadrado?num=" + myNum;
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);
            $('#resultadoCuadrado').html( '<h2>' + json.myResultado + '</h2>');
        }
    );
}