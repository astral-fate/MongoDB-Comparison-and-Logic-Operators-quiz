const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
// Quiz data
const questions = [
  {
    question: "Which of the following statements is represented by the MongoDB filter?",
    code: '{$or: [{"day": {$gt: 12, $lt: 15}}, {"hour": 56.5}]}',
    options: [
      'day <= 15 and day >= 12 or hour = 56.5',
      '(day <= 15 and day > 12) or hour = 56.5',
      'day <= 15 or day > 12 or hour = 56.5',
      'None of the above'
    ],
    correct: 1,
    explanation: "The correct interpretation of the filter is that it matches documents where the day is greater than 12 and less than or equal to 15, or the hour is exactly 56.5."
  },
  {
    question: "Which of the following is not a valid MongoDB filter?",
    code: '{ "dno": {$gte:14,$lte:16} }',
    options: [
      '{ "dno": {$gte:14,$lte:16} }',
      '{ $and:[{"dno":14},{salary:7.5}} ]',
      '{ $or:[{"dno":{$gte:14,$lte:16}},{salary:7.5}} ]',
      'None of the above'
    ],
    correct: 1,
    explanation: "The second option is invalid due to incorrect syntax."
  },
  {
    question: "Does the following code represent a JSON document in a standard format?",
    code: `{
  "fname": "Justin",
  "lname": "Mark",
  "ssn": "11341102",
  "salary": 4070.00,
  "superssn": "1117600",
  "phone": 12345,
  "phone": 7998710
}`,
    options: [
      'Correct',
      'Not correct'
    ],
    correct: 1,
    explanation: "The JSON document is not valid because it contains duplicate keys ('phone')."
  },
  {
    question: "Which of the following is a valid MongoDB filter?",
    code: '{$or: [{"dno": {$gte:14, $lte:16}}, {salary:25000}]}',
    options: [
      '{$or: [{"dno": {$gte:14, $lte:16}}, {salary:25000}]}',
      '{$or: [{"dno": {$gte:14, 16}}, {salary,$lte:25000}]}',
      '{$or: [{"dno": {14, $lte:16}}, {$gte:25000}]}',
      'None of the above'
    ],
    correct: 0,
    explanation: "The first option is a valid MongoDB filter."
  },
  {
    question: "Does the following code represent a JSON document in a standard format?",
    code: `{
  "fname": "Ali",
  "minit": 'n',
  "lname": "Mohamed",
  "ssn": "1123411102",
  "salary": 56000.00
}`,
    options: [
      'Correct',
      'Not correct'
    ],
    correct: 1,
    explanation: "The JSON document is not valid because single quotes (') are used instead of double quotes (\")."
  },
  {
    question: "Which of the following statements is represented by the MongoDB filter?",
    code: '{ "day": {$gte:14, $lte:16} }',
    options: [
      'day >14 and day <=16',
      'day >=14 and day <16',
      'day >=14 and day <=16',
      'None of the above'
    ],
    correct: 2,
    explanation: "The filter matches documents where the day is greater than or equal to 14 and less than or equal to 16."
  },
  {
    question: "Does the following code represent a JSON document in a standard format?",
    code: `{
  "ssn": "112341102",
  "bdate": DATE("1968-01-12"),
  "address": "2342 May","Atlanta","GA",
  "salary": 46500.00,
  "superssn": "11541100"
}`,
    options: [
      'Correct',
      'Not correct'
    ],
    correct: 1,
    explanation: "The JSON document is not valid because the DATE function is not valid in JSON."
  },
  {
    question: "Which of the following is not a valid MongoDB filter?",
    code: '{ "dno": {$gte:14,$lte:16} }',
    options: [
      '{ "dno": {$gte:14,$lte:16} }',
      '{ $and:[{"dno":14},{salary:7.5}} ]',
      '{ $or:[{"dno":{$gte:14,$lte:16}},{salary:7.5}} ]',
      'None of the above'
    ],
    correct: 1,
    explanation: "The second option is invalid due to incorrect syntax."
  },
  {
    question: "Does the following code represent a JSON document in a standard format?",
    code: `{
  "fname": "Justin",
  "lname": "Mark",
  "ssn": "111111102",
  "salary": 40000.00,
  "superssn": "111111100",
  "phone": 12345,
  "is a manager": TRUE
}`,
    options: [
      'Correct',
      'Not correct'
    ],
    correct: 1,
    explanation: "The JSON document is not valid because TRUE should be written in lowercase as true."
  },
  {
    question: "Which of the following is a valid MongoDB filter?",
    code: '{$or: [{"dno": {$gte:14, $lte:16}}, {salary:25000}]}',
    options: [
      '{$or: [{"dno": {$gte:14, $lte:16}}, {salary:25000}]}',
      '{$or: [{"dno": {$gte:14, 16}}, {salary,$lte:25000}]}',
      '{$or: [{"dno": {14, $lte:16}}, {$gte:25000}]}',
      'None of the above'
    ],
    correct: 0,
    explanation: "The first option is a valid MongoDB filter."
  }
];

// Quiz state
let currentQuestion = 0;
let score = 0;

// DOM elements
const questionCountElement = document.getElementById('question-count');
const questionTextElement = document.getElementById('question-text');
const questionCodeElement = document.getElementById('question-code');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const feedbackTextElement = document.getElementById('feedback-text');
const nextButton = document.getElementById('next-button');

// Load a question into the UI
function loadQuestion() {
  const question = questions[currentQuestion];
  questionCountElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionTextElement.textContent = question.question;
  questionCodeElement.textContent = question.code;

  // Clear previous options
  optionsContainer.innerHTML = '';

  // Add new options
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.classList.add('option-button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });

  // Hide feedback and next button
  feedbackElement.classList.add('hidden');
  nextButton.classList.add('hidden');
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestion];
  const optionButtons = document.querySelectorAll('.option-button');

  // Disable all buttons after selection
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  // Highlight correct and incorrect answers
  optionButtons.forEach((button, index) => {
    if (index === question.correct) {
      button.classList.add('correct');
    } else if (index === selectedIndex) {
      button.classList.add('incorrect');
    }
  });

  // Show feedback
  if (selectedIndex === question.correct) {
    feedbackElement.classList.remove('hidden');
    feedbackElement.classList.add('correct');
    feedbackTextElement.textContent = `Correct! ${question.explanation}`;
    score++;
  } else {
    feedbackElement.classList.remove('hidden');
    feedbackElement.classList.add('incorrect');
    feedbackTextElement.textContent = `Incorrect. ${question.explanation}`;
  }

  // Show next button
  nextButton.classList.remove('hidden');
}

// Move to the next question or end the quiz
nextButton.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    // Quiz is complete
    alert(`Quiz complete! Your score is ${score}/${questions.length}.`);
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
});

// Load the first question when the page loads
loadQuestion();
