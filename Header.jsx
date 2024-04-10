function Header(){

  const style={
    display:"inline-block",
    color:"blue"

  }
  return(
    
    <>
    <h1>This is my website</h1>
    <ul style={style}>
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Contact</li>
    </ul>

    </>
  )
}

export default Header