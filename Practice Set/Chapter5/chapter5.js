//Question 1 Add Number to array

let arr = [1,2,3,4,5];
let num = Number.parseInt(prompt("Enter Number : "));
arr.push(num);
console.log(arr);

// Question 2 Add Numbers Till 0

do{
    num = Number.parseInt(prompt("Enter Number : "));
    arr.push(num);
}while(num!=0);

console.log(arr);

// Question 3 Filter Numbers divisible by 10

let newarr = arr.filter((val)=>{
    return val%10==0;
});

console.log(newarr);

// Question 4 Array of Square of Numbers

let newarr2 = arr.map((val)=>{
    return val*val;
});

console.log(newarr2);

// Question 5 Factorial Of array

let newarr3 = [1,2,3,4,5];

let number = newarr3.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(number);