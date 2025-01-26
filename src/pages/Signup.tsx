import React, { useRef } from 'react'
import InputBox from '../components/ui/InputBox'
import Button from '../components/ui/Button'
import axios from 'axios';

const Signup = () => {
    const userNameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();


    const handlerSignup = async(e: any)=> {
        e.preventDefault()
    const userName = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post("/api/v1/signup", {
        userName,
        password
    })
    }

    return (
        <div className='w-full h-screen my-auto '>
            <div className='flex flex-col  justify-center items-center gap-y-4 h-screen'>
                <h1 className='mx-auto text-2xl text-slate-600'>Signup</h1>
                <form action="" className='flex flex-col gap-y-4' onSubmit={handlerSignup}>
                  
                 <InputBox type='text' placeholder="user name" reference={userNameRef}/>
                <InputBox type='password' placeholder="password" reference={passwordRef}/>
                <Button type="submit" variant='primary' size='md' text='Signup' className='flex items-center justify-center w-full'></Button>
                </form>
            </div>
        </div>
    )
}

export default Signup