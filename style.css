let historico = JSON.parse(localStorage.getItem('historico3d')) || [];
let editandoId = null;

const form = document.getElementById('calcForm');
const resultadoDiv = document.getElementById('resultado');
const formCard = document.getElementById('formCard');
const listaHistorico = document.getElementById('listaHistorico');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const peso = parseFloat(document.getElementById('filamento').value);
    const precoFil = parseFloat(document.getElementById('precoFilamento').value);
    const horas = parseFloat(document.getElementById('horas').value);
    const potencia = parseFloat(document.getElementById('potencia').value);
    const precoEnergia = parseFloat(document.getElementById('precoEnergia').value);

    const custoFilamento = (peso / 1000) * precoFil;
    const consumoKwh = (potencia / 1000) * horas;
    const custoEnergia = consumoKwh * precoEnergia;
    const custoTotal = custoFilamento + custoEnergia;
    const porHora = custoTotal / horas;

    const impressao = {
        id: editandoId || Date.now(),
        nome: nome || "Impressão sem nome",
        peso,
        precoFil,
        horas,
        potencia,
        precoEnergia,
        custoFilamento: custoFilamento.toFixed(2),
        custoEnergia: custoEnergia.toFixed(2),
        custoTotal: custoTotal.toFixed(2),
        porHora: porHora.toFixed(2),
        data: new Date().toLocaleDateString('pt-BR')
    };

    if (editandoId) {
        historico = historico.map(item => item.id === editandoId ? impressao : item);
    } else {
        historico.unshift(impressao);
    }

    localStorage.setItem('historico3d', JSON.stringify(historico));
    editandoId = null;

    mostrarResultado(impressao);
    atualizarHistorico();
});

function mostrarResultado(impressao) {
    document.getElementById('nomeResultado').textContent = impressao.nome;
    document.getElementById('resFilamento').textContent = `R$ ${impressao.custoFilamento}`;
    document.getElementById('resEnergia').textContent = `R$ ${impressao.custoEnergia}`;
    document.getElementById('resTotal').textContent = `R$ ${impressao.custoTotal}`;
    document.getElementById('resPorHora').textContent = `R$ ${impressao.porHora}`;

    const total = parseFloat(impressao.custoTotal);
    
    document.getElementById('preco2').textContent = `R$ ${(total * 2).toFixed(2)}`;
    document.getElementById('preco3').textContent = `R$ ${(total * 3).toFixed(2)}`;
    document.getElementById('preco4').textContent = `R$ ${(total * 4).toFixed(2)}`;

    formCard.classList.add('hidden');
    resultadoDiv.classList.remove('hidden');
}

document.getElementById('novaCalc').addEventListener('click', resetarFormulario);
document.getElementById('editarAtual').addEventListener('click', () => {
    const ultimo = historico[0];
    if (ultimo) carregarParaEdicao(ultimo);
});

function resetarFormulario() {
    form.reset();
    resultadoDiv.classList.add('hidden');
    formCard.classList.remove('hidden');
    editandoId = null;
}

function atualizarHistorico() {
    listaHistorico.innerHTML = '';

    if (historico.length === 0) {
        listaHistorico.innerHTML = '<p style="text-align:center; color:#64748b; padding:1rem;">Nenhuma impressão salva ainda.</p>';
        return;
    }

    historico.forEach(item => {
        const div = document.createElement('div');
        div.className = 'historico-item';
        div.innerHTML = `
            <div class="historico-nome">${item.nome}</div>
            <div class="historico-info">
                R$ ${item.custoTotal} • ${item.horas}h • ${item.data}
            </div>
            <div style="margin-top:10px;">
                <button onclick="carregarParaEdicaoPorId(${item.id})" style="font-size:0.85rem; padding:4px 10px;">Editar</button>
                <button onclick="excluirItem(${item.id})" style="font-size:0.85rem; padding:4px 10px; background:#ef4444;">Excluir</button>
            </div>
        `;
        listaHistorico.appendChild(div);
    });
}

window.carregarParaEdicaoPorId = function(id) {
    const item = historico.find(i => i.id === id);
    if (item) carregarParaEdicao(item);
};

function carregarParaEdicao(item) {
    editandoId = item.id;
    
    document.getElementById('nome').value = item.nome;
    document.getElementById('filamento').value = item.peso;
    document.getElementById('precoFilamento').value = item.precoFil;
    document.getElementById('horas').value = item.horas;
    document.getElementById('potencia').value = item.potencia;
    document.getElementById('precoEnergia').value = item.precoEnergia;

    formCard.classList.remove('hidden');
    resultadoDiv.classList.add('hidden');
}

window.excluirItem = function(id) {
    if (confirm('Excluir esta impressão?')) {
        historico = historico.filter(item => item.id !== id);
        localStorage.setItem('historico3d', JSON.stringify(historico));
        atualizarHistorico();
    }
};

// Inicializar
atualizarHistorico();
