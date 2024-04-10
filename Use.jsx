import React, { useState } from 'react'

function Use() {

  let [count,setCount]=useState(0)

  function inc(){
    setCount(count+1);  }

    function dec(){
      setCount(count-1);
    }


  return (
    <>
    <h1>{count}</h1>
    <button onClick={inc}>Add</button>
    <button onClick={dec}>Substract</button>
    </>
  )
}

export default Use