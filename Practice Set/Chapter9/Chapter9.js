//Question 1 load script and then use then

// const loadscript1 = (src) => {
//     return new Promise((resolve, reject)=>{
//         script = document.createElement("script");
//         script.src = src;
//         script.onload = () =>{
//             resolve(src);
//         }
//         document.head.append(script);
//     });
// };

// let a = loadscript1("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js");

// a.then(()=>{
//     alert('Success');
// })

// a.catch(()=>{
//     alert('Failed');
// })

// Question 2 Load Script Using Async Await

// const loadscript = async (src) =>{
//     return new Promise((resolve, reject) =>{
//         script = document.createElement("script");
//         script.src = src;
//         script.onload = () =>{
//             resolve(src);
//         }
//         document.head.append(script);
//     });
// };

// const main2 = async () =>{
//     let a = await loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js");
//     console.log(a);
// };

// main2();


// Question 3 Create Promise and reject after 3 second and then use error handling

// let p = ()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             reject(new Error("Rjected"));
//         },3000);
//     });
// };

// let a = async ()=>{
//     try{
//         let b = await p();
//         console.log(b);
//     }
//     catch(err){
//         console.log("I knew It");
//     }
// }

// Question 4 create 3 promise and run all by using promise.all

let p1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hii");
        },1000);
    });
}

let p2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("hello");
        },2000);
    });
}

let p3 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Bye");
        },3000);
    });
}

const run = async () => {
    console.time("run");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.timeEnd("run");
}

run();