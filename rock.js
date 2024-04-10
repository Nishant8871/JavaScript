const player = document.getElementById('player')
const computer = document.getElementById('computer')
const choices=["rock","paper","scissor"]
const pscore=document.getElementById('pscore')
const cscore=document.getElementById('cscore')
const res =document.getElementById('result')
let playerscore=0;
let computerscore=0;
let result="";

function playgame(playerchoice)
{
  let computerchoice = choices[Math.floor(Math.random()*3)]

  

  if(playerchoice===computerchoice)
    result="IT IS TIE"
  else{
    switch(playerchoice)
    {
      case "rock":
        result=(computerchoice==="scissor")?"YOU WIN":"YOU LOST"
        break;
      case "paper":
        result=(computerchoice==="rock")?"YOU WIN":"YOU LOST"
        break;
      case "scissor":
        result=(computerchoice ==="paper")?"YOU WIN":"YOU LOST"
        break;
    }
  }
  player.textContent=`PLAYER: ${playerchoice}`
  computer.textContent=`COMPUTER:${computerchoice}`
  res.textContent=result

  switch(result)
  {
    case "YOU WIN":
      playerscore++;
      pscore.textContent=` Player Score: ${playerscore}`
      break
    case "YOU LOST":
      computerscore++;
      cscore.textContent=`Computer score : ${computerscore}`
      break;
  }
}
