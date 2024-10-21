const links = [
    { text: "Главная", href: "/" },
    { text: "О нас", href: "/about/" },
    { text: "Цены", href: "/price/" },
    { text: "Контакты", href: "/contacts/" },
];

const ul = document.getElementById('link-list');

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});