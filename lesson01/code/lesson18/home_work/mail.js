// Функция для загрузки данных и отображения списка задач
async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const todos = await response.json();
        console.log('Данные загружены:', todos); // Для отладки: выводим данные в консоль

        // Обрезаем массив до заданного диапазона (например, 10–15 элементов)
        const slicedTodos = todos.slice(10, 15);

        // Преобразуем массив с помощью map
        const todoElements = slicedTodos.map(todo => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.textContent = todo.title;
            if (todo.completed) {
                li.classList.add('completed');
            }
            return li;
        });

        // Добавляем задачи на страницу
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = ''; // Очищаем содержимое перед добавлением новых элементов
        todoList.append(...todoElements);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        document.getElementById('todo-list').textContent = 'Ошибка загрузки данных';
    }
}

// Вызываем функцию для загрузки и отображения данных
fetchTodos();
