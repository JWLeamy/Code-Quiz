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
    correctAnswer: 'alerts'
}

var question2 = {
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: {
        0: 'quotes',
        1: 'curly brackets',
        2: 'parenthesis',
        3: 'square brackets',
    },
    correctAnswer: 'parenthesis'
}

var question3 = {
    question: "Arrays in JavaScript can be used to store _______",
    answers: {
        0: 'numbers and strings',
        1: 'other arrays',
        2: 'booleans',
        3: 'all of the above',
    },
    correctAnswer: 'all of the above'
}

// Second, Make an array that contains all of the question objects

var questionList = [question1, question2, question3]


// Timer function. Set variables --------------------------------------------------------------------------------------------------------------------

var timer = $('#timetext')
var startbutton = $('#startbutton')
var secondsLeft
var press = $('.listbutton')

function setTime() {
    var questionList = [question1, question2, question3]
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
    

    $(document).on("click", ".listbutton", function(x){
        x = 0;
        if ($(this).text() === questionList[x].correctAnswer) {
            timer.text(secondsLeft + 10 + " seconds")
            x++;
        }
        else if ($(this).text() !== questionList[x].correctAnswer){ 
            timer.text(secondsLeft - 10 + " seconds")
            x--;
      }})
    
}

// End Timer Function --------------------------------------------------------------------------------------------------------------------

//add class tags to things currently shown
//when clicking button, hide those things, and reveal a new set of items
//after answering the new set of items, relace their text with another quesiton
// Create question elements
var original = $('.p')

var listoptions = $('<li>')
var newquestion = $('#newquestion')
var x = 0

startbutton.on('click', both)
//Loop this function if they answer correctly
function displayq (x) {

    var questionList = [question1, question2, question3]
    var ask = $('<h2>')
    var list = $('<ol>')
    var newquestion = $('#newquestion')
    
    for (i = 0; i < 4; i++) {
        //create an <li> tag
        var yup = $('<li>')
        yup.attr('class', 'listbutton' + [x])
        //Make the content of the <li> equal a possible answer
        yup.text(questionList[x].answers[i])
        //Push the possible answer to the list of options
        list.append(yup);
    }
    ask.attr('class', 'p' + [x])
    //create a h2 with the question
    ask.text(questionList[x].question)
    //append list to ask
    ask.append(list)
    //append list to newquestion
    newquestion.append(ask)

}
function both (){
    var x = 0
    displayq(x)
    $(document).on("click", ".listbutton" + [x], function(){
        x = 0
        if ($(this).text() === questionList[x].correctAnswer) {
            addnew(x)
            switchquestions(x)
        }
        if ($(this).text() !== questionList[x].correctAnswer){ 
            console.log(questionList[x].correctAnswer)
      }})
}

function addnew(x) {
    $('.listbutton' + [x]).remove()
    $('.p' + [x]).remove()
    x++;
    displayq(x)
}

//if button.click equal answer


function switchquestions(x) {{
    $(document).on("click", ".listbutton" + [x], function(){
        
        if ($(this).text() === questionList[x].correctAnswer) {
            addnew(x)
        }
        if ($(this).text() !== questionList[x].correctAnswer){ 
            console.log(questionList[x].correctAnswer)
         }})}
}


function remove() {
    original.remove()
}

function wholegame() {
    
    remove()
    setTime()
    displayq(0)
}

function click () {
    var questionList = [question1, question2, question3]
    
   var x = 0
    $(document).on("click", ".listbutton" + [x], function(){
        if ($(this).text() === questionList[x].correctAnswer) {
            $('.listbutton' + [x]).remove()
            x++;
            displayq(x);
        }
        if ($(this).text() !== questionList[x].correctAnswer){ 
            console.log(questionList[x].correctAnswer)
      }})
}

// Create answers for the question
/*for (i = 0; i < questionList.length; i++) {
    if 
}
*/
//start quiz


/*
var x = 0
    $(document).on("click", ".listbutton" + [x], function(){
        if ($(this).text() === questionList[x].correctAnswer) {
            $('.listbutton' + [x]).remove()
            x++;
            displayq(x);
        }
        if ($(this).text() !== questionList[x].correctAnswer){ 
            console.log(questionList[x].correctAnswer)
      }})
*/