let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnX = true;
const winningPatterns=[
                    [0,1,2],
                     [0,3,6],
                     [0,4,8],
                     [1,4,7],
                     [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8]
                ];


        boxes.forEach((box) => {
        box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
            box.style.backgroundColor="rgb(244,244,130)";
         }else{
            box.innerText="O";
            turnX=true;
            box.style.backgroundColor="rgb(244,244,130)";
         }
         box.disabled=true;
    });
 });
                    