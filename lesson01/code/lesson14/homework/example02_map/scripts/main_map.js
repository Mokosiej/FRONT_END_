const links = [
    { text: "Главная", href: "/" },
    { text: "О нас", href: "/about/" },
    { text: "Цены", href: "/price/" },
    { text: "Контакты", href: "/contacts/" },
];

const ul = document.getElementById('link-list');

ul.innerHTML = links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('');