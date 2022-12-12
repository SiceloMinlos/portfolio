import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { useRouter } from 'next/router';
import logoImg from "../public/assets/Screenlogo.png"

const navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavbg] = useState("#ecf0f3");
  const [linkColour, setLinkColour] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/sassa" || router.asPath === "/motivation") {
      setNavbg("transparent")
      setLinkColour("#ecf0f3")
    } else {
      setNavbg("#ecf0f3")
      setLinkColour("#1f2937")
    }
  }, [router])

  const HandleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div
      style={{

        backgroundColor: `${navbg}`

      }}
      className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href="/">
          <div style={{ borderRadius: '100%', overflow: 'hidden' }}>
            <Image src={logoImg} height={80} />
          </div>
        </Link>
        <div>
          <ul
            style={{ color: `${linkColour}` }}
            className='hidden md:flex'>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Home
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                About
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href="/#contacts" scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Let's Chat
              </li>
            </Link>
          </ul>
          <div onClick={HandleNav} className='md:hidden'>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <div style={{ borderRadius: '100%', overflow: 'hidden' }}>
                <Image src={logoImg} height={80} />
              </div>
              <div onClick={HandleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-450 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Welcome to tech life ^_^</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href="/">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href="/#contacts" scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Let's Chat</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let's Chat
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
      </div>
    </div>
  )
}

export default navbar