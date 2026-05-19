// For Loop

for(let i = 0;i<5;i++){
    console.log("Hello");
}

let x = 0;
while(x<5){
    console.log(x);
    x++;
}

x = 0;
do{
    console.log(x + " Hii");
    x++;
} while(x<5);

// for of loop for string and arrays

let str = "Jay Kumawat"
let size = 0;

for(let i of str){
    console.log(i);
    size++;
}
console.log(size);

//For in loop to get only keys in object

let student = {
    name : "Jay Kumawat",
    sem : 4,
    cgpa : 8.5,
    branch : "B.tech Cse"
};

for(let key in student){
    console.log(key + " : " + student[key]);
    // console.log(key + " : " + student.key); not Allowed
}

// Template Literal

let stri = `Hello Everyone`;
console.log(stri);

console.log(typeof stri);

// Print ANything using ','
console.log(str,stri);


let obj1 = {
    name : "Pen",
    price : 100
};

console.log(`The Name of Object is ${obj1.name} and cost is ${obj1.price} ruppess`);
console.log(`Sum of 1, 2 and 3 : ${1+2+3}`);


// Escape Character
console.log(`Jay\nKumawat`);
console.log("Jay\tKumawat");


//String Methods

let st = "Jay Kumawat";
console.log(st.toUpperCase());
console.log(st.toLowerCase());
console.log(st.trim());
console.log(st.slice(0,2));

let str1 = "Jay";
let str2 = "Kumawat";
console.log(str1.concat(" " + str2));
console.log(st.replace('a','z'));
console.log(st.replaceAll('a','x'));
console.log(st[1]);