const coinArray = ["Heads","Tails"];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i =0; i<buttons.length; i++){
console.log(buttons[i]);
buttons[i].addEventListener("click",lossCoin)
}

function lossCoin(e){
    // console.log("player:" + e.target.innetText);
    let playerGuess = e.target.innerText;
    let computerToss = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];
    // console.log("computer:" + coinArray[computerToss]);
    if(playerGuess){

    }else{

    }
}



