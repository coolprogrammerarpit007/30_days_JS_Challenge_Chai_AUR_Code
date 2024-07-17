`use strict`;

const isEvenOdd  = function(num){
    return num%2 === 0 ? `Even` : `Odd`;
}
// console.log(isEvenOdd(24));

const square = function(num){
    return num*num;
}

// console.log(square(24));

const maxNums = function(num1,num2){
    return Math.max(num1,num2);
}

// console.log(maxNums(12,-123));

const concatStr = function(str1,str2){
    return str1.concat(str2);
}
// console.log(`Hello `,`Arpit`);

const addNums = (num1,num2) => num1 + num2;
// console.log(addNums(12,13));
const strIncludes = (str,ch) => str.includes(ch);
// console.log(strIncludes(`hello`,`llo`)); 

const product = (num1,num2) => num1*num2;
// console.log(product(2,3));
const greeting = (name,age=25) => `Hello ${name}`;
// console.log(greeting(`Arpit`));

// const func2 = function(){
//     console.log(`Hello World!`);
// }
// const func1 = function(func2,num){
//     for(let i=0;i<=num;i++){
//         func2();
//     }
// }

// func1(func2,5)

const func2 = function(num){
    return num*num;
}
const func3 = function(num){
    return num*num;
}
const func1 = function(func2,func3,num){
    const result  =  func2(2);
    return func3(result);
}

// console.log(func1(func2,func3,2));