import React from 'react'

type Button = {
  buttonColor: string,
  text: string,
  rounded_size: string,
  hover_text_color?: string
}


const PrimaryButton = ({
  buttonColor, text, rounded_size, hover_text_color
}: Button) => {
  return (
    <button className={`bg-${buttonColor} rounded-${rounded_size}  hover:bg-${hover_text_color} px-8 py-3`}><h5 className={`text-slate-200`}>{text}</h5></button>
  )
}

export default PrimaryButton;