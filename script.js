let jogadoras = [
     {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDJSmz0p2IZaujirFQ4StkH1EtMC6ptVjeg&s",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhS8c-g5AzPuTka4I67uNSNChAs2jD-CwGFw&s",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.acritica.net/upload/dn_arquivo/2025/04/174318471777c67132097f9b1ff028aed0eca8d21b.png",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmWnYK0MkyrFAHK0LKLwwHmbRPCK96yc2jg&s",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4xJeSCyx4gHbwsfPFXkTKkXWjr77osoU6A&s",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];

window.onload = function(infosDoEvento) {
    carregarLocalStorage();
    displayJogadoras();

    document.getElementById('addJogadoraForm').addEventListener('submit', addJogadora);
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

  jogadoras.forEach((j, index) => {
    list.innerHTML += `
      <div class="card">
        <span class="favorite-btn ${j.favorita ? "active" : ""}" data-index="${index}">★</span>
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
        <button class="edit-btn" onclick="editarJogadora(${index})">Editar</button>
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

function addJogadora(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const posicao = document.getElementById("posicao").value;
  const clube = document.getElementById("clube").value;
  const foto = document.getElementById("foto").value;
  const gols = parseInt(document.getElementById("gols").value, 10);
  const assistencias = parseInt(document.getElementById("assistencias").value, 10);
  const jogos = parseInt(document.getElementById("jogos").value, 10);

  const novaJogadora = {
    nome,
    posicao,
    clube,
    foto,
    gols,
    assistencias,
    jogos,
    favorita: false
  };

  jogadoras.push(novaJogadora);
  salvarLocalStorage();
  displayJogadoras();

  // limpa o form
  alert("Jogadora adicionada com sucesso!");
  e.target.reset();
}

function editarJogadora(index) {
  const j = jogadoras[index];

  const novoNome = prompt("Edite o nome:", j.nome);
  if (novoNome !== null) j.nome = novoNome;

  const novaPosicao = prompt("Edite a posição:", j.posicao);
  if (novaPosicao !== null) j.posicao = novaPosicao;

  const novoClube = prompt("Edite o clube:", j.clube);
  if (novoClube !== null) j.clube = novoClube;

  const novaFoto = prompt("Edite a URL da foto:", j.foto);
  if (novaFoto !== null) j.foto = novaFoto;

  const novosGols = prompt("Edite os gols:", j.gols);
  if (novosGols !== null) j.gols = parseInt(novosGols, 10);

  const novasAssist = prompt("Edite as assistências:", j.assistencias);
  if (novasAssist !== null) j.assistencias = parseInt(novasAssist, 10);

  const novosJogos = prompt("Edite os jogos:", j.jogos);
  if (novosJogos !== null) j.jogos = parseInt(novosJogos, 10);

  salvarLocalStorage();  
  displayJogadoras();
  alert("Jogadora editada com sucesso!");
}

displayJogadoras();