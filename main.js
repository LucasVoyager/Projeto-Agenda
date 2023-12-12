const form = document.getElementById("form-contato");
const nome = document.getElementById("nome-pessoa");
const numeroTel = document.getElementById("numero-pessoa");

let linhas = '';

form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    if (isNaN(numeroTel.value)){
        alert("Apenas numeros")
    } else {
    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${numeroTel.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
}
    nome.value = '';
    numeroTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

