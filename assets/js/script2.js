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
var ask = $('<h3>')
var list = $('<ol>')
var yup = $('<button>')
var newquestion = $('#newquestion')
var startbutton = $('#startbutton')
var pclass = document.getElementsByClassName('p')
var whole = $('.whole')

//traverse dom reference
startbutton.on('click', startgame)


function fullgame () {
    startgame()
    if (newquestion.class('visibility') === 'hidden') {
        $('#question0').css('visibility', 'visible')
    }
}
function startgame () {
    newquestion.hide()
    y = 0
        while (y < 5) {
            var ask = $('<h3>')
            var list = $('<ol>')
            
                        for (var i = 0; i < 4; i++) {
                                questionList = [question1, question2, question3]
                                //create an <li> tag
                                var yup = $('<button>')
                                yup.attr('class', 'options')
                                //Make the content of the <li> equal a possible answer
                                yup.text(questionList[y].answers[i])
                                //Push the possible answer to the list of options
                                list.append(yup);
                                
                            }
                ask.attr('id', 'question' + [y])
                ask.attr('class', 'p')
                    //create a h2 with the question
                ask.text(questionList[y].question);
                    //append list to ask
                ask.append(list)
                    //append list to newquestion
                whole.append(ask)
                
                y++;
            }
            $('#question0').css('visibility', 'visible')
}

function pshow () {
    $('#question0').css('visibility', 'visible')
}
function newq () {
    x = 0
$(document).on("click", ".listbutton" + [x], function(){
    if ($(this).text() === questionList[x].correctAnswer) {
        $('#question' + [x]).show()
        x++
    }})
}
function lloop(){
    x = 0
    while (4 < x) {
        ask.text(questionList[x].question)
        list.attr('class', 'listbutton' + x)
            for (var i = 0; i < 4; i++) {
                var yup = $('<button>')
                //make a button for each possible answer
                yup.text(questionList.answers[i])
                //Push the possible answer to the list of options
                list.append(yup);
            }
        ask.append(list)
        newquestion.append(ask)
        x++;
    }




}
/*questionList.forEach(function(item, index){
    ask.text(item.question)
    list.attr('class', 'listbutton' + index)
        for (var i = 0; i < 4; i++) {
            //make a button for each possible answer
            yup.text(item.answers[i])
            //Push the possible answer to the list of options
            list.append(yup);
        }
    ask.append(list)
    newquestion.append(ask)
})*/



// Timer function. Set variables --------------------------------------------------------------------------------------------------------------------


