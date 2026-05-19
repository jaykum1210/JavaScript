//Comments

// One Line Comment

/*Multie 
Line Comment*/


console.log("Hello, Everyone");


// Artimetic Operator

console.log("a + b : " + (10+20));
console.log("a - b : " + (10-20));
console.log("a * b : " + (10*20));
console.log("a / b : " + (10/20));
console.log("a % b : " + (10%20));
console.log("a**b : " + (2**3));
let a = 10;
console.log("Increment : " + a++);
console.log("Increment : " + ++a);
console.log("Decrement : " + a--);
console.log("Decrement : " + --a);



// Assigment Operator

let b = 10;
console.log(b);
b+=10;
console.log(b);
b-=10;
console.log(b);
b*=10;
console.log(b);
b/=10;
console.log(b);
b%=4;
console.log(b);
b**=4;
console.log(b);


// Comparision Operator

let c = 5;
let d = 10;
console.log(c==d);
console.log(c!=d);
console.log(c<=d);
console.log(c>=d);
console.log(c>d);
console.log(c<d);


//Logocal Operator

console.log((c<d) && (c!=d));
console.log((c<d) || (c!=d));


//COnditional Statement

let age = 20;
if(age>=18){
    console.log("You Can Vote");
}
else{
    console.log("You Cannot Vote");
}

// Ternary Operator

console.log((10%2==0)?"Even":"Odd");


// Alert

alert("Hello");

// Prompt

let name = prompt("Enter Name : ")
alert("Hello " + name);

