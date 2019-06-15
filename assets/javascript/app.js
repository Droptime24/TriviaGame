
var right = 0;
var wrong = 0;

// Game questions & answers
var myQuestions = [
    {
        // question / answers 1
        question: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
        answers: [
            'Sapce Jam',
            'The Looney Toones: Back in action',
            'The Big Lebowski',
            'Titanic',
        ],
        correctAnswer: 'Sapce Jam'
    },
    {
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

        correctAnswer: 'Macarena (Bayside Boys Mix) - Los Del Rio'
    }, {
        // question / answers 4
        question: "To get online, you had to use _______ to connect to the internet?",
        answers: [
            'A really long extension cord',
            'You called the operator',
            'Dial-Up or NetScape',
            'Magic Jack',
        ],
        correctAnswer: 'Dial-Up or NetScape'
    }, {
        // question / answers 5
        question: "In 1999, what popular childrens toy did the NSA declare an international threat?",
        answers: [
            'Tamagotchi',
            'Furby',
            'Nerf Guns',
            'Gameboy',],
        correctAnswer: 'Furby'
    }
];
displayQuestion()

//   start timer
$("#start").on("click", start);

// Display question & answers to screen
function displayQuestion() {
    for (i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i].question);
        $("#qustion").append(myQuestions[0].question);

    };

};
displayQuestion()

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
