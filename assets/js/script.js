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

// Timer function. Set variables

var timer = document.querySelector(".timetext")
var startbutton = document.getElementById("startbutton")
var secondsLeft
var underarray

function setTime() {
    var secondsLeft = 10
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left to solve the word!"
      
      if (secondsLeft === 1) {
        timer.textContent = secondsLeft + " second left to solve the word!"
      }
      if (secondsLeft === 0) {
        // Stops execution 
        clearInterval(timerInterval);
        timer.textContent = "You Lost!"
      }
  
    }, 1000);


}