let players = [
    { name: "Alex", height: 190, weight: 85, sport: "rugby" },
    { name: "Boris", height: 180, weight: 75, sport: "football" },
    { name: "Vladimir", height: 175, weight: 70, sport: "hockey" },
    { name: "George", height: 185, weight: 80, sport: "rugby" },
    { name: "Dmitry", height: 170, weight: 65, sport: "hockey" },
    { name: "Eugene", height: 195, weight: 90, sport: "football" },
    { name: "Zachary", height: 188, weight: 82, sport: "rugby" },
    { name: "Ivan", height: 182, weight: 77, sport: "football" },
    { name: "Kirill", height: 178, weight: 73, sport: "hockey" },
    { name: "Leonid", height: 192, weight: 87, sport: "rugby" },
    { name: "Michael", height: 176, weight: 71, sport: "hockey" },
    { name: "Nicholas", height: 198, weight: 93, sport: "football" },
    { name: "Oleg", height: 186, weight: 79, sport: "rugby" },
    { name: "Paul", height: 174, weight: 69, sport: "hockey" },
    { name: "Roman", height: 184, weight: 78, sport: "football" }
];

// Задача 1: Добавляем каждому игроку свойство "goals"
let playersWithGoals = players.map(player => {
    return {
        ...player, // оператор spread копирует все свойства объекта
        goals: Math.floor(Math.random() * 21) // случайное число от 0 до 20
    };
});

console.log("Игроки с количеством забитых голов:");
console.log(playersWithGoals);

// Задача 2: Фильтруем игроков по росту >= 180 и весу < 80
let filteredPlayers = playersWithGoals.filter(player => player.height >= 180 && player.weight < 80);

console.log("Игроки с ростом >= 180 и весом < 80:");
console.log(filteredPlayers);

// Задача 3: Сортируем игроков по количеству забитых голов, используя оператор spread
let sortedByGoals = [...playersWithGoals].sort((a, b) => b.goals - a.goals);

console.log("Игроки, отсортированные по количеству забитых голов:");
console.log(sortedByGoals);
