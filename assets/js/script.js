/*
Psuedo Code:
- When the user clicks a start button, the quiz starts (eventlistener or .on)
- Make an array filled with questions
*/

//First, make the question objects
var question1 =  {
    question: "Commonly used data types DO NOT include:",
    answers: {
        a: 'string',
        b: 'booleans',
        c: 'alerts',
        d: 'numbers',
    },
    correctAnswer: 'c'
}

var question2 = {
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: {
        a: 'quotes',
        b: 'curly brackets',
        c: 'parenthesis',
        d: 'square brackets',
    },
    correctAnswer: 'c'
}

var question3 = {
    question: "Arrays in JavaScript can be used to store _______",
    answers: {
        a: 'numbers and strings',
        b: 'other arrays',
        c: 'booleans',
        d: 'all of the above',
    },
    correctAnswer: 'd'
}

// Second, Make an array that contains all of the question objects

var questionList = [question1, question2, question3]

// Timer function. Set variables --------------------------------------------------------------------------------------------------------------------

var timer = $('#timetext')
var startbutton = $('#startbutton')
var secondsLeft

startbutton.on('click', setTime)

function setTime() {
    var secondsLeft = 60
    setInterval(function() {
      secondsLeft--;
      timer.text(secondsLeft + " seconds")
      
      if (secondsLeft === 1) {
        timer.text(secondsLeft + " second")
      }
      // add an if statement --- IF secondsLeft equals zero, end game

      // add an if statement --- IF question is answered correctly, add 10 seconds to secondsLeft

      // add an if statement --- IF all questions are answered, stop interval and record secondsLeft 
  
    }, 1000);
}

// End Timer Function --------------------------------------------------------------------------------------------------------------------

//add class tags to things currently shown
//when clicking button, hide those things, and reveal a new set of items
//after answering the new set of items, relace their text with another quesiton
// Create question elements
var myquestion = $('#question')
var answeroptions = $('#answer')
var list = $('<ul>')
var listoptions = $('<li>')
var original = $('.p')
var newquestion = $('#newquestion')


startbutton.on('click', remove)

function displayq () {
    var list = $('<ul>')
    var listoptions = $('<li>')
    for (i = 0; i < question1.answers.length; i++) {
    listoptions.text(question1.answers[i])
    list.append(listoptions)
    newquestion.append(list)
    console.log(newquestion)
}}
// 

startbutton.on('click', displayq)

function remove() {
    original.empty(" ")
}

function add() {
    
}



// Create answers for the question
/*for (i = 0; i < questionList.length; i++) {
    if 
}
*/
//start quiz