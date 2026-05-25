// function hello(){
//     console.log("Hello");
// }

// setTimeout(hello,4000);

// function getData(DataId,NextData){
//     setTimeout(()=>{
//         console.log("data", DataId);
//         if(NextData){
//             NextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2);
// });

// getData(2,()=>{
//     getData(3,()=>{
//         getData(4);
//     });
// });

// const getPromise = () =>{
//     return new Promise((resolve, reject) => {
//         console.log("Promise");
//         reject("Failed");
//         resolve("Success");
//     });
// }

// let prom = getPromise();
// // prom.then((res)=>{
// //     console.log("Successss, res");
// // });

// prom.catch((err)=>{
//     console.log("Error, err");
// });

// function asnc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//             resolve("Success 1");
//         },2000);
//     });
// }

// function asnc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//             resolve("Success 2");
//         },2000);
//     });
// }

// console.log("Fetching Data 1");
// let p1 = asnc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching 2");
//     let p2 = asnc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// })

// Promise Chain

// function getData2(DataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(DataId);
//       resolve("Success");
//     }, 2000);
//   });
// }

// getData2(1).then((res) => {
//   return getData2(2).then((res) => {
//     return getData2(3).then((res) => {
//       console.log(res);
//     });
//   });
// });


function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data");
            resolve("Success");
        },2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}

getWeatherData();