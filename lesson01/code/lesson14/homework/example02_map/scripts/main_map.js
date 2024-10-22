const links = [
    { text: "Главная", href: "/" },
    { text: "О нас", href: "/about/" },
    { text: "Цены", href: "/price/" },
    { text: "Контакты", href: "/contacts/" },
];

const ul = document.getElementById('link-list');

// Функция для создания элементов списка
function createLinkItems(links) {
    return links.map(link => {
        const li = document.createElement('li'); // Создаем элемент <li>
        const a = document.createElement('a'); // Создаем элемент <a>

        a.href = link.href; // Устанавливаем атрибут href
        a.textContent = link.text; // Устанавливаем текст ссылки

        li.appendChild(a); // Добавляем <a> в <li>
        return li; // Возвращаем <li>
    });
}

// Заполняем список при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const linkItems = createLinkItems(links); // Создаем массив элементов <li>

    ul.append(...linkItems); // Добавляем все элементы <li> в <ul> за один раз
});


