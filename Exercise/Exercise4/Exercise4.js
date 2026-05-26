let themebtn = document.querySelector(".theme");
let main = document.querySelector("main");
let hours = document.querySelector(".hour");
let min = document.querySelector(".min");
let AMPM = document.querySelector(".Ampm");
let seconds = document.querySelector(".second");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let date = document.querySelector(".Date");

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let theme = "light";

themebtn.addEventListener("click",()=>{
    if(theme === "light"){
        theme = "dark";
        main.style.backgroundColor = "white";
        main.style.color = "black";
    }
    else{
        theme = "light";
        main.style.backgroundColor = "black";
        main.style.color = "white";
    }
});


setInterval(()=>{
    let today = new Date();
    hours.innerText = String(today.getHours() % 12 || 12).padStart(2, "0");
    min.innerText = String(today.getMinutes()).padStart(2, "0");
    if(today.getHours()<=11){
        AMPM.innerText = "AM";
    }
    else{
        AMPM.innerText = "PM";
    }
    seconds.innerText = String(today.getSeconds()).padStart(2, "0");
    day.innerText = days[today.getDay()];
    month.innerText = months[today.getMonth()];
    date.innerText = today.getDate();
},500);