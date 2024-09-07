let counter=0;
document.addEventListener("DOMContentLoaded",function(){
const multiplyB = document.getElementById("multiplyB");
const plusB = document.getElementById("plusB");
const minusB = document.getElementById("minusB");
const equalsB= document.getElementById("equalsB");
const num1 = document.getElementById("num1");
const result = document.getElementById("result");
const divideB = document.getElementById("divideB");
const percentB = document.getElementById("percentB");


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
percentB.addEventListener("click",function(){
    getNum1AndOperator(percentB);  
    console.log("test1" + percentB.textContent)
});
multiplyB.addEventListener("click",function(){
    getNum1AndOperator(multiplyB);    
});
plusB.addEventListener("click",function(){
    getNum1AndOperator(plusB);
});
minusB.addEventListener("click",function(){
    getNum1AndOperator(minusB);  
});
divideB.addEventListener("click",function(){
    getNum1AndOperator(divideB);  
});
function getNum1AndOperator(operatorB){
    num1.textContent = result.textContent;
    clearResult();
    operator = operatorB.textContent;
    console.log("test2" + operatorB.textContent);
}
equalsB.addEventListener("click",function(){
    if(num1.textContent!=""){
        let firstNum = Number(parseFloat(num1.textContent).toPrecision(5));
        let secondNum = Number(parseFloat(result.textContent).toPrecision(5));
        if(operator=="+"){
            res3 = firstNum + secondNum;
            console.log(res3);
        }
        if(operator=="-"){
            res3 = firstNum - secondNum;
        }
        if(operator=="X"){
            res3 = firstNum * secondNum;
        }
        if(operator=="/"||operator=="%"){
            res3 = firstNum / secondNum;
        }
        console.log("результат: " + res3);
        console.log("число 1: " + num1.textContent);
        console.log("число 2: " + result.textContent);
        console.log("оператор: " + operator);
        //result.textContent = res3.toFixed(5);
        result.textContent = formatNum(res3);
        num1.textContent = "";
    }
    });
    
    function formatNum(num){
        return parseFloat(num.toPrecision(6).toString())
    }
});

function addBtnValue(value){
    if(counter<6){
        console.log(counter);
        result.textContent +=value;
        counter+=1;
    }
}

function addDot(){
    if(result.textContent != ""){
        console.log(result.textContent.indexOf("."));
        if(result.textContent.indexOf(".")==-1){
            result.textContent += ".";
        }
    }
}   

function AC(){
    clearResult();
    num1.textContent = "";
    operator = "";
}

function makeOpposite(){
    if(result.textContent != ""){
        if(result.textContent.indexOf("-")==-1){
            result.textContent = "-" + result.textContent;
        }
        else{
            result.textContent=result.textContent.slice(1);
        }
    }
}

function clearResult(){
    result.textContent = "";
    counter = 0;
}


