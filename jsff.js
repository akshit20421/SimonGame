

let gamePattern=[];
let userPattern=[];
let buttonColors=["red","blue","green","yellow"];
$(".btn").click(function(){
  var patt=$(this).attr("id");
  userPattern.push(patt);
  playMusic(patt);
  animatePress(patt);
  checkAnswer(userPattern.length-1);
})
var level=0;
var started = false;
$(document).keypress(function(){

  console.log(event);
  if(!started){
    $("h1").text("LEVEL "+level);
  nextSequence();
  started=true;

}
});
function nextSequence(){
  userPattern=[];
  level++;
    $("#level-title").text("Level " + level);
   var randomNumber=Math.floor(Math.random()*4);

  var randomChosenColour=buttonColors[randomNumber];
   gamePattern.push(randomChosenColour);

   $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playMusic(randomChosenColour);
      }


function playMusic(name){

  var audio=new Audio("sounds/"+name+".wav");
  audio.play();




}
function animatePress(currentColor){

  $("#"+currentColor).addClass("pressed")
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  },100);
}
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userPattern[currentLevel]){
    console.log("success")
if(gamePattern.length==userPattern.length){
  setTimeout(function(){
    nextSequence();
  },1000);
}}
else{
  $("body").addClass("game-over");
  $("#level-title").text("GAME OVER,PRESS ANY KEY TO CONTINUE");
  $(document).keypress(function(){

    location.reload();
  })
  console.log("wrong");
}
  }
