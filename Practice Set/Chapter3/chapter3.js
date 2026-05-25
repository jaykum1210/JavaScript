// Question 1 Print Marks in obj using for loop

const marks = {
    Jay : 90,
    Tanmay : 85,
    Rahul : 100,
}

// for(let i = 0;i<Object.keys(marks).length;i++){
//     console.log(Object.keys(marks)[i]);
//     console.log(marks[Object.keys(marks)[i]]);
// }

// Question 2 Print Marks using for in loop

// for(let mar in marks){
//     console.log(marks[mar]);
// }


// let number = 45;

// let a = Number.parseInt(prompt("Enter Number : "));
// if(a==number){
//     alert('Correct Number');
// }
// else{
//     while(a!==number){
//         a = Number.parseInt(prompt("Try Again : "));
//     }
//     alert('Correct Number');
// }

let arr = new Array(5);

for(let i = 0;i<5;i++){
    arr[i] = Number.parseInt(prompt("Enter " + (i+1) + " Number : "));
}

function mean(arr){
    let sum = 0;
    for(let x of arr){
        sum+=x;
    }
    return sum/arr.length;
}

console.log(mean(arr));