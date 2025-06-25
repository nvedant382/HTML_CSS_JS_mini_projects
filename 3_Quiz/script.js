const questions = [
    {
        question: "What is capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
            { text: "New Delhi", correct: false },
        ],
    },
    {
        question: "Which is known as Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: false },
            { text: "Neptune", correct: false },
        ],
    },
    {
        question: "Who Wrote Hamlet",
        answers: [
            { text: "Mark Twain", correct: false },
            { text: "Jane Austin", correct: false },
            { text: "W Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
        ],
    },
];

const questionElement = document.querySelector("#question");
const questionButtons = document.querySelector("#answers-button");
const nextBtn = document.querySelector("#next-btn");

const timerElement = document.getElementById("timer");
let timerInterval;

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    timerElement.style.display = "block";
    showQuestion();
}

function startTimer() {
    timeLeft = 7;
    timerElement.innerText = `Time Left: ${timeLeft}`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            autoSelectAnswer();
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(timerInterval);
}

function autoSelectAnswer() {
    Array.from(questionButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        questionButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer)
    })
    startTimer();
}

function resetState() {
    nextBtn.style.display = "none"
    while (questionButtons.firstChild) {
        questionButtons.removeChild(questionButtons.firstChild);
    }
}

function selectAnswer(e) {
    stopTimer();
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;
        selectBtn.classList.add("correct");
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(questionButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })

    nextBtn.style.display = "block"
}

function showScore() {
    resetState();

    questionElement.innerHTML = `Your Score: ${score} out of ${questions.length}`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = "block"
    timerElement.style.display = "none";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();