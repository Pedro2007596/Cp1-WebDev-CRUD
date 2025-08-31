# Cp1-WebDev-CRUD
# Cadastro de Jogadoras

Aplicação web para gerenciar informações de jogadoras de futebol, com **CRUD completo**, favoritos, busca e ordenação, utilizando **HTML, CSS e JavaScript**. Os dados são persistidos no **LocalStorage**.

---

## Funcionalidades

### 1. Listagem (Read)
- Exibe todas as jogadoras em **cards**.
- Cada card mostra:
  - Foto  
  - Nome  
  - Posição  
  - Clube  
  - Estatísticas: gols, assistências e jogos

---

### 2. Favoritas
- Ícone de estrela em cada card para marcar/desmarcar jogadoras como favoritas.  
- O estado de favorita é salvo no **LocalStorage**.

---

### 3. Cadastro (Create)
- Formulário para adicionar novas jogadoras:
  - Nome, posição, clube, estatísticas e URL da foto
- Campos obrigatórios; não permite respostas vazias
- Feedback via alert: `"Jogadora adicionada com sucesso!"`

---

### 4. Edição (Update)
- Botão **Editar** em cada card
- Permite alterar todos os dados da jogadora (inclusive foto) via prompts
- Feedback via alert: `"Jogadora editada com sucesso!"`

---

### 5. Remoção (Delete)
- Botão **Excluir** em cada card
- Confirmação via `confirm()` antes da exclusão
- Feedback via alert: `"Jogadora excluída com sucesso!"`

---

### 6. Recursos Extras (Bônus)
- **Busca por nome ou posição:** filtra a lista em tempo real conforme o usuário digita
- **Ordenação:** botões para ordenar jogadoras por nome ou posição em ordem alfabética

---

## Estrutura de Arquivos

- /index.html → Estrutura HTML da aplicação
- /style.css → Estilos dos cards, botões e formulários
- /script.js → Lógica do CRUD, LocalStorage, busca e ordenação

---

## Link do Github Pages

- Link : https://pedro2007596.github.io/Cp1-WebDev-CRUD/

---

## Tecnologias Utilizadas
- **HTML5** – Estrutura e elementos da página
- **CSS3** – Estilo visual dos cards, botões e inputs
- **JavaScript (Vanilla JS)** – CRUD, LocalStorage, busca, filtro e ordenação

--

## Membros do grupo

- Pedro Henrique
- Nathália Cordeiro
- Bruno Bagattini
