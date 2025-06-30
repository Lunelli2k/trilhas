const apiUrl = 'http://localhost:8080/api/sendContent';

document.getElementById('btnLoad').addEventListener('click', async () => {
  const subject = document.getElementById('inputSubject').value.trim();
  if (!subject) return alert('Informe um assunto.');

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',                        // habilita CORS
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ content: subject })
    });

    if (!response.ok) {
      throw new Error(`Resposta não OK: ${response.status}`);
    }

    const data = await response.json();

    // Salva em localStorage
    localStorage.setItem('learningPath', JSON.stringify(data));

    // Renderiza módulos
    renderModules(data.modulos);
  } catch (err) {
    console.error(err);
    alert('Erro ao carregar dados.');
  }
});

function renderModules(modules) {
  const container = document.getElementById('modulesContainer');
  container.innerHTML = '';
  let idx = 0;

  for (const [key, title] of Object.entries(modules)) {
    const detail = modules[key];
    const collapseId = `collapse${idx++}`;
    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.innerHTML = `
      <div class="card-header">
        <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
          ${title}
        </button>
      </div>
      <div id="${collapseId}" class="collapse">
        <div class="card-body">
          <h5>${detail.título || ''}</h5>
          <p>${detail.descrição || ''}</p>
          <ul>${(detail.tópicos || []).map(t => `<li>${t}</li>`).join('')}</ul>
          <p><strong>Obras:</strong> ${(detail.obras || []).join('; ')}</p>
        </div>
      </div>`;
    container.appendChild(card);
  }

  // Inicializa collapse do Bootstrap
  const collapseElems = container.querySelectorAll('.collapse');
  collapseElems.forEach(el => new bootstrap.Collapse(el, { toggle: false }));
}