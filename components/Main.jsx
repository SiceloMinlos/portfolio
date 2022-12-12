import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"
const Main = () => {
  return (
    <div id="Main" className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm track-widest text-gray-600'>Welcome to my world ^_^</p>
          <h1 className='py-4 text-gray-800'>Hey, <span className='text-[#5651e5]'>Sicelo</span> here</h1>

          <h1 className='py-2 text-gray-800'>
            A full-stack Developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I am a current WeThinkCode student who is passionate about solving worldly problems through tech. I am proficient in coding in java,
            python, and SQL. I am still learning javascript. Give me a problem and I'll find a solution.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

            <a href='https://www.linkedin.com/in/sicelo-minenhle-gumede' target="_blank" rel="noreferrer">
              <div className='text-[#5651e5] rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <FaLinkedinIn />
              </div>
            </a>

            <a href='https://ig.me/m/i.am.sicelogumede' target="_blank" rel="noreferrer">
            <div className='text-[#5651e5] rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
              <FaInstagram />
            </div>
            </a>

            <a href='mailto:12smgumede@gmail.com' target="_blank" rel="noreferrer">
            <div className='text-[#5651e5] rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
              <AiOutlineMail />
            </div>
            </a>

            <a href='https://wa.me/27781842293' target="_blank" rel="noreferrer">
            <div className='text-[#5651e5] rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
              <FaWhatsapp />
            </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main