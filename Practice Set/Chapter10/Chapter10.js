// Question 1 - Fetch Data from Api key

let publicapi = fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,relative_humidity_2m,wind_speed_10m");

publicapi.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log("Error : " + error);
});


// Question 2 - Make a Note App which saves data to local storage

let note = prompt("Enter Note : ");

if(note){
    let user_num = localStorage.length+1;
    localStorage.setItem(user_num,note);
}

let box = document.querySelector(".box");

box.innerText = "";

// Fetch Data from Local Storage

for(let i = 0;i<localStorage.length;i++){
    let key = localStorage.key(i);
    let savednotes = localStorage.getItem(key);

    box.innerHTML += savednotes + "<br>";
}

// Delete last note

let lastkey = localStorage.length;

if(lastkey>0){
    localStorage.removeItem(lastkey);
    alert("Last Node Deleted");
} else{
    alert("No Note Added");
}

box.innerText = "";

for(let i = 0;i<localStorage.length;i++){
    let key1 = localStorage.get(key);
    let savenotes = localStorage.getItem(key);
    box.innerHTML +=savenotes + "<br>";
}