const cells=document.querySelectorAll(".cell");
const animationCircleX = document.querySelector(".animCircleX");
const animationCircleO = document.querySelector(".animCircleO");
let board = [[0,0,0],
[0,0,0],
[0,0,0]];
let row;
let column;
let isX=true;
function handleClick(event) {
    const index = event.target.dataset.index;
    //строки
    if(index==0||index==1||index==2){
        row=0;
    }
    if(index==3||index==4||index==5){
        row=1;
    }
    if(index==6||index==7||index==8){
        row=2;
    }
    //столбцы
    
    if(index==0||index==3||index==6){
        column=0;
    }
    if(index==1||index==4||index==7){
        column=1;
    }
    if(index==2||index==5||index==8){
        column=2;   
    }
    // board[row][column]=1;
    const cell=cells[index];
    if(isX){
        board[row][column]="X";
        isX=false;
        const divX = cell.querySelector(".X");
        divX.classList.remove("disable");
        animationCircleX.classList.remove("disable");
        animationCircleO.classList.add("disable");
     }
     else{
        board[row][column]="O";
        isX=true;
        const divO = cell.querySelector(".O");
        divO.classList.remove("disable");
        animationCircleO.classList.remove("disable");
        animationCircleX.classList.add("disable");
     }
     
    console.table(board);

    if(boardChecking()){
     console.log("ПОБЕДА!")
    }

}
cells.forEach((cell) => cell.addEventListener("click", handleClick));

function boardChecking(){
    let firstSymbol;
    let result = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length;j++){
           if(board[i][j]===0){
            result = 0;
                break;
           }
           else{
                if(j == 0){
                    firstSymbol=board[i][j];
                }
                if(firstSymbol!=board[i][j]){
                    result = 0;
                    break; 
                }
                else{
                    result++;
                }
           }
           if(result == 3){
            return true;
           }
        }
    }
    result = 0;
    for(let i = 0; i < board.length;i++){
        for(let j = 0; j < board.length; j++){
           if(board[j][i]===0){
            result = 0;
                break;
           }
           else{
                if(i == 0){
                    firstSymbol=board[j][i];
                }
                if(firstSymbol!=board[j][i]){
                    result = 0;
                    break; 
                }
                else{
                    result++;
                }
           }
           if(result == 3){
            return true;
           }
        }
    }
    result = 0;
    for(let i = 0; i < board.length;i++){
        if(board[i][i]===0){
            result = 0;
                break;
           }
           else{
                if(i == 0){
                    firstSymbol=board[i][i];
                }
                if(firstSymbol!=board[i][i]){
                    result = 0;
                    break; 
                }
                else{
                    result++;
                }
           }
           if(result == 3){
            return true;
           }
    }
    for(let i = 0; i < board.length;i++){
        if(board[i][board.length-i-1]===0){
            result = 0;
                break;
           }
           else{
                if(i == 0){
                    firstSymbol=board[i][board.length-i-1];
                }
                if(firstSymbol!=board[i][board.length-i-1]){
                    result = 0;
                    break; 
                }
                else{
                    result++;
                }
           }
           if(result == 3){
            return true;
           }
    }
    return false;
}
