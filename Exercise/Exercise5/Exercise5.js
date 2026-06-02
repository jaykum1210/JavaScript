let a = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to Server 1",
    "Connection Failed. Retrying...",
    "Connecting to Server 2",
    "Connection Successfull...",
    "Username Jay",
    "Trying Brute Force",
    "200K Password Tried",
    "Match Not Found",
    "200K Password Tried",
    "Match Found",
    "Accessing Account",
    "Hack Successfully",
]

let text = document.querySelector("#text");

const shown = async (seconds) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },seconds*1000);
    });
};

const Hack = async(message) =>{
    await shown(2);
    console.log(message);
    text.innerHTML += message + "<br>";
}

(async ()=>{
    for(let i = 0;i<a.length;i++){
        await Hack(a[i]);
    };
})();