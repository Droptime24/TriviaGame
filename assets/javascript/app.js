// variables
var score = 0;

// Game questions & answers
var myQuestions = [{
    // question / answers 1
    question: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
    answers: [
       'Sapce Jam',
        'The Looney Toones: Back in action',
        'The Big Lebowski',
        'Titanic',
    ],
    correctAnswer: 'Sapce Jam',
}, {
    // question / answers 2
    question: "In 1999, a gallon of gas was?",
    answers: [
        '$1.10',
        '$2.10',
        '$1.20',
        '$.99',
    ],
    correctAnswer: '$1.20'
}, {
    // question / answers 3
    question: "In 2002, VH1 dubbed what 90's song the greatest one-hit wonder of all time?",
    answers: [
        'Bitter Sweet Symphony - The Verve',
        'Save Tonight - Eagle Eye Chery',
        'Mambo No. 5 - Lou Bega',
        'Macarena (Bayside Boys Mix) - Los Del Rio',
    ],
    correctAnswer: 'Macarena (Bayside Boys Mix) - Los Del Rio',
}, {
    // question / answers 4
    question: "To get online, you had to use _______ to connect to the internet?",
    answers: [
        'A really long extension cord',
        'You called the operator',
        'Dial-Up or NetScape',
        'Magic Jack',
    ],
    correctAnswer: 'Dial-Up or NetScape',
}, {
    // question / answers 5
    question: "In 1999, what popular childrens toy did the NSA declare an international threat?",
    answers: [
        'Tamagotchi',
        'Furby',
        'Nerf Guns',
        'Gameboy',
    ],
    correctAnswer: 'Furby',
}];


var i = 0;

// Display question & answers to screen
function displayQuestion() {
    // for loop paret 2
    if (i < myQuestions.length) {
        var question = myQuestions[i++];
        question = question.question;
        $(".card-header").text(question);
    };
};
displayQuestion();
decrement()


   

  
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 30000);
}

var intervalId;
var time = 60;

function decrement() {
    number--;
    $("#timer").text(number);
    if (number === 0) {
        stop();
        alert("You're not very good at this game...");
    }
}

//  The stop function
function stop() {
    clearInterval(intervalId);
};
