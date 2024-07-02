document.addEventListener("DOMContentLoaded",function(){
const oneB = document.getElementById("oneB");
const twoB = document.getElementById("twoB");
const plusB = document.getElementById("plusB");
const equalsB= document.getElementById("equalsB");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

let res1;
let res2;
let res3;

oneB.addEventListener("click",function(){
     num1.textContent = oneB.textContent;//изменили содержимое числового поля 1 на содержимое oneB
     res1 =  num1.textContent;
});
twoB.addEventListener("click",function(){
    num2.textContent = twoB.textContent;
    res2 =  num2.textContent;
    });
plusB.addEventListener("click",function(){
    console.log(result);
    res3 =  parseInt(res1)+ parseInt(res2);
    
    console.log(res3);
    });
equalsB.addEventListener("click",function(){
    equalsB.textContent;
    result.textContent = res3;
    });
});