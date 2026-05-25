//Question 1 Length of the STring 

console.log("Jay\"".length);

//Question 2 Includes, StartWith, EndWith

let a = "Jay Kumawat";

console.log(a.includes("jay"));
console.log(a.startsWith("J"));
console.log(a.endsWith(".com"));

//Question 3 String to Lowercase

console.log(a.toLocaleLowerCase());

// Get Amount

let b = "Please give Rs 1000";
let num = Number.parseInt(b.slice("Please give Rs ".length));
console.log(num);

// Question 4 update Character of String(Not Possible)

b[0]='A';
console.log(b);