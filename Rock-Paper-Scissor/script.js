let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".Scissor");
let human = document.querySelector(".human-count");
let bot = document.querySelector(".bot-count");
let winner = document.querySelector(".winner");
let humancount = 1;
let botcount = 1;

rock.addEventListener("click",()=>{
    checkwinner(1);
    return;
});

paper.addEventListener("click",()=>{
    checkwinner(2);
    return;
})

scissor.addEventListener("click",()=>{
    checkwinner(3);
    return;
});

function checkwinner(value){
    let num = Math.floor(Math.random()*3)+1;
    if(num === value){
        draw();
        return;
    }
    if((num === 1 && value === 3) || (num === 2 && value === 1) || (num === 3 && value === 2)){
        aiincrease();
    }
    else{
        humanincrease();
    }
};

function draw(){
    winner.innerText = "Match Draw!";
};

function aiincrease(){
    winner.innerText = "Computer Wins!"
    bot.innerText = `${botcount}`;
    botcount++;
};

function humanincrease(){
    winner.innerText = "You Wins!";
    human.innerText = `${humancount}`;
    humancount++;
};