//selecting input box
var a = document.getElementById("Input");
//selecting paragraph
var b = document.getElementById("para");
var RandomNumber = Math.floor(Math.random()*10)+1;
var totalscore = 10;
var scorevalue = document.getElementById("score")
function check(){
    var enterNumber = a.value;
    if(RandomNumber==enterNumber){
        console.log("You guessed it right");
        b.textContent = "You guessed it right";
        alert("You won hurrah!!");
    }
    else{
        totalscore = totalscore -1;
        scorevalue.textContent = "score:"+totalscore;

        b.textContent = "Try again";
    }
}
