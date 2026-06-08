const cmpTextTarefas = document.getElementById("tarefas");
const btnAdd = document.getElementById("adicionar");
const listTarefas = document.getElementById("list");

//Ao clicar
btnAdd.addEventListener("click", () => {
    functionsTarefas();    
});

//Suporte ao teclado
cmpTextTarefas.addEventListener("keydown",(event) => {
    if(event.key == "Enter"){
        functionsTarefas();
    }
});


function functionsTarefas(){
    const campoText = cmpTextTarefas.value; //Pegando o texto digitado
    const addItemList = document.createElement("li"); //Criando o elemento <li>.
    const removeList = document.createElement("button"); //Criando o elemento botão para remover item da lista.
    const concluidoList = document.createElement("button"); //Criando o elemento botão para concluir item da lista.

    //Aqui vai verificar se barra de texto está em branco, caso esteje vai não irá fazer nada e não irá adicionar na lista.
    if(campoText.trim() != ""){
        
        addItemList.textContent = campoText + " ";// Define o texto da tarefa dentro do <li>.
        removeList.textContent = "Excluir";// Define o texto que aparecerá no botão.
        concluidoList.textContent = "Concluir"; // Define o texto que aparecerá no botão.
        

        listTarefas.appendChild(addItemList);// Aqui irá add um item na lista.
        addItemList.appendChild(removeList);// Adiciona o botão dentro do <li> de excluir.
        addItemList.appendChild(concluidoList) // Adiciona o botão dentro do <li> de concluir.

        cmpTextTarefas.value = "";//Aqui irá apagar o que foi escrito.

        //Ação do botão remover.
        removeList.addEventListener("click", () => {
            addItemList.remove();
        });

        //Ação do botão concluir uma tarefa.
        concluidoList.addEventListener("click", () => {

            addItemList.classList.toggle("concluido");
            
            //Condição de estar alternando os botões.
            if(addItemList.classList.contains("concluido")){
                concluidoList.textContent = "Desfazer"; //Se estiver concluido.
            }else{
                concluidoList.textContent = "Concluir"; //Não estiver concluido.
            }
        })
    }
}

