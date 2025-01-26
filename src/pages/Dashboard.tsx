import React, { useEffect, useState } from 'react'
import SideBar from '../components/ui/SideBar'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ShareIcon from '../icons/ShareIcon'
import PlusIcon from '../icons/PlusIcon'
import { useNavigate } from 'react-router-dom'
import Model from '../components/ui/AddContent'
import axios from 'axios'

const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false)
  const [getAllcontent, setGetAllcontent] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
   const response =  await axios.get('/api/v1/content/getcontent')
   setGetAllcontent(response.data.content)
    }
    fetchData()
  }, [])
console.log("getAllcontent", getAllcontent)
  return (
    <div className="flex  h-[90rem] w-full relative">
      <SideBar />
      <div className='w-full p-8'>
        <div className='flex justify-between '>
          <h1 className='text-3xl font-semibold'>All Notes</h1>
          <div className='flex gap-x-2'>
            <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon size='lg' />}  />
            <Button variant="primary" size="lg" text="Add Content" startIcon={<PlusIcon size='lg' />} onclick={()=> setModelOpen(true)}/>
          </div>
        </div>

        <div className='w-full flex flex-wrap gap-x-2 pt-12'>
         { getAllcontent.map(({title, type, link})=> (
          <Card  type={type} title={title} link={link} />
         ))  
         
         }
          {/* <Card/> */}
        </div>
      </div>
      {modelOpen && <Model onClose={() => setModelOpen(false)} />}
    </div>
  )
}

export default Dashboard