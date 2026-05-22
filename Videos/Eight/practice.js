let theme = document.querySelector(".Clor");
let body = document.querySelector("body");
let btn = document.querySelector("button");
let mode = "light"

theme.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.style.cssText="background-color : black;color:white;"
        btn.style.cssText="background-color : black;color:white;border:1px solid white;"
    }
    else{
        mode = "light";
        body.style.cssText="background-color : white;color:black;"
        btn.style.cssText="background-color : white;"
    }
});
