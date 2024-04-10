import React, { useState } from 'react'

function MyComponent() {

  const [name,setName]=useState("Guest")
  const [quantity,setQuantity] =useState()

  function Name(e){
    setName(e.target.value)
  }
  
  function Quantity(e){
      setQuantity(e.target.value)
  }
  return (
    <div>
        <input value={name} onChange={Name}/>
        <p>Name: {name}</p>
        <input onChange={Quantity} type='number' max="999"/>
        <p>Quantity: {quantity}</p>

      </div>
  )
}

export default MyComponent