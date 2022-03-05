const quizData = [
  {
   question: "In welchem Jahr tauchte der Begriff Meme erstmalig auf?",
   a: "1971",
   b: "1997",
   c: "2002",
   d: "1976",
   correct: "d",
  },
  {
   question: "Wann ist der internationale Planking-Tag?",
   a: "21. März",
   b: "15. Mai",
   c: "5. April",
   d: "9. September",
   correct: "b",
  },
  {
   question: "Aus welcher Serie stammt die Aussage Think, Mark?",
   a: "Invincible",
   b: "Marvel 616",
   c: "Doctor Who",
   d: "Lost",
   correct: "a",
  },
  {
   question: "Welches Jahr wird für die Meme-Kultur auch als Meilenstein bezeichnet?",
   a: "2020",
   b: "2016",
   c: "2012",
   d: "2015",
   correct: "b",
  },
  {
   question: "Was gibt es seit 2019?",
   a: "Ein Meme-Smartphone",
   b: "Meme-Sammelkarten",
   c: "Ein Meme-Kochbuch",
   d: "Ein Meme-Kartenspiel",
   correct: "d",
  },
  {
   question: "Auf welcher Internetseite findet man gute Memes?",
   a: "www.9gag.com",
   b: "www.whatdoyoumeme.com",
   c: "www.memetopia.com",
   d: "www.futurememes.com",
   correct: "a",
  },
  {
   question: "Wer erlangte 2011 mit dem Song Friday an großer Berühmtheit?",
   a: "Riton",
   b: "Kyle Craven",
   c: "Laina Morris",
   d: "Rebecca Black",
   correct: "d",
  },
  {
   question: "Wer ist keine Meme-Berühmtheit?",
   a: "Mia Teleric",
   b: "Sammy Griner",
   c: "Maggie Goldberg",
   d: "Kyle Craven",
   correct: "c",
  },
  {
   question: "Wie viele Memes gibt es bis dato?",
   a: "7 Milliarden",
   b: "Unendlich viele",
   c: "900 Millionen",
   d: "1 Milliarde",
   correct: "b",
  },
  {
   question: "Wie wird Kyle Craven noch genannt?",
   a: "Blinking Guy",
   b: "Disaster Boy",
   c: "Bad Luck Brian",
   d: "Success Kid",
   correct: "c",
  },
 ];
 const quiz = document.getElementById("quiz");
 const answerElements = document.querySelectorAll(".answer");
 const questionElement = document.getElementById("question");
 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const submitButton = document.getElementById("submit");
 let currentQuiz = 0;
 let score = 0;
 const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
 };
 const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
   if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
 };
 const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
 };
 loadQuiz();
 submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
   if (answer === quizData[currentQuiz].correct) score++;
   currentQuiz++;
   if (currentQuiz < quizData.length) loadQuiz();
   else {
    quiz.innerHTML = `
       <h2>Du hast ${score}/${quizData.length} Fragen richtig beantwortet! &#10024;</h2>
       <button onclick="history.go(0)">Nochmal spielen</button>
       `
   }
  }
 });
