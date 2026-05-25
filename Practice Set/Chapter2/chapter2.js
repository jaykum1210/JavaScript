// Question1 Check age Between 10 - 20

while(true){
    let age = Number.parseInt(prompt("Enter Age : "));
    if(age>=10 && age<=20){
        alert("You are Teen");
        break;
    };
}

//Question 2 Switch Case 

let grade = prompt("Enter A, B, C, D, F : ");
switch(grade){
    case "A":
        alert("Grade A");
        break;
    case "B":
        alert('Grade B');
        break;
    case "C":
        alert("Grade C");
        break;
    case "D":
        alert('Grade D');
        break;
    case "F":
        alert('Grade E');
        break;
    default:
        alert('Wrong Grade');
        break;
}

// Question 3 Divisible by 2,3

let num = Number.parseInt(prompt("Enter Number : "));
if(num%2==0 && num%3==0){
    alert('Divisible By Both');
}
else if(num%2==0){
    alert('Divisible by 2');
}
else if(num%3==0){
    alert("Divisible By 3");
}
else{
    alert('Not Divisible By 2 and 3');
}

// Question 4 Can or Cannnot Drive Using Ternary Operator

let age1 = Number.parseInt(prompt("Enter Age : "));
age1>=18?alert('You Can Drive'):alert('You cannot Drive');