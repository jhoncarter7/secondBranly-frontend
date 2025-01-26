import React from 'react'

const InputBox = ({type, placeholder}: {type: string, placeholder: string}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className='border border-slate-400 rounded-lg px-2' />
    </div>
  )
}

export default InputBox