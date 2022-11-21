import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl tracking-widest text-[#5651e5] uppercase'>About</p>
                <h2 className='py-4'>More about me</h2>
                <p className='py-2 text-gray-750'>I am a current WeThinkCode student who is passionate about solving worldly problems through tech. I have always had a 
                knack for problem solving so whenever I am not busy I'll be busy jotting down my next big invention so I suggest you keep an eye out for some 
                future inventions ^_^ . I am not the brightest but give me a problem and I'll make sure no matter what, a <span className='text-[#5651e1] font-bold'>solution</span> to it.
                </p>
            </div>
            <div className='w-full m-auto h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/../public/assets/aboutImg.jpg" width="400" height="250"/>
            </div>
        </div>
    </div>
  )
}

export default About