const questions = [
  {
    question: "What is the capital of South Korea?",
    answers: ["London", "Paris", "Berlin", "Seoul"],
    correct: "Seoul"
  },
  {
    question: "Who is the creator of JavaScript?",
    answers: ["Guido van Rossum", "Brendan Eich", "James Gosling", "Larry Wall"],
    correct: "Brendan Eich"
  },
  {
    question: "Which language is the most popular in the world?",
    answers: ["English", "Korean", "Mandarin", "Spanish"],
    correct: "English"
  }
]

let currentQuestion = 0
let score = 0

function loadQuestion() {
  const q = questions[currentQuestion]
  document.getElementById("question").textContent = q.question
  document.getElementById("answers").innerHTML = ""
  document.getElementById("result").textContent = ""

  q.answers.forEach(answer => {
    const button = document.createElement("button")
    button.textContent = answer
    button.onclick = () => checkAnswer(answer)
    document.getElementById("answers").appendChild(button)
  })
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct
  if (selected === correct) {
    score++
    document.getElementById("result").textContent = "✅ Correct!"
  } else {
    document.getElementById("result").textContent = "❌ Wrong! Answer was: " + correct
  }

  currentQuestion++
  setTimeout(() => {
    if (currentQuestion < questions.length) {
      loadQuestion()
    } else {
      document.getElementById("question").textContent = "Quiz done! Your score: " + score + "/" + questions.length
      document.getElementById("answers").innerHTML = ""
      document.getElementById("result").textContent = ""
    }
  }, 1000)
}

loadQuestion()