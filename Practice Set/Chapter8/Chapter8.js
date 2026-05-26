// Question 1 Different Alerts for different buttons


let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", ()=>{
    alert('Button 1');  
});
btn2.addEventListener("click", ()=>{
    alert('Button 2');  
});
btn3.addEventListener("click", ()=>{
    alert('Button 3');  
});

// Question 2 change Url To other page Done in Html

// Question 3 Change URL using addEventListener

let bookmark = document.querySelector("#bookmark2");
bookmark.children[0].addEventListener("click",()=>{
    location.href = "https://www.google.com/";
});
bookmark.children[1].addEventListener("click",()=>{
    location.href = "https://www.geeksforgeeks.org/";
});
bookmark.children[2].addEventListener("click",()=>{
    location.href = "https://leetcode.com/problems/largest-odd-number-in-string/description/";
});

// Question 4 Fetch Data Every after 5 Seconds

// setInterval(()=>{
//     alert('Got Data');
//     console.log(document.textContent);
// },5000);

// Question 5 Bulb Effect using Class List Toggle

let bulb = document.querySelector(".bulb");
let bulbbtn = document.querySelector(".Bulbbtn");
let bulbtheme = "light";

function bulbonfun(){
    bulbtheme = "dark";
    bulbbtn.innerText = "Off";
    bulb.classList.add("bulbon");
}

function bulbofffun(){
    bulbtheme = "light";
    bulbbtn.innerText = "On";
    bulb.classList.remove("bulbon");
}

function checkfunction(){
    if(bulbtheme==="light"){
        bulbonfun();
    }
    else{
        bulbofffun();
    }
}

bulb.addEventListener("click",checkfunction);
bulbbtn.addEventListener("click",checkfunction);