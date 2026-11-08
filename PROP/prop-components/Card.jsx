import React from 'react'

const Card = (prop) => {
  return (
    <div className = "child">
      <img src = {prop.img}/>
      <h1>{prop.user}</h1>
      <p>Describe: {prop.des}</p>
      <button>Follow</button>
    </div>
  )
}

export default Card
