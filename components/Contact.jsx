import React from 'react'
import Image from 'next/image'
import contactImg from "../public/assets/contact/contact.jpg"
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    return (
        <div id="contacts" className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <h2 className='text-xl tracking-widest uppercase text-[#5651e5]' >Let's Chat</h2>
                <div className='grid lg:grid-cols-5 gap 8'>
                    <div className='cols-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image src={contactImg} className="rounded-xl hover:scale-105 ease-in duration-300" />
                            </div>
                            <div>
                                <h2 className='py-2'>Sicelo Gumede</h2>
                                <p>Full-Stack Developer</p>
                                <p className='py-4'>Contact me to know more about me or for work opportunities</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'><span className='text-[#5651e5]'>Connect</span> with Me</p>
                                <div className='flex items-center justify-between py-4'>
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

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action='https://getform.io/f/ce9d43d1-0a3e-491b-b297-ea3f37980379' method='post' encType='multipart/form-data'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name='number' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="email" name='email' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name='subject' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-400" name='message' />
                                </div>

                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center py-12'>
                    <Link href="/">
                        <div className='text-[#5651e5] rounded-full shadow-lg shadow-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact