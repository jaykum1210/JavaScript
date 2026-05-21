let btn1 = document.querySelector(".btn");

btn1.onclick = () =>{
    console.log("Hii");
}

let btn2 = document.querySelector(".btn2");

btn2.ondblclick = () => {
    console.log("Double Click");
}

let diiv = document.querySelector("div");

diiv.onmouseover = () => {
    console.log("Hoveeeer");
}

diiv.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
    console.log(evt.type);
}

let para = document.querySelector("p");
console.log(para);

para.addEventListener("mouseover",()=>{
    console.log("Hover");
})