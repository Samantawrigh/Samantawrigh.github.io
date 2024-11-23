const cells=document.querySelectorAll(".cell");
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
     }
     else{
        board[row][column]="O";
        isX=true;
        const divO = cell.querySelector(".O");
        divO.classList.remove("disable");
     }
    console.table(board);
}
cells.forEach((cell) => cell.addEventListener("click", handleClick));
