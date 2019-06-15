
var right = 0;
var wrong = 0;

// Game questions & answers
var myQuestions = [{
    // question / answers 1
    question: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
    answers: [{
        a: 'Sapce Jam',
        b: 'The Looney Toones: Back in action',
        c: 'The Big Lebowski',
        d: 'Titanic',
    }],
    correctAnswer: 'Sapce Jam',
}, {
    // question / answers 2
    question: "In 1999, a gallon of gas was?",
    answers: [{
        a: '$1.10',
        b: '$2.10',
        c: '$1.20',
        d: '$.99',
    }],
    correctAnswer: '$1.20'
}, {
    // question / answers 3
    question: "In 2002, VH1 dubbed what 90's song the greatest one-hit wonder of all time?",
    answers: [{
        a: 'Bitter Sweet Symphony - The Verve',
        b: 'Save Tonight - Eagle Eye Chery',
        c: 'Mambo No. 5 - Lou Bega',
        d: 'Macarena (Bayside Boys Mix) - Los Del Rio',
    }],
    correctAnswer: 'Macarena (Bayside Boys Mix) - Los Del Rio',
}, {
    // question / answers 4
    question: "To get online, you had to use _______ to connect to the internet?",
    answers: [{
        a: 'A really long extension cord',
        b: 'You called the operator',
        c: 'Dial-Up or NetScape',
        d: 'Magic Jack',
    }],
    correctAnswer: 'Dial-Up or NetScape',
}, {
    // question / answers 5
    question: "In 1999, what popular childrens toy did the NSA declare an international threat?",
    answers: [{
        a: 'Tamagotchi',
        b: 'Furby',
        c: 'Nerf Guns',
        d: 'Gameboy',
    }],
    correctAnswer: 'Furby',
}];
//   start timer
$("#start").on("click", start);

// Display question & answers to screen
function displayQuestion() {
    for (i = 0; i < myQuestions.length; i++) {
    questions[0].quesiton
     $("qustion1").text(quesion.question)
        
    }console.log(question 1
        )
}

function start() {
    
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    timer--;
    $("#timer").html("<h1>" + timer + "</h1>");
    if (timer === 0) { 
        stop();
        alert("Time Up!");
    }
};

// end game
function stop() {
    clearInterval(intervalId)
}