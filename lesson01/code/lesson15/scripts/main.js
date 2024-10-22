// Массив для хранения задач
let tasks = [];

// Получаем элементы DOM
const taskInput = document.querySelector('.task-input');
const taskList = document.getElementById('taskList');
const createTaskBtn = document.getElementById('createTaskBtn');
const filterAllBtn = document.getElementById('filterAll');
const filterCompletedBtn = document.getElementById('filterCompleted');
const filterPendingBtn = document.getElementById('filterPending');

// Функция для отображения задач
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';

    // Фильтрация задач по состоянию
    let filteredTasks = tasks;
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isCompleted);
    } else if (filter === 'pending') {
        filteredTasks = tasks.filter(task => !task.isCompleted);
    }

    // Создаем элементы списка для каждой задачи
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        if (task.isCompleted) {
            li.classList.add('list-item_done'); // Добавляем стиль для выполненных задач
        }
        li.textContent = task.text;
        li.addEventListener('click', () => toggleTask(index)); // Переключаем состояние задачи по клику
        taskList.appendChild(li);
    });
}

// Функция для добавления новой задачи
function addTask(taskText) {
    if (taskText.trim() !== '') { // Проверка, что текст задачи не пустой
        tasks.push({ text: taskText, isCompleted: false });
        taskInput.value = ''; // Очищаем поле ввода
        renderTasks();
    }
}

// Функция для переключения состояния задачи (выполнено/невыполнено)
function toggleTask(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    renderTasks(); // Перерисовываем задачи
}

// Функция для фильтрации задач
function filterTasks(filterType) {
    renderTasks(filterType);
}

// События
createTaskBtn.addEventListener('click', () => addTask(taskInput.value));
filterAllBtn.addEventListener('click', () => filterTasks('all'));
filterCompletedBtn.addEventListener('click', () => filterTasks('completed'));
filterPendingBtn.addEventListener('click', () => filterTasks('pending'));

// Инициализация с рендерингом всех задач
renderTasks();
