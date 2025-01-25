import React from 'react'
import SideBarItem from './SideBarItem'
import { TwitterIcon } from '../../icons/TwitterIcon'
import { YoutubeIcon } from '../../icons/YoutubeIcon'
import {BrainIcon} from "../../icons/BrainIcon"
const SideBar = () => {
  return (
    <div className='min-w-80 tex-xl  h-full gap-y-4 space-y-4 pl-6 border-e-2 pt-6 text-xl'>
    <div className='pb-6 '>
    <SideBarItem Icons={BrainIcon} IconColor='text-purple-600' text='Second Brainly' textSize='2xl' font='extrabold'/>
    </div>
    <div className='pl-4 space-y-8 text-slate-600'>
    <SideBarItem Icons={TwitterIcon} text='Tweets'  textSize='xl'/>
    <SideBarItem Icons={YoutubeIcon} text='Videos' textSize='xl'/>
    </div>
    </div>
  )
}

export default SideBar