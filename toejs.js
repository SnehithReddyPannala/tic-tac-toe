let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let showButton=document.querySelector(".msg-container");
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
const resetGame=()=>{
   turnX=true;
   enableBoxes();
   showButton.classList.add("hide");
  
}

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
         checkWinner();
    });
 });
 const disableBoxes=()=>{
   for(let box of boxes){
   box.disabled=true;
   }
 }
 const enableBoxes=()=>{
   for(let box of boxes){
   box.disabled=false;
   box.innerText="";
   box.style.backgroundColor="#ffffc7";
   }
 } 
 const showBtn=()=>{
   showButton.classList.remove("hide");
 }
 const removeReset=()=>{
   resetBtn.classList.add("hide");
 }
 const showReset=()=>{
   resetBtn.classList.remove("hide");
 }
const checkWinner=()=> {
   for(let patterns of winningPatterns){

        let pos1Val= boxes[patterns[0]].innerText;
         let pos2Val=boxes[patterns[1]].innerText;
         let pos3Val=boxes[patterns[2]].innerText;
         if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
               setTimeout(() => {
                  alert(`Yahooo! Player ${pos1Val} Wins!🥳`);
                  disableBoxes();
                  showBtn();
                  removeReset();
              }, 100);
              return;
            } 
         }
   }
}    
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",()=>{
   resetGame();
   showReset();
});