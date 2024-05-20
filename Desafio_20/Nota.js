function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var media = (nota1 + nota2 + nota3) / 3;
    var status = (media >= 6) ? "Aprovado" : "Reprovado";

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "<p>Média: " + media.toFixed(2) + "</p><p>Status: " + status + "</p>";
}