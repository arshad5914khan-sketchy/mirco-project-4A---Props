import React from 'react'

const Follow = (prop) => {
  return (
    <div className = "child">
      <img src= {prop.image} alt="" />
      <p className='name'>{prop.name}</p>
      <p className = "followers">{prop.followers}</p>
      <button>Follow</button>
    </div>
  )
}

export default Follow
