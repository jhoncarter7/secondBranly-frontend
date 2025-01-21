import { useState } from 'react'

import './App.css'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'
function App() {

  
  return (
   
    <div className="flex justify-center items-center h-screen">
      <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon size='md'/>}/>
      <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon size='md'/>}/>
    </div>
  )
}

export default App
