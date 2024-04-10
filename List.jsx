import React from 'react'

function List(props) {
  const category=props.category
  const item = props.items

  const itemList=item.map(e=>(
    <li key={e.id}>{e.name}:  <b>{e.calories}</b></li>
    ))
  
  return (
    <>
    <h1>{category}</h1>
    <ol>{itemList}</ol>
    </>
  )
}

export default List



