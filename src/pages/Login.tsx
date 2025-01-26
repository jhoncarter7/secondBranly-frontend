import React, { HtmlHTMLAttributes, useEffect, useRef } from 'react'
import InputBox from '../components/ui/InputBox'
import Button from '../components/ui/Button'
import axios from 'axios'

const Login = () => {
  const userNameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

   const handleSignin = async(e: any) =>{
    e.preventDefault()
    const userName = userNameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post("/api/v1/signin", {
     userName,
     password
    })
   }
  return (
    <div className='w-full h-screen my-auto '>
    <div className='flex flex-col  justify-center items-center gap-y-4 h-screen'>
        <h1 className='mx-auto text-2xl text-slate-600'>Login</h1>
        <form action="" className='flex flex-col gap-y-4 ' onSubmit={handleSignin}>
        <InputBox type='text' reference={userNameRef} placeholder="user name"/>
        <InputBox type='password' reference={passwordRef} placeholder="password"/>
        <Button variant='primary' size='md' text='Login' type="submit" className='flex items-center justify-center w-full'></Button>
        </form>
    </div>
</div>
  )
}

export default Login