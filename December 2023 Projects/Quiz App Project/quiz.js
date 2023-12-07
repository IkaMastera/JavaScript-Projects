const questions = [
    {
        question: "Who Founded Tbilisi ?",
        answers: [
            { text: "Vaxtang Gorgasali", correct: true},
            { text: "Shota Rustaveli", correct: false},
            { text: "Davit Agmashenebeli", correct: false},
            { text: "Tamar Mefe", correct: false},
        ]
    },
    {
        question: "Which is the most popular street in Tbilisi ?",
        answers: [
            { text: "Pekini", correct: false},
            { text: "Rustaveli", correct: true},
            { text: "Xiliani", correct: false},
            { text: "Vaja-Fshavela", correct: false},
        ]
    },
    {
        question: "What was old Tbilisi called originally ?",
        answers: [
            { text: "Seydabad", correct: true},
            { text: "Abanotubani", correct: false},
            { text: "caravanseriais", correct: false},
            { text: "Feisadod", correct: false},
        ]
    },
    {
        question: "When was Tbilisi Founded ?",
        answers: [
            { text: "521", correct: false},
            { text: "467", correct: false},
            { text: "458", correct: true},
            { text: "502", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();
