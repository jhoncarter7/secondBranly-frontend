import React from 'react'
import { TwitterIcon } from '../../icons/TwitterIcon'
import ShareIcon from '../../icons/ShareIcon'
import { YoutubeIcon } from '../../icons/YoutubeIcon'
import DeleteIcon from '../../icons/DeleteIcon'
interface CarsProps {
    title: String,
    tags?: [],
    link: String
    type: "twitter" | "youtube"
}
const Card = ({ title, tags, link, type }: CarsProps) => {
  
    // let tags = ["productive", "learning"]
    return (
        <div className='min-w-60 border border-slate-400 p-4 space-y-3 rounded-lg'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-x-3 items-center '>
                   {
                    type === "twitter" &&  <TwitterIcon size="md" />
                   }
                   {
                    type === "youtube" && <YoutubeIcon size="md"/>
                   }
                    <div className='font-medium text-lg'>
                        {title}
                    </div>
                </div>
                <div className='flex gap-x-3'>
                    <ShareIcon size='md' />
                    <div onClick={()=> {}}>
                    <DeleteIcon size='md' />
                    </div>
                </div>
            </div>

            <div className='rounded-lg'>
                {type === "youtube" && <iframe src={link.replace('watch', 'embed').replace('?v=', '/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace('x.com', 'twitter.com')}></a>
                </blockquote>}
            </div>

            <div className="flex gap-2">
                {tags && tags?.map((tag) => (
                    <div className='bg-secondary rounded-lg p-1 text-primary'>
                        <p>#{tag}</p>
                    </div>
                ))}
            </div>

            <div className="">
                Added on 10/3/2025
            </div>
        </div>
    )
}


export default Card