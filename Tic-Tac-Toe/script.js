let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".Reset");
let theme = document.querySelector(".theme");
let default_theme = "light";
let body = document.querySelector("body");
let turn = true;

// Winning Patterns
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Reset Function
const resetGame = () => {
    for(let box of boxes){
        box.innerText = "";
        box.style.pointerEvents = "auto";
    }
    turn = true;
};

// Click
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            turn = false;
            box.innerText = "X";
        }
        else{
            turn = true;
            box.innerText = "O";
        }

        box.style.pointerEvents = "none";
        checkWinner();
    });
});

// Check Winner
const checkWinner = () => {
    for(let wins of win){
        let pos1 = boxes[wins[0]].innerText;
        let pos2 = boxes[wins[1]].innerText;
        let pos3 = boxes[wins[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                alert(`Winner is Player ${pos1}`);
                resetGame();
                return;
            }
        }
    }

    let allFilled = true;

    for(let box of boxes){
        if(box.innerText === ""){
            allFilled = false;
            break;
        }
    }

    if(allFilled){
        alert("Match Draw!");
        resetGame();
    }
};

// Reset Button
resetbutton.addEventListener("click", resetGame);

// Theme Change
theme.addEventListener("click", () => {
    if(default_theme === "light"){
        default_theme = "dark";
        body.style.cssText = "background-color:darkgrey;color:black;";

        for(let box of boxes){
            box.style.backgroundColor = "white";
        }
    }
    else{
        default_theme = "light";
        body.style.cssText = "background-color:#FFF6DE;color:black;";

        for(let box of boxes){
            box.style.backgroundColor = "#8BDFDD";
        }
    }
});