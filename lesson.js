"use strict";

const lessonData = {
  name: "Example Course",
  allQuestions: [
    {
      quiz1: {
        questions: [
          {
            question: "What does 'verde' mean?",
            choices: ["house", "tree", "apple", "green"],
            correctAnswer: "green",
          },
          {
            question: "What does 'azul' mean?",
            choices: ["sky", "ocean", "banana", "blue"],
            correctAnswer: "blue",
          },
          {
            question: "What does 'blanco' mean?",
            choices: ["car", "cloud", "sun", "white"],
            correctAnswer: "white",
          },
          {
            question: "What does 'negro' mean?",
            choices: ["moon", "cat", "dog", "black"],
            correctAnswer: "black",
          },
          {
            question: "What does 'música' mean?",
            choices: ["book", "movie", "song", "music"],
            correctAnswer: "music",
          },
          {
            question: "What does 'arte' mean?",
            choices: ["food", "painting", "sport", "art"],
            correctAnswer: "art",
          },
          {
            question: "What does 'baile' mean?",
            choices: ["friend", "party", "dance", "school"],
            correctAnswer: "dance",
          },
          {
            question: "What does 'viaje' mean?",
            choices: ["home", "trip", "work", "beach"],
            correctAnswer: "trip",
          },
          {
            question: "What does 'dinero' mean?",
            choices: ["water", "food", "money", "shoes"],
            correctAnswer: "money",
          },
          {
            question: "What does 'éxito' mean?",
            choices: ["failure", "luck", "success", "dream"],
            correctAnswer: "success",
          },
        ],
        totalQuestions: 10,
        available: true,
        complete: false,
        accuracyArr: [],
        accuracy: 100,
      },
    },
    {
      quiz2: {
        questions: [
          {
            question: "What does 'familia' mean?",
            choices: ["house", "family", "city", "car"],
            correctAnswer: "family",
          },
          {
            question: "What does 'amigo' mean?",
            choices: ["teacher", "friend", "doctor", "neighbor"],
            correctAnswer: "friend",
          },
          {
            question: "What does 'comida' mean?",
            choices: ["drink", "food", "music", "movie"],
            correctAnswer: "food",
          },
          {
            question: "What does 'diversión' mean?",
            choices: ["game", "fun", "book", "party"],
            correctAnswer: "fun",
          },
          {
            question: "What does 'casa' mean?",
            choices: ["cat", "house", "dog", "bird"],
            correctAnswer: "house",
          },
          {
            question: "What does 'coche' mean?",
            choices: ["bike", "bus", "car", "train"],
            correctAnswer: "car",
          },
          {
            question: "What does 'gato' mean?",
            choices: ["cat", "dog", "fish", "rabbit"],
            correctAnswer: "cat",
          },
          {
            question: "What does 'libro' mean?",
            choices: ["pen", "book", "paper", "pencil"],
            correctAnswer: "book",
          },
          {
            question: "What does 'ciudad' mean?",
            choices: ["town", "village", "city", "country"],
            correctAnswer: "city",
          },
          {
            question: "What does 'país' mean?",
            choices: ["country", "continent", "world", "planet"],
            correctAnswer: "country",
          },
        ],
        totalQuestions: 10,
        available: false,
      },
    },
    {
      quiz3: {
        questions: [
          {
            question: "What does 'mundo' mean?",
            choices: ["world", "globe", "universe", "earth"],
            correctAnswer: "world",
          },
          {
            question: "What does 'pueblo' mean?",
            choices: ["village", "town", "neighborhood", "city"],
            correctAnswer: "village",
          },
          {
            question: "What does 'tiempo' mean?",
            choices: ["time", "weather", "hour", "day"],
            correctAnswer: "time",
          },
          {
            question: "What does 'clima' mean?",
            choices: ["climate", "weather", "temperature", "season"],
            correctAnswer: "weather",
          },
          {
            question: "What does 'estación' mean?",
            choices: ["season", "station", "period", "moment"],
            correctAnswer: "season",
          },
          {
            question: "What does 'reloj' mean?",
            choices: ["watch", "clock", "timepiece", "alarm"],
            correctAnswer: "clock",
          },
          {
            question: "What does 'persona' mean?",
            choices: ["person", "human", "individual", "creature"],
            correctAnswer: "person",
          },
          {
            question: "What does 'animal' mean?",
            choices: ["animal", "creature", "beast", "pet"],
            correctAnswer: "animal",
          },
          {
            question: "What does 'planta' mean?",
            choices: ["plant", "flower", "vegetable", "tree"],
            correctAnswer: "plant",
          },
          {
            question: "What does 'cosa' mean?",
            choices: ["thing", "object", "item", "stuff"],
            correctAnswer: "thing",
          },
        ],
        totalQuestions: 10,
        available: false,
      },
    },
    {
      quiz4: {
        questions: [
          {
            question: "What does 'agua' mean?",
            choices: ["air", "fire", "water", "earth"],
            correctAnswer: "water",
          },
          {
            question: "What does 'comer' mean?",
            choices: ["read", "write", "eat", "drink"],
            correctAnswer: "eat",
          },
          {
            question: "What does 'bebida' mean?",
            choices: ["food", "drink", "snack", "meal"],
            correctAnswer: "drink",
          },
          {
            question: "What does 'hombre' mean?",
            choices: ["woman", "man", "child", "adult"],
            correctAnswer: "man",
          },
          {
            question: "What does 'mujer' mean?",
            choices: ["man", "woman", "girl", "boy"],
            correctAnswer: "woman",
          },
          {
            question: "What does 'niño' mean?",
            choices: ["girl", "boy", "child", "adult"],
            correctAnswer: "boy",
          },
          {
            question: "What does 'niña' mean?",
            choices: ["girl", "boy", "child", "adult"],
            correctAnswer: "girl",
          },
          {
            question: "What does 'bien' mean?",
            choices: ["good", "bad", "happy", "sad"],
            correctAnswer: "good",
          },
          {
            question: "What does 'mal' mean?",
            choices: ["good", "bad", "happy", "sad"],
            correctAnswer: "bad",
          },
          {
            question: "What does 'feliz' mean?",
            choices: ["happy", "sad", "angry", "excited"],
            correctAnswer: "happy",
          },
        ],
        totalQuestions: 10,
        available: false,
      },
    },
    {
      quiz5: {
        questions: [
          {
            question: "What does 'triste' mean?",
            choices: ["happy", "sad", "angry", "excited"],
            correctAnswer: "sad",
          },
          {
            question: "What does 'enojado' mean?",
            choices: ["happy", "sad", "angry", "excited"],
            correctAnswer: "angry",
          },
          {
            question: "What does 'emocionado' mean?",
            choices: ["happy", "sad", "angry", "excited"],
            correctAnswer: "excited",
          },
          {
            question: "What does 'amor' mean?",
            choices: ["love", "hate", "friendship", "kindness"],
            correctAnswer: "love",
          },
          {
            question: "What does 'odio' mean?",
            choices: ["love", "hate", "friendship", "kindness"],
            correctAnswer: "hate",
          },
          {
            question: "What does 'amistad' mean?",
            choices: ["love", "hate", "friendship", "kindness"],
            correctAnswer: "friendship",
          },
          {
            question: "What does 'bondad' mean?",
            choices: ["love", "hate", "friendship", "kindness"],
            correctAnswer: "kindness",
          },
          {
            question: "What does 'comer' mean?",
            choices: ["read", "write", "eat", "drink"],
            correctAnswer: "eat",
          },
          {
            question: "What does 'bebida' mean?",
            choices: ["food", "drink", "snack", "meal"],
            correctAnswer: "drink",
          },
          {
            question: "What does 'hombre' mean?",
            choices: ["woman", "man", "child", "adult"],
            correctAnswer: "man",
          },
        ],
        totalQuestions: 10,
        available: false,
      },
    },
  ],
};

const lessonContentAll = document.querySelector(".lesson-content-all");
const lessoncCourseNameH1 = document.querySelector(".lesson-course-name-h1");
const lessonCompleteH2 = document.querySelector(".lesson-complete-h2");
const lessonAccuracyH2 = document.querySelector(".lesson-accuracy-h2");
const lessonContainer = document.querySelector(".lesson-bottom-div");
const quizzesContainer = document.querySelector(".quizzes");

const quizContainer = document.querySelector(".quiz-content");
const quizStickyBottomInfo = document.querySelector(".quiz-sticky-info-bottom");
const checkButton = document.querySelector(".quick-check-button");
const quizQuestion = document.querySelector(".quiz-question");
const quizQuestionCounter = document.querySelector(".question-counter");
const quizQuestionText = document.querySelector(".question-text");

const questionAnswer1 = document.querySelector(".question-answer-text-1");
const questionAnswer2 = document.querySelector(".question-answer-text-2");
const questionAnswer3 = document.querySelector(".question-answer-text-3");
const questionAnswer4 = document.querySelector(".question-answer-text-4");

const loadLessonPage = function () {
  const quizzesNum = lessonData.allQuestions.length;
  let quizNumber = 1;
  let indexNumber = 0;

  lessonData.allQuestions.forEach(() => {
    const currentQuiz = `quiz${quizNumber}`;
    const questionAmount =
      lessonData.allQuestions[indexNumber][currentQuiz].totalQuestions;

    quizzesContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="quiz-div" id='quiz-div-${quizNumber}'>
      <div class="quiz-main-content">
        <h3 class="quiz-h3">Quiz ${quizNumber}</h3>
        <p class="quiz-p">${questionAmount} questions</p>
      </div>
      <div class="quiz-side-content">
      ${
        lessonData.allQuestions[indexNumber][currentQuiz].available
          ? '<button class="quiz-start-button">Start Quiz</button>'
          : '<p class="quiz-not-available-head">Not Available</p><p class="quiz-not-available-description"> Finish the previous quizzes first!</p>'
      }        
      </div>
    </div>`
    );
    quizNumber++;
    indexNumber++;
  });
};

loadLessonPage();

document
  .querySelector(".quiz-start-button")
  .addEventListener("click", function () {
    initQuiz();
  });

const initQuiz = function () {
  let currentQuestion = 1;
  let correctQuestions = 0;
  let incorrectQuestions = 0;

  lessonContentAll.style.display = "none";
  quizContainer.style.display = "flex";
  quizStickyBottomInfo.style.display = "block";

  const currentQuizNum = document
    .querySelector(".quiz-start-button")
    .closest(".quiz-div")
    .id.slice(-1);

  const quizData =
    lessonData.allQuestions[currentQuizNum - 1][`quiz${currentQuizNum}`];

  const numTotalQuestions =
    lessonData.allQuestions[currentQuizNum - 1][`quiz${currentQuizNum}`]
      .questions.length;

  displayQuestion(
    currentQuestion,
    correctQuestions,
    incorrectQuestions,
    currentQuizNum,
    quizData,
    numTotalQuestions
  );
};

const displayQuestion = function (
  currentQuestion,
  correctQuestions,
  incorrectQuestions,
  currentQuizNum,
  quizData,
  numTotalQuestions
) {
  questionAnswer1.textContent =
    questionAnswer2.textContent =
    questionAnswer3.textContent =
    questionAnswer4.textContent =
      "";
  document.querySelector(".quiz-sticky-correct-container").style.display =
    "none";
  document.querySelector(".quiz-sticky-incorrect-container").style.display =
    "none";

  quizQuestionCounter.textContent = `Question ${currentQuestion} of ${numTotalQuestions}`;
  quizQuestionText.textContent =
    quizData.questions[currentQuestion - 1].question;
  questionAnswer1.textContent =
    quizData.questions[currentQuestion - 1].choices[0].charAt(0).toUpperCase() +
    quizData.questions[currentQuestion - 1].choices[0].slice(1);
  questionAnswer2.textContent =
    quizData.questions[currentQuestion - 1].choices[1].charAt(0).toUpperCase() +
    quizData.questions[currentQuestion - 1].choices[1].slice(1);
  questionAnswer3.textContent =
    quizData.questions[currentQuestion - 1].choices[2].charAt(0).toUpperCase() +
    quizData.questions[currentQuestion - 1].choices[2].slice(1);
  questionAnswer4.textContent =
    quizData.questions[currentQuestion - 1].choices[3].charAt(0).toUpperCase() +
    quizData.questions[currentQuestion - 1].choices[3].slice(1);

  for (let j = 1; j <= 4; j++) {
    document
      .querySelector(`#quiz-answer-${j}`)
      .addEventListener("click", function (e) {
        const answerNumClicked = Math.abs(e.target.id.slice(-1));
        checkAnswer(
          currentQuestion,
          correctQuestions,
          incorrectQuestions,
          currentQuizNum,
          quizData,
          numTotalQuestions,
          answerNumClicked
        );
      });
  }
};

const checkAnswer = function (
  currentQuestion,
  correctQuestions,
  incorrectQuestions,
  currentQuizNum,
  quizData,
  numTotalQuestions,
  answerNumClicked
) {
  let correctAnswer = quizData.questions[currentQuestion - 1].correctAnswer;
  let chosenAnswer =
    quizData.questions[currentQuestion - 1].choices[answerNumClicked - 1];
  console.log(chosenAnswer, correctAnswer);
  console.log("test1");

  if (correctAnswer === chosenAnswer) {
    correctQuestions++;
    document.querySelector(".quiz-sticky-correct-container").style.display =
      "block";
    document
      .querySelector(`.quiz-next-right-button`)
      .addEventListener("click", function (e) {
        currentQuestion++;
        displayQuestion(
          currentQuestion,
          correctQuestions,
          incorrectQuestions,
          currentQuizNum,
          quizData,
          numTotalQuestions
        );
      });
  } else {
    incorrectQuestions++;
    document.querySelector(".quiz-sticky-incorrect-container").style.display =
      "block";
    document.querySelector(".quiz-sticky-incorrect-answer-p").textContent =
      correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
    document
      .querySelector(`.quiz-next-wrong-button`)
      .addEventListener("click", function (e) {
        currentQuestion++;
        displayQuestion(
          currentQuestion,
          correctQuestions,
          incorrectQuestions,
          currentQuizNum,
          quizData,
          numTotalQuestions
        );
      });
  }
};
