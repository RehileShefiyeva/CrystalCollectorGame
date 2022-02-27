$(document).ready(function () {

    var wins = 0;
    var lost = 0;
    var score = 0;

    var computerGuess = parseInt(Math.floor(Math.random() * 100) + 19);
    $("#randomNumber").html(computerGuess);

    var crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
    var crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
    var crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
    var crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);



    function reset() {
        score = 0;
        $("#score").html(score);
        computerGuess = parseInt(Math.floor(Math.random() * 100) + 19);
        $("#randomNumber").html(computerGuess);

        crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
        crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
        crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
        crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);

    }


    $("#crystal1").on("click", function () {
        score = score + crystal1;
        $("#score").html(score);
        console.log("score1 " + score);
        if (score == computerGuess) {
            checkifwon();
        } else if (score > computerGuess) {
            checkifwon();
        }
    });

    $("#crystal2").on("click", function () {
        score = score + crystal2;
        $("#score").html(score);
        console.log("score2 " + score);
        if (score == computerGuess) {
            checkifwon();
        } else if (score > computerGuess) {
            checkifwon();
        }
    });

    $("#crystal3").on("click", function () {
        score = score + crystal3;
        $("#score").html(score);
        console.log("score3 " + score);
        if (score == computerGuess) {
            checkifwon();
        } else if (score > computerGuess) {
            checkifwon();
        }
    });

    $("#crystal4").on("click", function () {
        score = score + crystal4;
        $("#score").html(score);
        console.log("score4 " + score);
        if (score == computerGuess) {
            checkifwon();
        } else if (score > computerGuess) {
            checkifwon();
        }
    });

    function checkifwon() {
        if (score === computerGuess) {
            wins++;
            console.log(wins);
            $("#static-text").html("You Win!!!");
            $("#win").html("win: " + wins);
            reset();
        } else if (score > computerGuess) {
            lost++;
            console.log(lost);
            $("#static-text").html("You Lost!");
            $("#lost").html("Lost: " + lost);
            reset();
        }

    }

});