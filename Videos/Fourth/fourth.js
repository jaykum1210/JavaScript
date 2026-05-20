let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length);
console.log(typeof arr);
console.log(arr[0]);
arr[0] = 100;
console.log(arr);

for(let i of arr){
    console.log(i);
}

//Or

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//Methods of Arrays

arr.push(10000);
console.log(arr);
arr.pop();
console.log(arr);

arr = arr.toString();
console.log(`${arr.toString()} Type : ${typeof arr}`);


let arr1 = [10,20];
let arr2 = [30,40,50,60];
console.log(arr1.concat(arr2));

arr1.unshift(100);
console.log(arr1);

arr1.shift();
console.log(arr1);


console.log(arr2.slice(1,2));
arr2.splice(1,2,100,200,300,300,400)
console.log(arr2);

arr3 = [1,2,3,4,5];
arr3.splice(1,0,100);
console.log(arr3);
arr3.splice(1,1);
console.log(arr3);
