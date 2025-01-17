// Função para carregar as tarefas do cookie
function loadTasks() {
    const tasks = getCookie('tasks');
    if (tasks) {
        const taskArray = JSON.parse(tasks);
        taskArray.forEach(taskText => addTask(taskText));
    }
}

// Função para salvar tarefas no cookie
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task').forEach(task => {
        tasks.push(task.textContent);
    });
    setCookie('tasks', JSON.stringify(tasks), 7); // Expira em 7 dias
}

// Função para adicionar uma tarefa
function addTask(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.textContent = taskText;

    // Evento de clique para remover a tarefa
    taskDiv.addEventListener('click', function() {
        if (confirm('Você quer remover esta tarefa?')) {
            taskDiv.remove();
            saveTasks(); // Atualiza o cookie após remoção
        }
    });

    // Adiciona ao topo da lista
    const ftList = document.getElementById('ft_list');
    ftList.insertBefore(taskDiv, ftList.firstChild);
    saveTasks(); // Atualiza o cookie após adição
}

// Função para definir um cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para obter um cookie
function getCookie(name) {
    const nameEq = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
    }
    return "";
}

// Evento de clique no botão "Adicionar tarefa"
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskText = prompt('Digite a nova tarefa:');
    if (taskText && taskText.trim() !== '') {
        addTask(taskText);
    }
});

// Carrega as tarefas ao carregar a página
window.onload = loadTasks;