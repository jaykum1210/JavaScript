let div = document.querySelector("div");

let id = div.getAttribute("id");
console.log(id);

let classs = div.getAttribute("class");
console.log(classs);


div.setAttribute("class","hi");

// div.style.backgroundColor = "blue"
// div.style.height = "100px";
// div.style.width = "100px";

div.style.cssText = "Background-color : black; height:250px; width:100px; color:white;display:flex;align-items:center;justify-content:center;flex-direction:column";

let newbutton = document.createElement("button");
newbutton.innerText = "Click Me";

div.append(newbutton);
div.prepend(newbutton);
div.before(newbutton);
div.after(newbutton);

document.querySelector("p").remove();