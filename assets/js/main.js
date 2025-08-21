// Lista inicial de tarefas
const tarefas = [
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

function tarefaConcluida() {
    const item = event.target.closest("li");
    const titulo = item.querySelector(".titulo-tarefa");
    const btnConcluir = item.querySelector('.btn-concluir')

    titulo.style.textDecoration = "line-through";
    titulo.style.color = "#8F98A8";

    btnConcluir.innerHTML = `<img src="assets/image/checked.svg" alt="Concluído" class="icone-check">`;
    btnConcluir.style.background = "transparent";
}

function criarTarefa() {
    const tarefa = document.getElementById('descricao').value;
    const etiqueta = document.getElementById('etiqueta').value;


    const lista = document.getElementById("lista-tarefas");
    const item = document.createElement('li');

    const titleTarefa = document.createElement('h2');
    const marcador = document.createElement('p');
    const dataCriacao = document.createElement('p');
    const checked = document.createElement('button');

    checked.type = 'button'

    titleTarefa.textContent = tarefa;
    marcador.textContent = etiqueta;
    dataCriacao.textContent = `Criado em: 20/08/2025`;
    checked.textContent = 'concluir';

    titleTarefa.className = 'titulo-tarefa';
    marcador.className = 'etiqueta';
    dataCriacao.className = 'data';
    checked.className = 'btn-concluir';

    checked.addEventListener("click", tarefaConcluida);

    item.append(titleTarefa, marcador, dataCriacao, checked);
    lista.append(item);

    document.getElementById('descricao').value = "";
    document.getElementById('etiqueta').value = "";
};

window.onload = () => {
    tarefas.forEach((tarefa) => {
        const lista = document.getElementById("lista-tarefas");
        const item = document.createElement('li');

        const titleTarefa = document.createElement('h2');
        const marcador = document.createElement('p');
        const dataCriacao = document.createElement('p');
        const checked = document.createElement('button');

        checked.type = 'button'

        titleTarefa.textContent = tarefa.descricao;
        marcador.textContent = tarefa.etiqueta;
        dataCriacao.textContent = `Criado em: ${tarefa.data}`;
        checked.textContent = 'concluir';

        titleTarefa.className = 'titulo-tarefa';
        marcador.className = 'etiqueta';
        dataCriacao.className = 'data';
        checked.className = 'btn-concluir'

        checked.addEventListener("click", tarefaConcluida)

        item.append(titleTarefa, marcador, dataCriacao, checked);
        lista.append(item)
    })
}