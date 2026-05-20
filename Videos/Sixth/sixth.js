// alert("Hello");
console.log(document.body);
// console.log(document.body.childNodes[1]);

// document.body.style.backgroundColor = "lightblue";

// document.body.childNodes[3].innerText = "123";


let a = document.getElementById("Hello");
console.log(a);
console.dir(a);

let b = document.getElementsByClassName("para");
console.log(b);

let c = document.getElementsByTagName("p");
console.log(c);

let d = document.querySelector("p");
console.log(d);

let e = document.querySelectorAll("p");
console.log(e);

let f = document.querySelector(".para");
console.log(f);

let g = document.querySelectorAll(".para");
console.log(g);

let h = document.querySelector("#Hello");
console.log(h); 


console.log(h.tagName);

console.log(document.querySelector("body").children);
console.log(document.querySelector("body").firstChild);

console.log(document.querySelector("div").innerText);

console.log(document.querySelector("div").innerHTML);

document.querySelector("div").innerText = "Hii";

document.querySelector(".para").innerHTML = "<i><b>Helllo</b></i>";


// console.log(document.querySelector("h2").textContent);

