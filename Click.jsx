import React from 'react'

function Click() {
  let count=0;
  function change(){
    
    count++;
    if(count<=5){
    console.log("click me ",count)
    }
  else{
  console.log("my count more than 5 ",count)
  }
  }

  function change1(e){
    e.target.textContent="chnaged"
  }
  return (
    <button onClick={(e)=>change1(e)}>Click Me</button>
  )
}

export default Click