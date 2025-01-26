import React, { HtmlHTMLAttributes, useRef } from 'react'
import InputBox from './InputBox'
import Button from './Button'
import axios from 'axios'

const AddContent = ({onClose}: {onClose : ()=> void}) => {
const typeRef = useRef<HTMLInputElement>()
const titleRef = useRef<HTMLInputElement>()
const linkRef = useRef<HTMLInputElement>()

  const addContentHandler = async(e: any) => {
    e.preventDefault()
    const type = typeRef.current?.value;
    const title = titleRef.current?.value;
    const link = linkRef.current ?.value;
   await  axios.post('/api/v1/content/create', {
    type,
    title,
    link
   })
   onClose()
  }
  return (
    <div className=' h-screen fixed top-0 left-0  bg-slate-400 opacity-60 w-full '>
        <div className='flex justify-center items-center h-full '>
     
        <form action="" onSubmit={addContentHandler} className='w-72 border rounded-lg bg-slate-100 flex flex-col justify-center items-center gap-y-3 py-4 '>
        <div className='flex w-full '>
        <h1 className='mx-auto'>Add content</h1>
        <div className='flex  justify-self-end pr-3 cursor-pointer' onClick={onClose}>X</div>
        </div>
        <InputBox type="string" placeholder='Type' reference={typeRef}/>
        <InputBox type="string" placeholder='Title' reference={titleRef} />
        <InputBox type="string" placeholder='link' reference={linkRef}/>

        <Button variant='primary' size='md' text='Add Content' type="submit"/>
        </form>
       
        </div>
    </div>
  )
}

export default AddContent