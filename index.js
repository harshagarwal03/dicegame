var playerOne = Math.floor(Math.random() * 6) + 1;
var playerTwo = Math.floor(Math.random() * 6) + 1;

function dice(){
    // for(var i = 0;i<6;i++){
    //     if(playerOne===i){
            document.querySelector(".img1").setAttribute("src","./images/dice"+playerOne+".png");
        // }
        // if(playerTwo===i){
            document.querySelector(".img2").setAttribute("src","./images/dice"+playerTwo+".png");
        // }
    // }
    if(playerOne == playerTwo){
        document.querySelector("h1").innerHTML = "Match Draw!";
    }
    else if(playerOne>playerTwo){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }

}

dice();