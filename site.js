// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function tabulateAnswers() {
    /*initialize variables for each choice's score
    If you add more choices and outcomes, you must add another variable here.
    */

    var score = 0;

    /*get a list of the radio inputs on the page*/
    var choices = document.getElementsByTagName('input');
    /*loop through all the radio inputs */
    for (i = 0; i < choices.length; i++) {
        /*if the radio is checked*/
        if (choices[i].checked) {
            /*add 1 to that choice's score*/
            if (choices[i].value == 'c1') {
                score = score + 1;
            }
            if (choices[i].value == 'c2') {
                score = score + 1;
            }
            if (choices[i].value == 'c3') {
                score = score + 2;
            }
            if (choices[i].value == 'c4') {
                score = score + 1;
            }
            if (choices[i].value == 'c5') {
                score = score + 1;
            }

            /*If you add more choices and outcomes, you must add another if statement below.*/
        }
    }

    /*Display answer corresponding to that choice*/
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your score on our stereoscopic fusion test is: " + score + "<br>Time it took you to complete the tasks:<br>";
    

    document.getElementById('listoftimes').innerHTML =
        "Task 1: " + timetosolve[1] + "<br>" + "Task 2: " + timetosolve[2] + "<br>" +
        "Task 3: " + timetosolve[3] + "<br>" + "Task 4: " + timetosolve[4] + "<br>" +
        "Task 5: " + timetosolve[5] + "<br>" + "Task 6: " + timetosolve[6] + "<br>" +
        "Task 7: " + timetosolve[7] + "<br>" + "Task 8: " + timetosolve[8] + "<br>" +
        "Task 9: " + timetosolve[9] + "<br>" + "Task 10: " + timetosolve[10] + "<br>" +
        "Task 11: " + timetosolve[11] + "<br>" + "Task 12: " + timetosolve[12] + "<br>" +
        "Task 13: " + timetosolve[13] + "<br>" + "Task 14: " + timetosolve[14] + "<br>" +
        "Task 15: " + timetosolve[15] + "<br>" + "Task 16: " + timetosolve[16] + "<br>" +
        "Task 17: " + timetosolve[17] + "<br>" + "Task 18: " + timetosolve[18] + "<br>" +
        "Task 19: " + timetosolve[19] + "<br>" + "Task 20: " + timetosolve[20] + "<br>" +
        "Task 21: " + timetosolve[21] + "<br>" + "Task 22: " + timetosolve[22] + "<br>" +
        "Task 23: " + timetosolve[23] + "<br>" + "Task 24: " + timetosolve[24] + "<br>" +
        "Task 25: " + timetosolve[25] + "<br>" + "Task 26: " + timetosolve[26] + "<br>" +
        "Task 27: " + timetosolve[27] + "<br>" + "Task 28: " + timetosolve[28] + "<br>" +
        "Task 29: " + timetosolve[29] + "<br>" + "Task 30: " + timetosolve[30] + "<br>";

}

// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    //showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    //showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00");
    elapsedTime = 0;
    //showButton("PLAY");
}

// Create function to display buttons
/*
function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
*/
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

//TABS:

var currentTab = 0;
var timetosolve = [];
showTab(currentTab);

function showTab(n) {
    /*This function will display the specified tab of the form*/
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    /*and fix the Previous/Next buttons:*/
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    /*save current time to a variable
    if (n > 0) {
        timetosolve[n] = timeToString(elapsedTime) - timetosolve[n - 1];
    } else {
        timetosolve[n] = timeToString(elapsedTime);
    }*/

    /*and run a function that displays the correct step indicator:*/
    fixStepIndicator(n)
}

function nextPrev(n) {

    timetosolve[currentTab] = timeToString(elapsedTime);

    /*This function will figure out which tab to display*/
    var x = document.getElementsByClassName("tab");
    /*Exit the function if any field in the current tab is invalid:*/
    if (n == 1 && !validateForm()) return false;
    /*Hide the current tab:*/
    x[currentTab].style.display = "none";
    /*Increase or decrease the current tab by 1:*/
    currentTab = currentTab + n;
    /*if you have reached the end of the form... :*/
    if (currentTab >= x.length) {
    /*the form gets submitted:*/
        timetosolve[currentTab] = timeToString(elapsedTime);
        document.getElementById("regForm").submit();
        return false;
    }
/*Otherwise, display the correct tab:*/
    showTab(currentTab);
}

function validateForm() {
    /*This function deals with validation of the form fields*/
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    /*A loop that checks every input field in the current tab:*/
    for (i = 0; i < y.length; i++) {
    /*If a field is empty...*/
        if (y[i].value == "") {
            /*add an "invalid" class to the field:*/
            y[i].className += " invalid";
            /*and set the current valid status to false:*/
            valid = false;
        }
    }
    /*If the valid status is true, mark the step as finished and valid:*/
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    /*This function removes the "active" class of all steps...*/
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    /*and adds the "active" class to the current step:*/
    x[n].className += " active";
}