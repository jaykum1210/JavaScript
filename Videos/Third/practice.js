//Question 1 - Print all even number from 1-100

for(let i = 2;i<=100;i+=2){
    console.log(i);
}

// Question 2 - guess any number from 1-100 by user

let x = 15
let num;
while(num!=x){
    num = prompt("Enter Number : ");
}
alert("You Got It");

let str = "Jay Kumawat";
console.log(str.length);

let index = prompt("Enter Index between 0 - " + str.length + " : ");
console.log("Character : " + str[index]);

for(let i of str){
    console.log(i);
}


// Question 3 - take full name and nake it username by adding '@' in starting and length at last


let name = prompt("Enter Full Name : ");
let len = name.length;
let username = `@${name}${name.length}`;
alert(`username : ${username}`);