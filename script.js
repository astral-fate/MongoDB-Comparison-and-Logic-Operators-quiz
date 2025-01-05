const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const questions = [
  {
    question: "Which of the following statements is represented by the MongoDB filter: {$or: [{'day': {$gt: 12, $lt: 15}}, {'hour': 56.5}]}?",
    options: [
      "a) day <= 15 and day >= 12 or hour = 56.5",
      "b) (day <= 15 and day > 12) or hour = 56.5",
      "c) day <= 15 or day > 12 or hour = 56.5",
      "d) None of the above"
    ],
    answer: "b"
  },
  {
    question: "Which of the following statements is represented by the MongoDB filter: {Sor: [{'day': {$gt: 12, Slte: 15}}, {'hour': 56.5}]}?",
    options: [
      "a) day <= 15 and day >= 12 or hour = 56.5",
      "b) (day <= 15 and day > 12) or hour = 56.5",
      "c) day <= 15 or day > 12 or hour = 56.5",
      "d) None of the above"
    ],
    answer: "d"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? 'Iname': 'Justin', 'Iname': 'Mark', 'ssn': '11341102', 'salary': 4070.00, 'superssn': '1117600', 'phone': 12345, 'phone': 7998710",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'fname': 'Ali', 'minit': 'n', 'lname': 'Mohamed', 'ssn': '1123411102', 'salary': 56000.00 }",
    options: ["a) Correct", "b) Not correct"],
    answer: "a"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'ssn': 523, 'address': 'Cairo', 'Address': 'Giza' }",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Which of the following is not a valid MongoDB filter?",
    options: [
      "a) { 'dno': {$gte: 14, $lte: 16} }",
      "b) { $and: [{'dno': 14}, {salary: 7.5}] }",
      "c) { $or: [{'dno': {$gte: 14, $lte: 16}}, {salary: 7.5}] }",
      "d) None of the above"
    ],
    answer: "d"
  },
  {
    question: "Which of the following statements is represented by the MongoDB filter: {Sand: [{'dno': {Snot: {Seq: 8}}}, {'month': {Shin: [5, 9, 10]}}, {'gender': 'F'}]}?",
    options: [
      "a) dno != 8 and month is not in {5, 9, 10} and gender = F",
      "b) dno != 8 and month is in {5, 9, 10} and gender = F",
      "c) dno = 8 and month is not in {5, 9, 10} and gender = F",
      "d) None of the above"
    ],
    answer: "b"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? 'ssn': '112341102', 'bdate': DATE('1968-01-12'), 'address': '2342 May', 'Atlanta', 'GA', 'salary': 46500.00, 'superssn': '11541100'",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Which of the following statements is represented by the MongoDB filter: { 'day': {Sgte: 14, $lte: 16} }?",
    options: [
      "a) day > 14 and day <= 16",
      "b) day >= 14 and day < 16",
      "c) day >= 14 and day <= 16",
      "d) None of the above"
    ],
    answer: "c"
  },
  {
    question: "Which one of the following is a valid MongoDB filter?",
    options: [
      "a) { $or: [{'dno': {$gte: 14, $lte: 16}}, {salary: 25000}] }",
      "b) { $or: [{'dno': {$gte: 14, 16}}, {salary, $lte: 25000}] }",
      "c) { $or: [{'dno': {14, $lte: 16}}, {$gte: 25000}] }",
      "d) None of the above"
    ],
    answer: "a"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'fname': 'Justin', 'lname': 'Mark', 'ssn': '11341102', 'salary': 4070.00, 'superssn': '1117600', 'phone': 12345, 'phone': 7998710 }",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Which of the following statements is represented by the MongoDB filter: {$or: [{'day': {$gt: 12, $ltc: 15}}, {'hour': 56.5}]}?",
    options: [
      "a) day <= 15 and day >= 12 or hour = 56.5",
      "b) (day <= 15 and day > 12) or hour = 56.5",
      "c) day <= 15 or day > 12 or hour = 56.5",
      "d) None of the above"
    ],
    answer: "d"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'fname': 'Justin', 'Iname': 'Mark', 'ssn': '111111102', 'salary': 40000.00, 'superssn': '111111100', 'phone': 12345, 'is a manager': TRUE }",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'fname': 'Justin', 'Iname': 'Mark', 'ssn': '11341102', 'salary': 4070.00, 'superssn': '1117600', 'phone': 12345 }",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'fname': 'Mohamed', 'lname': 'Mahmod', 'ssn': '11165102', 'salary': 4600.00, 'superssn': '761100', 'dno': NULL, 'phone': 12345 }",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Does the following code represent a JSON document in a standard format? { 'ssn': '112341102', 'bdate': DATE('1968-01-12'), 'address': '2342 May', 'Atlanta', 'GA', 'salary': 46500.00, 'superssn': '11541100' }",
    options: ["a) Correct", "b) Not correct"],
    answer: "b"
  },
  {
    question: "Which of the following statements is represented by the MongoDB filter: { 'day': {Sgtc: 14, Slte: 16} }?",
    options: [
      "a) day > 14 and day <= 16",
      "b) day >= 14 and day < 16",
      "c) day >= 14 and day <= 16",
      "d) None of the above"
    ],
    answer: "d"
  },
  {
    question: "Which one of the following is a valid MongoDB filter?",
    options: [
      "a) { $or: [{'dno': {$gte: 14, $lte: 16}}, {salary: 25000}] }",
      "b) { $or: [{'dno': {$gte: 14, 16}}, {salary, $lte: 25000}] }",
      "c) { $or: [{'dno': {14, $lte: 16}}, {$gte: 25000}] }",
      "d) None of the above"
    ],
    answer: "a"
  },
  {
    question: "What does the runtime error 'Runtime error 217 at 0040A300' indicate?",
    options: [
      "a) Memory access violation",
      "b) Division by zero",
      "c) Invalid operation",
      "d) None of the above"
    ],
    answer: "a"
  }
];

// Dynamically render questions
function renderQuestions() {
  const form = document.getElementById('quiz-form');
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${index}" value="${opt.charAt(0)}">
            ${opt}
          </label><br>
        `).join('')}
      </div>
    `;
    form.appendChild(questionDiv);
  });
}

// Check answers
function checkAnswers() {
  let score = 0;
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  });
  return score;
}

// Event listener for submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const score = checkAnswers();
  resultDiv.textContent = `You scored ${score} out of ${questions.length}!`;
});

// Render questions on page load
document.addEventListener('DOMContentLoaded', renderQuestions);
