`use strict`;
const arr = [1,2,3,4,5];
// for (const iterator of arr) {
//     console.log(iterator);
// }
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// arr.push(25);
// arr.pop();
// arr.shift();
// arr.unshift(52);
// console.log(arr);

const newArr = arr.map((num) => num*2);
// console.log(newArr);
const evenArr = arr.filter((num) => num%2 === 0);
// console.log(evenArr);
const total = arr.reduce((acc,num)=>{
    return acc + num;
},0);
// console.log(total);

const arrMd = [[1,2],[3,4],[5,6],[7,8],[9,10]];
// console.log(arrMd[2][1]);
arr.forEach((item)=>{
    console.log(item);
})