/* .js files add interaction to your website */
var scoreLightningMcQueen = 0;
var scoreJacksonStorm = 0;
var questionCount = 0;
var result = document.getElementById("result");
var restart = document.getElementById ("restart")
var q1a1 = document.getElementById ("q1a1");
var q1a2 = document.getElementById ("q1a2");
var q2a1 = document.getElementById ("q2a1");
var q2a2 = document.getElementById ("q2a2");
var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById ("q3a2");
var quizButtons = [q1a1, q1a2, q2a1, q2a2, q3a1, q3a2];

function Lightning (){
  this.classList.add("clicked");
  this.disabled = true;
 scoreLightningMcQueen +=1;
  questionCount +=1; 
  console.log ("questionCount=" + questionCount + "scoreLightningMcQueen=" + scoreLightningMcQueen)
   if (questionCount == 3) {
  console.log ("The quiz is done!")
     updateResult ();
}
}
function Jackson (){
  this.classList.add("clicked");
  this.disabled = true
 scoreJacksonStorm +=1;
  questionCount +=1; 
  console.log ("questionCount=" + questionCount + "scoreJacksonStorm=" + scoreJacksonStorm) 
   if (questionCount == 3) {
  console.log ("The quiz is done!")
     updateResult ();
}
}
function KaChow() {
  scoreLightningMcQueen = 0;
  scoreJacksonStorm = 0;
  questionCount = 0;
  result.innerHTML = "Your result is...";
  console.log("Your result is...");
   quizButtons.forEach(function(button) {
    button.classList.remove("clicked");
    button.disabled = false;
  });
}
q1a1.addEventListener ("click", Jackson);
q1a2.addEventListener ("click", Lightning);
q2a1.addEventListener ("click", Lightning);
q2a2.addEventListener ("click", Jackson);
q3a1.addEventListener ("click", Lightning);
q3a2.addEventListener ("click", Jackson);
restart.addEventListener("click", KaChow); 

function updateResult () {
  result.innerHTML= "You are Lightning McQueen!"
  if (scoreLightningMcQueen >= 2) {
    result.HTML = "You are Lightning McQueen!"
  console.log ("You are Lightning McQueen!");
} 
  else if (scoreJacksonStorm >= 2){ 
    result.innerHTML= "You are Jackson Storm!"
    result.HTML = "You are Jackson Storm!"
    console.log ("You are Jackson Storm!");
}
  
}
