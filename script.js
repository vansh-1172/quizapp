// --- DATABANK (50 provided, expand up to 250 here) ---
const questionBank = [
    { q: "Which of the following is a 'falsy' value?", options: ["[]", "'false'", "0", "{}"], answer: "0" },
    { q: "What is the output of 'typeof NaN'?", options: ["number", "NaN", "undefined", "object"], answer: "number" },
    { q: "Which keyword prevents object modification?", options: ["const", "Object.freeze()", "Object.seal()", "static"], answer: "Object.freeze()" },
    { q: "What does '...' operator do in arrays?", options: ["Spread", "Rest", "Addition", "Concatenation"], answer: "Spread" },
    { q: "Which method joins array elements into a string?", options: ["pop()", "join()", "concat()", "push()"], answer: "join()" },
    { q: "What is '2' + 2?", options: ["4", "NaN", "22", "Error"], answer: "22" },
    { q: "Which of these is NOT a loop?", options: ["for", "foreach", "while", "do-until"], answer: "do-until" },
    { q: "Result of 'true && false'?", options: ["true", "false", "undefined", "null"], answer: "false" },
    { q: "How to access the first array element?", options: ["arr[1]", "arr(0)", "arr[0]", "arr.first()"], answer: "arr[0]" },
    { q: "Function to parse string to integer?", options: ["parseInt()", "Integer.parse()", "parse()", "Number.parse()"], answer: "parseInt()" },
    { q: "Default value of uninitialized variable?", options: ["null", "0", "undefined", "NaN"], answer: "undefined" },
    { q: "Event for clicking an HTML element?", options: ["onmouseclick", "onchange", "onclick", "onhover"], answer: "onclick" },
    { q: "What does DOM stand for?", options: ["Data Object Model", "Document Object Model", "Display Object Model", "Document Orion Mode"], answer: "Document Object Model" },
    { q: "Strict equality operator?", options: ["==", "===", "=", "!="], answer: "===" },
    { q: "How to write a comment?", options: ["// comment", "", "# comment", "/* comment */"], answer: "// comment" },
    { q: "Method to add element to beginning of array?", options: ["push()", "pop()", "unshift()", "shift()"], answer: "unshift()" },
    { q: "What does JSON.stringify() do?", options: ["Parses JSON", "Object to string", "String to object", "Deletes JSON"], answer: "Object to string" },
    { q: "Keyword for block-scoped variable?", options: ["var", "let", "global", "set"], answer: "let" },
    { q: "Method to remove last array element?", options: ["pop()", "shift()", "slice()", "splice()"], answer: "pop()" },
    { q: "What is an IIFE?", options: ["Internal Function", "Immediately Invoked Function Expression", "Instant Item Function", "None"], answer: "Immediately Invoked Function Expression" },
    { q: "Promise state for failure?", options: ["pending", "fulfilled", "rejected", "settled"], answer: "rejected" },
    { q: "Result of Array.isArray([])?", options: ["true", "false", "undefined", "object"], answer: "true" },
    { q: "How to find string length?", options: ["len()", "length", "size()", "count()"], answer: "length" },
    { q: "Symbol for template literals?", options: ["'", "\"", "`", "#"], answer: "`" },
    { q: "Keyword to create a class?", options: ["class", "constructor", "create", "new"], answer: "class" },
    { q: "What does 'this' refer to in a global context?", options: ["window object", "document object", "undefined", "null"], answer: "window object" },
    { q: "Which function delays execution?", options: ["setInterval", "setTimeout", "delay", "wait"], answer: "setTimeout" },
    { q: "Method to select element by ID?", options: ["querySelector", "getElementById", "selectId", "getId"], answer: "getElementById" },
    { q: "Which is a JS framework/library?", options: ["Django", "Laravel", "React", "Flask"], answer: "React" },
    { q: "Correct syntax for arrow function?", options: ["() => {}", "=> {}", "function() => {}", "() -> {}"], answer: "() => {}" },
    { q: "How to check if a property exists in an object?", options: ["exists()", "in operator", "has()", "includes()"], answer: "in operator" },
    { q: "Which operator is used to assign a value?", options: ["*", "-", "=", "=="], answer: "=" },
    { q: "Method to combine two arrays?", options: ["merge()", "concat()", "append()", "join()"], answer: "concat()" },
    { q: "What does 'break' do in a loop?", options: ["Pauses loop", "Exits loop", "Skips iteration", "Restarts loop"], answer: "Exits loop" },
    { q: "Difference between let and var?", options: ["Scoping", "Hoisting behavior", "Both Scoping and Hoisting", "None"], answer: "Both Scoping and Hoisting" },
    { q: "Method to get the index of an item in an array?", options: ["findIndex()", "indexOf()", "search()", "position()"], answer: "indexOf()" },
    { q: "How to convert a string to lowercase?", options: ["toLowerCase()", "lower()", "downCase()", "toLower()"], answer: "toLowerCase()" },
    { q: "Which symbol is the logical OR operator?", options: ["&&", "||", "!", "|"], answer: "||" },
    { q: "What is 'NaN' type?", options: ["String", "Number", "Boolean", "Object"], answer: "Number" },
    { q: "Method to remove the first element of an array?", options: ["pop()", "shift()", "splice()", "slice()"], answer: "shift()" },
    { q: "What does Math.random() return?", options: ["0 to 1 inclusive", "0 to <1", "1 to 10", "Any integer"], answer: "0 to <1" },
    { q: "Which object represents the browser window?", options: ["Document", "Window", "Screen", "Navigator"], answer: "Window" },
    { q: "What is closure?", options: ["Function with preserved data", "A locked object", "Ended loop", "Private variable"], answer: "Function with preserved data" },
    { q: "How to clear a timer?", options: ["stopTimer()", "clearTimeout()", "removeTimer()", "delete()"], answer: "clearTimeout()" },
    { q: "Operator to check if value is NOT equal?", options: ["!=", "==", "!==", "="], answer: "!=" },
    { q: "Property to get HTML content of element?", options: ["textContent", "innerHTML", "htmlValue", "content"], answer: "innerHTML" },
    { q: "Which method is used to sort an array?", options: ["order()", "arrange()", "sort()", "sequence()"], answer: "sort()" },
    { q: "How to trigger an alert box?", options: ["msgBox()", "alert()", "prompt()", "notify()"], answer: "alert()" },
    { q: "What does 'typeof undefined' return?", options: ["undefined", "object", "null", "string"], answer: "undefined" },
    { q: "What is the purpose of 'use strict'?", options: ["Faster code", "Strict parsing and error handling", "Minify code", "Allow bad syntax"], answer: "Strict parsing and error handling" }
];

// --- APP STATE ---
let activeQuestions = [];
let userAnswers = []; // Stores the selected answer strings
let currentIndex = 0;
let tempSelection = null; // Holds the user's choice before clicking submit

// --- DOM ELEMENTS ---
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    qTracker: document.getElementById('question-tracker'),
    qText: document.getElementById('question-text'),
    optionsList: document.getElementById('options-list'),
    prevBtn: document.getElementById('prev-btn'),
    skipBtn: document.getElementById('skip-btn'),
    submitBtn: document.getElementById('submit-btn'),
    finalScore: document.getElementById('final-score'),
    reviewContainer: document.getElementById('review-container')
};

// --- UTILITY: Shuffle Array ---
function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- INITIALIZATION ---
document.getElementById('start-btn').addEventListener('click', startTest);

function startTest() {
    // 1. Shuffle master bank and pick 25
    activeQuestions = shuffle(questionBank).slice(0, 25);
    
    // 2. Shuffle the options for each selected question
    activeQuestions = activeQuestions.map(q => ({
        ...q,
        shuffledOptions: shuffle(q.options)
    }));

    // 3. Reset state
    userAnswers = new Array(25).fill(null);
    currentIndex = 0;

    // 4. Switch screens
    screens.start.classList.add('hidden');
    screens.quiz.classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    tempSelection = userAnswers[currentIndex]; // Load previous answer if going back
    const q = activeQuestions[currentIndex];

    // Update UI
    ui.qTracker.innerText = `Question ${currentIndex + 1} / 25`;
    ui.qText.innerText = q.q;
    ui.optionsList.innerHTML = '';
    
    // Handle Button States
    ui.prevBtn.disabled = currentIndex === 0;
    ui.submitBtn.innerText = currentIndex === 24 ? "Finish Test" : "Submit Answer";

    // Render Options
    q.shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        if (tempSelection === opt) btn.classList.add('selected');
        
        btn.innerText = opt;
        btn.onclick = () => selectOption(opt, btn);
        ui.optionsList.appendChild(btn);
    });
}

function selectOption(selectedOpt, btnElement) {
    tempSelection = selectedOpt;
    
    // Remove selected class from all, add to clicked
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
}

// --- NAVIGATION EVENTS ---
ui.submitBtn.addEventListener('click', () => {
    // Save state
    userAnswers[currentIndex] = tempSelection;
    moveToNext();
});

ui.skipBtn.addEventListener('click', () => {
    // Save current selection (or null if they selected nothing)
    userAnswers[currentIndex] = tempSelection; 
    moveToNext();
});

ui.prevBtn.addEventListener('click', () => {
    // Save current progress before going back
    userAnswers[currentIndex] = tempSelection;
    currentIndex--;
    loadQuestion();
});

function moveToNext() {
    if (currentIndex < 24) {
        currentIndex++;
        loadQuestion();
    } else {
        finishTest();
    }
}

// --- RESULTS & REVIEW ---
function finishTest() {
    screens.quiz.classList.add('hidden');
    screens.result.classList.remove('hidden');

    let score = 0;
    ui.reviewContainer.innerHTML = '';

    activeQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;
        
        if (isCorrect) score++;

        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review-item');
        reviewDiv.classList.add(isCorrect ? 'correct' : 'incorrect');

        const userText = userAnswer ? userAnswer : "Skipped";

        reviewDiv.innerHTML = `
            <p class="q-title">Q${index + 1}: ${q.q}</p>
            <p>Your Answer: <span class="${isCorrect ? 'text-correct' : 'text-incorrect'}">${userText}</span></p>
            ${!isCorrect ? `<p>Correct Answer: <span class="text-correct">${q.answer}</span></p>` : ''}
        `;

        ui.reviewContainer.appendChild(reviewDiv);
    });

    ui.finalScore.innerText = score;
}