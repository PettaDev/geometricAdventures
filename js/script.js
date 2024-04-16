// calculadora de área

// Área do Quadrado

    function areaDoQuadrado (ladoquadrado){
        return ladoquadrado * ladoquadrado;
    }

    let areaQuadrado = calcularAreaQuadrado(lado);
    console.log("A área do quadrado com lado", lado, "é", area);

// Área do Cubo

    function areaDoCubo (ladocubo) {
        return 6 * (ladocubo * ladocubo)
    }
    let areaCubo = areaDoCubo(ladocubo);
    console.log("A área do cubo com aresta", ladocubo, "é", area);

// Área do Retangulo

    function areaDoRetangulo (largura, comprimento) {
        return largura * comprimento;
    }

    let areaRetangulo = areaDoRetangulo(comprimento, largura);
    console.log("A área do retângulo com comprimento", comprimento, "e largura", largura, "é", area);