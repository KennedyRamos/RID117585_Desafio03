function adicionarTarefa(){
    // pegando o valor do input
    const descricao = document.getElementById("descricao").value;
    const etiqueta = document.getElementById("etiqueta").value;

    // com o valor, criando o li
    let li = document.createElement("li");
    li.innerHTML = descricao + etiqueta + '<button onclick="deletarTarefa(this)">Concluir</button>';

    // renderizando o li dentro do ul
    document.getElementById("lista-tarefas").appendChild(li);



    document.getElementById("descricao").value = '';
    document.getElementById("etiqueta").value = '';
};


function deletarTarefa(li){
    li.parentElement.remove()
    // li.parentElement.remove()
}