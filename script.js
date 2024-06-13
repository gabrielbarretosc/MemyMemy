const questions = [
    {
        question: "Qual é a cor favorita do meu amor?",
        options: ["Azul", "Preto", "Verde", "Roxo"],
        answer: 1
    },
    {
        question: "Qual é o nosso lugar favorito para sair?",
        options: ["Cinema", "Praia", "Parque", "Restaurante"],
        answer: 3
    },
    {
        question: "Qual é o nosso time em comum?",
        options: ["Vitória", "Bahia", "Manchester", "Nenhum"],
        answer: 1
    },
    {
        question: "Qual é o nosso dia da semana favorito?",
        options: ["Sexta-feira", "Sábado", "Domingo", "Quarta-feira"],
        answer: 1
    },
    {
        question: "Qual é a nossa comida favorita?",
        options: ["Pizza", "Sushi", "Hambúrguer", "Salada"],
        answer: 1
    },
    {
        question: "Qual é o nosso animal favorito?",
        options: ["Cachorro", "Gato", "Pássaro", "Peixe"],
        answer: 0
    },
    {
        question: "Onde foi o primeiro beijo?",
        options: ["Carro de Gabriel", "Casa de Madson", "Uber", "Imbui"],
        answer: 2
    }
];

let currentQuestion = 0;

function startQuiz() {
    currentQuestion = 0;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByClassName("option");

    questionElement.innerText = questions[currentQuestion].question;
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = questions[currentQuestion].options[i];
    }
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Resposta errada! Tente novamente.");
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

startQuiz();
