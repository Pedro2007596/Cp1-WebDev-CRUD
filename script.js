let jogadoras = [
     {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/andressa.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/dayana.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/mariza.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/thais.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/leticia.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];

window.onload = function(infosDoEvento) {
    carregarLocalStorage();
    displayJogadoras();

    document.getElementById('jogadorasform').addEventListener('submit', addJogadora); 
    document.querySelector('#jogadorasList').addEventListener('click', handleClick);
};
function salvarLocalStorage(){
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras))
}
function carregarLocalStorage() {
  let data = localStorage.getItem("jogadoras");
  if (data) jogadoras = JSON.parse(data);
}

function displayJogadoras() {
  const list = document.getElementById('jogadorasList');
  list.innerHTML = "";

  jogadoras.forEach(j => {
    list.innerHTML += `
      <div class="card">
        <span class="favorite-btn ${j.favorita ? "active" : ""}" data-index="${jogadoras.indexOf(j)}">★</span>
        <img class="card-photo" src="${j.foto}" alt="${j.nome}">
        <div class="card-header">
          <h2 class="card-name">${j.nome}</h2>
          <p class="card-meta">${j.posicao} • ${j.clube}</p>
        </div>
        <ul class="card-stats">
          <li><span class="stat-label">Gols</span><span class="stat-value">${j.gols}</span></li>
          <li><span class="stat-label">Assist.</span><span class="stat-value">${j.assistencias}</span></li>
          <li><span class="stat-label">Jogos</span><span class="stat-value">${j.jogos}</span></li>
        </ul>
      </div>
    `;
  });
  document.querySelectorAll(".favorite-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      jogadoras[idx].favorita = !jogadoras[idx].favorita;
      salvarLocalStorage();
      displayJogadoras(); // re-render para atualizar a estrela
    });
  });
}