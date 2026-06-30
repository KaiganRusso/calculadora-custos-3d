document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar valores
    const peso = parseFloat(document.getElementById('filamento').value);
    const precoFil = parseFloat(document.getElementById('precoFilamento').value);
    const horas = parseFloat(document.getElementById('horas').value);
    const potencia = parseFloat(document.getElementById('potencia').value);
    const precoEnergia = parseFloat(document.getElementById('precoEnergia').value);
    
    // Cálculos
    const custoFilamento = (peso / 1000) * precoFil;
    const consumoKwh = (potencia / 1000) * horas;
    const custoEnergia = consumoKwh * precoEnergia;
    const total = custoFilamento + custoEnergia;
    const porHora = total / horas;
    
    // Preencher resultados
    document.getElementById('resFilamento').textContent = `R$ ${custoFilamento.toFixed(2)}`;
    document.getElementById('resEnergia').textContent = `R$ ${custoEnergia.toFixed(2)}`;
    document.getElementById('resTotal').textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('resPorHora').textContent = `R$ ${porHora.toFixed(2)}`;
    
    // Mostrar resultado
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('calcForm').classList.add('hidden');
});

document.getElementById('novaCalc').addEventListener('click', function() {
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('calcForm').classList.remove('hidden');
    document.getElementById('calcForm').reset();
});
