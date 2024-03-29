//First, make the question objects
const question1 = {
  question: "Commonly used data types DO NOT include:",
  answers: {
    0: "string",
    1: "booleans",
    2: "alerts",
    3: "numbers",
  },
  correctAnswer: "alerts",
};
const question2 = {
  question: "The condition in an if / else statement is enclosed with _____.",
  answers: {
    0: "quotes",
    1: "curly brackets",
    2: "parenthesis",
    3: "square brackets",
  },
  correctAnswer: "parenthesis",
};
const question3 = {
  question: "Arrays in JavaScript can be used to store _______",
  answers: {
    0: "numbers and strings",
    1: "other arrays",
    2: "booleans",
    3: "all of the above",
  },
  correctAnswer: "all of the above",
};
const question4 = {
  question: "What does DOM stand for?",
  answers: {
    0: "Document Object Model",
    1: "Display Object Management",
    2: "Digital Ordinance Model",
    3: "Desktop Oriented Mode",
  },
  correctAnswer: "Document Object Model",
};
const question5 = {
  question: "What is used primarily to add styling to a web page?",
  answers: {
    0: "HTML",
    1: "CSS",
    2: "Python",
    3: "React.js",
  },
  correctAnswer: "CSS",
};
const question6 = {
  question: "When is localStorage data cleared?",
  answers: {
    0: "No expiration time",
    1: "on reload",
    2: "after closing your browser",
    3: "after restarting your computer",
  },
  correctAnswer: "No expiration time",
};

// Second, Make an array that contains all of the question objects
const questionList = [question1, question2, question3, question4, question5, question6];
// array that contains the answers
var yessir = [
  question1.correctAnswer,
  question2.correctAnswer,
  question3.correctAnswer,
  question4.correctAnswer,
  question5.correctAnswer,
  question6.correctAnswer,
];
// Timer function. Set variables --------------------------------------------------------------------------------------------------------------------

var timer = $("#timetext");
var startbutton = $("#startbutton");
var secondsLeft = 60;
var press = $(".listbutton");

function setTime() {
  timeint = setInterval(function () {
    secondsLeft--;
    timer.text("Time left: " + secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timeint);
      showscore();
    }
  }, 1000);
  game(0);
}

// End Timer Function --------------------------------------------------------------------------------------------------------------------

var original = $(".p");
var newquestion = $("#newquestion");
var ques = $("#question");
var ans = $("#answers");
var whole = $(".whole");

// creates a question list for all the questions avaliable
function createlist() {
  // iterates through each question prompt and appends it to the document (while keeping it hidden)
  for (var i = 0; i < questionList.length; i++) {
    displayq(i);
  }
  // hides initial prompt
  $("#newquestion").hide();
  //shows the first question. From then on, the game function shows/hides the remaining questions accordingly
  $(".p0").show();
  //set time interval
  setTime();
}

//creates a list format for a single question
function displayq(x) {
  var ask = $("<h2>");
  var list = $("<ol>");

  for (var i = 0; i < 4; i++) {
    var yup = $("<button>");
    yup.attr("class", `listbutton${x}`);
    //Make the content of the <li> equal a possible answer
    yup.text(questionList[x].answers[i]);
    //Push the possible answer to the list of options
    list.append(yup);
  }
  ask.attr("class", "p" + [x]);
  //create a h2 with the question
  ask.text(questionList[x].question);
  //append list to ask
  ask.append(list);
  //append list to newquestion
  whole.append(ask);

  $(`.p${x}`).hide();
}

//based on your clicked answer, you will either move on to the next question or subtract 10 points from your score
function game(x) {
  console.log(x);
  if (!yessir[x]) {
    showscore();
  } else {
    console.log(yessir[x]);
    $(`.listbutton${x}`).on("click", function () {
      if ($(this).text() === yessir[x]) {
        $(`.p${x}`).hide();
        $(`.p${x + 1}`).show();
        game(x + 1);
      } else {
        secondsLeft = secondsLeft - 10;
      }
    });
  }
}

// clears the time if the quiz is over, provides a submit score option
function showscore() {
  clearInterval(timeint);
  $(".finalscore").text(secondsLeft);
  $(".endgame").show();
  $('.scoreboard').show()
}

list = $("<li>");
//submit highscore with initials
$(".submitscore").on("click", function () {
  var initials = $(".initials").val();
  var Mscore = $(".finalscore").text();

  if (initials === "") {
    alert("Please Insert Initials");
  } else {
    var allScores = JSON.parse(localStorage.getItem("allScores"));
    if (!allScores) {
      allScores = [];
    }
    console.log(allScores);
    var currentHighscore = {
      name: initials,
      score: Mscore,
    };
    console.log(allScores);
    allScores.push(currentHighscore);
    localStorage.setItem("allScores", JSON.stringify(allScores));
    alert("Your Score is saved! Refresh to see if you broke the top 5")
  }
});

//play again if clicked
$(".playagain").on("click", function () {
  location.reload();
});

//update highscore list with local storage
function generatescores() {
  $('scorelist').innerHTML = ''
  scorelist = JSON.parse(localStorage.getItem("allScores"));
  scorelist.sort((a, b) => (a.score > b.score ? -1 : 1));
  console.log(scorelist);

  newlist = scorelist.slice(0, 5);

  newlist.forEach((element) => {
    var listitem = $("<li>");
    listitem.text(`${element.name} --- ${element.score}`);
    $(".scorelist").append(listitem);
  });
}
generatescores()

//opens and closes scoreboard when needed
$(".showboard").on("click", function () {
  if ($('.scoreboard').css('display') === 'none') {
    $('.scoreboard').show()
    $(".showboard").text("Close High Scores")
  } else {
    $('.scoreboard').hide()
    $(".showboard").text("Show High Scores")
  }
})