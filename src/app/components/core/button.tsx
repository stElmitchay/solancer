import React from 'react'

type Button = {
  buttonColor: string,
  text: string,
  rounded_size: string
}


const PrimaryButton = ({
  buttonColor, text, rounded_size
}: Button) => {
  return (
    <button className={`bg-${buttonColor} rounded-${rounded_size} px-8 py-3 hover:text-slate-200 text-slate-500 font-semibold`}><h5>{text}</h5></button>
  )
}

export default PrimaryButton;