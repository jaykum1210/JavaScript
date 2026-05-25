const url = "https://cataas.com/api/tags";
let btn = document.querySelector(".btn");
let para = document.querySelector(".data");

// let promise = fetch(url);
// console.log(promise);

const getData = async ()=>{
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    console.log(data);
    para.innerText = data[2];
}

btn.addEventListener("click",getData);