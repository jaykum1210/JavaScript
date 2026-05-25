// Question 1 Change Color of First Child Element of Nav

let nav = document.querySelector("nav");

console.log(nav.firstElementChild);
nav.firstElementChild.style.color = "Red";

// Question 2 Check that table conatin body or not(Done in Html)

// Question 3 Change color of first and last element of a box having 3 elements

box = document.querySelector(".Box");
box.firstElementChild.style.color = "Green";
box.lastElementChild.style.color = "Green";

// Question 4 Change Background color of all li tags

document.querySelectorAll("li").forEach((val)=>{
    val.style.backgroundColor = "Cyan";
});