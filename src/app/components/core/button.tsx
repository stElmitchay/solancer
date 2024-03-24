import React from 'react'

type Button = {
    color: string,
    text: string,
    rounded_size: string
}


const PrimaryButton = ({
    color, text, rounded_size
} : Button) => {
  return (
    <button className={`bg-${color} rounded-${rounded_size} px-8 py-3`}><h5 className='text-white'>{text}</h5></button>
  )
}

export default PrimaryButton;