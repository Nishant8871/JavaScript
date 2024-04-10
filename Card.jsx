import pic from './assets/download.jpg'

function Card({name="guest",about="about me"}){
    return(
      <>
      <div className="main">
          <img src={pic} alt="profilepic"></img>
          <h1>{name}</h1>
          <p>{about}</p>
      </div>
      </>
    )
}

export default Card