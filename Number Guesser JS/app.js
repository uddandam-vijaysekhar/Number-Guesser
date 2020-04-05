let min=1,
    max=10,
    winningNum = getRandomNUmber(min,max),
    guessesLeft = 3;

//UI Elements
const game = document.getElementById("game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

    //Assign UI Values
    minNum.textContent = min;
    maxNum.textContent = max;

    //Play Again Event Listner
    game.addEventListener("mousedown",function(e){
        if(e.target.className === "play-again"){
            window.location.reload();
        }
       
    });

    //Listen for Guess
    guessBtn.addEventListener("click",function(){
        let guess = parseInt(guessInput.value);
        console.log(guess);
        if(isNaN(guess)|| guess < min || guess > max){
            setMessage("Please enter a number between"+min +"and"+max,"red");
        }

        //check if WON
        if(guess === winningNum){
            gameOver(true,winningNum + "is correct you WIN!")

        }else{
            guessesLeft -=1;

            if(guessesLeft === 0){
                gameOver(false,"Game is Over you LOST! Game correct number is"+winningNum);

            }else{

                //Game COntinue its a Wrong
                guessInput.style.borderColor = "red";

                //Cleat Input
                guessInput.value = " ";
                //Tell the User Its a Wrong num
                setMessage(guess +" is Not Correct," +guessesLeft+ "Guesses Left!!","red");
            }
           // guessInput.style.borderColor = "red";
            //setMessage(guess + "is wrong you LOOSE!!","red");
        }
    });

    //Game Over Function
    function gameOver(won,msg){
        let color;
        won === true ? color = "green" : color = "red";

        //disable input
        //guessInput.disabled = true;
        //change border color to green to confirm 
        guessInput.style.borderColor = color; 
        //set Text color
        message.style.color = color;
        //setMessage
        setMessage(msg,color);

        //Play agian
        guessBtn.value = "Play Again";
        guessBtn.className +="play-again";

    }

    //setMessage
    function setMessage(msg,color){
        message.style.color = "color";
        message.textContent = msg;
    } 

    //Get Winniing NUm

function getRandomNUmber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}