
//First, make the question objects
const question1 =  {
    question: "Commonly used data types DO NOT include:",
    answers: {
        0: 'string',
        1: 'booleans',
        2: 'alerts',
        3: 'numbers',
    },
    correctAnswer: 'alerts'
}
const question2 = {
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: {
        0: 'quotes',
        1: 'curly brackets',
        2: 'parenthesis',
        3: 'square brackets',
    },
    correctAnswer: 'parenthesis'
}
const question3 = {
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
const questionList = [question1, question2, question3]
var yessir = [question1.correctAnswer, question2.correctAnswer, question3.correctAnswer]
// Timer function. Set variables --------------------------------------------------------------------------------------------------------------------

var timer = $('#timetext')
var startbutton = $('#startbutton')
var secondsLeft = 60
var press = $('.listbutton')

function setTime() {
      questionList
      secondsLeft = 60
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
            secondsLeft = secondsLeft - 10;
      }})
    
}

// End Timer Function --------------------------------------------------------------------------------------------------------------------

var original = $('.p')
var newquestion = $('#newquestion')
var ques = $('#question')
var ans = $('#answers') 
var whole = $('.whole')

//Loop this function if they answer correctly
startbutton.on('click', createlist())

// creates a question list for all the questions avaliable
function createlist() {
    for (var i = 0; i < questionList.length; i ++) {
        displayq(i)
    }
    $('.p0').show();
    game(0)
}

//creates a list format for a single question
function displayq (x) {
    var ask = $('<h2>')
    var list = $('<ol>')
    
                for (var i = 0; i < 4; i++) {
                        var yup = $('<button>')
                        yup.attr('class', `listbutton${x}`)
                        //Make the content of the <li> equal a possible answer
                        yup.text(questionList[x].answers[i])
                        //Push the possible answer to the list of options
                        list.append(yup);
                        
                    }
        ask.attr('class', 'p' + [x])
            //create a h2 with the question
        ask.text(questionList[x].question);
            //append list to ask
        ask.append(list)
            //append list to newquestion
        whole.append(ask)

        $(`.p${x}`).hide()
        
        //css("visibility", "hidden")
    }


function remove () {
    $('.p').hide()
}

function addnew(x) {
    $('.p').remove()
   
}

//if button.click equal answer

function switchquestions(x) {
    
    $(document).on("click", ".listbutton" + [x], function(){
        x = 0
        if ($(this).text() === questionList[x].correctAnswer) {
            x++;
            displayq(x)
        }})
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

function game (x) {
    console.log(yessir[x])
    $(`.listbutton${x}`).on("click", function(){
            if ($(this).text() === yessir[x]) {
                $(`.p${x}`).hide();
                $(`.p${x + 1}`).show();
                game(x + 1)
            } 
        })
}
