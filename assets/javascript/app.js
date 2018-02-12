$(document).ready(function() {

// --------------------------- Variables -------------------
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var unAnsweredCount = 0;

// timer
var timer = 60;
var timerCounter;

var countdown = function(){
    timerCounter = setInterval(decrement, 1000);
};

var stop = function(){
    clearInterval(timer);
};

var decrement = function(){
    console.log(timer--);
    $('.timerContent').html("<h2>You only have " + timerCounter + " seconds left!</h2>" );
    if (timer === 0) {
        stop();
        check();
        $("#triviaContent").hide();
        $("#allDone").show();
        console.log("out of time");
    };
};
