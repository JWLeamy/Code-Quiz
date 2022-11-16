/*
Psuedo Code:
- When the user clicks a start button, the quiz starts (eventlistener or .on)
- Make an array filled with questions
*/

//First, make the question objects
var question1 =  {
    question: "Commonly used data types DO NOT include:",
    answers: {
        0: 'string',
        1: 'booleans',
        2: 'alerts',
        3: 'numbers',
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
var original = $('.p')

var ask = $('<h2>')
var list = $('<ol>')
var listoptions = $('<li>')
var newquestion = $('#newquestion')


startbutton.on('click', startgame)


function displayq () {
    var ask = $('<h2>')
    var list = $('<ol>')
    var newquestion = $('#newquestion')
    
    for (i = 0; i < 4; i++) {
        //create an <li> tag
        var yup = $('<li>')
        yup.attr('class', 'listbutton')
        //Make the content of the <li> equal a possible answer
        yup.text(question1.answers[i])
        //Push the possible answer to the list of options
        list.append(yup);
    }
    //create a h2 with the question
    ask.text(question1.question)
    //append list to ask
    ask.append(list)
    
    newquestion.append(ask)
}

// 


function remove() {
    original.remove()

}

function startgame() {
    remove ()
    displayq ()
}



// Create answers for the question
/*for (i = 0; i < questionList.length; i++) {
    if 
}
*/
//start quiz