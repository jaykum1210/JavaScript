function fun1(){
    console.log("Hello");
    console.log("Hii");
}

fun1();

function fun2(msg){
    console.log(msg);
}

fun2("Hello");


function fun3(a,b){
    console.log(a+b);
}

fun3(10,20);

function fun4(a,b){
    s = a*b;
    return s;
}

console.log(fun4(10,20));


const arrowsum = (a,b)=>{
    console.log(a+b);
}

arrowsum(100,200);
console.log(arrowsum);
console.log(typeof arrowsum);


// For Each Loop

let arr = [1,2,3,4,5];

arr.forEach((val, index)=>{
    console.log(val, index);
});

//Map

let arr2 = [1,2,3,4,5];

let newarr = arr.map((val)=>{
    return val;
});

console.log(newarr);

//Filter

let evenarr = arr.filter((val)=>{
    return val%2===0;
});

console.log(evenarr);


//Reduce

let output = arr.reduce((previous,current)=>{
    return previous + current;
});

console.log(output);