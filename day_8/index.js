`use strict`;

let name = `Arpit`;
let age = 25;
const book = {
    title: `Harry Potter and Philospher stone`,
    author: `JK Rowling`,
    year: 1997,
    bookInfo: function () {
      console.log(`${this.title} is written by ${this.author}`);
    },
    publishingYear: function (year) {
      this.year = year;
    },
  };
// console.log(`${name} is ${age} years old!`);
// console.log(`Hi, My name is 
//     Arpit, I am From India,
//     And I am a software engineer!`);
const arr1 = [1,2,3,4,5];
const [first,second,...args] =[ ...arr1];
// console.log(first,second,args);

const {title,author} = {...book};
// console.log(title);
// console.log(author);
const arr2 = [...arr1,7,58,25];
// console.log(arr2);


function total (...args){
    let sum = 0;
    args.forEach(num => {
        sum += num;
    })
    return sum;
}

// console.log(total(1,2,3,4,5,6,7,8,9,10));

const product = function(num1,num2=1){
    return num1*num2;
}

// console.log(product(25));

// function getLaptop(make,modal,year){
//     return {
//         make,
//         modal,
//         year
//     };
// };

// function getLaptop(make,modal,year){
//     let
//     return {
//         make,
//         modal,
//         year
//     };
// };

// console.log(getLaptop(`Apple`,`AirPro`,2024));;

let nameObj = 'make';

const laptop = {
    [nameObj] : `Apple`
};

// console.log(laptop);