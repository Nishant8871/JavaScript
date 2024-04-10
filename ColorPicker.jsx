import React, { useState } from 'react'
 
function ColorPicker() {
    const [color,setColor]=useState("#FFFFFF");

      function col(e){
        setColor(e.target.value)}
  return (
    <div>
      <h1>Color Picker</h1>
      <div id=" pick" style={{border:"solid 2px black",width:"300px",height:"200px",backgroundColor:color}} >
        <p>Selected Color: {color}</p>
      </div>
      <label>Select A color:</label>
      <input type='color' id='picker' onChange={col}></input>
    </div>
  )
}

export default ColorPicker