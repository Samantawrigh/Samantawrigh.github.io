document.addEventListener("DOMContentLoaded",function(){
    const buttonForModalWindow = document.getElementById("btnForModalWindow");
    const modalWindow = document.getElementById("modWindow");


    const numberInput = document.getElementById("leavingAdult");
    const minusBtn = document.getElementById("minusButton"); 
    const plusBtn = document.getElementById("lastBtn");
    const numberInput2 = document.getElementById("leavingChildren");
    const minusBtnCd = document.getElementById("minusButtonCd"); 
    const plusBtnCd = document.getElementById("plusButtonCd");

    buttonForModalWindow.addEventListener("click", function(){
        console.log("start");
        if(modalWindow.classList.contains("modalDis"))
            modalWindow.classList.remove("modalDis");
        else
            modalWindow.classList.toggle("modalDis");
    });

   
    plusBtn.addEventListener("click",function(){
        let value = parseInt(numberInput.value);
        if(value<=100){
            numberInput.value = value+1;
        }
    });
    
    minusBtn.addEventListener("click",function(){
        let value = parseInt(numberInput.value);
        if(value>1){
            numberInput.value = value-1;
        }
    });

    plusBtnCd.addEventListener("click",function(){
        let value = parseInt(numberInput2.value);
        if(value<=100){
            numberInput2.value = value+1;
            console.log( numberInput2.value);
        }
    });
    

    minusBtnCd.addEventListener("click",function(){
        let value = parseInt(numberInput2.value);
        if(value>0){
            numberInput2.value = value-1 ;
            console.log(value);
        }
    });


    // navBar.addEventListener("click",function(evt){
    //     if(evt.key === 'Escape'){
    //     }
    // });
});