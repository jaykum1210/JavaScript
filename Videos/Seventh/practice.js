let newbutton = document.createElement("button");
newbutton.innerText = "Click Me";
newbutton.style.cssText = "background-color : red; color:white";

document.body.prepend(newbutton);

let par = document.querySelector("p");
console.log(par);

// par.setAttribute("class","box");

par.classList.add("box");