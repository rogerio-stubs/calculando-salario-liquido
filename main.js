var inputEmpresa = document.querySelector('#empresa')
var inputSalarioBruto = document.querySelector('#salarioBruto');
var inputValorBeneficio = document.querySelector('#valorBeneficio');
var inputPorcentagemInss = document.querySelector('#porcentagemInss');
var inputPorcentagemBeneficio = document.querySelector('#porcentagemBeneficio');
var inputPorcentagemImposto = document.querySelector('#porcentagemImposto');
var tbodyElemento = document.querySelector('#tbody');

function calcular() {
    var empresa = inputEmpresa.value;
    var salarioBruto = inputSalarioBruto.value;
    var valorBeneficio = inputValorBeneficio.value;
    var porcentagemInss = inputPorcentagemInss.value;
    var porcentagemBeneficio = inputPorcentagemBeneficio.value;
    var porcentagemImposto = inputPorcentagemImposto.value;
    
    var descontoInss = porcentagem(salarioBruto, porcentagemInss);
    var descontoBeneficio = porcentagem(valorBeneficio, porcentagemBeneficio);
    var descontoImposto = porcentagem(salarioBruto, porcentagemImposto);
    var salarioLiquido = salarioBruto - descontoInss - descontoImposto - descontoBeneficio;
    render(empresa, salarioBruto, descontoInss, descontoBeneficio, descontoImposto, salarioLiquido);
}

function porcentagem(total, parcial) {
    var resultado = (total * parcial) / 100;
    return  resultado
}

function render(empresa, salarioBruto, descontoInss, descontoBeneficio, descontoImposto, salarioLiquido) {
    itens = [salarioBruto, descontoInss, descontoBeneficio, descontoImposto, salarioLiquido];
    var trElemento = document.createElement('tr');
    var thElemento = document.createElement('th');
    var valorTh = document.createTextNode(empresa);

    thElemento.setAttribute('scope', 'row');
    thElemento.appendChild(valorTh);
    trElemento.appendChild(thElemento);
    tbodyElemento.appendChild(trElemento);

    for (item of itens) {
        var tdElemento = document.createElement('td');
        var valorTd = document.createTextNode(item);

        tdElemento.appendChild(valorTd);
        trElemento.appendChild(tdElemento);
        tbodyElemento.appendChild(trElemento);
    }
}

