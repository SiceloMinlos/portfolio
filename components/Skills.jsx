import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase'><span className='text-[#5651e5]'>Tools</span> of <span className='text-[#5651e5]'>Trade</span></p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/java.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Java</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/python.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>Python</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/sql.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>SQL</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/html.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>HMTL</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/js.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/css.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/c-sharp.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>C#</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src="/../public/assets/skills/gitlab.png" width='64' height='64'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>GitLab</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills