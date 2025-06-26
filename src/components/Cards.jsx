import React from 'react'

function Cards({icon, data, text, unit}) {
  return (
    <div className='Card'>
        <img src={icon} alt="vkk" />
        <div className='desc'>
        <p>{data} {unit}</p>
        <h4>{text}</h4>
        </div>
        </div>

  )
}

export default Cards