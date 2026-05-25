let age = Number.parseInt(prompt("Enter Age : "));
let val = confirm("Do You Want to See Result?");

if(val){
    if(age<0){
        console.error("Age is not Possible");
    }   
    else if(age>=18){
        alert('You can Drive');
    }
    else{
        alert('You Cannot Drive');
    }
}


let num = Number.parseInt(prompt("Enter Number : "));

if(num>4){
    location.href = "https://www.google.com/?zx=1779725448232";
}

let color = prompt("Enter Color Name : ");

document.body.style.backgroundColor = color;