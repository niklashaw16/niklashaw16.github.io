var score = 0;
var scoresaver = [];

function tabulateAnswers() {
    var choices = document.getElementsByTagName("input")

    for (var x = 0; x < 18; x++) {
        /*if the radio is checked*/
            if (choices[x].value == 'true') {
                scoresaver[x]= 'true';
            } else if (choices[x].value == 'false') {
                scoresaver[x]= 'false';
            }else {
                scoresaver[x]= 'not checked';
            }
    }

    for (var i = 0; i < choices.length; i++) {
        /*if the radio is checked*/
        if (choices[i].checked) {
            if (choices[i].value == 'c0') {
                score = score + 0;
            }
            if (choices[i].value == 'c1') {
                score = score + 1;
            }
            if (choices[i].value == 'c2') {
                score = score + 2;
            }
            if (choices[i].value == 'c3') {
                score = score + 3;
            }
        }
    }

    document.getElementById('listofscores').innerHTML = 
        "Base Question 1: " + document.querySelector('input[name="base1"]:checked').value + "<br>" + 
        "Base Question 1: " + document.querySelector('input[name="base2"]:checked').value + "<br>" +
        "Base Question 1: " + document.querySelector('input[name="base3"]:checked').value + "<br>" +
        "Base Question 4: " + document.querySelector('input[name="base4"]:checked').value + "<br>" +
        "Base Question 5: " + document.querySelector('input[name="base5"]:checked').value + "<br>" +
        "Base Question 6: " + document.querySelector('input[name="base6"]:checked').value + "<br>" +
        "Base Question 7: " + document.querySelector('input[name="base7"]:checked').value + "<br>" +
        "Base Question 8: " + document.querySelector('input[name="base8"]:checked').value + "<br>" +
        "Base Question 9: " + document.querySelector('input[name="base9"]:checked').value + "<br>" +
        "Base Question 10: " + document.querySelector('input[name="base10"]:checked').value + "<br>" +
        "Task 1: " + document.querySelector('input[name="q1"]:checked').value + "<br>" + 
        "Task 2: " + document.querySelector('input[name="q2"]:checked').value + "<br>" +

        "Task 3: " + document.querySelector('input[name="q3"]:checked').value + "<br>" +
        "Task 4: " + document.querySelector('input[name="q4"]:checked').value + "<br>" +
        "Task 5: " + document.querySelector('input[name="q5"]:checked').value + "<br>" +
        "Task 6: " + document.querySelector('input[name="q6"]:checked').value + "<br>" +
        "Task 7: " + document.querySelector('input[name="q7"]:checked').value + "<br>" +
        "Task 8: " + document.querySelector('input[name="q8"]:checked').value + "<br>" +
        "Task 9: " + document.querySelector('input[name="q9"]:checked').value + "<br>" +
        "Task 10: " + document.querySelector('input[name="q10"]:checked').value + "<br>" +
        "Task 11: " + document.querySelector('input[name="q11"]:checked').value + "<br>" +

        "Task 12: " + document.querySelector('input[name="q12"]:checked').value + "<br>" +
        "Task 13: " + document.querySelector('input[name="q13"]:checked').value + "<br>" +
        "Task 14: " + document.querySelector('input[name="q14"]:checked').value + "<br>" +
        "Task 15: " + document.querySelector('input[name="q15"]:checked').value + "<br>" +
        "Task 16: " + document.querySelector('input[name="q16"]:checked').value + "<br>" +
        "Task 17: " + document.querySelector('input[name="q17"]:checked').value + "<br>" +
        "Task 18: " + document.querySelector('input[name="q18"]:checked').value + "<br>" +
        "Task 19: " + document.querySelector('input[name="q19"]:checked').value + "<br>" +
        "Task 20: " + document.querySelector('input[name="q20"]:checked').value + "<br>" +
        "Task 21: " + document.querySelector('input[name="q21"]:checked').value + "<br>" +
        "Task 22: " + document.querySelector('input[name="q22"]:checked').value + "<br>" +
        "Task 23: " + document.querySelector('input[name="q23"]:checked').value + "<br>" +
        "Task 24: " + document.querySelector('input[name="q24"]:checked').value + "<br>" +
        "Task 25: " + document.querySelector('input[name="q25"]:checked').value + "<br>" +
        "Task 26: " + document.querySelector('input[name="q26"]:checked').value + "<br>" +
        "Task 27: " + document.querySelector('input[name="q27"]:checked').value + "<br>";

    document.getElementById('listoftimes').innerHTML = "Time it took you to complete the tasks:<br>" +
        "Base Question 1: " + timetosolve[2] + "<br>" + 
        "Base Question 2: " + timetosolve[3] + "<br>" +
        "Base Question 3: " + timetosolve[4] + "<br>" + 
        "Base Question 4: " + timetosolve[5] + "<br>" +
        "Base Question 5: " + timetosolve[6] + "<br>" + 
        "Base Question 6: " + timetosolve[7] + "<br>" +
        "Base Question 7: " + timetosolve[8] + "<br>" + 
        "Base Question 8: " + timetosolve[9] + "<br>" +
        "Base Question 9: " + timetosolve[10] + "<br>" + 
        "Base Question 10: " + timetosolve[11] + "<br>" +
        "Task 1: " + timetosolve[12] + "<br>" + 
        "Task 2: " + timetosolve[13] + "<br>" +
        "Task 3: " + timetosolve[14] + "<br>" + 
        "Task 4: " + timetosolve[15] + "<br>" +
        "Task 5: " + timetosolve[16] + "<br>" + 
        "Task 6: " + timetosolve[17] + "<br>" +
        "Task 7: " + timetosolve[18] + "<br>" + 
        "Task 8: " + timetosolve[19] + "<br>" +
        "Task 9: " + timetosolve[20] + "<br>" +
        "Task 11: " + timetosolve[21] + "<br>" +
        "Task 12: " + timetosolve[22] + "<br>" +
        "Task 13: " + timetosolve[23] + "<br>" +
        "Task 14: " + timetosolve[24] + "<br>" +
        "Task 15: " + timetosolve[25] + "<br>" +
        "Task 16: " + timetosolve[26] + "<br>" +
        "Task 17: " + timetosolve[27] + "<br>" +
        "Task 18: " + timetosolve[28] + "<br>" +
        "Task 19: " + timetosolve[29] + "<br>" +
        "Task 20: " + timetosolve[30] + "<br>" +
        "Task 21: " + timetosolve[31] + "<br>" +
        "Task 22: " + timetosolve[32] + "<br>" +
        "Task 23: " + timetosolve[33] + "<br>" +
        "Task 24: " + timetosolve[34] + "<br>" +
        "Task 25: " + timetosolve[35] + "<br>" +
        "Task 26: " + timetosolve[36] + "<br>" +
        "Task 27: " + timetosolve[37] + "<br>";

        document.getElementById("sendmailButton").style.display = "inline";
        document.getElementById("nextBtn").style.display = "none";
}

function sendresults() {
  var resultastext="";
  resultastext="Score: " +

        "Base Question 1: " + document.querySelector('input[name="base1"]:checked').value + "<br>" + 
        "Base Question 1: " + document.querySelector('input[name="base2"]:checked').value + "<br>" +
        "Base Question 1: " + document.querySelector('input[name="base3"]:checked').value + "<br>" +
        "Base Question 4: " + document.querySelector('input[name="base4"]:checked').value + "<br>" +
        "Base Question 5: " + document.querySelector('input[name="base5"]:checked').value + "<br>" +
        "Base Question 6: " + document.querySelector('input[name="base6"]:checked').value + "<br>" +
        "Base Question 7: " + document.querySelector('input[name="base7"]:checked').value + "<br>" +
        "Base Question 8: " + document.querySelector('input[name="base8"]:checked').value + "<br>" +
        "Base Question 9: " + document.querySelector('input[name="base9"]:checked').value + "<br>" +
        "Base Question 10: " + document.querySelector('input[name="base10"]:checked').value + "<br>" +
        "Task 1: " + document.querySelector('input[name="q1"]:checked').value + "<br>" + 
        "Task 2: " + document.querySelector('input[name="q2"]:checked').value + "<br>" +

        "Task 3: " + document.querySelector('input[name="q3"]:checked').value + "<br>" +
        "Task 4: " + document.querySelector('input[name="q4"]:checked').value + "<br>" +
        "Task 5: " + document.querySelector('input[name="q5"]:checked').value + "<br>" +
        "Task 6: " + document.querySelector('input[name="q6"]:checked').value + "<br>" +
        "Task 7: " + document.querySelector('input[name="q7"]:checked').value + "<br>" +
        "Task 8: " + document.querySelector('input[name="q8"]:checked').value + "<br>" +
        "Task 9: " + document.querySelector('input[name="q9"]:checked').value + "<br>" +
        "Task 10: " + document.querySelector('input[name="q10"]:checked').value + "<br>" +
        "Task 11: " + document.querySelector('input[name="q11"]:checked').value + "<br>" +

        "Task 12: " + document.querySelector('input[name="q12"]:checked').value + "<br>" +
        "Task 13: " + document.querySelector('input[name="q13"]:checked').value + "<br>" +
        "Task 14: " + document.querySelector('input[name="q14"]:checked').value + "<br>" +
        "Task 15: " + document.querySelector('input[name="q15"]:checked').value + "<br>" +
        "Task 16: " + document.querySelector('input[name="q16"]:checked').value + "<br>" +
        "Task 17: " + document.querySelector('input[name="q17"]:checked').value + "<br>" +
        "Task 18: " + document.querySelector('input[name="q18"]:checked').value + "<br>" +
        "Task 19: " + document.querySelector('input[name="q19"]:checked').value + "<br>" +
        "Task 20: " + document.querySelector('input[name="q20"]:checked').value + "<br>" +
        "Task 21: " + document.querySelector('input[name="q21"]:checked').value + "<br>" +
        "Task 22: " + document.querySelector('input[name="q22"]:checked').value + "<br>" +
        "Task 23: " + document.querySelector('input[name="q23"]:checked').value + "<br>" +
        "Task 24: " + document.querySelector('input[name="q24"]:checked').value + "<br>" +
        "Task 25: " + document.querySelector('input[name="q25"]:checked').value + "<br>" +
        "Task 26: " + document.querySelector('input[name="q26"]:checked').value + "<br>" +
        "Task 27: " + document.querySelector('input[name="q27"]:checked').value + "<br>";

        "Base Question 1: " + timetosolve[2] + "<br>" + 
        "Base Question 2: " + timetosolve[3] + "<br>" +
        "Base Question 3: " + timetosolve[4] + "<br>" + 
        "Base Question 4: " + timetosolve[5] + "<br>" +
        "Base Question 5: " + timetosolve[6] + "<br>" + 
        "Base Question 6: " + timetosolve[7] + "<br>" +
        "Base Question 7: " + timetosolve[8] + "<br>" + 
        "Base Question 8: " + timetosolve[9] + "<br>" +
        "Base Question 9: " + timetosolve[10] + "<br>" + 
        "Base Question 10: " + timetosolve[11] + "<br>" +
        "Task 1: " + timetosolve[12] + "<br>" + 
        "Task 2: " + timetosolve[13] + "<br>" +
        "Task 3: " + timetosolve[14] + "<br>" + 
        "Task 4: " + timetosolve[15] + "<br>" +
        "Task 5: " + timetosolve[16] + "<br>" + 
        "Task 6: " + timetosolve[17] + "<br>" +
        "Task 7: " + timetosolve[18] + "<br>" + 
        "Task 8: " + timetosolve[19] + "<br>" +
        "Task 9: " + timetosolve[20] + "<br>" +
        "Task 11: " + timetosolve[21] + "<br>" +
        "Task 12: " + timetosolve[22] + "<br>" +
        "Task 13: " + timetosolve[23] + "<br>" +
        "Task 14: " + timetosolve[24] + "<br>" +
        "Task 15: " + timetosolve[25] + "<br>" +
        "Task 16: " + timetosolve[26] + "<br>" +
        "Task 17: " + timetosolve[27] + "<br>" +
        "Task 18: " + timetosolve[28] + "<br>" +
        "Task 19: " + timetosolve[29] + "<br>" +
        "Task 20: " + timetosolve[30] + "<br>" +
        "Task 21: " + timetosolve[31] + "<br>" +
        "Task 22: " + timetosolve[32] + "<br>" +
        "Task 23: " + timetosolve[33] + "<br>" +
        "Task 24: " + timetosolve[34] + "<br>" +
        "Task 25: " + timetosolve[35] + "<br>" +
        "Task 26: " + timetosolve[36] + "<br>" +
        "Task 27: " + timetosolve[37] + "<br>";

  
  var email="niklas.sperling@haw-hamburg.de";
  var subject="Test results";
  var body_start=resultastext;
  var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
  win=window.open(mailto_link,'emailWin');
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



// Create "start", "pause" and "reset" functions

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
    }, 10);
    //showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
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

if (playButton !== undefined) {
  // Now we know that foo is defined, we are good to go.
}

playButton.addEventListener("click", start(), false);
//pauseButton.addEventListener("click", pause);
//resetButton.addEventListener("click", reset);

//TABS:

var currentTab = 0;
var timetosolve = [];
var xtime=0;
showTab(currentTab);

function showTab(n) {
    /*This function will display the specified tab of the form*/
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    /*and fix the Previous/Next buttons:*/
    if (n == 1) {
        document.getElementById("playButton").style.display = "inline";
    } else {
        document.getElementById("playButton").style.display = "none";
    }
      
    if (n == 1) {
        document.getElementById("nextBtn").style.display = "none";
    } else if(n==0){
        document.getElementById("nextBtn").style.display = "inline";
    } else {
        document.getElementById("nextBtn").style.display = "inline";
    }

    if (n == (x.length-1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } 
    else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    document.getElementById("sendmailButton").style.display = "none";

    /*and run a function that displays the correct step indicator:*/
    fixStepIndicator(n)
}

function timetosolvefunction() {
  timetosolve[currentTab]=timeToString(elapsedTime-xtime);
  xtime=elapsedTime;
}

function nextPrev(n) {
    /*This function will figure out which tab to display*/
    var x = document.getElementsByClassName("tab");

    /*Hide the current tab:*/
    x[currentTab].style.display = "none";
  
    /*Increase or decrease the current tab by 1:*/
    currentTab = currentTab + n;
  
    /*if you have reached the end of the form... :*/
    /*the form gets submitted:*/
    if (currentTab >= x.length) {
        pause();
        tabulateAnswers();
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

