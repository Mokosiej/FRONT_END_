// Основная функция для загрузки погоды
function loadWeather() {
    // URL для получения города пользователя
    fetch('https://get.geojs.io/v1/ip/geo.json')
        .then(response => response.json())
        .then(locationData => {
            const city = locationData.city;
            const apiKey = '1818ae089f424d23a87180523240711'; 
            const weatherApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`
            
            // Получение данных о погоде
            fetch(weatherApiUrl)
                .then(response => response.json())
                .then(weatherData => {
                    displayWeather(weatherData);
                })
                .catch(error => console.error('Ошибка при получении данных погоды:', error));
        })
        .catch(error => console.error('Ошибка при получении данных о местоположении:', error));
}

// Функция для отображения данных о погоде
function displayWeather(data) {
    // Текущая дата и город
    document.getElementById('date').textContent = formatDate(data.location.localtime);
    document.getElementById('city').textContent = `${data.location.name}, ${data.location.region}`;

    // Иконка погоды
    const iconBig = document.getElementById('icon');
    iconBig.style.backgroundImage = `url("https:${data.current.condition.icon}")`;

    // Температура и описание
    document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
    document.getElementById('description').textContent = data.current.condition.text;

   

    // Прогноз на неделю
    const weeklyForecast = document.getElementById('weekly-forecast');
    weeklyForecast.innerHTML = ''; // Очищаем содержимое перед заполнением

    data.forecast.forecastday.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');

        dayElement.innerHTML = `
            <img class="icon-small" src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
            <p class="weekDay">${formatDay(day.date)}</p>
            <p class="temperature-max-text">${day.day.maxtemp_c}°</p>
            <p class="temperature-min">${day.day.mintemp_c}°</p>
        `;

        weeklyForecast.appendChild(dayElement);
    });
}

// Функция для форматирования даты
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Функция для форматирования дня недели
function formatDay(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
}

// Запуск загрузки погоды при загрузке страницы
document.addEventListener('DOMContentLoaded', loadWeather);
