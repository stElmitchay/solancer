import React from 'react'

type Button = {
    color: string,
    text: string
}


const PrimaryButton = ({
    color, text
} : Button) => {
  return (
    <button className={`bg-${color} rounded-full px-8 py-3`}><h5 className='text-white'>{text}</h5></button>
  )
}

export default PrimaryButton;