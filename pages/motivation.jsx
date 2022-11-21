import React from 'react'
import motivationImg from '../public/assets/projects/motivation.jpg'
import Image from 'next/image'
import {RiRadioButtonFill} from "react-icons/ri"
import Link from 'next/link'

const motivation = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='z-1 absolute' layout="fill" objectFit="cover" src={motivationImg} alt="project image" />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Daily Motivation Message</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-8 pt-8'>
        <div className='cols-span-4'>
          <p className='text-[#5651e1] text-xl tracking-wider'>Project</p>
          <h2>Overview</h2>
          <p>
          In this project, the aim is to scrap data from websites. The program currently scraps data from a quotes website and sends quotes
           to a user, I am still modifying it to do something else, something more useful, I won't disclose it yet but will do so soon. Stay
            tuned.
          </p>
          <a href='https://github.com/SiceloMinlos/Daily-Motivational-Quotes' target="_blank">
          <button className='px-8 py-2 mt-4 mr-4' href="<button className='px-8 py-2 mt-4 mr-4'>Code</button>">Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies Used</p>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Quotes API</p>
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

export default motivation