import { useState } from 'react'

import './App.css'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'
import SideBar from "./components/ui/sideBar"
function App() {


  return (

    <div className="flex  h-screen w-full ">
      <SideBar />
      <div className='w-full p-8'>
        <div className='flex justify-between '>
          <h1 className='text-3xl font-semibold'>All Notes</h1>
          <div className='flex gap-x-2'>
          <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon size='lg'/>}/>
          <Button variant="primary" size="lg" text="Add Content" startIcon={<PlusIcon size='lg'/>}/>
          </div>
        </div>
        <div></div>
      </div>
  
    </div>
  )
}

export default App
