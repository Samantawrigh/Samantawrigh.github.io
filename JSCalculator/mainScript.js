let counter=0;
document.addEventListener("DOMContentLoaded",function(){
const plusB = document.getElementById("plusB");
const equalsB= document.getElementById("equalsB");
const num1 = document.getElementById("num1");
const result = document.getElementById("result");


let res3;
let operator;

document.addEventListener("keydown", function(event){
    console.log(event.key);
    if(counter<6){
        if(event.key==0){
            result.textContent +=event.key ;
            counter+=1;
         }
        if(event.key==1){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==2){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==3){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==4){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==5){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==6){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==7){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==8){
            result.textContent +=event.key ;
            counter+=1;
        }
        if(event.key==9){
            result.textContent +=event.key ;
            counter+=1;
        }
            }
});
plusB.addEventListener("click",function(){
    num1.textContent = result.textContent;
    result.textContent="";
    operator = plusB.textContent;
   // res3 =  parseInt(res1)+ parseInt(res2);
   // console.log(res3);
    });
 minusB.addEventListener("click",function(){
    num1.textContent = result.textContent;
    result.textContent="";
    operator = minusB.textContent;
    //res3 = parseInt(res1)-parseInt(res2);
        });
equalsB.addEventListener("click",function(){
    if(num1.textContent!=""){
        if(operator=="+"){
            res3 =  parseInt(num1.textContent)+ parseInt(result.textContent);
        }
        if(operator=="-"){
            res3 = parseInt(num1.textContent) - parseInt(result.textContent);
        }
        console.log("результат: " + res3);
        console.log("число 1: " + num1.textContent);
        console.log("число 2: " + result.textContent);
        console.log("оператор: " + operator);
        result.textContent = res3;
    }
    });
});

function addBtnValue(value){
    if(counter<6){
    console.log(counter);
    result.textContent +=value;
    counter +=1;
    }
}

function AC(){
    result.textContent = "";
    num1.textContent = "";
    operator = "";
    counter = 0;
}