//Question 1 - take string and return number of vowels
function vowel(str){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        let c = str.toLowerCase().charAt(i);
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') count++;
    }
    return count;
}

alert("Number of Volwels : " + vowel(prompt("Enter String :")));


//Question 2 - Same as Question 1 but use arrow function


const arrowfunction = (str)=>{
    let count = 0;
    for(let i = 0;i<str.length;i++){
        let c = str.toLowerCase().charAt(i);
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') count++;
    }
    return count;
}

alert("Number of Vowels : " + arrowfunction(prompt("Enter String : ")));


// Question 3 - use for each loop and return square iof each value

let arr = [1,2,3,4,5];

arr.forEach((val)=>{
    console.log(val*val);
});

let marks = [100,30,90,85,92];

let newmarks = marks.filter((val)=>{
    return val>=90;
})

console.log(newmarks);


//Question 4 - take n input find sum and product of every digit

let n = prompt("Enter Size : ");
let arr1 = [];
for(let i = 0;i<n;i++){
    arr1[i] = Number(prompt(`Enter ${i+1} Number : `));
};

let sum = arr1.reduce((prev,val)=>{
    return prev+val;
});

console.log(`Sum : ${sum}`);

let product = arr1.reduce((prev,val)=>{
    return prev*val;
});

console.log(`Product : ${product}`);