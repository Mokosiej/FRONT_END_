function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // преобразуем в метры

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Пожалуйста, введите корректные значения веса и роста.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2); // расчет ИМТ
    document.getElementById('bmiResult').innerText = `Ваш ИМТ: ${bmi}`;

    let interpretation = '';
    if (bmi < 18.5) {
        interpretation = 'Недостаточная масса тела';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = 'Норма';
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = 'Избыточная масса тела';
    } else {
        interpretation = 'Ожирение';
    }

    document.getElementById('bmiInterpretation').innerText = `Интерпретация: ${interpretation}`;
}