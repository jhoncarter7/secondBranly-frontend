import React from 'react'
import SideBar from '../components/ui/SideBar'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ShareIcon from '../icons/ShareIcon'
import PlusIcon from '../icons/PlusIcon'

const Dashboard = () => {

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
         
        <div className='w-full flex flex-wrap gap-x-2 pt-12'>
        <Card title="twitter"  link='https://x.com/Shehzad_Ind/status/1882756224762188092' type='twitter'/>
        {/* <Card/> */}
        </div>
      </div>
  
    </div>
  )
}

export default Dashboard