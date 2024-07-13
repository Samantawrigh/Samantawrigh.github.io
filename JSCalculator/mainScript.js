let counter=0;
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
    if(event.key=="+"){
        if(num1.textContent==0){
            num1.textContent = result.textContent;   
        }
        else{
            num2.textContent = result.textContent;   
        }
        result.textContent = "" ;
        counter = 0;
     }
     if(event.key=="="){
        result.textContent = Number( num1.textContent ) + Number(num2.textContent);
     }
    if(event.key=="-"){
        if(num1.textContent==0){
            num1.textContent = result.textContent;   
        }
        else{
            num2.textContent = result.textContent;   
        }
        result.textContent = "" ;
        counter = 0;
    }


});

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
 minusB.addEventListener("click",function(){
    res3 = parseInt(res1)-parseInt(res2);
        });
equalsB.addEventListener("click",function(){
    equalsB.textContent;
    result.textContent = res3;
    });
});

function addBtnValue(value){
    if(counter<6){
    console.log(counter);
    result.textContent +=value;
    counter +=1;
    }
}