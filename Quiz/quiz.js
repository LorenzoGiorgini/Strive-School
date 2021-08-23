/*
QUIZ GAME!

RULES:
/ The player must guess correctly a certain amount of questions
/ Each correct answer gives him one point
/ Answers could be multiple or true/false
/ At the end of the game, the user must know his/her total score

QUESTIONS:
/ You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
/ Could be multiple of boolean (true / false)
/ [EXTRA] Show if the answer provided was the wrong one or correct it after clicking
/ [EXTRA] Present the questions one a time instead of having all displayed together

HINTS:
/ Keep a global variable score for the user score
/ Keep a variable questionNumber for the question the user is answering
/ When questionNumber is bigger then the available questions, present the score
/ Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know it!)
/ Start with the easier version and THEN implement the EXTRAs
/ Please debug everything / try it on the console to be sure of what to expect from your code

EXTRA:
/ Show if the answer provided was the wrong one or correct it after clicking
/ Present the questions one a time instead of having all displayed together
/ Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)
*/
var questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

// IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
// HINT: for each question, create a container with the "question"
// create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
// when EVERY question has an answer (google for how to get a value from a radio button with JS)
// IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
// Display first question with a title + radio button
// when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.

// HOW TO calculate the result
// You can do it in 2 ways:
// If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer

window.onload = function () {
  initQuestion(info.questionCount);
};

const quizContainer = document.getElementById("quiz-container");
const correct = document.getElementById("correct");
const remaining = document.getElementById("remaining");
remaining.innerText = "Remaining: " + questions.length;

let info = {
  correctAnswers: 0,
  remaining: 0,
  questionCount: 0
};

// Initializes the page by showing the desired question
const initQuestion = (index) => {
  const title = document.createElement("div");
  title.id = "title";

  title.innerHTML = `<p>${questions[index].question}</p>`;
  quizContainer.append(title);

  const answers = [];

  answers.push(questions[index].correct_answer);
  answers.push(...questions[index].incorrect_answers);

  let trash = [];
  let correctOne;
  answers.forEach( (text) => {

    const question = document.createElement("div");
    question.classList.add("answer");

    question.innerHTML = `<p>${text}</p>`;
    quizContainer.appendChild(question);
    trash.push(question);

    if (text === questions[index].correct_answer) {
      correctOne = question;
    }

    question.addEventListener("click", () => {
      if (question.innerText === questions[index].correct_answer) {
        checkSelected(true, question, trash, correctOne);
      } else {
        checkSelected (false, question, trash, correctOne);
      }
    });
  });
};

const checkSelected = async (flag, item, trash, correctOne) => {
  if (flag) {
    item.classList.add("correct");
    info.correctAnswers++;
  } else {
    item.classList.add("incorrect");
    correctOne.classList.add("correct");
  }
  info.questionCount++;

  correct.innerText = `Correct answers: ${info.correctAnswers}`;
  remaining.innerText = `Remaining: ${questions.length - info.questionCount}`;

  await new Promise(r => setTimeout(r, 2000));

  trash.forEach( (element) => {
    quizContainer.removeChild(element);
  })

  document.getElementById("title").remove();

  initQuestion(info.questionCount);
};