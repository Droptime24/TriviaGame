
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

    


function displayQuestions(){
    for (i = 0; i < myQuestions.length; i++) {
        question = myQuestions[i];
        console.log(question)
    };
};
displayQuestions()