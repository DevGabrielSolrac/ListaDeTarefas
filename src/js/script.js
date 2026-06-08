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


// Função responsável por adicionar uma nova tarefa.
// Esta função faz: Pega o texto → Verifica se está vazio → Cria a tarefa → Salva → Limpa o campo.
function functionsTarefas(){
    const campoText = cmpTextTarefas.value; //Pegando o texto digitado

    if (campoText.trim() != ""){

        criarTarefa(campoText);
        saveList(campoText);

        cmpTextTarefas.value = "";
        
    }
}


//Função para salvar a lista de tarefas
function saveList(tarefa){

    const carregarLista = JSON.parse(localStorage.getItem("tarefa")) || [];//Carregando a lista salva

    carregarLista.push(tarefa);//Adicionando uma nova tarefa
    

    localStorage.setItem("tarefa",JSON.stringify(carregarLista));//Salvando novamente as tarefas.
}


//Função para carregar a lista de tarefas.
function carregarListaTarefas(){
    
    const listTarefa = JSON.parse(localStorage.getItem("tarefa")) || [];//Carregando a lista
    
    listTarefa.forEach((tarefa) => {
        criarTarefa(tarefa);   
    });
}


//Aqui vai ser as funções de criação de tarefas como add/remover/desfazer.
function criarTarefa(texto) {
    const addItemList = document.createElement("li"); //Criando o elemento <li>.
    const removeList = document.createElement("button"); //Criando o elemento botão para remover item da lista.
    const concluidoList = document.createElement("button"); //Criando o elemento botão para concluir item da lista.

    addItemList.textContent = texto + " ";// Define o texto da tarefa dentro do <li>.
    removeList.textContent = "Excluir";// Define o texto que aparecerá no botão.
    concluidoList.textContent = "Concluir"; // Define o texto que aparecerá no botão.
    

    listTarefas.appendChild(addItemList);// Aqui irá add um item na lista.
    addItemList.appendChild(removeList);// Adiciona o botão dentro do <li> de excluir.
    addItemList.appendChild(concluidoList); // Adiciona o botão dentro do <li> de concluir.

    //Ação do botão remover.
    removeList.addEventListener("click", () => {
        //Vai remover da lista de tarefas.
        addItemList.remove();
        
        //Aqui vai remover da memoria, com isso quando abrir a pagina novamente não vai aparecer mais o que foi salvo.
        const lista = JSON.parse(localStorage.getItem("tarefa")) || [];
        const indice = lista.indexOf(texto);

        lista.splice(indice,1);
        
        localStorage.setItem("tarefa",JSON.stringify(lista));
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


//carregando a lista
carregarListaTarefas();
