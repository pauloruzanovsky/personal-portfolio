import React from 'react'
import { Link } from 'react-router-dom'
import {motion as m} from 'framer-motion'

export default function Hero() {

    return(
            <main 
            className='font-bold text-5xl flex justify-center h-screen p-20'>
                <div className=''>
                    <m.div 
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                        transition={{y:{duration:1}}}

                    className='text-headline'>Hello, I am <Link to='/about' className='inline-block text-button animate-changeColor hover:text-second transition-colors hover:animate-none'>Paulo Ruzanovsky</Link></m.div>             
                    <m.p 
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                        transition={{y:{duration:1}, delay:0.25}}
                    className='text-2xl font-light mt-9'>I enjoy building responsive websites and applications.
                    </m.p>
                    <m.p className='text-2xl font-light'
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                        transition={{y:{duration:1}, delay:0.5}}
                    >
                        Check out my 
                        <Link to='/projects' className='text-third cursor-pointer  hover:text-second transition-colors'> Projects</Link> and 
                        <Link to='/resume' className='text-third cursor-pointer  hover:text-second transition-colors'> Resume</Link>.
                    </m.p>
                    <m.p className='text-2xl font-light' 
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                         transition={{y:{duration:1}, delay:0.75}}
                    >
                        Get in touch with me through 
                        <Link to='/contact' className='text-third cursor-pointer  hover:text-second transition-colors'> Contact </Link>
                        or shoot me an e-mail at pauloruzanovsky@gmail.com. 
                    </m.p>
                </div>
            </main>
    )
}