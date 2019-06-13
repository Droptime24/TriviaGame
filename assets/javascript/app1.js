
var myQuestions = [
    // 1
    "Which 90’s movie featured the Looney Tunes on its soundtrack?",
    // 2
    "In 1999, a gallon of gas was?",
    // 3
    "In 2002, VH1 dubbed what 90's song the greatest one-hit wonder of all time?",
    // 4
    "To get online, you had to use _______ to connect to the internet?",
    // 5
    "In 1999, what popular childrens toy did the NSA declare an international threat?"
];

var multChoice = [
    {
    answer: { 
        a: 'Sapce Jam',
        b: 'The Looney Toones: Back in action',
        c: 'The Big Lebowski',
        d: 'Titanic',
    },
    answer: { 
        a: '$1.10',
        b: '$2.10',
        c: '$1.20',
        d: '$.99',
    },
    answer: { 
        a: 'Bitter Sweet Symphony - The Verve',
        b: 'Save Tonight - Eagle Eye Chery',
        c: 'Mambo No. 5 - Lou Bega',
        d: 'Macarena (Bayside Boys Mix) - Los Del Rio',
    },
    answer: { 
        a: 'A really long extension cord',
        b: 'You called the operator',
        c: 'Dial-Up or NetScape',
        d: 'Magic Jack',
    },
    answer: { 
        a: 'Tamagotchi',
        b: 'Furby',
        c: 'Nerf Guns',
        d: 'Gameboy',
    },

}];

function displayQuestions(){
    for (i = 0; i < myQuestions.length; i++) {
        question = myQuestions;
        
        $('#question1').text(question[0]);
        $('#question2').text(question[1]);
        $('#question3').text(question[2]);
        $('#question4').text(question[3]);
        $('#question5').text(question[4]);
    };
};


function displayAnswers(){
    for (i = 0; i < multChoice.length; i++) {
        var multChoice;
        console.log(multChoice);
        // $('').text(answers[0]);
        // $('').text(question[1]);
        // $('').text(question[2]);
        // $('').text(question[3]);
        // $('').text(question[4]);
    };

};

