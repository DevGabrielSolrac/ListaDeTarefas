const cmpTextTarefas = document.getElementById("tarefas");
const btnAdd = document.getElementById("adicionar");
const listTarefas = document.getElementById("list");

btnAdd.addEventListener("click", () => {
    const campoText = cmpTextTarefas.value; //Pegando o texto digitado
    const addItemList = document.createElement("li"); //Criando o elemento lista.
    const removeList = document.createElement("button"); //Criando o elemento botão para remover item da lista.

    //Aqui vai verificar se barra de texto está em branco, caso esteje vai não irá fazer nada e não irá adicionar na lista.
    if(campoText.trim() != ""){
        
        addItemList.textContent = campoText + " ";// Define o texto da tarefa dentro do <li>.
        removeList.textContent = "Excluir";// Define o texto que aparecerá no botão.

        listTarefas.appendChild(addItemList);// Aqui irá add um item na lista.
        addItemList.appendChild(removeList);    // Adiciona o botão dentro do <li>.

        cmpTextTarefas.value = "";//Aqui irá apagar o que foi escrito.

        //Ação do botão remover.
        removeList.addEventListener("click", () => {
            addItemList.remove();
        });
    }
});