var myQuestions = [
    {
        question: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
        answers: {
            a: 'Sapce Jam',
            b: 'The Looney Toones: Back in action',
            c: 'The Big Lebowski',
            d: 'Titanic'
        },
        correctAnswer: 'a',
    },
    {
        question: "In 1999, a gallon of gas was?",
        answers: {
            a: '$1.10',
            b: '$2.10',
            c: '$1.20',
            d: '$.99',
        },
        correctAnswer: 'c',
    },
    {
        question: "In 2002, VH1 dubbed what 90's song the greatest one-hit wonder of all time?",
        answers: {
            a: 'Bitter Sweet Symphony - The Verve',
            b: 'Save Tonight - Eagle Eye Chery',
            c: 'Mambo No. 5 - Lou Bega',
            d: 'Macarena (Bayside Boys Mix) - Los Del Rio',
        },
        correctAnswer: 'd',
    },
    {
        question: "To get online, you had to use _______ to connect to the internet?",
        answers: {
            a: 'A really long extension cord',
            b: 'You called the operator',
            c: 'Dial-Up or NetScape',
            d: 'Magic Jack',
        },
        correctAnswer: 'c',
    },
    {
        question: "In 1999, what popular childrens toy did the NSA declare an international threat?",
        answers: {
            a: 'Tamagotchi',
            b: 'Furby',
            c: 'Nerf Guns',
            d: 'Gameboy',
        },
        correctAnswer: 'b',
    },
];
startGame()

// load random question
function startGame(onload) {

    $("#questions").html(myQuestions[0].question)
};
startGame()
// start timer
$("#timer").text("01:00")

function count() {
    time--;

    // 
    $("#timer").text(converted);
}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
} 
