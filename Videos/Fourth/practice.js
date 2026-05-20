//Average of All Marks

let marks = [85,97,44,37,76,60];

let sum = 0;
for(let mark of marks){
    sum+=mark;
}
console.log(`Average : ${sum/marks.length}`);

//10% Discount on Every Value

let price = [250,645,300,900,50];

for(let i = 0;i<price.length;i++){
    price[i] = price[i] - (price[i]*0.1);
}
console.log(price);

//Create array and make changes

let companies = ["Bloomberg", "Microsoft" , "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
