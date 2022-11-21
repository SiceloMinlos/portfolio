import React from 'react'
import sassaImg from '../public/assets/projects/sassa.jpg'
import Image from 'next/image'
import {RiRadioButtonFill} from "react-icons/ri"
import Link from 'next/link'

const sassa = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='z-1 absolute' layout="fill" objectFit="cover" src={sassaImg} alt="project image" />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>SASSA SRD Grant Manager</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-8 pt-8'>
        <div className='cols-span-4'>
          <p className='text-[#5651e1] text-xl tracking-wider'>Project</p>
          <h2>Overview</h2>
          <p>
          Everyone loves automation, and not everyone is tech-savvy. The application I've built automatically applies users for the SRD grant
           and manages the user's account. The application currently just checks the user's status only. I am yet to add more functions to the
            program. Stay tuned!
          </p>
          <a href='https://github.com/SiceloMinlos/srd_sassa_auto_manager' target="_blank">
          <button className='px-8 py-2 mt-4 mr-4' href="<button className='px-8 py-2 mt-4 mr-4'>Code</button>">Code</button>
          </a>  
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies Used</p>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Sassa API</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Twilio API</p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
        <p className='text-[#5651e1] underline font-bold uppercase cursor-pointer'>Back</p>
        </Link>

      </div>
      
    </div>
  )
}

export default sassa