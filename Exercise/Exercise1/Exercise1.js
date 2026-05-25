let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let a;

let guess = 1;
let range;

a = Number.parseInt(prompt("Enter Number Between 1-100 : "));
if(a>randomNumber){
    range = "Greater";
}
else{
    range = "Lesser";
}
while(a!=randomNumber){
    a = Number.parseInt(prompt("Try Again! Your number is " + range));
    if(a>randomNumber){
        range = "Greater";
    }
    else{
        range = "Lesser";
    }
    guess++;
}

alert('Correct! Your Score is ' + guess);