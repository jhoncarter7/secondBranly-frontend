import React from 'react'
import InputBox from '../components/ui/InputBox'
import Button from '../components/ui/Button'

const Signup = () => {
    return (
        <div className='w-full h-screen my-auto '>
            <div className='flex flex-col  justify-center items-center gap-y-4 h-screen'>
                <h1 className='mx-auto text-2xl text-slate-600'>Signup</h1>
                <form action="" className='flex flex-col gap-y-4 '>
                  
                 <InputBox type='text' placeholder="user name"/>
                <InputBox type='password' placeholder="password"/>
                <Button variant='primary' size='md' text='Signup' className='flex items-center justify-center w-full'></Button>
                </form>
            </div>
        </div>
    )
}

export default Signup