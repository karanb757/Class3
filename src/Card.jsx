import React from 'react'

const Card = (props) => {      
  return (
    <div className='mr-7 mb-5 bg-white text-black inline-block p-6 text-center rounded'>
        <img className="ml-3 h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
        <h1 className='text-2xl font-semibold mb-2'>{props.name}</h1>
        <h2>{props.city} <br/> {props.age}</h2>
        <button className='mb-4 mt-2 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
  </div>
  )
}

export default Card