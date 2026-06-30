* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', system-ui, sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e2937 100%);
    color: #e2e8f0;
    min-height: 100vh;
    padding: 1rem;
}

.container {
    max-width: 520px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
}

.logo-icon {
    font-size: 2.8rem;
}

h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.8rem;
    font-weight: 600;
    background: linear-gradient(90deg, #60a5fa, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.card, .resultado, .historico {
    background: rgba(15, 23, 42, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.4);
    border: 1px solid #334155;
}

.input-group {
    margin-bottom: 1.4rem;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #cbd5e1;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 14px 18px;
    background: #1e2937;
    border: 2px solid #475569;
    border-radius: 12px;
    color: white;
    font-size: 1.1rem;
}

.input-with-unit {
    position: relative;
}

.unit {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    font-weight: 500;
}

.btn-calcular {
    width: 100%;
    padding: 16px;
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 0.5rem;
}

.result-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
}

.result-item {
    background: #1e2937;
    padding: 1.1rem;
    border-radius: 12px;
}

.result-item.total {
    grid-column: span 2;
    background: linear-gradient(90deg, #1e40af, #312e81);
}

.label {
    display: block;
    font-size: 0.95rem;
    color: #94a3b8;
}

.value {
    font-size: 1.55rem;
    font-weight: 600;
}

.precificacao h3 {
    margin: 1.5rem 0 1rem;
    text-align: center;
    color: #c4d0ff;
}

.multiplicadores {
    display: flex;
    gap: 12px;
    justify-content: center;
}

.multi-item {
    background: #1e2937;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    text-align: center;
    flex: 1;
    border: 2px solid #334155;
}

.multi-item.destaque {
    border-color: #60a5fa;
    background: rgba(96, 165, 250, 0.1);
}

.multi-titulo {
    display: block;
    font-size: 0.95rem;
    color: #94a3b8;
}

.multi-valor {
    font-size: 1.6rem;
    font-weight: 700;
    color: #a5b4fc;
}

.custo-hora {
    text-align: center;
    padding: 1rem;
    background: #1e2937;
    border-radius: 12px;
    margin: 1.5rem 0;
}

.botoes-resultado {
    display: flex;
    gap: 12px;
}

.btn-nova, .btn-secundario {
    flex: 1;
    padding: 14px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
}

.btn-nova {
    background: transparent;
    color: #60a5fa;
    border: 2px solid #60a5fa;
}

.btn-secundario {
    background: #334155;
    color: white;
    border: none;
}

.lista-historico {
    max-height: 400px;
    overflow-y: auto;
}

.historico-item {
    background: #1e2937;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 12px;
    border-left: 4px solid #60a5fa;
}

.hidden {
    display: none;
}
