// main.js

// Array of questions
let questions = [
    "What is the capital of France?",
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];

// Array of options for each question
let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
];

// Array of correct answers
let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];

// Get DOM nodes
let quizContainer = document.querySelector('#quiz-container');
let submitBtn = document.querySelector('#submit-quiz');
let quizContainerHTML = '';

for (let i = 0; i < questions.length; i++) {
    quizContainerHTML+=`

    <div class="question">
        <h2>${questions[i]}</h2>
        <ul>
    `
    for (let j = 0; j < options[i].length; j++) {
        const answer = options[i][j];
        quizContainerHTML+=`
        <li>
            <label>${answer}</label>
            <input type="radio" name="question${i+1}" value="${answer}">
        </li>`
    }

    quizContainerHTML+='</ul></div>'
}

// set our quizContainerHTML sting as HTML content:
quizContainer.innerHTML = quizContainerHTML;


submitBtn.addEventListener('click', function() {
    // Get input, which is checked
    let selectedOption = document.querySelector(`input[name="question1"]:checked`);
    console.log(selectedOption.value);
})



