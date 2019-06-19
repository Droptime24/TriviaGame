var rightAnswers = 0;
var wrongAnswers = 0;
var intervalId;
var timer = 60;

// Game questions & answers
var myQuestions = [
    {
        // question / answers 1
        question: "Which 90's movie featured the Looney Tunes on its soundtrack?",
        answers: [
            'Space Jam',
            'The Looney Toones: Back in action',
            'The Big Lebowski',
            'Titanic'
        ],
        correctAnswer: 'Space Jam'
    },
    {
        // question / answers 2
        question: 'In 1999, a gallon of gas was?',
        answers: ['$1.10', '$2.10', '$1.20', '$.99'],

        correctAnswer: '$1.20'
    },
    {
        // question / answers 3
        question:
            "In 2002, VH1 dubbed what 90's song the greatest one-hit wonder of all time?",
        answers: [
            'Bitter Sweet Symphony - The Verve',
            'Save Tonight - Eagle Eye Chery',
            'Mambo No. 5 - Lou Bega',
            'Macarena (Bayside Boys Mix) - Los Del Rio'
        ],

        correctAnswer: 'Macarena (Bayside Boys Mix) - Los Del Rio'
    },
    {
        // question / answers 4
        question:
            'To get online, you had to use _______ to connect to the internet?',
        answers: [
            'A really long extension cord',
            'You called the operator',
            'Dial-Up or NetScape',
            'Magic Jack'
        ],
        correctAnswer: 'Dial-Up or NetScape'
    },
    {
        // question / answers 5
        question:
            'In 1999, what popular childrens toy did the NSA declare an international threat?',
        answers: ['Tamagotchi', 'Furby', 'Nerf Guns', 'Gameboy'],
        correctAnswer: 'Furby'
    }
];
// console.log(myQuestions);

// Display question & answers to screen
function displayQuestion() {
    
    for (i = 0; i < myQuestions.length; i++) {
        $('#question' + i).html(myQuestions[i].question);
        var answers = myQuestions[i].answers;
        $('#answers' + i).empty();
        for (j = 0; j < answers.length; j++) {
            var newDiv = $('<div>');
            var input = $('<input type="radio" name="answer' + i + '">');
            newDiv.append(input);
            newDiv.append(answers[j]);

            $('#answers' + i).append(newDiv);
        }
    }
}

//   start timer
$('#start').on('click', run);

function run() {
    rightAnswers = 0;
    wrongAnswers = 0;
    $('#right').html(rightAnswers);
    $('#wrong').html(wrongAnswers);
    clearInterval(intervalId);
    timer = 60;
    intervalId = setInterval(decrement, 1000);
    displayQuestion();
}



function decrement() {
    timer--;
    $('#timer').text(timer);
    if (timer === 0) {
        stop();
        alert('Times Up!!');
    }
};

$('#stop').on('click', stop);

function stop() {
    // var selected = $("#answers").val($("input:checked"));
    var selected = $('input:checked');
    console.log(selected)
    clearInterval(intervalId);

    for (var i = 0; i < selected.length; i++) {

        var userSelected = selected[i].nextSibling.nodeValue;
        console.log(userSelected)
        
        if (userSelected === myQuestions[i].correctAnswer) {
            rightAnswers++;
            
            // console.log(rightAnswers);
        } else {
            wrongAnswers++;
            // console.log(wrongAnswers);
        }

    }
    $('#right').html(rightAnswers);
    $('#wrong').html(wrongAnswers);
}

// check answers and display right/wrong