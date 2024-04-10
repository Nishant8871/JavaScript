import pic from './assets/download.jpg'
import proptypes from 'prop-types'

function Card1(props){
    return(
      <>
      <div className="main">
          <img src={pic} alt="profilepic"></img>
          <h1>{props.name}</h1>
          <p>{props.about}</p>
      </div>
      </>
    )
}

Card1.propTypes={
  name:proptypes.string,
  about:proptypes.number
}
Card1.defaultProps={
  name:"guest",
  about:"about ,me"
}

export default Card1