let score = 0;

const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = num1 * num2;

document.getElementById('question').textContent = `Сколько будет ${num1} * ${num2}?`;

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    if (userAnswer === correctAnswer) {
        score++;
    } else {
        score--;
    }

    scoreElement.textContent = score;
    generateNewQuestion();
}

function generateNewQuestion() {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const newCorrectAnswer = newNum1 * newNum2;

    document.getElementById('question').textContent = `Сколько будет ${newNum1} * ${newNum2}?`;
    correctAnswer = newCorrectAnswer;
    document.getElementById('answer').value = '';
}