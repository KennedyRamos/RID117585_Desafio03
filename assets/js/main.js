const tarefasIniciais = [
  {
    descricao: "Implementar tela de listagem de tarefas",
    etiqueta: "Frontend",
    data: "21/08/2024",
    concluido: false,
  },
  {
    descricao: "Criar endpoint para cadastro de tarefas",
    etiqueta: "Backend",
    data: "21/08/2024",
    concluido: false,
  },
  {
    descricao: "Implementar protótipo da listagem de tarefas",
    etiqueta: "Backend",
    data: "21/08/2024",
    concluido: true,
  }
];


function tarefaConcluida(event) {
  const item = event.target.closest("li");
  const titulo = item.querySelector(".titulo-tarefa");
  const btnConcluir = item.querySelector(".btn-concluir");

  const jaConcluido = titulo.classList.contains("concluida");

  if (jaConcluido) {
    titulo.classList.remove("concluida");
    btnConcluir.innerHTML = "Concluir";
    btnConcluir.style.background = "#2D70FD";
  } else {
    titulo.classList.add("concluida");
    btnConcluir.innerHTML = `<img src="assets/image/checked.svg" alt="Concluído" class="icone-check">`;
    btnConcluir.style.background = "transparent";
  }

  atualizarContador();
}


function criarElemento(tag, className, text = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}


function montarTarefa({ descricao, etiqueta, data, concluido }) {
  const item = document.createElement("li");

  const titleTarefa = criarElemento("h2", "titulo-tarefa", descricao);
  if (concluido) titleTarefa.classList.add("concluida");

  const marcador = criarElemento("p", "etiqueta", etiqueta);
  const dataCriacao = criarElemento("p", "data", `Criado em: ${data}`);

  const divInfo = criarElemento("div", "divInfo");
  const divDetalhes = criarElemento("div", "divDetalhes");

  const checked = criarElemento("button", "btn-concluir", concluido ? "" : "Concluir");
  checked.type = "button";
  checked.addEventListener("click", tarefaConcluida);

  if (concluido) {
    checked.innerHTML = `<img src="assets/image/checked.svg" alt="Concluído" class="icone-check">`;
    checked.style.background = "transparent";
  }

  divDetalhes.append(marcador, dataCriacao);
  divInfo.append(titleTarefa, divDetalhes);
  item.append(divInfo, checked);

  return item;
}


function criarContador() {
  const rodape = document.getElementById("rodape-tarefas");

  if (!document.getElementById("contador")) {
    const contador = document.createElement("p");
    contador.id = "contador";
    contador.textContent = "0/0 concluídas";
    rodape.appendChild(contador);
  }
}


function atualizarContador() {
  const lista = document.getElementById("lista-tarefas");
  const total = lista.querySelectorAll("li").length;
  const concluidas = lista.querySelectorAll(".titulo-tarefa.concluida").length;

  const contador = document.getElementById("contador");
  if (contador) {
    contador.textContent = `${concluidas}/${total} concluídas`;
  }
}


function criarTarefa() {
  const descricao = document.getElementById("descricao").value.trim();
  const etiqueta = document.getElementById("etiqueta").value.trim();
  if (!descricao) return;

  const lista = document.getElementById("lista-tarefas");

  const novaTarefa = {
    descricao,
    etiqueta,
    data: new Date().toLocaleDateString("pt-BR"),
    concluido: false,
  };

  lista.append(montarTarefa(novaTarefa));

  document.getElementById("descricao").value = "";
  document.getElementById("etiqueta").value = "";

  atualizarContador();
}

window.onload = () => {
  criarContador();

  const lista = document.getElementById("lista-tarefas");
  tarefasIniciais.forEach((tarefa) => lista.append(montarTarefa(tarefa)));

  atualizarContador();
};